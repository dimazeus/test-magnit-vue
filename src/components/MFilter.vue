<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col>
          <template v-for="(f, i) in localFilters">
            <m-filter-field
              v-if="i < countFiltersShow"
              :key="i"
              v-model="f.value"
              :label="f.label"
              :type="f.type"
            />
          </template>
          <div class="text-center">
            <v-btn text small v-if="countFiltersDefault < countFilters" @click="toggleFilters">
              <template v-if="countFiltersShow < countFilters">
                Еще
                <v-icon right>mdi-arrow-down</v-icon>
              </template>
              <template v-else>
                Скрыть
                <v-icon right>mdi-arrow-up</v-icon>
              </template>
            </v-btn>
          </div>
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
      localFilters: [],
      countFiltersDefault: 3,
      countFiltersShow: 3,
      countFilters: 0
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
    },
    toggleFilters() {
      if(this.countFiltersShow < this.countFilters){
        this.countFiltersShow = this.countFilters
      } else {
        this.countFiltersShow = this.countFiltersDefault
        window.scrollTo(0,0);
      }
    }
  },
  mounted() {
    this.localFilters = this.filters.map((n) => (Object.assign({}, n, {value: ""})))
    this.countFilters = this.localFilters.length
  },
  components: {
    MFilterField
  }
}
</script>

<style>

</style>
