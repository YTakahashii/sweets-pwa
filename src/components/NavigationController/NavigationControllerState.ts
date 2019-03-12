export default interface NavigationControllerState {
    screenState: ScreenState;
}

export type ScreenState = 'Home' | 'Map' | 'Favorite';