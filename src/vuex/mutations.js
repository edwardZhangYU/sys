export default {
    showAlertFunc(state,data){
        state.showAlertFlag = true
        state.alertType = data.type
        state.alertMsg = data.msg
    },
    closeAlertFunc(state){
        state.showAlertFlag = false
        state.alertMsg = ''
    }
}