import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { getCategories } from "../api/api.utils";
import { Link } from "react-router-dom";

export default function Home() {
  const categories = getCategories();

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <h1>Morya</h1>
      <nav aria-label="secondary mailbox folders">
        <List>
          {categories.map((cat, index) => (
            <ListItem disablePadding key={index}>
              <ListItemButton component={Link} to={`/${cat.catName}`}>
                <ListItemText primary={cat.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}
