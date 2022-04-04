import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { getCategory } from "../api/api.utils";
import { Link, useParams } from "react-router-dom";

export default function CategoryView() {
  const { categoryName } = useParams();

  if (typeof categoryName !== "string") {
    return <div></div>;
  }

  const categories = getCategory(categoryName);
  console.log(categories);

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <h1>Morya</h1>
      <nav aria-label="List of Categories">
        <List>
          {categories.map((song, index) => (
            <ListItem disablePadding key={index}>
              <ListItemButton
                component={Link}
                to={`/${categoryName}/${song.songName}`}
              >
                <ListItemText primary={song.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}
