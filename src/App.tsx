import React, { useEffect, useMemo, useState } from "react";

import { Routes, Route } from "react-router-dom";
import { atom, useRecoilState } from "recoil";
import { Categories } from "./api/songs";

import "./App.css";
import { AdminView } from "./components/AdminView/AdminView";
import CategoryView from "./components/CategoryView";
import Home from "./components/Home";
import { SongView } from "./components/SongView";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

import { BackButton } from "./components/BackButton";

export const songsState = atom({
  key: "songsState", // unique ID (with respect to other atoms/selectors)
  default: {} as Categories, // default value (aka initial value)
});

function App() {
  const [, setSongs] = useRecoilState<Categories>(songsState);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme:dark)");

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/data")
      .then((res) => res.json())
      .then((songsIn) => {
        setSongs(songsIn);
      })
      .catch((err) => {
        console.log("Failed to load songs", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setSongs]);

  const theme = useMemo(
    () =>
      createTheme({
        components: {
          MuiSkeleton: {
            defaultProps: {
              height: 30,
            },
          },
        },
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
        typography: {
          fontFamily: "Poppins",
        },
      }),
    [prefersDarkMode]
  );

  if (isLoading) {
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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BackButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:categoryName" element={<CategoryView />} />
        <Route path="/:categoryName/:songName" element={<SongView />} />
        <Route path="/morya-admin" element={<AdminView />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
