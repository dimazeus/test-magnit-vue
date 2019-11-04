import API from '@/api'

const state = {
    projects: null
}

const getters = {}

const mutations = {}

const actions = {
    loadProjects(store) {
        store.state.projects = API.getProjects();
    },
    getProject(store, id) {
        return API.getProjects().find((doc) => doc['id'] == id);
    },
    getPlan(store, id) {
        const doc = API.getProjects().find((doc) => doc['id'] == id);
        if(!doc || !doc['plan']) return [];
        return doc['plan'];
    },
    getFiles(store, id) {
        const doc = API.getProjects().find((doc) => doc['id'] == id);
        if(!doc || !doc['history'] || !doc['history']['files']) return [];
        return doc['history']['files'];
    },
    getHistory(store, id) {
        const doc = API.getProjects().find((doc) => doc['id'] == id);
        if(!doc || !doc['history'] || !doc['history']['history']) return [];
        return doc['history']['history'];
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
