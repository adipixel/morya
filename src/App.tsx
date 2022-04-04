import React from "react";

import { Routes, Route } from "react-router-dom";

import "./App.css";
import CategoryView from "./components/CategoryView";
import Home from "./components/Home";
import { SongView } from "./components/SongView";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:categoryName" element={<CategoryView />} />
        <Route path="/:categoryName/:songName" element={<SongView />} />
      </Routes>
    </div>
  );
}

export default App;
