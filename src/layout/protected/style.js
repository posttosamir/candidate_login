import { makeStyles } from "../../hook";

export const useStyles = makeStyles()((theme) => ({
  mainWrapper: {
    minHeight: "100vh",
    display: "flex",
  },
  sideBarWrapper: {
    flexBasis: 1,
  },
  mainContentWrapper: {
    flexGrow: 1,
    padding: theme.spacing(4),
  },
}));
