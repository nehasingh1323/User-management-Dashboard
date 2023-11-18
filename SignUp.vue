<template>
    <img class="logo" src="../assets/svs.png" />
    <h1> SignUp </h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name" />
        <input type="email"  v-model="email" placeholder="Enter Email" />
        <input type="number"  v-model="number" placeholder="Enter phone number" />
        <input type="Password"  v-model="Password" placeholder="Enter Password">
        <button v-on:click="SignUp"> SignUp</button>
        <p>
            <router-link to="/Login"> Login</router-link>
        </p>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'SignUp',
    data()
     {
        return {
            name: "",
            email: "",
            number: "",
            Password: ""
        };
    },
    
    methods: {
        async SignUp() {
            // console.warn("SignUp", this.name,this.email,this.number,this.Password)
            let result = await axios.post('http://localhost:3000/users', {
                name: this.name,
                email: this.email,
                number: this.number,
                Password: this.Password
            });
            console.warn(result);
            if (result.status == 201) {
                // alert("Signup sucessfully");
                localStorage.setItem("userinfo", JSON.stringify(result.data));
                this.$router.push({ name: "Home-panel" });
            }
        }
    },

    mounted() {
        let user = localStorage.getItem('userinfo');
        if (user) {
            this.$router.push({ name: 'Home-panel' });
        }
    },

}

</script>

<style>
.logo {
    width: 100px
}
.register input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;


}

.register button{
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color: #fff;
    cursor: pointer;


}

</style>
