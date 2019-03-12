import * as React from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CakeIcon from '@material-ui/icons/Cake';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { ScreenState } from '../NavigationController/NavigationControllerState';

const styles = () => createStyles({
    root: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
    }
});

type MyBottomNavigationProps = {switchScreen: (screenState: ScreenState) => void} & WithStyles<typeof styles>;
interface MyBottomNavigationState {
    value: ScreenState;
}

class MyBottomNavigation extends React.Component<MyBottomNavigationProps, MyBottomNavigationState>  {
    constructor(props: MyBottomNavigationProps) {
        super(props);
        this.state = {
            value: 'Home',
        };
    }

    handleChange = (event: React.ChangeEvent, value: ScreenState) => {
        this.setState({ value });
        this.props.switchScreen(value);
        // console.log(event.currentTarget.textContent); // labelの値
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <BottomNavigation
                value={value}
                onChange={this.handleChange}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction label="スイーツ" icon={<CakeIcon />} value='Home' />
                <BottomNavigationAction label="地図" icon={<LocationOnIcon />} value='Map'/>
                <BottomNavigationAction label="お気に入り" icon={<FavoriteIcon />} value='Favorite'/>
            </BottomNavigation>
        );
    }
}

export default withStyles(styles)(MyBottomNavigation);