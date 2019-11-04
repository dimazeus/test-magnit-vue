<template>
  <router-link tag="div" :to="{name: 'documentPackage', params: {id: item.id} }">
    <v-row no-gutters>
      <v-col cols="11">
        <v-list dense>
          <m-list-item
            v-if="item.title"
            :body="item.title"
          />
          <m-list-item
            v-if="item.service"
            title="Сервис: "
            :body="item.service"
          />
          <m-list-item
            v-else-if="item.createDate"
            title="Дата создания: "
            :body="item.createDate"
          />
          <m-list-item
            v-if="item.format"
            title="Формат: "
            :body="item.format"
          />
          <m-list-item
            v-if="item.document"
            title="Документ: "
            :body="item.document"
          />
        </v-list>
      </v-col>
      <v-col align-self="center">
        <v-icon
          v-if="item.alert"
          color="error"
          x-large
        >mdi-alert-circle-outline</v-icon>
      </v-col>
    </v-row>
  </router-link>
</template>
<script>
import MListItem from "@/components/MListItem"
export default {
  props: {
    item: {
      type: Object,
      pequired: true
    }
  },
  components: {
    MListItem
  }
}
</script>
