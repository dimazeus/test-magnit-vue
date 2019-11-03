import API from '@/api'

const state = {
    documents: null
}

const getters = {
}

const mutations = {
}

const actions = {
    loadDocuments(store) {
        store.state.documents = API.getDocuments();
    },
    getDocument(store, id) {
        return API.getDocuments().find((doc) => doc['id'] == id);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
