<template>
  <v-row>
    <v-col>
      <v-expansion-panels
        accordion
      >
        <m-expansion-panel
          v-for="(doc, i) in items"
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
        v-model="page"
        :length="pageCount"
        :total-visible="5"
        circle
        @input="pageChangeHandler"
      ></v-pagination>
    </v-col>
  </v-row>
</template>

<script>
import MExpansionPanel from "@/components/MExpansionPanel"
import DocListHeader from "@/components/panelData/DocListHeader"
import DocListContent from "@/components/panelData/DocListContent"
const chunk = (arr, chunkSize = 1) => {
  const cache = [];
  const tmp = arr.slice();
  if (chunkSize <= 0) return cache;
  while (tmp.length) cache.push(tmp.splice(0, chunkSize));
  return cache;
}
export default {
  components:{
    MExpansionPanel,
    DocListHeader,
    DocListContent
  },
  data(){
    return{
      page: +this.$route.query.page || 1,
      pageSize: 5,
      pageCount: 0,
      allItems: [],
      items: []
    }
  },
  computed:{
      documents: () => {
          this.$store.dispatch("documents/getAllDocuments")
      }

  },
  methods: {
    setupPagination(allItems) {
      this.allItems = chunk(allItems, this.pageSize)
      this.pageCount = this.allItems.length
      this.items = this.allItems[this.page - 1] || this.allItems[0]
    },
    pageChangeHandler(page){
      this.$router.push(`${this.$route.path}?page=${page}`)
      this.items = this.allItems[page - 1] || this.allItems[0]
    }
  },
  mounted() {
    this.$store.dispatch("documents/loadDocuments")
    this.setupPagination(this.$store.state.documents.documents)
  }
}
</script>
