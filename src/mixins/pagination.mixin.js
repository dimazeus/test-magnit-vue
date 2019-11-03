const chunk = (arr, chunkSize = 1) => {
  const cache = [];
  const tmp = arr.slice();
  if (chunkSize <= 0) return cache;
  while (tmp.length) cache.push(tmp.splice(0, chunkSize));
  return cache;
}
export default {
  data() {
    return {
      mixinPage: +this.$route.query.page || 1,
      pageSize: 5,
      mixinPageCount: 0,
      chankedItems: [],
    }
  },
  methods: {
    mixinSetupPagination(allItems) {
      this.chankedItems = chunk(allItems, this.pageSize)
      this.mixinPageCount = this.chankedItems.length
      this.currentItems = this.chankedItems[this.mixinPage - 1] || this.chankedItems[0]
    },
    mixinPageChangeHandler(page){
      this.$router.push(`${this.$route.path}?page=${page}`)
      this.currentItems = this.chankedItems[page - 1] || this.chankedItems[0]
    }
  }
}
