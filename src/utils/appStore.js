import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';

const appstore = configureStore(
    //this store have configuration.and this configuration hv reducer. this reducer have diff reducers for diff slices
    {
        reducer:{
            user:userReducer,
        }
    }
)
export default appstore;