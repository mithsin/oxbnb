import React, { useState, useEffect } from 'react';
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

  return (
    <Slide direction="right" in={openMenuBlock} mountOnEnter unmountOnExit>
      <div className={ classes.MenuWrapper } >
        <List className={classes.MenuUl}>
          <ListItem>
              <span className={classes.Title}>MENU LIST</span> 
              <CloseBar setClose={setOpenMenuBlock}/>
          </ListItem>
          <MenuItem>
              <span className={classes.ListText}>list 1</span>
          </MenuItem>
          <MenuItem>
              <span className={classes.ListText}>list 2</span>
          </MenuItem>
          <MenuItem>
              <span className={classes.ListText}>list 3</span>
          </MenuItem>
        </List>
      </div>
    </Slide>
  );
}

export default MenuBlock;