<template>
    <div id="list">
        <h1>Product List</h1>
        <table :data="products">
            <thead>
                <th>Product Name</th>
                <th>Brand</th>
                <th>Type</th>
                <th>Price (USD)</th>
                <th>Rating</th>
                <th>Image</th>
            </thead>
                <tr v-for='product in products' :key='product.id'>
                    <td><router-link :to="{name: 'Product', params: {id: product.id}}">{{product.name}}</router-link></td>
                    <td>{{product.brand}}</td>
                    <td>{{product.product_type}}</td>
                    <td>${{product.price}}</td>
                    <td>{{product.rating}}</td>
                    <td><img :src="product.image_link" alt="Image"></td>
                </tr>
        </table>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    name: 'ProductList',
    data() {
        return {
            searchBar: ''
        }
    },
    computed: {
        ...mapGetters(['display_search']),
        products() {
            if(this.display_search){
                this.searchBar = this.$store.getters.get_search;
                console.log(this.$store.getters.get_search);
                return this.$store.state.products.filter((product) =>{
                    return this.searchBar.toLowerCase().split(' ').every(x => product.name.toLowerCase().includes(x))
                })
            }
            else{
                return this.$store.state.products
            }
        }
    },
    mounted() {
        this.$store.dispatch("getProducts");
    }
}
</script>

<style scoped>
    #list {
          box-shadow: 5px 10px;
          border-radius: 25px;
          border: 2px black;
          padding: 20px;
    }
</style>