import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { atom, useRecoilState } from "recoil";
import { liveState } from "../Router";
import { useNavigate } from "react-router-dom";

export const publisherState = atom({
  key: "publisherState",
  default: 0,
});

export function LivePublisher() {
  const [liveObj, setLiveObj] = useRecoilState(liveState);
  const [publisherId, setPublisherId] = useRecoilState(publisherState);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/register-publisher", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ publisherId }),
    })
      .then((res) => res.json())
      .then((res) => {
        setPublisherId(res.publisherId);
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
        // alert("Failed to create publisher");
      });
  }, []);

  const goLive = () => {
    // Set to live as subscriber
    let newLiveObj = {
      ...liveObj,
      isLive: true,
      role: "publisher",
    };

    setLiveObj(newLiveObj);

    alert(
      'You are live! Click "Publish View" button to publish a live to all subscribers'
    );

    navigate("/");
  };

  return (
    <>
      <h3>Publisher</h3>
      <div>Publisher ID</div>
      <div>
        <Typography variant="h5" color="success">
          {publisherId}
        </Typography>

        <button
          onClick={() => {
            window.navigator.clipboard.writeText(publisherId?.toString());
          }}
        >
          Copy
        </button>
      </div>

      <br />
      <br />
      <br />
      <Button
        onClick={() => {
          goLive();
        }}
        variant="contained"
        color="error"
      >
        Go Live
      </Button>
    </>
  );
}
