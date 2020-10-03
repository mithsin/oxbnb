import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Login from 'Components/Blocks/Login';
import Profile from 'Components/Blocks/Profile';
import useOnClickOutside from 'Utils/useOnClickOutside';
import { makeStyles } from '@material-ui/core/styles';
import {
    Avatar,
    AppBar,
    Badge,
    IconButton,
    Toolbar,
    Typography,
    MenuItem
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

const useStyles = makeStyles((theme) => ({
  headerWrapper: {
    paddingTop: "2rem",
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
    width: '100%',
    maxWidth: '500px', 
    position: 'absolute', 
    top: '0', 
    right: '0',
    zIndex: 9998,
  },
  mobileHide: {
    [theme.breakpoints.up('md')]: {
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
  profileBlock: {
    width: "100%",
    border: "1px dotted gray",
    maxWidth: "300px",
    background: "#ffffff",
    padding: "0",
    position: "absolute",
    top: "36px",
    right: "16px",
    boxShadow: "0px 3px 6px 1px #bbb",
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    "& li": {
      padding: "20px",
      borderBottom: '1px solid #bbb',
    }
  },
  mobileProfileBlock: {
    width: "100%",
    border: "1px dotted gray",
    maxWidth: "299px",
    background: "#ffffff",
    padding: "0",
    position: "absolute",
    top: "0px",
    right: "0px",
    boxShadow: "0px 3px 6px 1px #bbb",
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    "& li": {
      padding: "20px",
      borderBottom: '1px solid #bbb',
    }
  },
  mobileMenuBlock: {
    width: "100%",
    border: "1px dotted gray",
    maxWidth: "300px",
    background: "#ffffff",
    padding: "0",
    position: "absolute",
    top: "36px",
    right: "0px",
    boxShadow: "0px 3px 6px 1px #bbb",
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  notLoginBlock: {
    display: "flex"
  },
}));

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const loginRef = useRef(null);
  const profileRef = useRef(null);
  const profileRefSub = useRef(null);
  const mobileProfileRef = useRef(null);
  const mobileProfileRefSub = useRef(null);
  const history = useHistory();
  const isLoggedIn = useSelector(userIsLoggedIn);
  const userName = useSelector(userUserName);
  const userImage = useSelector(userProfileImage);
  const [openLoginBlock, setopenLoginBlock] = useState(false);
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [openMobileProfile, setOpenMobileProfile] = useState(false);
  const [openProfilBlock, setOpenProfilBlock] = useState(false);

  useOnClickOutside(loginRef, () => setopenLoginBlock(false));
  useOnClickOutside(profileRef, () => setOpenProfileMenu(false), profileRefSub);
  useOnClickOutside(mobileProfileRef, () => setOpenMobileMenu(false), mobileProfileRefSub);


  const OpenProfileMenuToggle = () => {
    setOpenProfileMenu(!openProfileMenu)
  }

  const onClickLogout = () => {
    dispatch(userLogout({history: history}))
  };

  const onClickMobileMenu = () => {
    if(openMobileMenu && openMobileProfile){
      setOpenMobileProfile(false)
    }
    setOpenMobileMenu(!openMobileMenu)
  }

  const menuId = 'primary-search-account-menu';
  const ProfileMenu = ({mobileTrigger}) => (
    <ul
      ref={profileRef} 
      className={ mobileTrigger ? classes.mobileProfileBlock : classes.profileBlock }>
      <MenuItem onClick={()=> {setOpenProfilBlock(!openProfilBlock); onClickMobileMenu()}}>Profile</MenuItem>
      <MenuItem onClick={()=> console.log('open profile block')}>My account</MenuItem>
      <MenuItem onClick={onClickLogout}>LOGOUT</MenuItem>
    </ul>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const mobileMenu = (
    <ul ref={mobileProfileRef} className={ classes.mobileMenuBlock }>
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
      <MenuItem onClick={()=> setOpenMobileProfile(!openMobileProfile)}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          { userImage
              ? <Avatar alt={`${userName}-img`} src={`${userImage}`} />
              : <Avatar className={classes.orange}>{userName.substring(0,1).toUpperCase()}</Avatar>
          }
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      { openMobileProfile &&
        <MenuItem style={{overflow: 'visible'}}>
          <ProfileMenu mobileTrigger={true} />
        </MenuItem>
      }
    </ul>
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
          onClick={OpenProfileMenuToggle}
          color="inherit"
        >
          { userImage
              ? <Avatar ref={profileRefSub} alt={`${userName}-img`} src={`${userImage}`} />
              : <Avatar ref={profileRefSub} className={classes.orange}>{userName.substring(0,1).toUpperCase()}</Avatar>
          }
        </IconButton>
      </div>
  );
  const NotSignInHeader = (
    <div className={classes.notLoginBlock} >
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
          setopenLoginBlock={setopenLoginBlock} />
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
          { isLoggedIn &&
          <div className={classes.sectionMobile}>
            <IconButton
              ref={mobileProfileRefSub}
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={onClickMobileMenu}
              color="inherit"
            >
              <MoreIcon className={classes.iconSize} />
            </IconButton>
          </div>}
        </Toolbar>
      </AppBar>
      { isLoggedIn && openMobileMenu && mobileMenu}
      { isLoggedIn && openProfileMenu && <ProfileMenu mobileTrigger={false}/> }
      { openLoginBlock && LoginTemp }
      { openProfilBlock && <Profile setCloseUpdate={setOpenProfilBlock} /> }
    </div>
  );
}

export default Header;