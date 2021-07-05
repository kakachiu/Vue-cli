<template lang="pug">
  div
    nav(aria-label='Page navigation example')
      ul.pagination
        li.page-item(:class='{ disabled: pages.current_page === 1 }')
          a.page-link(href='#' @click.prevent='updatePage(pages.current_page - 1)') Previous
        li.page-item(v-for='item in pages.total_pages' :key='item' :class='{ active: pages.current_page === item }')
          a.page-link(href='#' @click.prevent='updatePage(item)') {{ item }}
        li.page-item(:class='{ disabled: pages.current_page === pages.total_pages }')
          a.page-link(href='#' @click.prevent='updatePage(pages.current_page + 1)') Next
</template>

<script>
export default {
  props: ["pages"],
  methods: {
    updatePage(num) {
      this.$emit("update", num);
    }
  }
};
</script>
