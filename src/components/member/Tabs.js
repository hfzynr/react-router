import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

export default function CenteredTabs() {
const classes = useStyles();
const [value, setValue] = React.useState(0);

const handleChange = (event, newValue) => {
    setValue(newValue);
};
const logOut = () => {
    localStorage.removeItem("isLogin");
};


return (
    <Paper className={classes.root}>
        <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
    >
        <Tab label="Home" component={Link} to="/home" />
        <Tab label="Contact" component={Link} to="/contact" />
        <Tab label="About" component={Link} to="/about"  />
        <Tab label="Log Out" component={Link} to="/signup" onClick={logOut}/>
    </Tabs>
    </Paper>
);
}