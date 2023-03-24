import { useState } from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Button,
  CssBaseline,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import MenuIcon from "@mui/icons-material/Menu";

import { ROUTE_PATHS } from "../../routes/RoutesPaths";
import Logo from "../../assets/logo.svg";

const drawerWidth = 240;
const navItems = [
  { name: "Home", slug: ROUTE_PATHS.home },
  { name: "Pages", slug: ROUTE_PATHS.pages },
  { name: "Movies", slug: ROUTE_PATHS.maovies },
  { name: "TV Shows", slug: ROUTE_PATHS.tvShows },
  { name: "Celebs", slug: ROUTE_PATHS.celebs },
  { name: "Blogs", slug: ROUTE_PATHS.blogs },
];

const Navbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const location = useLocation();
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          padding: "1rem 0 2rem 2rem",
          cursor: "pointer",
        }}
      >
        <CloseIcon />
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              sx={{
                a: {
                  textDecoration: "none",
                  color: "black",
                  paddingLeft: "1rem",
                  display: "flex",
                  alignItems: "center",
                  svg: {
                    color: "#cdc6c6",
                  },
                },
                "& .MuiTypography-root ": {
                  fontWeight: "900",
                },
              }}
            >
              <Link to={item.slug}>
                <ListItemText primary={item.name} />
                {location.pathname === item.slug && <ArrowRightIcon />}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ backgroundColor: "white", padding: { md: "0 4rem" } }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              svg: { display: { sm: "none" } },
            }}
          >
            <MenuIcon sx={{ color: "black" }} />
            <img src={Logo} alt="logo" width="100px" />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                sx={{
                  a: {
                    color: "black",
                    textDecoration: "none",
                  },
                }}
              >
                <Link to={item.slug}>{item.name}</Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};
export default Navbar;
