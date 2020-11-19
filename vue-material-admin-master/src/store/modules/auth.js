import request from '@/util/request'

const state = {
    access_token: null,
    expires_in: 3600,
    token_type: 'bearer',
    mobile: null,
    avatar: null
}
const getters = {
    getAccessToken: (state) => {
        return state.access_token
    },
    getAvatar: (state) => state.avatar,
    getmobile: (state) => state.mobile
}
const actions = {
    login({ commit, dispatch }, { mobile, password }) {
        // return request({
        //     url: '/auth/login',
        //     method: 'post',
        //     data: {
        //         mobile,
        //         password
        //     }
        // }).then((resp) => {
        //     commit('SET_LOGIN', resp)
        //     dispatch('fetchProfile')
        // })
        commit('SET_LOGIN_PROFILE', { mobile: mobile })
        // dispatch('fetchProfile')
    },
    logout({ commit }) {
        commit('SET_ACCESS_TOKEN', null)
    },
    // get current login user info

    fetchProfile({ commit }) {
        return request({
            url: '/me',
            method: 'get'
        }).then(({ data }) => {
            commit('SET_LOGIN_PROFILE', data)
        })
    }
}
const mutations = {
    SET_LOGIN(state, { access_token, expires_in }) {
        state.access_token = access_token
        state.expires_in = expires_in
    },
    SET_ACCESS_TOKEN(state, token) {
        state.access_token = token
    },
    SET_LOGIN_PROFILE(state, payload) {
        state.mobile = payload.mobile
        state.avatar = payload.avatar
    }
}

export default {
    namespace: true,
    state,
    getters,
    actions,
    mutations
}