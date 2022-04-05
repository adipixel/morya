import React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { songsState } from "../App";

export default function CategoryView() {
  const { categoryName } = useParams();
  const songs = useRecoilValue(songsState);

  if (typeof categoryName !== "string") {
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

  const categories = Object.keys(songs[categoryName]["list"]).map(
    (songName) => ({
      songName,
      title: songs[categoryName]["list"][songName].title,
    })
  );

  return (
    <Box sx={{ width: "100%" }}>
      <h1>मोरया</h1>

      <nav aria-label="List of Categories">
        <List>
          {Array.isArray(categories) &&
            categories.map((song, index) => (
              <ListItem disablePadding key={index}>
                <ListItemButton
                  component={Link}
                  to={`/${categoryName}/${song.songName}`}
                >
                  <ListItemText
                    primary={song.title}
                    style={{ textAlign: "center" }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
        </List>
      </nav>
    </Box>
  );
}
