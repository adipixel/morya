import React, { useEffect, useMemo, useState } from "react";

import { atom, useRecoilState } from "recoil";
import { Categories } from "./api/songs";

import "./App.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

import { BackButton } from "./components/BackButton";
import { PublishButton } from "./components/PublishButton";
import { LiveButton } from "./components/LiveButton";
import Router, { liveState } from "./Router";

export const songsState = atom({
  key: "songsState", // unique ID (with respect to other atoms/selectors)
  default: {} as Categories, // default value (aka initial value)
});

function App() {
  const [liveObj] = useRecoilState(liveState);
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
      {liveObj.isLive && liveObj.role === "subscriber" && (
        <LiveButton color="error" />
      )}
      {liveObj.role === "publisher" && <PublishButton />}
      <Router />
    </ThemeProvider>
  );
}

export default App;
