import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import { getSong } from "../api/api.utils";

export function SongView() {
  const { categoryName, songName } = useParams();

  if (!categoryName || !songName) {
    return <div>Error</div>;
  }

  const song = getSong(categoryName, songName);
  console.log(song);

  return (
    <Grid container direction="column" sx={{ height: "100vh" }}>
      <Grid item xs={1}>
        <Typography variant="h4">{song.title}</Typography>
      </Grid>
      <Grid
        item
        xs={10}
        style={{ overflowY: "scroll", height: `calc(100vh - 120px)` }}
      >
        <Typography style={{ whiteSpace: "pre-wrap" }}>
          {song.lyrics}
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <audio controls src={song.audioUrl}>
          Browser does not support the audio player.
        </audio>
      </Grid>
    </Grid>
  );
}
