<template>
    <div class="register-page">
        <nav>
            <div class="top-left-title">
                <h1>Predavanja</h1>
            </div>
            <div class="top-right-button">
                <router-link to="/login">
                    <button>Login</button>
                </router-link>
            </div>
        </nav>
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
                    <router-link to="/login" class="register-button" tag="button">Register</router-link>
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
        height:100%;
        background:#2E34CC;
        display:flex;
        flex-direction: column;
        background: url(../assets/bgs3.svg) no-repeat;
        background-size: cover;
    }
    .register-form-container{
        width:375px;
        height:450px;
        background:white;
        border-radius:5px;
        box-shadow: 0 0 11px rgba(0, 0, 0, 0.18);
        align-self: center;
        margin: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
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
    .register-button:hover{
        opacity: 0.9;
        transition: 0.2s;
    }
    .top-right-button button:hover{
        background: white;
        color:#2E34CC;
        transition: 0.2s;
    }
    .register-form form{
        width:70%
    }
    .form-input input{
        width:100%;
        height:20px;
        border:0;
        outline:0;
        border-bottom: 1px solid #ABABAB;
        text-indent: 4px;
        padding-bottom:5px;
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

    nav {
        display: flex;
        justify-content: space-between;
        padding: 0 50px;
    }

    @media screen and (max-width: 580px) {
        nav{
            padding:0 15px;
        }
        .register-form form{
            width:85%
        }
        .register-form-container{
            width:85%;
            height:450px;
            margin: 20px;
        }
        .logo-container {
            height:25%;
        }
        .logo-container img{
            width:75%;
        }
        .register-button{
            height:44px;
            font-size: 17px;
        }
        .form-input input{
            font-size: 15px;
        }
        .form-input{
            margin: 0 0 30px 0;
        }
    }

</style>