import React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import logoImg from "../myComponents/appBar/assets/logo.png";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import TwitterIcon from '@mui/icons-material/Twitter';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Footer = () => {

  const handleClick = () => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };
  return (
    <Box component="footer" sx={{ bgcolor: '#f5f5f5', color: '#333', py: 6 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
          <Box sx={{ display: 'flex',flexDirection:'column', alignItems: 'center' }}>
            <img src={logoImg} alt="Company Logo" style={{ width: '150px', marginRight: '30px',marginBottom:"1px" }} />
            <div>
              
              <Typography style={{fontSize:"17px",fontFamily:"sans-serif",fontStretch:"ultra-condensed"}} variant="body2" gutterBottom>
              Your Premium Partner in PVC Products
              </Typography>
              <Typography style={{fontSize:"17px",fontFamily:"sans-serif",fontStretch:"ultra-condensed"}} variant="body1" gutterBottom>
               Number: +971-50-819-4493
              </Typography>
              <Typography style={{fontSize:"17px",fontFamily:"sans-serif",fontStretch:"ultra-condensed"}} variant="body1" gutterBottom>
              Email: visionarypartnersUAE.com
              </Typography>
              <Typography style={{fontSize:"17px",fontFamily:"sans-serif",fontStretch:"ultra-condensed"}} variant="body1" gutterBottom>
              info@visionarypartnersUAE.com
              </Typography>
            </div>
          </Box>
          <Box>
            <Typography style={{fontSize:"20px",fontFamily:"sans-serif",fontStretch:"ultra-condensed"}} variant="h6" gutterBottom>
              COMPANY
            </Typography>
            <Stack spacing={2} mt={2}>
      <Link to="/" style={{  color: 'inherit' }} onClick={handleClick}>Home</Link>
      <Link to="/AboutUs" style={{  color: 'inherit' }} onClick={handleClick}>About Us</Link>
      <Link to="/services" style={{  color: 'inherit' }}onClick={handleClick}>Services</Link>
      <Link to="/contact-us" style={{  color: 'inherit' }}onClick={handleClick}>Contact</Link>
      <Link to="/delivery-conditions" style={{  color: 'inherit' }}onClick={handleClick}>Delivery & Conditions</Link>
      <Link to="/shipping-return" style={{  color: 'inherit' }}onClick={handleClick}>Shipping & Return</Link>
      <Link to="/faqs" style={{  color: 'inherit' }}onClick={handleClick}>FAQs</Link>
    </Stack>
          </Box>
          <Box>
            <Typography style={{fontSize:"20px",fontFamily:"sans-serif",fontStretch:"ultra-condensed"}}variant="h6" gutterBottom>
              Newsletter
            </Typography>
            <Typography style={{fontSize:"17px",fontFamily:"sans-serif",fontStretch:"ultra-condensed"}}variant="body2" gutterBottom>
              Subscribe to our newsletter for updates.
            </Typography>
            <Stack direction="row" spacing={1} mt={2} alignItems="center">
              <TextField
                id="footer-email"
                label="Email Address"
                variant="outlined"
                size="small"
                InputProps={{
                  endAdornment: (
                    <IconButton edge="end" aria-label="subscribe" color="primary">
                      <KeyboardArrowRightIcon />
                    </IconButton>
                  ),
                }}
              />
            </Stack>
          </Box>
        </Box>
        <Box sx={{ borderTop: '1px solid #333', mt: 4, pt: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#333' }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Visionary Partners. All rights reserved.
          </Typography>
          <Typography variant="body2">
            Privacy Policy | Terms of Service
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
