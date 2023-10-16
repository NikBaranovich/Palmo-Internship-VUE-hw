<!-- Lesson 4 Task 9: Display a long list of items with pagination using v-for 
    and dynamically change the displayed items when the pagination buttons are clicked. -->
<template>
  <div>
    <ul>
      <li v-for="(item, index) in paginatedItems" :key="index">
        {{ item }}
      </li>
    </ul>

    <div>
      <button @click="previousPage" :disabled="currentPage === 1">Previous page</button>
      <button
        v-for="pageNumber in pages"
        :key="pageNumber"
        @click="goToPage(pageNumber)"
        :disabled="currentPage === pageNumber"
      >
        {{ pageNumber }}
      </button>
      <button @click="nextPage" :disabled="currentPage === pageCount">Next page</button>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],
      itemsPerPage: 5,
      currentPage: 1,
    };
  },
  computed: {
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      
      return this.items.slice(startIndex, endIndex);
    },
    pageCount() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    pages() {
      const pagesArray = [];
      for (let i = 1; i <= this.pageCount; i++) {
        pagesArray.push(i);
      }
      return pagesArray;
    },
  },
  methods: {
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.pageCount) {
        this.currentPage++;
      }
    },
    goToPage(pageNumber) {
      this.currentPage = pageNumber;
    },
  },
};
</script>
