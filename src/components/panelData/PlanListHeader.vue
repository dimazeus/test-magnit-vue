<template>
  <v-list>
    <m-list-item
      v-if="item.veha"
      title="Веха: "
      :body="item.veha"
    />
    <m-list-item
      v-else-if="item.cancelDate"
      title="План. окончание: "
      :body="item.cancelDate"
    />
    <m-list-item
      v-if="item.standart"
      title="Норматив: "
      :body="item.standart"
    />
    <m-list-item
      v-if="item.state"
      title="Состояние: "
      :body="item.state"
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