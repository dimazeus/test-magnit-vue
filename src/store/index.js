import Vue from 'vue'
import Vuex from 'vuex'
import ProjectsModule from './modules/projects'
import DocumentsModule from './modules/documents'

Vue.use(Vuex)

export default new Vuex.Store({
  
  modules: {
    projects: ProjectsModule,
    documents: DocumentsModule
  }
})
