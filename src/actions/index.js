export const setAllOrders=(ordersArray)=>({
    type:'SET_ALL_ORDERS',
    payload:ordersArray
})
export const setAllPayments=(paymentsArray)=>({
    type:'SET_ALL_PAYMENTS',
    payload:paymentsArray
})
export const setAllAdmins=(adminsArray)=>({
    type:'SET_ALL_ADMINS',
    payload:adminsArray
})

export const rechargeAdminredux =(adminIdArray, balance)=>{
    return{
        type:'RECHARGE_ADMIN',
        payload:{
            adminIdArray,
            balance
        }
    }
}