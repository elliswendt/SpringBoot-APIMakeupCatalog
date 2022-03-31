<template>
    <div id="details">
        <h2>Product Details</h2>
        <form v-for='product in products' :key='product.id'>
            <div id="backImage" :style="{ 'background-image': 'url(' + product.image_link + ')'}">
            <label for="name"><b>Name:</b></label> 
            <input type="text" id="name" :value=product.name readonly/><br><br>
            <label for="brand"><b>Brand:</b></label> 
            <input type="text" id="brand" :value=product.brand readonly/><br><br>
            <label for="type"><b>Type:</b></label> 
            <input type="text" id="type" :value=product.product_type readonly/><br><br>
            <label for="price"><b>Price (in USD$):</b></label> 
            <input type="text" id="price" :value=product.price readonly/><br><br>
            <label for="rating"><b>Rating:</b></label>
            <input type="text" id="rating" :value=product.rating readonly/><br><br>
            <a :href=product.image_link ><b>Image Link:</b></a><br><br>
            <label for="description"><b>Description:</b></label> 
            <textarea id="description" :value=product.description rows="8" cols="70" readonly/><br><br>
            <b>Colors:</b><br>
            <table>
                <tr>
                    <th>Name (if present)</th>
                    <th>Hex code</th>
                    <th>See the color!</th>
                </tr>
                <tr v-for='color in product.product_colors' :key='color.color_name'>
                    <td>{{color.color_name}}</td>
                    <td>{{color.hex_value}}</td>
                    <td><input type="color" :value=color.hex_value></td>
                </tr>
            </table>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'ProductDetails',
    data() {
        return {
            id: this.$route.params.id
        }
    },
    computed: {
        products() {
            return this.$store.state.products.filter(x => x.id == this.id)
        }
    },
    mounted() {
        this.$store.dispatch("getProducts");
    }
}
</script>

<style scoped>

    #details {
        box-shadow: 5px 10px;
        border-radius: 25px;
        border: 2px black;
        padding: 20px;
    }
    #backImage {
        background-repeat: no-repeat;
        background-size: 100% 100%;
        opacity: 1;
        font: black;
    }
</style>