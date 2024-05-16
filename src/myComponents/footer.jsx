import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import logoImg from "../myComponents/appBar/assets/logo.png";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: '#f5f5f5', color: '#333', py: 6 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={logoImg} alt="Company Logo" style={{ width: '150px', marginRight: '-49px',marginBottom:"53px" }} />
            <div>
              {/* <Typography style={{fontSize:"22px",fontFamily:"sans-serif",fontStretch:"ultra-condensed"}} variant="body1" gutterBottom>
                Visionary Partners
              </Typography> */}
              <Typography style={{fontSize:"17px",fontFamily:"sans-serif",fontStretch:"ultra-condensed"}} variant="body2" gutterBottom>
              Your Premium Partner in PVC Products
              </Typography>
            </div>
          </Box>
          <Box>
            <Typography style={{fontSize:"20px",fontFamily:"sans-serif",fontStretch:"ultra-condensed"}} variant="h6" gutterBottom>
              COMPANY
            </Typography>
            <Stack spacing={1} mt={2}>
              <Link href="#" color="inherit">Home</Link>
              <Link href="#" color="inherit">About Us</Link>
              <Link href="#" color="inherit">Services</Link>
              <Link href="#" color="inherit">Contact</Link>
              <Link href="#" color="inherit">Delivery & Conditions</Link>
              <Link href="#" color="inherit">Shipping & Return</Link>
              <Link href="#" color="inherit">FAQs</Link>
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
