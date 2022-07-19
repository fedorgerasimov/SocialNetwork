import {combineReducers, legacy_createStore as createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    users: usersReducer,

});

export type AppRootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);

//export type ReduxStoreType = typeof store



