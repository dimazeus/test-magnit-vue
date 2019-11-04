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
          v-for="(plan, i) in plans"
          :key="i"
          only-header
        >
          <template v-slot:header>
            <plan-list-header :item = "plan"/>
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
import PlanListHeader from "@/components/panelData/PlanListHeader"
import MFilter from "@/components/MFilter"
import paginationMixin from "@/mixins/pagination.mixin"
export default {
  mixins: [paginationMixin],
  components:{
    MExpansionPanel,
    PlanListHeader,
    MFilter
  },
  data(){
    return{
      currentItems: [],

      filters: [
        {label: 'Состояние', type: 'auto', equals: (obj, value) => {
          if(typeof obj.state == "undefined") return false
          return value == '' || obj.state.toLowerCase().indexOf(value.toLowerCase()) != -1 }
        },
        {label: 'Наименование вехи', type: 'text', equals: (obj, value) => {
          if(typeof obj.veha == "undefined") return false
          return value == '' || obj.veha.toLowerCase().indexOf(value.toLowerCase()) != -1 }
        },
        {label: 'План окончание', type: 'date', equals: (obj, value) => {
          if(typeof obj.cancelDate == "undefined") return false
          return value == '' || obj.openDate.toLowerCase().indexOf(value.toLowerCase()) != -1 }
        },
        {label: 'Норматив', type: 'auto', equals: (obj, value) => {
          if(typeof obj.standart == "undefined") return false
          return value == '' || obj.standart.toLowerCase().indexOf(value.toLowerCase()) != -1 }
        }
      ],
      allItems: [],
      items: []
    }
  },
  computed:{
      plans() {
        this.mixinSetupPagination(this.items)
        return this.currentItems
      }

  },
  mounted() {
    this.$store.dispatch("documents/loadDocuments")
    this.$store.dispatch("projects/getPlan", this.$route.params.id).then((res)=>{
      this.items = res.slice();
      this.allItems = res.slice();
    })
  }
}
</script>
