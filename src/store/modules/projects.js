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
    getFiles(store, id) {
        const doc = API.getDocuments().find((doc) => doc['id'] == id);
        return doc ? doc['files'] : undefined;
    },
    getHistory(store, id) {
        const his = API.getDocuments().find((doc) => doc['id'] == id);
        return his ? his['history'] : undefined;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
