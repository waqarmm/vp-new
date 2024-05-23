import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Box, Drawer, List, ListItem, ListItemText, ListItemIcon, Collapse } from "@mui/material";
import { Menu as MenuIcon, ArrowDropDown as ArrowDropDownIcon, ArrowRight as ArrowRightIcon, Close as CloseIcon } from "@mui/icons-material";
import logoImg from "../appBar/assets/logo.png";
import WhatsApp from "../appBar/assets/whatsapp.png";
import WhatsApp1 from "../appBar/assets/WhatsApp-PNG-Image.png";

import { Link } from "react-router-dom";
import "../appBar/Navbar.css"

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [openSubItems, setOpenSubItems] = useState({});

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    const handleSubItemClick = (index) => {
        setOpenSubItems((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    const appBarStyles = {
        width: "100%",
        height: "13.2vh",
        position: drawerOpen ? "sticky " : "static",
        top: drawerOpen ? "0" : "unset",
        zIndex: 2,
        backgroundColor: "#f5f5f5",
        borderBottom: "1px solid Grey",
    };

    return (
        <>
            <AppBar position="static" style={appBarStyles}>
                <Toolbar>
                    <IconButton
                        style={{ marginRight: 10 }}
                        color="black"
                        aria-label="menu"
                        onClick={drawerOpen ? handleDrawerClose : handleDrawerOpen}
                    >
                        {drawerOpen ? <CloseIcon /> : <MenuIcon />}
                    </IconButton>

                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            flexGrow: 4,
                            alignItems: "center",
                            textAlign: "center",
                        }}
                    >
                        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                            <img className="img" src={logoImg} alt="Logo" />
                        </Link>
                    </Typography>
                    {/* WhatsApp Chat */}
                    <IconButton
                        style={{ marginRight: 10  }}
                        
                        color="black"
                        aria-label="whatsapp"
                        href="https://wa.me/+971508194493?text=I need help ? !"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img style={{width:"40px" ,height:"35px"}} src={WhatsApp1} alt="WhatsApp" />
                    </IconButton>
                </Toolbar>
            </AppBar>
            {/* Rest of your Drawer content */}
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={handleDrawerClose}
                PaperProps={{
                    sx: {
                        marginTop: { xl: '6.8', lg: "5.7%", md: '7%', xs: "16.8%", sm: "9.5%" },
                        zIndex: "0",
                        position: "fixed",
                        boxShadow: "none",
                        width: { xl: "28%", lg: "30%", xs: "100%", sm: "55%" },
                        height: "99%",
                        backgroundColor: "white",
                    },
                }}
                sx={{ flexShrink: 0, width: "25%", zIndex: "1" }}
            >
                  <List className="list">
          <ListItem button component={Link} to="/" onClick={handleDrawerClose}>
            <ListItemText className="av" primary="Home page" />
          </ListItem>
          <ListItem button onClick={() => handleSubItemClick("Our Catlogs")}>
            <ListItemText className="av" primary="Our Catlogs" />
            <ListItemIcon>
              {openSubItems["Our Catlogs"] ? (
                <ArrowDropDownIcon />
              ) : (
                <ArrowRightIcon />
              )}
            </ListItemIcon>
          </ListItem>
          <Collapse
            in={openSubItems["Our Catlogs"]}
            timeout="auto"
            unmountOnExit
          >
            <List sx={{ pl: 3 }}>
              <ListItem
                button
                component={Link}
                to="WPC-WallPanels"
                onClick={handleDrawerClose}
              >
                <ListItemText className="av" primary="WPC Wall Panel" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="WPC-Flooring"
                onClick={handleDrawerClose}
              >
                <ListItemText className="av" primary="WPC Floor Panel" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/Marble-Sheets"
                onClick={handleDrawerClose}
              >
                <ListItemText className="av" primary="WPC Marble Sheet" />
              </ListItem>
              
            </List>
          </Collapse>
         
          
          {/* Add more similar ListItem and Collapse components for other menu items */}
          {/* <ListItem
            button
            component={Link}
            to="/products"
            onClick={handleDrawerClose}
          >
            <ListItemText className="av" primary="Products" />
          </ListItem> */}


<ListItem
            button
            component={Link}
            to="/warehouse-page"
            onClick={handleDrawerClose}
          >
            <ListItemText className="av" primary="Our Showroom" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/AboutUs"
            onClick={handleDrawerClose}
          >
            <ListItemText className="av" primary="About Us" />
          </ListItem>
         
          
          
          <ListItem
            button
            component={Link}
            to="/contact-us"
            onClick={handleDrawerClose}
          >
            <ListItemText className="av" primary="Contact Us" />
          </ListItem>
          
        </List>
      </Drawer>
    </>
  );
};
  

export default Navbar;
