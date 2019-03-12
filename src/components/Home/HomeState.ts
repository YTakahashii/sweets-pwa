import ISweet from 'src/models/Sweet';

export default interface HomeState {
    isLoaded: boolean;
    sweets: ISweet[];
}