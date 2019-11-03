<template>
  <v-list>
    <m-list-item
      v-if="item.number"
      title="№ Заявки: "
      :body="item.number"
    />
    <m-list-item
      v-if="item.date"
      title="Дата: "
      :body="item.date"
    />
    <m-list-item
      v-if="item.executor"
      title="Исполнитель: "
      :body="item.executor"
    />
    <m-list-item
      v-if="item.type"
      title="Тип файла: "
      :body="item.type"
    />
    <m-list-item
      v-if="item.title"
      title="Наименование: "
      :body="item.title"
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