

import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import issuesReducer from "../features/issue/issuesSlice"
import projectReducer from "../features/project/projectSlice"
const store = configureStore({
    reducer: {
        user: userReducer,
        issues:issuesReducer,
        project:projectReducer
    }
})
export default store