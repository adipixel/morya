import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Button from "@mui/material/Button";
import { songsState } from "../../App";

// const songs = getJsonData();

export function AdminView() {
  const songs = useRecoilValue(songsState);
  const [val, setVal] = useState<string>(JSON.stringify(songs));
  const [passcode, setPasscode] = useState<string>("");

  const handleSave = () => {
    fetch("/api/data", {
      method: "POST",
      cache: "no-cache",
      headers: { "Content-Type": "application/json", "x-passcode": passcode },
      body: val,
    })
      .then((res) => res.json())
      .then((res) => {
        alert(res?.message);
      });
  };

  if (Object.keys(val).length === 0) {
    return (
      <Box>
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
      </Box>
    );
  }

  return (
    <Grid container direction="column">
      <h1>Admin Editor</h1>
      <textarea
        value={val}
        onChange={(ev) => {
          setVal(ev.target.value);
        }}
        style={{ width: "100%", minHeight: "200px" }}
      />
      <input
        value={passcode}
        placeholder="passcode"
        onChange={(ev) => {
          setPasscode(ev.target.value);
        }}
      />
      <Button variant="contained" onClick={handleSave}>
        Save
      </Button>
    </Grid>
  );
}
