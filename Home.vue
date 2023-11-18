<template>
    <div>
        <Header></Header>
        <h1 v-if="name">Hello {{ name }}, welcome to the home page</h1>
        <h1 v-else>Welcome to the home page</h1>
    </div>
    <table border="1">
        <tr>
            <td>username </td>
            <td>email </td>
            <td>contactnumber </td>
            <td>id </td>
            <td>Actions</td>
        </tr>
        <tr v-for="item in Add" :key="item.id">
            <td> {{  item.username}}</td>
            <td> {{  item.email}}</td>
            <td> {{  item.contactnumber}}</td>
            <td> {{  item.id}}</td>
            <td><router-link  :to="'/Update/'">+ item.id=""> Update</router-link> </td>
            <!-- <td> {{  item.CreationDate}}</td> -->



        </tr>
    </table>
</template>

<script>

import Header from './Header.vue'
import axios from 'axios';

export default {
    name: "Home-panel",
    data() {
        return {
            name: '',
            Add:[],
        }
    },
    components: {
    Header,

},
    async mounted() {
        let user = localStorage.getItem('userinfo');
        this.name = JSON.parse(user).name;
        if (!user) {
            this.$router.push({ name: "SignUp" });

        }
         else {
            // Redirect to login page if the user is not logged in
            this.$router.push({ name: "Login" });
        }
        let result =await axios.get('http://localhost:3000/Add');
        console.warn(result)
        this.Add=result.data
    }
}


</script>

<style>
td{
    width: 160px;
    height: 40px;
}
</style>
