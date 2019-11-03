<template>
  <v-row>
    <v-expansion-panels
      accordion
    >
      <m-expansion-panel
        v-for="(proj, i) in $store.state.projects.projects"
        :key="i"
        :item = "proj"
        only-header
      >
        <template v-slot:header>
          <proj-list-header :item = "proj"/>
        </template>
      </m-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>

<script>
import MExpansionPanel from "@/components/MExpansionPanel"
import ProjListHeader from "@/components/panelData/ProjListHeader"
export default {
  components:{
    MExpansionPanel,
    ProjListHeader
  },
  data(){
    return{

    }
  },
  computed:{
      documents: () => {
          this.$store.dispatch("documents/getAllDocuments")
      }

  },
  mounted() {
    this.$store.dispatch("projects/loadProjects")
  }
}
</script>
