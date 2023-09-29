"use client";

import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { ThemeProvider, createTheme } from "@mui/material";

export default function PaginationButtons() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#A97",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={2}>
        <Pagination
          color={"primary"}
          className="text-white"
          count={10}
          showFirstButton
          showLastButton
        />
      </Stack>
    </ThemeProvider>
  );
}
