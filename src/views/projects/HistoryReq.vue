<template>
  <v-tabs
    v-model="tab"
    hide-slider
  >
    <v-tab
      href="#tab-history"
    >
      История
    </v-tab>
    <v-tab
      href="#tab-files"
    >
      Файлы
    </v-tab>
    <v-tab-item
      value="tab-history"
    >
      <v-container>
        <v-row no-gutters>
          <v-col>
            <v-expansion-panels>
              <m-expansion-panel
                v-for="(his, i) in history"
                :key="i"
              >
                <template v-slot:header>
                  <history-list-header :item = "his"/>
                </template>
                <template v-slot:content>
                  <history-list-content :item = "his"/>
                </template>
              </m-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-container>
    </v-tab-item>

    <v-tab-item
      value="tab-files"
    >
      <v-container>
        <v-row no-gutters>
          <v-col>
            <v-expansion-panels>
              <m-expansion-panel
                v-for="(file, i) in files"
                :key="i"
                only-header
              >
                <template v-slot:header>
                  <file-list-header :item = "file"/>
                </template>
              </m-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-container>
    </v-tab-item>

  </v-tabs>
</template>

<script>
import MExpansionPanel from "@/components/MExpansionPanel"
import HistoryListHeader from "@/components/panelData/HistoryMainListHeader"
import HistoryListContent from "@/components/panelData/HistoryMainListContent"
import FileListHeader from "@/components/panelData/HistoryFileListHeader"
export default {
  components:{
    MExpansionPanel,
    HistoryListHeader,
    HistoryListContent,
    FileListHeader
  },
  data(){
    return{
      tab: "tab-history",
      files: [],
      history: []
    }
  },
  computed:{


  },
  mounted() {
    this.$store.dispatch("projects/getFiles", this.$route.params.id).then((res)=>{
      this.files = res.slice();
    })
    this.$store.dispatch("projects/getHistory", this.$route.params.id).then((res)=>{
      this.history = res.slice();
      window.console.log(res)
    })
  }
}
</script>

<style scoped>
  .v-window-item {
    background-color: var(--v-primary-lighten1);
    border: 2px solid var(--v-primary-base);
  }
  .v-tabs >>> .v-item-group {
    background-color: inherit;
  }
  .v-tab {
    border-style: solid;
    border-color: var(--v-primary-base);
    border-bottom: none;
    border-top-right-radius: 25px;
    margin-right: 5px;
  }
  .v-tab::before {
    border-top-right-radius: 25px;
  }

  .v-tab--active {
    background-color: var(--v-primary-lighten1);
    color: rgba(0, 0, 0, 0.54);
  }
</style>
