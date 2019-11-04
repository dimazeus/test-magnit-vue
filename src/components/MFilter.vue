<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col>
          <m-filter-field
            v-for="(f, i) in localFilters"
            :key="i"
            v-model="f.value"
            :label="f.label"
            :type="f.type"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import MFilterField from "@/components/MFilterField"
export default {
  props: {
    filters: {
      type: Array,
      required: true
    },
    value: {
      type: Array,
      required: true
    },
    allItems: {
      type: Array,
      required: true
    }
  },
  data() {
    return{
      localFilters: []
    }
  },
  watch: {
    localFilters: {
      handler(val) {
        this.applyFilters(val, this.allItems)
      },
      deep: true
    },
    allItems(val) {
      this.applyFilters(this.localFilters, val)
    }
  },
  methods: {
    applyFilters(filters, filteringItems) {
      this.$emit('input', filters.reduce((items, {value, equals}) => {
        return value
        ? items.filter(n => equals(n, value))
        : items;
      }, filteringItems));
    }
  },
  mounted() {
    this.localFilters = this.filters.map((n) => (Object.assign({}, n, {value: ""})))
  },
  components: {
    MFilterField
  }
}
</script>

<style>

</style>
