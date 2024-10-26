import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1, mb: 5, boxShadow: 10 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            color="inherit"
            to="/"
            variant="h5"
            component={NavLink}
            sx={{ flexGrow: 1, textDecoration: "none", fontSize: "18px" }}
          >Quotes Central</Typography>
          <Button color="inherit" to="/quotes" component={NavLink}>
            Quotes
          </Button>
          <Button color="inherit" to="/add-quote" component={NavLink}>
            Submit new quote
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
