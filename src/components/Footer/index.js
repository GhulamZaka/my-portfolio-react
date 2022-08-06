import React from "react";
import "./footer.css";
// import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography
        variant="h6"
        align="center"
        gutterBottom
        color="inherit"
        noWrap
      >
        Footer
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        <CameraIcon className={classes.icon} />
        <LinkedInIcon className={classes.icon} />
        {/* <GitHubIcon className={classes.icon} />
        <AccessTimeFilledIcon className={classes.icon} /> */}
      </Typography>
    </footer>
  );
}

export default Footer;
