<template> 
  <v-expansion-panel
    :disabled="onlyHeader"
  >
    <v-expansion-panel-header>
      <slot name="header"></slot>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <slot name="content"></slot>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  props: {
    onlyHeader: {
      type: Boolean,
      required: false
    }
  }
}
</script>