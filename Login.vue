<template>
    <div>
      <img class="logo" src="../assets/svs.png" />
      <h1> Login </h1>
      <div class="register">
        <input type="email" v-model="email" placeholder="Enter Email" />
        <input type="Password" v-model="Password" placeholder="Enter Password" />
        <button v-on:click="Login"> Login</button>
        <p>
          <router-link to="/SignUp"> SignUp</router-link>
         

        </p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: "Login-",
    data() {
      return {
        email: '',
        Password: '',
      };
    },
    methods: {
      async Login() {
        try {
          let result = await axios.get(
            `http://localhost:3000/users?email=${this.email}&Password=${this.Password}`
          );
          console.log("Login result:", result);
  
          if (result.status === 200 && result.data.length > 0) {
            localStorage.setItem("userinfo", JSON.stringify(result.data[0]));
            console.log("Successfully logged in!");
            this.$router.push({ name: "Home-panel" });
          } else {
            // Handle invalid credentials
            console.error("Invalid credentials");
          }
        } catch (error) {
          // Handle Axios request error
          console.error("Error during login:", error);
        }
      },
    },
  };
  </script>
  