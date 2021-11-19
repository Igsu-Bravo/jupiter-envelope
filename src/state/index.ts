import { IContext } from 'overmind';
import { state } from './state';
import * as effects from './effects';
import * as actions from './actions';

export const config = { state, actions, effects };

export type Context = IContext<typeof config>;
