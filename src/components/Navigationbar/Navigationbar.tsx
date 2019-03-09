import * as React from 'react';
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from 'src/components/Navigationbar/logo.png';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import SearchIcon from '@material-ui/icons/Search';

const styles = (theme: Theme) => createStyles({
    root: {
        background: '#FFFFFF',
        zIndex: theme.zIndex.drawer + 1,
    },
    toolbar: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between',
    }
});

type NavigationbarProps = WithStyles<typeof styles>;

const Navigationbar = (props: NavigationbarProps) => {
    const { classes } = props;

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar className={classes.toolbar}>
                <IconButton color="primary">
                    <InfoIcon />
                </IconButton>
                <img src={logo} alt='logo' height={45} />
                <IconButton color="primary">
                    <SearchIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default withStyles(styles)(Navigationbar);