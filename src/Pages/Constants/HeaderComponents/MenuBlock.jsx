import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  MenuItem,
  ListItemText,
  ListItem,
  List,
  Slide
} from '@material-ui/core';
// import Slide from '@material-ui/core/Slide';
import { useMenuBlockStyles } from './styles';
import CloseBar from 'Components/Utils/CloseBar';

const MenuBlock = ({openMenuBlock, setOpenMenuBlock}) => {
  const dispatch = useDispatch();
  const classes = useMenuBlockStyles();
  const history = useHistory();

  const menuList=[{
    title: "SHORT TERM RENT",
    link: "/bnb-rent"
  },{ 
    title: "LONG TERM RENT",
    link: '/long-term-rent'
  },{
    title: "HOME FOR SALE",
    link: "/for-sale"
  }]
  return (
    <Slide direction="right" in={openMenuBlock} mountOnEnter unmountOnExit>
      <div className={ classes.MenuWrapper } >
        <List className={classes.MenuUl}>
          <ListItem className={classes.menuHeader}>
              <span className={classes.Title}>MENU LIST</span> 
              <CloseBar setClose={setOpenMenuBlock}/>
          </ListItem>
          {
            menuList.map((type, index) => {
              return(
                <MenuItem className={classes.menuList}>
                  <span 
                    className={classes.ListText}
                    onClick={()=> history.push(type.link)}>
                      { type.title }
                  </span>
                </MenuItem>
              )
            })
          }
        </List>
      </div>
    </Slide>
  );
}

export default MenuBlock;