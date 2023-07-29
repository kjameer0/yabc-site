import { useState, useEffect } from 'react';
//components
import StyledNavBar from './StyledNavBar';
import { Drawer } from 'components/Drawer';
//mui components
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
//images
import { MainLogo } from 'assets/images';
//utils
import { OpenOptions, handleDrawerSwitch } from './utils-NavBar';

export default function NavBar() {
  const [open, setOpen] = useState<OpenOptions>('');
  const [isTransparent, setIsTransparent] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  console.log(lastScrollY);
  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      const currentYPos = window.scrollY;
      if (currentYPos === 0) setShow(true);
      else if (currentYPos > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);
  useEffect(() => {
    //a click anywhere on screen dismisses drawer
    window.addEventListener(
      'click',
      function clickOff() {
        if (open !== '') setOpen('close');
        window.removeEventListener('click', clickOff, false);
      },
      false
    );
  }, [open]);
  //NavList activePage prop grabs the first part of URL pathname and
  //passes it to NavList
  return (
    <StyledNavBar $isTransparent={isTransparent} $shown={show}>
      <img className="logo" src={MainLogo} alt="YABC Washington Irving" />
      <IconButton onClick={(e) => handleDrawerSwitch(e, open, setOpen)} className="hamburger">
        <MenuIcon fontSize="large" />
      </IconButton>
      <Drawer open={open} setOpen={setOpen} />
    </StyledNavBar>
  );
}
