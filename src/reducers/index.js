import { combineReducers } from 'redux';
import setAdminsReducer from './admins';
import setOrdersReducer from './orders'
import setPaymentsReducer from './payments'


const rootReducer = combineReducers({
    orders:setOrdersReducer,
    payments:setPaymentsReducer,
    admins:setAdminsReducer
});

export default rootReducer;