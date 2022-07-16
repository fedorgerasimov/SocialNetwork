import {combineReducers, legacy_createStore as createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

const rootReducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer
});
export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>

export type ReduxStoreType = typeof store



