<template>
    <div class="login-page">
        <nav>
            <div class="top-left-title">
              <img src="../assets/logoLecturityWhite.svg" class="nav-logo" alt="navbar logo"/>
            </div>
            <div class="top-right-button">
                <router-link to="/register">
                    <button>Register</button>
                </router-link>
            </div>
        </nav>
        <div class="login-form-container">
            <div class="logo-container">
                <img src="../assets/LecturityLogoBlue.svg" alt="logo"/>
            </div>
            <div class="login-form">
                <form v-on:submit.prevent="login()">
                    <div class="form-input">
                        <input id="email" type="email" name="email" v-model="input.email" placeholder="Email" />
                    </div>
                    <div class="form-input">
                        <input id="password" type="password" name="password" v-model="input.password" placeholder="Password" />
                    </div>
                    <button type="submit" class="login-button">Login</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import firebase from "firebase";

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
                firebase.auth().signInWithEmailAndPassword(this.input.email, this.input.password)
                    .then(user => {
                            console.log(user)
                            this.$router.push('home')
                        },
                        err => {
                            console.log(err.message);
                        });
            }
        }
    }
</script>

<style scoped>
    .login-page{
        width:100%;
        background:#2E34CC;
        display: flex;
        flex-direction: column;
        height: 100%;
        background: url(../assets/bgs3.svg) no-repeat;
        background-size: cover;
    }
    .login-form-container{
        width:350px;
        height:370px;
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
        height: 30%;
    }
    .logo-container img{
        width:200px;
    }
    .login-form{
        width:100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .nav-logo{
      width: 180px;
      margin: 20px 0;
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
        cursor: pointer;
    }
    .login-button:hover{
        opacity: 0.9;
        transition: 0.2s;
    }
    .login-form form{
        width:70%
    }
    .top-right-button button:hover{
        background: white;
        color:#2E34CC;
        transition: 0.2s;
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
        font-weight: bold;
        font-size:15px;
        cursor: pointer;
        border-radius: 3px;
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
        .login-form form{
            width:85%
        }
        .login-form-container{
            width:85%;
            height:370px;
            margin: 20px;
        }
        .logo-container {
           height:25%;
        }
        .logo-container img{
            width:75%;
        }
        .login-button{
            height:44px;
            font-size: 17px;
        }
        .form-input input{
            font-size: 16px;
        }
        .form-input{
            margin: 0 0 50px 0;
        }
    }
</style>