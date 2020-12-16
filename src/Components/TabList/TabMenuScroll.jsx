import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanelScroll from 'Components/TabList/TabComponents/TabPanelScroll';


const a11yProps = (index) => {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const TabMenuScroll = ({
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
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
        {tabInfo.map((tab,idx) => 
            <Tab label={tab.labelTitle} {...a11yProps(idx)} />)}
        </Tabs>
      </AppBar>
      <TabPanelScroll value={value} index={0}>
        Item One
      </TabPanelScroll>
      <TabPanelScroll value={value} index={1}>
        Item Two
      </TabPanelScroll>
      <TabPanelScroll value={value} index={2}>
        Item Three
      </TabPanelScroll>
      <TabPanelScroll value={value} index={3}>
        Item Four
      </TabPanelScroll>
      <TabPanelScroll value={value} index={4}>
        Item Five
      </TabPanelScroll>
    </div>
  );
};

TabMenuScroll.defaultProps = {
    campaign: '{}',
    qa: '[]',
    updates: '[]',
    comments: '[]',
    community: '[]',
};


export default TabMenuScroll;