var moduleA = {
  state : {
    isLoading:false,
    bankInf: {"name":"我是vuex的第一个数据-1","id":200,"bankName":"中国银行-1"},
    name: "是否登录",
    loadingBoxShow : false,
    AlertShow : true,
    Overlogin : false,
    userName : "",
  },
  mutations : {
    updateLoadingStatus(state, payload){
      state.isLoading = payload.isLoading
    },
    newBankName(state,msg) {
      for(var i in msg){
        state[i] = msg[i];
      }
    },
    changeSate(state){
      state.AlertShow = !state.AlertShow
    }
  },
  actions : {
    newBankName(context,parm){
      return new Promise(function(resolve, reject){
        // setTimeout(function(){
          context.commit('newBankName',parm);
          resolve()
         // },1000)
      })
    }
  }
}

var moduleB = {
  state2 :{
    bankInf: {"name":"我是vuex的第一个数据-2","id":300,"bankName":"中国银行-2"},
  },
  mutations: {
    newBankName2(state2,msg) {
      state2.bankInf.bankName = msg;
    }
  }
}

export default new Vuex.Store({
  modules:{
    a: moduleA,
    b: moduleB
  }
})