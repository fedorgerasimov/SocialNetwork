import {combineReducers, legacy_createStore as createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

const rootReducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer
});

//export type AppStateType = ReturnType<typeof rootReducer>
export type ReduxStoreType = typeof store
export const store = createStore(rootReducer);

