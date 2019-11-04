<template>
  <v-row>
    <v-col>
      <v-card
        tile
      >
        <v-card-title>
          <v-row class="text-center">
            <v-col>Сведения о проекте</v-col>
          </v-row>
        </v-card-title>
        <v-row>
          <v-col>
            <v-list dense>
              <m-list-item
                v-if="item.nor"
                title="НОР: "
                :body="item.nor"
              />
              <m-list-item
                v-if="item.mor"
                title="МОР: "
                :body="item.mor"
              />
              <m-list-item
                v-if="item.branch"
                title="Филиал: "
                :body="item.branch"
              />
              <m-list-item
                v-if="item.reasonCancel"
                title="Причина омены: "
                :body="item.reasonCancel"
              />
              <m-list-item
                v-if="item.region"
                title="Регион: "
                :body="item.region"
              />
              <m-list-item
                v-if="item.typeOfLaw"
                title="Вид права: "
                :body="item.typeOfLaw"
              />
            </v-list>
          </v-col>
          <v-col>
            <v-list dense>
              <m-list-item
                v-if="item.cancelDate"
                title="Дата отмены: "
                :body="item.cancelDate"
              />
              <m-list-item
                v-if="item.fillDate"
                title="Дата заливки бюджета: "
                :body="item.fillDate"
              />
              <m-list-item
                v-if="item.regDate"
                title="Дата регистрации ДДА: "
                :body="item.regDate"
              />
              <m-list-item
                v-if="item.openFactDate"
                title="Прогноз/факт открытия: "
                :body="item.openFactDate"
              />
              <m-list-item
                v-if="item.code"
                title="Код: "
                :body="item.code"
              />
              <m-list-item
                v-if="item.typeCMR"
                title="Тип СМР: "
                :body="item.typeCMR"
              />
            </v-list>
          </v-col>
        </v-row>

        <v-card-actions>
          <v-container>
            <v-row justify="center">
              <v-col class="text-center" lg="2">
              <!-- <v-col class="text-center" cols="12" sm="4"> -->
                <div class="my-2">
                  <v-btn disabled>Сервис БО</v-btn>
                </div>
                <div class="my-2">
                  <v-btn disabled>Сервис БО</v-btn>
                </div>
              </v-col>
              <v-col class="text-center" lg="2">
                <div class="my-2">
                  <v-btn color="primary"
                        @click="$router.push({name: 'workPlan',params: {id: $route.params.id}})"
                  >План работ</v-btn>
                </div>
                <div class="my-2">
                  <v-btn color="primary"
                        @click="$router.push({name: 'historyReq',params: {id: $route.params.id}})"
                  >История заявок</v-btn>
                </div>
              </v-col>
              <v-col class="text-center" lg="2">
                <div class="my-2">
                  <v-btn disabled>Сервис БО</v-btn>
                </div>
                <div class="my-2">
                  <v-btn disabled>Сервис БО</v-btn>
                </div>

              </v-col>
            </v-row>
          </v-container>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import MListItem from "@/components/MListItem"
export default {
  components: {
    MListItem
  },
  data(){
    return{
      item: []
    }
  },
  mounted() {
    this.$store.dispatch("projects/getProject", this.$route.params.id).then((res)=>{
      this.item = res;
    })
  }

}
</script>

<style>

</style>
