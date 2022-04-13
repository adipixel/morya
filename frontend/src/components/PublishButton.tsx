import React from "react";
import Button from "@mui/material/Button";
import { useRecoilValue } from "recoil";
import { publisherState } from "./LivePublisher";
import { useLocation } from "react-router-dom";

export function PublishButton() {
  const publisherId = useRecoilValue(publisherState);

  const location = useLocation();

  const handlePublisherUpdate = (url: string) => {
    fetch("/api/publisher-update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ publisherId, url }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <Button
      sx={{
        position: "fixed",
        top: 8,
        right: 8,
      }}
      onClick={() => {
        handlePublisherUpdate(location.pathname);
      }}
    >
      Publish View
    </Button>
  );
}
