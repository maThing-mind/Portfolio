import { createAction, props } from '@ngrx/store';

export const loadPortfolio = createAction('[Portfolio] Load Portfolio');
export const loadPortfolioSuccess = createAction(
  '[Portfolio] Load Portfolio Success',
  props<{ data: any }>()
);
export const loadPortfolioFailure = createAction(
  '[Portfolio] Load Portfolio Failure',
  props<{ error: string }>()
);

export const setActiveSection = createAction(
  '[Portfolio] Set Active Section',
  props<{ section: string }>()
);

