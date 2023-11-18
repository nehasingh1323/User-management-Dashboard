<template>
    <div>
        <Header></Header>
        <h1> Hello user, welcome to the Add page</h1>
        <form class="Add">
            <input type ="text" name ="name" placeholder="Enter username" v-model="Add.name"/>
            <input type ="text" name="email" placeholder="Enter email"  v-model="Add.email" />
            <input type ="text" name ="contact" placeholder="Enter contact"  v-model="Add.contact"/>
            <button type="button" v-on:click="Adddetails"> Add userdetails</button>
           
        </form>
    </div>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios';

export default {
    name: "Add-panel",
    components: {
        Header
    },
    data()
    {
        return{
            Add:{
                name:'',
                email:'',
                contact:'',
            }
        }
    },
    methods:{
        Adddetails()
        {
            console.warn(this.Add)
            const result= axios.post("http://localhost:3000/Add",{
                name:this.Add.name,
                email: this.Add.email,
                contact:this.Add.contact,

            });
            if(result.status==201)
            {
                this.$route.push({ name: "Home"}); 
            }
            console.warn("result",result)
        }

    },
    mounted() {
        let user = localStorage.getItem('userinfo');
        if (user) {//here (!user)
            this.$router.push({ name: "SignUp" })
        }
    }
}
</script>
