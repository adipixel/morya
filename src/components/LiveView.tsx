import React, { useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useRecoilState } from "recoil";
import { curUrlState } from "../Router";
import { Link } from "react-router-dom";

type Props = {
  handleSSE: (pid: number) => void;
  isListening: Boolean;
};

export function LiveView(props: Props) {
  const { handleSSE, isListening } = props;
  const [publisherId, setPublisher] = useState<number>(0);
  const [subscribedUrl, setSubscribedUrl] = useRecoilState(curUrlState);

  return (
    <>
      <h4>Subcribe for Live Mode</h4>

      <Stack>
        <input
          type="number"
          value={publisherId}
          onChange={(ev) => {
            setPublisher(parseInt(ev.target.value));
          }}
        />
        <Button
          variant="contained"
          onClick={() => {
            if (!publisherId) {
              alert("Publisher ID missing");
            } else {
              handleSSE(publisherId);
            }
          }}
        >
          Subscribe
        </Button>
      </Stack>
      <div>Subscribed Url</div>
      <div>{subscribedUrl}</div>

      <br />
      <Link to="/">Home</Link>
    </>
  );
}
