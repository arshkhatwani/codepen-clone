import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import { Link } from "react-router-dom";
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  navLink: {
    color: "inherit",
    textDecoration: "none",
  },
  corner: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
}));

function Navbar(props) {
  const { window, isAuth, topHeading } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    {
      name: "Home",
      icon: (
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
      ),
      navLink: "/",
    },
    {
      name: "About",
      icon: (
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
      ),
      navLink: "/about",
    },
    {
      name: "Contact",
      icon: (
        <ListItemIcon>
          <ContactSupportIcon />
        </ListItemIcon>
      ),
      navLink: "/contact",
    },
  ];

  const checkAuth = () => {
    if (isAuth) {
      return <Typography variant="h5">Authenticated</Typography>;
    } else {
      return <Typography variant="h5">Codepen</Typography>;
    }
  };

  const profileOptions = () => {
    if (isAuth) {
      return (
        <>
          <List>
            <Link className={classes.navLink}>
              <ListItem button>
              <ListItemIcon>
              <PersonIcon />
              </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItem>
            </Link>
            <Link className={classes.navLink}>
              <ListItem button>
              <ListItemIcon>
              <ExitToAppIcon color="error"/>
              </ListItemIcon>
                <ListItemText primary="Logout" primaryTypographyProps={{color:"error"}}/>
              </ListItem>
            </Link>
          </List>
          <Divider />
        </>
      );
    }
  };

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <div className={classes.corner}>{checkAuth()}</div>
      </div>
      <Divider />
      {profileOptions()}
      <List>
        {navItems.map((item, index) => (
          <Link to={item.navLink} className={classes.navLink}>
            <ListItem button key={item.name}>
              {item.icon}
              <ListItemText primary={item.name} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap>
            {topHeading}
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </>
  );
}

export default Navbar;