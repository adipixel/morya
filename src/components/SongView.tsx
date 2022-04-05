import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { songsState } from "../App";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export function SongView() {
  const { categoryName, songName } = useParams();
  const songs = useRecoilValue(songsState);

  if (!categoryName || !songName) {
    return <div>Error</div>;
  }

  if (Object.keys(songs).length === 0) {
    return (
      <Box pt={1} px={4}>
        <Skeleton animation="wave" height={60} />
        <br />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
      </Box>
    );
  }

  const song = songs[categoryName]["list"][songName];

  return (
    <Grid container direction="column" sx={{ height: "100vh" }}>
      <Grid container item xs={1} alignItems="center" justifyContent="center">
        <Typography variant="h5">{song.title}</Typography>
      </Grid>
      <Grid item xs={10} style={{ overflowY: "scroll" }}>
        <Typography variant="body1" style={{ whiteSpace: "pre-wrap" }}>
          {song.lyrics}
        </Typography>
      </Grid>
      {song.audioUrl && (
        <Grid item xs={1}>
          <audio controls src={song.audioUrl}>
            Browser does not support the audio player.
          </audio>
        </Grid>
      )}
    </Grid>
  );
}
