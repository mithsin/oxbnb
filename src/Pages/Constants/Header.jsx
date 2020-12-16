import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Login from 'Components/Blocks/Login';
import { ProfileBlock, MenuBlock } from 'Pages/Constants/HeaderComponents';
import useOnClickOutside from 'Utils/useOnClickOutside';
import { useHeaderStyles } from './styles';
import useDocumentScrollThrottled from 'hooks/useDocumentScrollThrottled';
import { composeClassName } from 'Utils/comment'
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


const Header = () => {
  const classes = useHeaderStyles();
  // const custom = useCustomStyles();
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
  const [openMenuBlock, setOpenMenuBlock] = useState(false);

  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 400;

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;
    setShouldShowShadow((!isScrolledDown || !isMinimumScrolled) && currentScrollTop > 2);
    setShouldHideHeader(isScrolledDown && isMinimumScrolled);
  });

  const shadowStyle = shouldShowShadow ? classes.shadow : '';
  const hiddenStyle = shouldHideHeader ? classes.hidden : '';

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
  
  const onClickOpenMenu = () => {
    setOpenMenuBlock(!openMenuBlock);
  };
  const menuId = 'primary-search-account-menu';
  const ProfileMenu = ({mobileTrigger}) => (
    <ul
      ref={profileRef} 
      // mobile and desktop
      // className={ mobileTrigger ? classes.mobileProfileBlock : classes.profileBlock }
      className={ classes.profileBlock }>
      <MenuItem onClick={()=> {setOpenProfilBlock(!openProfilBlock); onClickMobileMenu()}}>Profile</MenuItem>
      <MenuItem onClick={()=> console.log('open profile block')}>My account</MenuItem>
      <MenuItem onClick={onClickLogout}>LOGOUT</MenuItem>
    </ul>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const mobileMenu = (
    <ul ref={mobileProfileRef} className={ classes.mobileMenuBlock }>
      {/* <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <ChatIcon className={classes.iconSize} />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem> */}
      {/* <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon className={classes.iconSize} />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem> */}
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
        {/* <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <ChatIcon className={classes.iconSize} />
          </Badge>
        </IconButton> */}
        {/* <IconButton aria-label="show 17 new notifications" color="inherit">
          <Badge badgeContent={17} color="secondary">
            <NotificationsIcon className={classes.iconSize} />
          </Badge>
        </IconButton> */}
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
    <div className={ composeClassName(classes.headerWrapper, shadowStyle, hiddenStyle)}>
      <AppBar position="static" className={classes.AppBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={onClickOpenMenu}
          >
            <MenuIcon className={classes.iconSize} />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap onClick={()=> dispatch(userLoginCheck())}>
            OXBNB
          </Typography>
          <div className={classes.grow} />

          { isLoggedIn ? SignInHeader : NotSignInHeader }
          {/* { isLoggedIn &&
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
          </div>} */}
        </Toolbar>
      </AppBar>
      <MenuBlock setOpenMenuBlock={ setOpenMenuBlock } openMenuBlock={ openMenuBlock }/>
      {/* { isLoggedIn && openMobileMenu && mobileMenu} */}
      { isLoggedIn && openProfileMenu && <ProfileMenu mobileTrigger={false}/> }
      { openLoginBlock && LoginTemp }
      { openProfilBlock && <ProfileBlock setCloseUpdate={setOpenProfilBlock} /> }
    </div>
  );
}

export default Header;