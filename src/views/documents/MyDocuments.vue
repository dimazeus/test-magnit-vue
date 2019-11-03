<template>
  <v-row>
    <v-col>
      <m-filter
        :filters="filters"
        v-model="items"
        :allItems="allItems"
      />
      <v-expansion-panels
        accordion
      >
        <m-expansion-panel
          v-for="(doc, i) in documents"
          :key="i"
        >
          <template v-slot:header>
            <doc-list-header :item = "doc"/>
          </template>
          <template v-slot:content>
            <doc-list-content :item = "doc"/>
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
import DocListHeader from "@/components/panelData/DocListHeader"
import DocListContent from "@/components/panelData/DocListContent"
import MFilter from "@/components/MFilter"
import paginationMixin from "@/mixins/pagination.mixin"
export default {
  mixins: [paginationMixin],
  components:{
    MExpansionPanel,
    DocListHeader,
    DocListContent,
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
        {label: 'Документ', type: 'text', equals: (obj, value) => {
          if(typeof obj.document == "undefined") return false
          return value == '' || obj.document.toLowerCase().indexOf(value.toLowerCase()) != -1 }
        },
        {label: 'Дата открытия', type: 'date', equals: (obj, value) => {
          if(typeof obj.openDate == "undefined") return false
          return value == '' || obj.openDate.toLowerCase().indexOf(value.toLowerCase()) != -1 }
        }
      ],
      allItems: [],
      items: []
    }
  },
  computed:{
      documents() {
        this.mixinSetupPagination(this.items)
        return this.currentItems
      }

  },
  mounted() {
    this.$store.dispatch("documents/loadDocuments")
    this.items = this.$store.state.documents.documents;
    this.allItems = this.$store.state.documents.documents;
  }
}
</script>
