<template>
  <v-list dense>
    <m-list-item
      v-if="item.number"
      title="№ Заявки: "
      :body="item.number"
    />
    <m-list-item
      v-if="item.executor"
      title="Исполнитель: "
      :body="item.executor"
    />
    <m-list-item
      v-if="item.previousStatus"
      title="Предыдуший статус: "
      :body="item.previousStatus"
    />
    <m-list-item
      v-if="item.action"
      title="Действие: "
      :body="item.action"
    />
    <m-list-item
      v-if="item.date"
      title="Дата: "
      :body="item.date"
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
