import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Box, Drawer, List, ListItem, ListItemText, ListItemIcon, Collapse } from "@mui/material";
import { Menu as MenuIcon, ArrowDropDown as ArrowDropDownIcon, ArrowRight as ArrowRightIcon, Close as CloseIcon } from "@mui/icons-material";
import logoImg from "../appBar/assets/logo.png";
import WhatsApp from "../appBar/assets/whatsapp.png";
import { Link } from "react-router-dom";

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
                        href="https://wa.me/923555072977?text=hey!"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img style={{width:"40px" ,height:"40px"}} src={WhatsApp} alt="WhatsApp" />
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
          <ListItem button onClick={() => handleSubItemClick("indoorProducts")}>
            <ListItemText className="av" primary="Indoor Products" />
            <ListItemIcon>
              {openSubItems["indoorProducts"] ? (
                <ArrowDropDownIcon />
              ) : (
                <ArrowRightIcon />
              )}
            </ListItemIcon>
          </ListItem>
          <Collapse
            in={openSubItems["indoorProducts"]}
            timeout="auto"
            unmountOnExit
          >
            <List sx={{ pl: 3 }}>
              <ListItem
                button
                component={Link}
                to="/indoor-products/wpc-wall-panel"
                onClick={handleDrawerClose}
              >
                <ListItemText className="av" primary="WPC Wall Panel" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/indoor-products/wpc-flat-panel"
                onClick={handleDrawerClose}
              >
                <ListItemText className="av" primary="WPC Flat Panel" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/indoor-products/wpctimber-tube"
                onClick={handleDrawerClose}
              >
                <ListItemText className="av" primary="WPC Timber Tube" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/indoor-products/wpc-ceiling"
                onClick={handleDrawerClose}
              >
                <ListItemText className="av" primary="WPC Ceiling" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={() => handleSubItemClick("marbleSheet")}>
            <ListItemText className="av" primary="Marble Sheet" />
            <ListItemIcon>
              {openSubItems["marbleSheet"] ? (
                <ArrowDropDownIcon />
              ) : (
                <ArrowRightIcon />
              )}
            </ListItemIcon>
          </ListItem>
          <Collapse
            in={openSubItems["marbleSheet"]}
            timeout="auto"
            unmountOnExit
          >
            <List sx={{ pl: 3 }}>
              <ListItem
                button
                component={Link}
                to="/marble-sheet/thermal-transfer-printing"
                onClick={handleDrawerClose}
              >
                <ListItemText
                  className="av"
                  primary="Thermal Transfer Printing"
                />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/marble-sheet/embossed"
                onClick={handleDrawerClose}
              >
                <ListItemText primary="Embossed" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/marble-sheet/pvc-film"
                onClick={handleDrawerClose}
              >
                <ListItemText className="av" primary="PVC Film" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/marble-sheet/3d-print"
                onClick={handleDrawerClose}
              >
                <ListItemText className="av" primary="3D Print" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/marble-sheet/3d-print-open-book"
                onClick={handleDrawerClose}
              >
                <ListItemText className="av" primary="3D Print (Open Book)" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={() => handleSubItemClick("marbleSheet")}>
            <ListItemText className="av" primary="Marble Sheet" />
            <ListItemIcon>
              {openSubItems["SPC Flooring"] ? (
                <ArrowDropDownIcon />
              ) : (
                <ArrowRightIcon />
              )}
            </ListItemIcon>
          </ListItem>
          <Collapse
            in={openSubItems["SPC Flooring"]}
            timeout="auto"
            unmountOnExit
          >
            <List sx={{ pl: 3 }}>
              <ListItem
                button
                component={Link}
                to="/marble-sheet/thermal-transfer-printing"
                onClick={handleDrawerClose}
              >
                <ListItemText
                  className="av"
                  primary="Thermal Transfer Printing"
                />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/marble-sheet/embossed"
                onClick={handleDrawerClose}
              >
                <ListItemText className="av" primary="Embossed" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/marble-sheet/pvc-film"
                onClick={handleDrawerClose}
              >
                <ListItemText className="av" primary="PVC Film" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/marble-sheet/3d-print"
                onClick={handleDrawerClose}
              >
                <ListItemText primary="3D Print" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/marble-sheet/3d-print-open-book"
                onClick={handleDrawerClose}
              >
                <ListItemText className="av" primary="3D Print (Open Book)" />
              </ListItem>
            </List>
          </Collapse>
          {/* Add more similar ListItem and Collapse components for other menu items */}
          <ListItem
            button
            component={Link}
            to="/products"
            onClick={handleDrawerClose}
          >
            <ListItemText className="av" primary="Products" />
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
