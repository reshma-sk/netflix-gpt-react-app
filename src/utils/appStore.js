import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import moviesReducer from './movieSlice';
import gptReducer from './gptSlice';
import configReducer from './configSlice';


const appstore = configureStore(
    //this store have configuration.and this configuration hv reducer. this reducer have diff reducers for diff slices
    {
        reducer:{
            user:userReducer,
            movies:moviesReducer,
            gpt:gptReducer,
            config:configReducer,

        }
    }
)
export default appstore;