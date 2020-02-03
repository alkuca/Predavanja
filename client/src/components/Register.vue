<template>
    <div class="register-page">
        <div class="top-left-title">
            <h1>Predavanja</h1>
        </div>
        <div class="top-right-button">
            <router-link to="/login">
                <button>Login</button>
            </router-link>
        </div>
        <div class="register-form-container">
            <div class="logo-container">
                <img src="../assets/logo.svg" alt="logo"/>
            </div>
            <div class="register-form">
                <form v-on:submit.prevent="register()">
                    <div class="form-input">
                        <input id="username" type="text" name="username" v-model="input.username" placeholder="Username" />
                    </div>
                    <div class="form-input">
                        <input id="email" type="email" name="email" v-model="input.email" placeholder="Email" />
                    </div>
                    <div class="form-input">
                        <input id="password" type="password" name="password" v-model="input.password" placeholder="Password" />
                    </div>
                    <div class="form-input">
                        <input id="password2" type="password" name="password2" v-model="input.password2" placeholder="Repeat Password" />
                    </div>
                    <router-link to="/login"><button class="register-button" type="submit">Register</button></router-link>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data() {
            return {
                input: {
                    username:"",
                    email: "",
                    password: "",
                    password2:""
                }
            }
        },
        methods: {
            register() {
                console.log(this.input.email);
                console.log(this.input.username);
                console.log(this.input.password);
                console.log(this.input.password2);
            }
        }
    }
</script>

<style scoped>
    .register-page{
        width:100%;
        height:100vh;
        background:#2E34CC;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .register-form-container{
        width:375px;
        height:450px;
        background:white;
        border-radius:5px;
        box-shadow: 0 0 11px rgba(0, 0, 0, 0.40);
        position:relative;
    }
    .logo-container{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        height: 27%;
    }
    .logo-container img{
        width:200px;
    }
    .register-form{
        height: 70%;
        width:100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .form-input{
        margin:0 0 35px 0;
    }
    .register-button{
        margin:20px 0 25px 0;
        height:35px;
        background:#2E34CC;
        color:white;
        font-weight: bold;
        width:100%;
        border:0;
        border-radius: 3px;
        cursor: pointer;
    }
    .register-button a{
        text-decoration: none;
        color:white;
    }
    .register-form form{
        width:70%
    }
    .form-input input{
        width:100%;
        height:20px;
        border:0;
        outline:0;
        border-bottom: 1px solid black;
        text-indent: 4px;
        padding-bottom:2px;
    }
    .top-left-title{
        position: absolute;
        top:5px;
        left:35px;
    }
    .top-left-title h1{
        font-size: 26px;
        color:white;
        font-weight: bold;
    }
    .top-right-button button{
        border:3px solid white;
        background:transparent;
        color:white;
        margin:18px 0 18px 0;
        width:105px;
        height:36px;
        border-radius:2px;
        font-weight: bold;
        font-size:15px;
        cursor: pointer;
    }
    .top-right-button{
        position: absolute;
        top:5px;
        right:35px;
    }
</style>