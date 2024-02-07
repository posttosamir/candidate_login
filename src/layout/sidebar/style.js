import { SIDBAR_WIDTH } from "../../constants";
import { makeStyles } from "../../hook";

export const useStyles = makeStyles()({
  sideBarWrapper: {
    display: "flex",
  },
  sideBar: {
    width: SIDBAR_WIDTH,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: SIDBAR_WIDTH,
      boxSizing: "border-box",
    },
  },
});
