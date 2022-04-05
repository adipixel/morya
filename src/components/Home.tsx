import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import { songsState } from "../App";
import { useRecoilValue } from "recoil";

export default function Home() {
  const songs = useRecoilValue(songsState);
  const categories = Object.keys(songs).map((name) => ({
    catName: name,
    title: songs[name].title,
  }));

  return (
    <Box sx={{ width: "100%" }}>
      <h1>मोरया</h1>
      <nav aria-label="secondary mailbox folders">
        <List>
          {categories.map((cat, index) => (
            <ListItem disablePadding key={index}>
              <ListItemButton component={Link} to={`/${cat.catName}`}>
                <ListItemText
                  primary={cat.title}
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
