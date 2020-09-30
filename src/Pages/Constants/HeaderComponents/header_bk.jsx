import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Login from 'Components/Blocks/Login';
import useOnClickOutside from 'Utils/useOnClickOutside';
import { makeStyles } from '@material-ui/core/styles';
import {
    Avatar,
    AppBar,
    Badge,
    IconButton,
    Toolbar,
    Typography,
    MenuItem,
    Menu
} from '@material-ui/core';
import { 
  userUserName, 
  userProfileImage, 
  userIsLoggedIn, 
  userLoginCheck, 
  userLogout 
} from 'States/userSlice';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  headerWrapper: {
    margin: "2rem 0",
    position: "fixed",
    width: "100%",
    zIndex: "9999"
  },
  grow: {
    flexGrow: 1,
  },
  root: {
    backgroundColor: "#ffffff00",
    color: "#313131",
    boxShadow: 'none',
    position: 'relative'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  iconSize: {
    fontSize: 40
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  loginBlock: {
    width: '500px', 
    position: 'absolute', 
    top: '0', 
    right: '0',
    zIndex: 9998
  },
  mobileHide: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  closeIcon: {
    display: "flex",
    justifyContent: "flex-end"
  },
  orange: {
    color: "#FFF",
    backgroundColor: "#FFA500",
  },
}));

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const loginRef = useRef(null);
  const history = useHistory();
  const isLoggedIn = useSelector(userIsLoggedIn);
  const userName = useSelector(userUserName);
  const userImage = useSelector(userProfileImage);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [openLoginBlock, setopenLoginBlock] = useState(false);

  useOnClickOutside(loginRef, () => setopenLoginBlock(false));

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const onClickLogout = () => {
    dispatch(userLogout({history: history}))
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      style={{ top: '54px'}}
      onClose={handleMenuClose}
    >
      <MenuItem className={ classes.closeIcon }>
        <CloseIcon
          fontSize="small"
          onClick={handleMenuClose} />
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      {/* <MenuItem onClick={handleMenuClose}>My account</MenuItem> */}
      <MenuItem onClick={onClickLogout}>LOGOUT</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      className={classes.root, classes.mobileHide}
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      style={{ top: '70px'}}
      onClose={handleMobileMenuClose}
    >
      <MenuItem className={ classes.closeIcon }>
        <CloseIcon
          fontSize="small"
          onClick={handleMobileMenuClose} />
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <ChatIcon className={classes.iconSize} />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon className={classes.iconSize} />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle className={classes.iconSize} />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const SignInHeader = (
    <div className={classes.sectionDesktop}>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <ChatIcon className={classes.iconSize} />
          </Badge>
        </IconButton>
        <IconButton aria-label="show 17 new notifications" color="inherit">
          <Badge badgeContent={17} color="secondary">
            <NotificationsIcon className={classes.iconSize} />
          </Badge>
        </IconButton>
        <IconButton
          edge="end"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >
          { userImage
              ? <Avatar alt={`${userName}-img`} src={`${userImage}`} />
              : <Avatar className={classes.orange}>{userName.substring(0,1).toUpperCase()}</Avatar>
          }
        </IconButton>
      </div>
  );
  const NotSignInHeader = (
    <div className={classes.sectionDesktop} anchorEl={anchorEl}>
        <IconButton
          edge="end"
          aria-label="sign up account"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={()=> setopenLoginBlock(!openLoginBlock)}
          color="inherit"
        >
          <AccountCircle className={classes.iconSize} />
        </IconButton>
      </div>
  )

  const LoginTemp = (
    <div
      ref={loginRef}
      className={classes.loginBlock}>
        <Login 
          setopenLoginBlock={setopenLoginBlock} 
          setMobileMoreAnchorEl={setMobileMoreAnchorEl} />
    </div>
  );

  return (
    <div className={classes.headerWrapper}>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon className={classes.iconSize} />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap onClick={()=> dispatch(userLoginCheck())}>
            OXBNB
          </Typography>
          <div className={classes.grow} />

          { isLoggedIn ? SignInHeader : NotSignInHeader }
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon className={classes.iconSize} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {openLoginBlock && LoginTemp}
    </div>
  );
}

export default Header;