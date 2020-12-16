import { createUseStyles } from 'react-jss'
import { makeStyles } from '@material-ui/core/styles';

export const useHeaderStyles = makeStyles((theme) => ({
  headerWrapper: {
    top: '0',
    left: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '86px',
    // backgroundColor: '#fff',
    backgroundColor: 'rgba(255,255,255,.9)',
    color: '#333',
    transform: 'translateY(0)',
    transition: 'transform 0.3s ease',
  },
  grow: {
    flexGrow: 1,
  },
  AppBar: {
    backgroundColor: "#ffffff00 !important",
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
    // display: 'none',
    // [theme.breakpoints.up('md')]: {
      display: 'flex',
    // },
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
    top: "88px",
    right: "16px",
    boxShadow: "0px 3px 6px 1px #bbb",
    // [theme.breakpoints.down('sm')]: {
    //   display: 'none',
    // },
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
  shadow: {
    boxShadow:' 0 9px 9px -9px rgba(0, 0, 0, 0.13)',
    position: "fixed",
    top: '0',
    zIndex: 99999,
    transform: 'translateY(0)',
    transition: 'transform 0.6s ease',
  },
  hidden: {
    transform: 'translateY(-110%)',
    transition: 'transform 0.6s ease',
  },
}));

