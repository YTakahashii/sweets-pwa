import ActionType from './ActionType';
import { createStandardAction, createAsyncAction } from 'typesafe-actions';
import { AggregatedSweetsBySmallCategory } from '../../states';

export const loadSmallCategories = createStandardAction(ActionType.LOAD_SMALL_CATEFORIES)();

export const aggregateSweetsBySmallCategory = createAsyncAction(
  ActionType.AGGREGATE_SWEETS_BY_SMALL_CATEGORY_REQUEST,
  ActionType.AGGREGATE_SWEETS_BY_SMALL_CATEGORY_SUCCESS,
  ActionType.AGGREGATE_SWEETS_BY_SMALL_CATEGORY_FAILURE
)<undefined, AggregatedSweetsBySmallCategory, undefined>();
