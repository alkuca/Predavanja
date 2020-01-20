<template>
    <div class="login-page">
        <div class="top-left-title">
            <h1>Predavanja</h1>
        </div>
        <div class="top-right-button">
            <button>Sign Up</button>
        </div>
        <div class="login-form-container">
            <div class="logo-container">
                <img src="../assets/logo.svg" alt="logo"/>
            </div>
            <div class="login-form">
                <form v-on:submit.prevent="login()">
                    <div class="form-input">
                        <input id="email" type="email" name="email" v-model="input.email" placeholder="Email" />
                    </div>
                    <div class="form-input">
                        <input id="password" type="password" name="password" v-model="input.password" placeholder="Password" />
                    </div>
                    <button class="login-button" type="submit"><router-link to="/">Login</router-link></button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    email: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                console.log(this.input.email);
                console.log(this.input.password);
            }
        }
    }
</script>

<style scoped>
    .login-page{
        width:100%;
        height:100vh;
        background:#2E34CC;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .login-form-container{
        width:375px;
        height:390px;
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
        height: 30%;
    }
    .logo-container img{
        width:200px;
    }
    .login-form{
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
    .login-button{
        margin:20px 0 25px 0;
        height:35px;
        background:#2E34CC;
        color:white;
        font-weight: bold;
        width:100%;
        border:0;
        border-radius: 3px;
    }
    .login-button a{
        text-decoration: none;
        color:white;
    }
    .login-form form{
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
        position: absolute;
        top:5px;
        right:35px;
        border:3px solid white;
        background:transparent;
        color:white;
        margin:18px 0 18px 0;
        width:105px;
        height:36px;
        border-radius:2px;
        font-weight: bold;
        font-size:15px;
    }
</style>