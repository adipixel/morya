import React, { useState } from "react";

import { Routes, Route, useNavigate } from "react-router-dom";
import { atom, useRecoilState } from "recoil";

import "./App.css";
import { AdminView } from "./components/AdminView/AdminView";
import CategoryView from "./components/CategoryView";
import Home from "./components/Home";
import { SongView } from "./components/SongView";
import { LiveView } from "./components/LiveView";
import { LivePublisher } from "./components/LivePublisher";

export const curUrlState = atom({
  key: "curUrlState",
  default: "",
});

export const liveState = atom({
  key: "liveState",
  default: {
    isLive: false,
    role: "",
  },
});

function Router() {
  const [liveObj, setLiveObj] = useRecoilState(liveState);
  const [, setCurUrl] = useRecoilState<string>(curUrlState);
  const [isListening, setIsListening] = useState<Boolean>(false);
  const navigate = useNavigate();

  const handleSSE = (pid: number) => {
    const events = new EventSource(`/api/events/${pid}`);

    // Set to live as subscriber
    let newLiveObj = {
      ...liveObj,
      isLive: true,
      role: "subscriber",
    };

    setLiveObj(newLiveObj);

    events.onmessage = (event) => {
      const { url } = JSON.parse(event.data);
      setCurUrl(url);
      console.log("redirecting to ", url);
      navigate(url);
    };

    setIsListening(true);
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:categoryName" element={<CategoryView />} />
      <Route path="/:categoryName/:songName" element={<SongView />} />
      <Route path="/morya-admin" element={<AdminView />} />
      <Route
        path="/live"
        element={<LiveView handleSSE={handleSSE} isListening={isListening} />}
      />
      <Route path="/live-controller" element={<LivePublisher />} />
    </Routes>
  );
}

export default Router;
