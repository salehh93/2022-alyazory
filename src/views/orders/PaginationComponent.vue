<template>
  <div
    v-if="totalNumberOfItems > itemsPerPage"
    class="divLinkRatePortfolio divPaginationProfile"
    style="justify-content: center; color: #468995; font-size: 14px"
  >
    <ul class="pagination">
      <li
        v-if="true"
        class="page-item"
        style="color: #468995; cursor: pointer; padding-left: 0.5rem"
        @click="onPreviousClick"
      >
        <i class="fas fa-chevron-right"></i>
        السابق
      </li>
      <li class="page-item" style="display: flex">
        <span
          v-for="i in pagesArray.slice(
            Math.max(0, paginationIndex - 1),
            paginationIndex + 3
          )"
          :key="i"
          style="margin: 0 0.5rem; cursor: pointer"
          @click="() => onPageClick(i)"
          >{{ i + 1 }}</span
        >
      </li>
      <li
        v-if="true"
        class="page-item"
        style="color: #468995; cursor: pointer; padding-right: 0.5rem"
        @click="onNextClick"
      >
        التالي
        <i class="fas fa-chevron-left"></i>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    totalNumberOfItems: {
      type: Number,
      default: 0,
    },
    itemsPerPage: {
      type: Number,
      default: 10,
    },
    paginationIndex: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    pagesArray() {
      if (this.totalNumberOfItems) {
        return Array.from(
          Array(Math.ceil(this.totalNumberOfItems / this.itemsPerPage)).keys()
        );
      } else {
        return [];
      }
    },
  },
  methods: {
    onPreviousClick() {
      this.$emit("previousPage");
    },
    onNextClick() {
      this.$emit("nextPage");
    },
    onPageClick(page) {
      this.$emit("pageClick", page);
    },
  },
};
</script>
<style></style>
