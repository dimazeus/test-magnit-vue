<template>
  <router-link tag="div" :to="{name: 'projectInfo', params: {id: item.id} }">
    <v-list dense>
      <m-list-item
        v-if="item.nor"
        :body="item.nor"
      />
      <m-list-item
        v-if="item.mor"
        title="Мор: "
        :body="item.mor"
      />
      <m-list-item
        v-if="item.createDate"
        title="Дата создания: "
        :body="item.createDate"
      />
      <m-list-item
        v-if="item.branch"
        title="Филиал: "
        :body="item.branch"
      />
      <m-list-item
        v-if="item.fillDate"
        title="Дата заливки: "
        :body="item.fillDate"
      />
    </v-list>
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
