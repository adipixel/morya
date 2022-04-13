import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import IconButton from "@mui/material/IconButton";

export const BackButton = () => {
  return (
    <IconButton
      sx={{
        position: "fixed",
        top: 8,
        left: 8,
      }}
      onClick={() => window.history.back()}
    >
      <SvgBack />
    </IconButton>
  );
};

function SvgBack(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="ChevronLeftIcon"
      >
        <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
      </svg>
    </SvgIcon>
  );
}
