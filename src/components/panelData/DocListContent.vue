<template>
  <v-list dense>
    <m-list-item
      v-if="item.branch"
      title="Филиал: "
      :body="item.branch"
    />
    <m-list-item
      v-if="item.openDate"
      title="Дата открытия: "
      :body="item.openDate"
    />
    <m-list-item
      v-if="item.transitionToCurrentStatusDate"
      title="Дата перехода в тек. статус: "
      :body="item.transitionToCurrentStatusDate"
    />
    <m-list-item
      v-if="item.transitionsCount"
      title="Кол-во переходов в тек. статус: "
      :body="item.transitionsCount"
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
