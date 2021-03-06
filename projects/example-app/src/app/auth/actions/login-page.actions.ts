import { createAction, props } from '@ngrx/store';
import { Credentials } from '@example-app/auth/models/user';

export const login = createAction(
  '[Login Page] Login',
  props<{ credentials: Credentials }>()
);
