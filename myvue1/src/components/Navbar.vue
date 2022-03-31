<template>
    <div class="topnav">
        <h1>Product Finder</h1>
        <a href="/">Home</a>
        <input type="text" placeholder="Search" v-model.trim="searchText" v-on:input="search()" ref="searchText">
    </div>
</template>

<script>
export default {
    name:"Navbar",
    data: () => ({
            searchText: ''
    }),
    methods: {
        search() {
            setTimeout(() =>
            this.$store.commit("set_text_search", this.searchText), 500);
            setTimeout(() =>
                this.$store.commit("set_display_search", true), 2000);
        }
    }
}
</script>

<style scoped>
    .topnav {
        overflow: hidden;
    }
    .topnav a {
        float: center;
        display: block;
        color: black;
        text-align: center;
        padding: 12px 14px;
    }
</style>