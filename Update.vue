<template>
    <div>
        <Header></Header>
        <h1> Hello user, welcome to the Update page</h1>
    </div>
    <form class="Add">
            <input type ="text" name ="name" placeholder="Enter username" v-model="Add.name"/>
            <input type ="text" name="email" placeholder="Enter email"  v-model="Add.email" />
            <input type ="text" name ="contact" placeholder="Enter contact"  v-model="Add.contact"/>
            <button type="button" v-on:click="Updatedetails"> Update-userdetails</button>
           
        </form>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios';

export default {
    name: "Update-panel",
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
        async Updatedetails()
        {
            console.warn(this.Add)
            const result= axios.put("http://localhost:3000/Add"+this.$route.params.id,{
                name:this.Add.name,
                email: this.Add.email,
                contact:this.Add.contact,

            });
            if(result.status==201)
            {
                this.$route.push({ name: "Home"}); 
            }
        }

    },
    async mounted() {
        let user = localStorage.getItem('userinfo');
        if (user) {//here (!user)
            this.$router.push({ name: "SignUp" })
        }
        const result=await axios.get('http://localhost:3000/Add/'+this.$route.params.id)
        // console.warn(this.$route.params.id)
        console.warn(result.data)
        this.Add =result.data
    }
}
</script>
