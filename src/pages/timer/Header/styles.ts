import { Input } from "@mui/material";
import { styled } from "@mui/material/styles";

const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

export const SearchbarStyle = styled("div")(({ theme }) => ({
  display: "flex",
  height: APPBAR_MOBILE,
  backgroundColor: "#ffff",
  borderBottom: "#f1f1f1 solid 1px",
  [theme.breakpoints.up("md")]: {
    height: APPBAR_DESKTOP,
  },
}));

export const TimeInput = styled(Input)(({ theme }) => ({
  ":hover": {
    backgroundColor: "#f1f0f2",
  },
  "&.MuiInput-root": {
    width: "90px",
    borderRadius: 6,
    padding: "0 4px",
    fontWeight: theme.typography.fontWeightBold,
  },
  "& input": {
    padding: 4,
    textAlign: "center",
  },
}));
