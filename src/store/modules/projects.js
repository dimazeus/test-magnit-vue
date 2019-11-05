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
    },
    getHistoryPart(store, {id, part}) {
        //либо сервер, либо настройки польователя решат, по сколько записей
        const packageSize = 2;
        const doc = API.getProjects().find((doc) => doc['id'] == id);
        if(!doc || !doc['history'] || !doc['history']['history']) return [];
        const allObj = doc['history']['history'];
        const startIndex = part * packageSize;
        const endIndex = (part + 1) * packageSize;
        //проверяем наличие минимального запрашиваемого индекса
        // if(part * packageSize > allObj.length - 1) return [];
        const ret = allObj.slice(startIndex, endIndex);
        //последняя запись в массиве будет индикатором есть ли еще записи
        ret.push({more: allObj.length > endIndex ? true : false});
        return ret;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
