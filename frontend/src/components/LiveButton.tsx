import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
type Props = {
  color?:
    | "inherit"
    | "error"
    | "action"
    | "disabled"
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning";
};
export const LiveButton = (props: Props) => {
  const { color = "error" } = props;
  return (
    <IconButton
      sx={{
        position: "fixed",
        top: 8,
        right: 8,
      }}
      onClick={() => window.history.back()}
    >
      <SvgBack color={color} />
      <Typography variant="caption">Live</Typography>
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
        data-testid="CircleIcon"
      >
        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"></path>
      </svg>
    </SvgIcon>
  );
}
