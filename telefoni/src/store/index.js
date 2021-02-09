import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messages : []
  },
  mutations: {
    set_messages : function(state  , messages){
      state.messages = messages;
    },

    add_message : function(state , message){
      state.messages.push(messages);
    },

    remove_message: function(state , id){

     for(let m=0 ; m<state.messages.length ; m++)
     {
      if(state.messages[m].idTelefona === id)
      {
        state.messages.splice(m , 1);
        break;
      }
     }
    },

    update_message: function(state , payload){
      for(let m=0 ; m<state.messages.length ; m++)
      {
        if(state.messages[m].idTelefona === payload.id)
        {
          state.messages[m].markaTelefona = payload.msg.markaTelefona;
          state.messages[m].modelTelefona = payload.msg.modelTelefona;
          state.messages[m].opisModela = payloa.msg.opisModela;
          break;
        }
      }
    }

  },

  actions: {
    load_messages : function ({commit}) {
      fetch('http://localhost:1000/podaci/telefoni' , {method : 'get'}).then((resp) => {
        if(!resp.ok)
          throw resp;

        return resp.json();
      }).then((jsonData) =>{
       commit('set_messages' , jsonData)
      }).catch((err) => {
        if(typeof err.text === "function")
          err.text.then((msg) => {
            alert(msg);
          });
        else
          alert(err);
      })
    },

    delete_message: function ({commit} , id){
      fetch(`http://localhost:1000/podaci/telefon/${id}` , {method : 'delete'}).then((resp) => {
        if(!resp.ok)
          throw resp;

        return resp.json();
      }).then((jsonData) =>{
        commit('remove_message' , jsonData.id)
      }).catch((err) => {
        if(typeof err.text === "function")
          err.text.then((msg) => {
            alert(msg);
          });
        else
          alert(err);
      })
    },

    new_message: function({ commit }, message) {
      fetch('http://localhost:1000/podaci/telefoni', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: message
      }).then((response) => {
        if (!response.ok)
          throw response;

        return response.json();
      }).then((jsonData) => {
        commit('add_message', jsonData);
      }).catch((error) => {
        if (typeof error.text === 'function')
          error.text().then((errorMessage) => {
            alert(errorMessage);
          });
        else
          alert(error);
      });
    },

    change_message: function ({commit} , payload){

      fetch(`http://localhost:1000/podaci/telefon/${payload.id}` , {
        method : 'put' ,
        headers: {
          'Content-Type' : 'application-json'
        },
        body: payload.msg
      }).then((resp) => {
        if(!resp.ok)
          throw resp;

        return resp.json();
      }).then((jsonData) =>{
        commit('update_message' , {id: paylaod.id , msg: jsonData});
      }).catch((err) => {
        if(typeof err.text === "function")
          err.text.then((msg) => {
            alert(msg);
          });
        else
          alert(err);
      })

    },
  }
})
