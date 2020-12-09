<template>
    <div class="vue-tempalte">
        <form>
            <h3>Sign Up</h3>
            <div class="form-group">
                <input type="text" v-model="doctorData.fullName" placeholder="Full name" class="form-control form-control-lg"/>
            </div>
            <div class="form-group">
                <input type="text" v-model="doctorData.phone" placeholder="Phone" class="form-control form-control-lg" />
            </div>
            <div class="form-group">
                <input type="text" v-model="doctorData.section" placeholder="Section" class="form-control form-control-lg" />
            </div>
            <div class="form-group">
                <input type="text" v-model="doctorData.login" placeholder="Login" class="form-control form-control-lg" />
            </div>
            <div class="form-group">
                <input type="password" v-model="doctorData.password" placeholder="Password" class="form-control form-control-lg" />
            </div>
            <button v-on:click="lalala(doctorData)" type="button" class="btn btn-dark btn-lg btn-block">Sign Up</button>
        </form>
    </div>
</template>

<script>
import Axios from 'axios';
    export default {
        
        data() {
            return {
                doctorData : {
                    fullName : "",
                    phone : "",
                    section : "",
                    login : "",
                    password : ""
                },
            }
        },
         methods: {
            singIn(data){
                Axios.post("http://localhost:3000/api/v1/adddoctor", data)
                    .then(response => {
                        this.articleId = response.data.id;
                        localStorage.setItem('doctor', JSON.stringify(response.data));
                        this.$router.push('/home')
                    })            
                    .catch(error => {
                        console.log(error);
                        console.log("login exsist");
                        this.errored = true;
                    })
                    .finally(() => (this.loading = false));

            },
            lalala(data) {
                console.log(data);
                var tmp = [];
                tmp.push(data)
                localStorage.setItem('doctor', JSON.stringify(data));
                console.log(JSON.parse(localStorage.getItem('doctor')));
            }
        }
         
    }
</script>