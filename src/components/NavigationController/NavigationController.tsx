import * as React from 'react';
import MyBottomNavigation from '../BottomNavigation/BottomNavigation';
import Navigationbar from '../Navigationbar/Navigationbar';
import Content from '../Content/Content';
import NavigationControllerState, { ScreenState } from './NavigationControllerState';

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
                    <Content />
                }
                <MyBottomNavigation switchScreen={this.switchScreen}/>
            </React.Fragment>
        );
    }

    public switchScreen = (screenState: ScreenState) => this.setState({ screenState });
}