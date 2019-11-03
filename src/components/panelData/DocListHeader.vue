<template>
  <v-list>
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