import * as React from 'react';
import MyBottomNavigation from '../BottomNavigation/BottomNavigation';
import Navigationbar from '../Navigationbar/Navigationbar';
import NavigationControllerState, { ScreenState } from './NavigationControllerState';
import Home from '../Home/Home';
import { Typography } from '@material-ui/core';

export default class NavigationController extends React.Component<any, NavigationControllerState> {
    constructor(props: any) {
        super(props);
        this.state = {
            screenState: 'Home'
        };
    }

    public render() {
        const { screenState } = this.state;
        return (
            <React.Fragment>
                <Navigationbar />
                {
                    screenState === 'Home' &&
                    <Home />
                }
                {
                    screenState === 'Map' &&
                    <React.Fragment>
                        <Typography variant="h3" gutterBottom>
                            マップ
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            近日実装！
                        </Typography>
                    </React.Fragment>
                }
                {
                    screenState === 'Favorite' &&
                    <React.Fragment>
                        <Typography variant="h3" gutterBottom>
                            お気に入り
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            近日実装！
                        </Typography>
                    </React.Fragment>
                }
                <MyBottomNavigation switchScreen={this.switchScreen}/>
            </React.Fragment>
        );
    }

    public switchScreen = (screenState: ScreenState) => this.setState({ screenState });
}