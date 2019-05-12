export const alertControl = {
    methods:{
        showAlert(msg,type = 'error'){
            this.$store.commit('showAlertFunc',{msg,type})
        },
        closeAlert(){
            this.$store.commit('closeAlertFunc')
        }
    }
}