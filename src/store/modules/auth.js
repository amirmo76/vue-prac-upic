import api from '../../api/imgur'
import qs from 'qs';
import { router } from '../../main';

const state = {
  token: window.localStorage.getItem('imgur_token')
}

const getters = {
  isLoggedIn: (state) => !!state.token
}

const mutations = {
  setToken: (state, token) => state.token = token
}

const actions = {
  logout: ({ commit }) => {
    commit('setToken', null)
    window.localStorage.removeItem('imgur_token');
  },
  login: () => api.login(),
  finalizeLogin: ({ commit }, hash) => {
    const parsed = qs.parse(hash.replace('#', ''));
    commit('setToken', parsed.access_token);
    window.localStorage.setItem('imgur_token', parsed.access_token);
    router.push('/');
  }
}

export default { state, actions, mutations, getters }