import * as React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const loggedIn = true; // TODO chenge to use session data
const navItems = [
  {
    text: "Login",
    link: "/login",
    condition: () => !loggedIn,
  },
  {
    text: "Logout",
    link: "/logout",
    condition: (mobile: boolean) => mobile && loggedIn,
  },
  {
    text: "Dashboard",
    link: "/dashboard",
    condition: () => loggedIn,
  },
  {
    text: "Usuários",
    link: "/users",
    condition: () => loggedIn,
  },
];

export const HospitalHeader: React.FC = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleUserToggle = () => {
    // TODO
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        COLOCAR DADOS DO USUÁRIO LOGADO AQUI
      </Typography>
      <Divider />
      <List>
        {navItems
          .filter((i) => i.condition(true))
          .map((item) => (
            <ListItem key={item.text} disablePadding>
              <Link to={item.link}>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sistema de Pré-Atendimento
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems
              .filter((i) => i.condition(false))
              .map((item) => (
                <Link key={item.text} to={item.link}>
                  <Button sx={{ color: "#fff" }}>{item.text}</Button>
                </Link>
              ))}
            {/* TODO change loggedIn to check state */}
            {loggedIn ? (
              <Button
                onClick={handleUserToggle}
                sx={{ color: "#fff" }}
                startIcon={<AccountCircleIcon />}
              >
                Usuário
              </Button>
            ) : (
              <span></span>
            )}
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
