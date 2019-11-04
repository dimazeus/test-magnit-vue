<template>
  <v-row>
    <v-col>
      <m-filter
        :filters="filters"
        v-model="items"
        :allItems="allItems"
      />
      <v-expansion-panels>
        <m-expansion-panel
          v-for="(proj, i) in projects"
          :key="i"
          only-header
        >
          <template v-slot:header>
            <proj-list-header :item = "proj"/>
          </template>
        </m-expansion-panel>
      </v-expansion-panels>
      <v-pagination
        v-model="mixinPage"
        :length="mixinPageCount"
        :total-visible="5"
        circle
        @input="mixinPageChangeHandler"
      ></v-pagination>
    </v-col>
  </v-row>
</template>

<script>
import MExpansionPanel from "@/components/MExpansionPanel"
import ProjListHeader from "@/components/panelData/ProjListHeader"
import MFilter from "@/components/MFilter"
import paginationMixin from "@/mixins/pagination.mixin"
export default {
  mixins: [paginationMixin],
  components:{
    MExpansionPanel,
    ProjListHeader,
    MFilter
  },
  data(){
    return{
      currentItems: [],

      filters: [
        {label: 'Филиал', type: 'auto', equals: (obj, value) => {
          if(typeof obj.branch == "undefined") return false
          return value == '' || obj.branch.toLowerCase().indexOf(value.toLowerCase()) != -1 }
        },
        {label: 'НОР', type: 'auto', equals: (obj, value) => {
          if(typeof obj.nor == "undefined") return false
          return value == '' || obj.nor.toLowerCase().indexOf(value.toLowerCase()) != -1 }
        },
        {label: 'Дата создания', type: 'date', equals: (obj, value) => {
          if(typeof obj.createDate == "undefined") return false
          return value == '' || obj.createDate.toLowerCase().indexOf(value.toLowerCase()) != -1 }
        },
        {label: 'МОР', type: 'auto', equals: (obj, value) => {
          if(typeof obj.mor == "undefined") return false
          return value == '' || obj.mor.toLowerCase().indexOf(value.toLowerCase()) != -1 }
        },
        {label: 'Тип СМТ', type: 'auto', equals: (obj, value) => {
          if(typeof obj.typeCMR == "undefined") return false
          return value == '' || obj.typeCMR.toLowerCase().indexOf(value.toLowerCase()) != -1 }
        },
        {label: 'Вид права', type: 'auto', equals: (obj, value) => {
          if(typeof obj.typeOfLaw == "undefined") return false
          return value == '' || obj.typeOfLaw.toLowerCase().indexOf(value.toLowerCase()) != -1 }
        },
        {label: 'Дата заливки бюджета', type: 'date', equals: (obj, value) => {
          if(typeof obj.fillDate == "undefined") return false
          return value == '' || obj.fillDate.toLowerCase().indexOf(value.toLowerCase()) != -1 }
        }
      ],
      allItems: [],
      items: []
    }
  },
  computed:{
      projects() {
        this.mixinSetupPagination(this.items)
        return this.currentItems
      }

  },
  mounted() {
    this.$store.dispatch("projects/loadProjects")
    this.items = this.$store.state.projects.projects;
    this.allItems = this.$store.state.projects.projects;
  }
}
</script>
