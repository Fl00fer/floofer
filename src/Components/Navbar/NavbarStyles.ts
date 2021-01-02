import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  Nav: {
    position: "relative",
  },
  appBarStyles: {
    backgroundColor: "rgba(0, 0, 0, 1)",
    height: "65px",
  },
  toolbarStyles: {
    height: "65px",
    "& h4": {
      color: "rgb(240, 240, 240)",
    },
    "& button": {
      borderRadius: "0px",
      borderBottom: "1px solid transparent",
    },
    "& button:hover": {
      borderBottom: "1px solid rgb(240, 240, 240)",
    },
    justifyContent: "space-between",
  },
  listItem: {
    color: "rgb(240, 240, 240)",
  },
  toggleSlider: {
    color: "rgba(255, 255, 255, 1)",
    [theme.breakpoints.up(1050)]: {
      display: "none",
    },
  },
  menuLink: {
    textDecoration: "none",
  },
  avatar: {
    display: "block",
    margin: "1rem auto",
    width: theme.spacing(16),
    height: theme.spacing(16),
  },

  navbarContainer: {
    display: "none",
    justifyContent: "space-between",
    [theme.breakpoints.up(1050)]: {
      display: "flex",
    },

    "& a": {
      color: "rgb(240, 240, 240)",
      textDecoration: "none",
      margin: "0 10px",
      borderBottom: "1px solid transparent",
      "&:hover": {
        borderBottom: "1px solid rgb(240, 240, 240)",
      },
      "& span": {
        fontSize: "1.3em",
      },
    },
  },
  moreInfoContainer: {
    marginLeft: "auto",
  },
  toggleButton: {
    color: "rgb(240, 240, 240)",
    minWidth: "0px",
    margin: "0px 5px",

    "& span": {
      fontSize: "0.8em",
      color: "rgb(240, 240, 240)",
    },
  },
  sidebarActive: {
    borderBottom: "1px solid rgb(240, 240, 240)!important",
  },
  navbarActive: {
    borderBottom: "1px solid rgb(240, 240, 240)!important",
  },
}));
