<template>
  <v-text-field
    v-if="type == 'text'"
    :label="label"
    :value="value"
    @input="$emit('input', $event)"
    append-icon="mdi-magnify primary--text"
    solo
    flat
    dense
    rounded
    outlined
    class="primary--text v-input--is-focused"
  ></v-text-field>
  <v-text-field
    v-else-if="type == 'auto'"
    :label="label"
    :value="value"
    @input="$emit('input', $event)"
    append-icon="mdi-arrow-down primary--text"
    solo
    flat
    dense
    rounded
    outlined
    class="primary--text v-input--is-focused"
  ></v-text-field>
  <v-text-field
    v-else-if="type == 'date'"
    :label="label"
    :value="value"
    @input="$emit('input', $event)"
    append-icon="mdi-calendar primary--text"
    solo
    flat
    dense
    rounded
    outlined
    class="primary--text v-input--is-focused"
  ></v-text-field>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false,
      validator(value) {
        if(!value) return true;
        return ['auto', 'text', 'date'].includes(value);
      }
    }
  }
}
</script>
