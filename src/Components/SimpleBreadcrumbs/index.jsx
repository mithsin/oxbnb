import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { useHistory } from 'react-router-dom';

import Link from '@material-ui/core/Link';



const SimpleBreadcrumbs = ({homeLink, linkList, currentLocation}) => {
  const history = useHistory();

  return (
    <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href={homeLink.link} onClick={(event)=> {event.preventDefault(); history.push(homeLink.link)}}>
            {homeLink.title}
        </Link>
      {linkList && linkList.map((list, idx)=> 
        <Link key={`${idx}-linklist`} href={list.link} color="inherit" onClick={(event)=> {event.preventDefault(); history.push(list.link)}}>
            {list.title}
        </Link>)}
      <Typography color="textPrimary">{currentLocation}</Typography>
    </Breadcrumbs>
  );
};

SimpleBreadcrumbs.defaultProps = {
    homeLink: {title: 'Home', link: '/'},
    linkList: [],
    currentLocation: 'currentLocation'
}

export default SimpleBreadcrumbs;
