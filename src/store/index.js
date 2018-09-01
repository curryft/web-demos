/**
 * @description: 状态管理器
 * @author: xx
 * @date: 2018/4/10 9:56
 */

import Vue from 'vue'
import Vuex from 'vuex'

// //引入模块
// import actions from './actions'
// import getters from './getters'
// import mutations from './mutations'
// import state from './states'

Vue.use(Vuex);
//
// export default new Vuex.Store({
//     state,
//     getters,
//     actions,
//     mutations
// })

export default new Vuex.Store({
    state:{
        comments:[],
    },

    mutations:{
        setComments(state,comments){
            state.comments = comments;
        }
    },

    actions:{
        fetchComments({commit}){
            commit('setComments',
                [{
                    body: '霸气',
                    author: '雷叔',
                    id: 1123
                }, {
                    body: '机智如我',
                    author: '雷妹',
                    id: 1122
                }]
            )
        }
    }
})
