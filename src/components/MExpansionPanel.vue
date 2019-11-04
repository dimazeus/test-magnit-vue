<template>
  <v-expansion-panel
   :class="{'v-expansion-panel__hide-icon': onlyHeader}"
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
<style scoped>
.v-expansion-panel {
  margin-top: 16px;
  border: 2px solid var(--v-primary-base)
}
.v-expansion-panel::before {
  bottom: auto;
}
.v-expansion-panel__hide-icon >>>
.v-expansion-panel-header__icon {
  display: none;
}
.v-expansion-panel-header {
  padding-top: 2px;
  padding-left: 2px;
  padding-bottom: 2px;
}
.v-expansion-panel-content >>> .v-expansion-panel-content__wrap
{
  padding-top: 2px;
  padding-left: 2px;
  padding-bottom: 2px;
}
.v-expansion-panel-content >>> .v-list
{
  padding-top: 0;
}
</style>
