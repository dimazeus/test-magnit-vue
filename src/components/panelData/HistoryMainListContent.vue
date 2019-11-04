<template>
  <v-list dense>
    <m-list-item
      v-if="item.comment"
      title="Комментарий: "
      :body="item.comment"
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
