import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {ActionsProfileTypes, profileReducer} from "./profile-reducer";
import {ActionsDialogsTypes, dialogsReducer} from "./dialogs-reducer";
import {ActionsUsersTypes, usersReducer} from "./users-reducer";
import {ActionsAuthTypes, authReducer} from "./auth-reducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk"
import {reducer as formReducer} from 'redux-form'

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
});

export type AppRootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppActionsType =
    ActionsAuthTypes |
    ActionsProfileTypes |
    ActionsDialogsTypes |
    ActionsUsersTypes

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AppActionsType>
export type AppThunk <ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>

// @ts-ignore
window.store = store



