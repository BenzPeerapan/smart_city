import Vue from 'vue';
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);
const plugins = [createPersistedState()];

import state from "./state";
import * as getters from './getters';
import mutations from "./mutations";
import * as actions from "./actions";

export default new Vuex.Store({
    plugins,
    state,
    getters,
    mutations,
    actions,
});
