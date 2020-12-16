import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from 'Components/TabList/TabComponents/TabPanel';


const a11yProps = (index) => {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

const LinkTab =(props) => {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const TabMenu = ({
    campaign,
    qa,
    updates,
    comments,
    community,
}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabInfo = [{
        labelTitle: 'Campaign',
        link: '',
    },{
        labelTitle: 'QA',
        link: '',
    },{
        labelTitle: 'Updates',
        link: '',
    },{
        labelTitle: 'Comments',
        link: '',
    },{
        labelTitle: 'Community',
        link: '',
    }];
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
            {tabInfo.map((tab,idx) => <LinkTab label={tab.labelTitle} href={tab.link} {...a11yProps(idx)} />)}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Page One {campaign}
      </TabPanel>
      <TabPanel value={value} index={1}>
        Page Two {qa}
      </TabPanel>
      <TabPanel value={value} index={2}>
        Page Three {updates}
      </TabPanel>
      <TabPanel value={value} index={3}>
        Page Four {comments}
      </TabPanel>
      <TabPanel value={value} index={4}>
        Page Five {community}
      </TabPanel>
    </div>
  );
}

TabMenu.defaultProps = {
    campaign: '{}',
    qa: '[]',
    updates: '[]',
    comments: '[]',
    community: '[]',
};


export default TabMenu;