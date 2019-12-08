import { SweetsAction } from '../../actions/Sweets/Action';
import ActionType from '../../actions/Sweets/ActionType';
import { SweetsItemState } from '../../states/SweetsItemState';

export const initialState: SweetsItemState = {
  favorites: [],
};

export const sweetsReducer = (state: SweetsItemState = initialState, action: SweetsAction): SweetsItemState => {
  switch (action.type) {
    case ActionType.REGISTER_FAVORITE_SWEETS:
      return {
        ...state,
        favorites: [...state.favorites, action.payload.id],
      };
    case ActionType.UNREGISTER_FAVORITE_SWEETS:
      const deleteTarget = state.favorites.findIndex(id => id === action.payload.id);
      return {
        ...state,
        favorites: [...state.favorites.slice(0, deleteTarget), ...state.favorites.slice(deleteTarget + 1)],
      };
    case ActionType.LOAD_SWEETS:
    default:
      return state;
  }
};
