<template>
    <div class="register-page">
        <nav>
            <div class="top-left-title">
              <router-link to="/">
                <img src="../assets/logoLecturityWhite.svg" class="nav-logo" alt="navbar logo"/>
              </router-link>
            </div>
            <div class="top-right-button">
                <router-link to="/login">
                    <button>Login</button>
                </router-link>
            </div>
        </nav>
        <div class="register-form-container">
            <div class="logo-container">
                <img src="../assets/LecturityLogoBlue.svg" alt="logo"/>
            </div>
            <div class="register-form">
                <form v-on:submit.prevent="register()">
                    <div class="form-input">
                        <input id="firstName" type="text" name="firstName" v-model="input.firstName" placeholder="First Name" />
                    </div>
                    <div class="form-input">
                        <input id="secondName" type="text" name="secondName" v-model="input.secondName" placeholder="Second Name" />
                    </div>
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
                    <button v-if="!loading" type="submit" class="register-button">Register</button>
                    <button v-if="loading" class="register-button">
                      <img class="login-loader" v-if="loading" src="../assets/buttonLoader.gif" alt="loader"/>
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import firebase from 'firebase';

    export default {
        name: "Register",
        data() {
            return {
                input: {
                    firstName:"",
                    secondName:"",
                    username:"",
                    email: "",
                    password: "",
                    password2:""
                },
              loading: false
            }
        },
        methods: {
            register() {
              this.loading = true;
              if(this.input.password !== this.input.password2){
                alert("passwords dont match")
              }else{
                firebase.auth().createUserWithEmailAndPassword(this.input.email, this.input.password)
                    .then(user => {
                          //create user profile with additional data in user collection
                          firebase.firestore().collection("users").doc(user.user.uid).set({
                            firstName: this.input.firstName,
                            secondName: this.input.secondName,
                            username: this.input.username,
                            following_lectures:[],
                            is_lecturer:false,
                            lectures_lectured:[],
                            rating:0,
                            subscribed_topics:[],
                            upcoming_lectures:[],
                            attended_lectures:[],
                            author_of:[],
                            rewards_collected:[],
                          })
                          this.$router.push('home')
                        },
                        err => {
                          console.log(err.message);
                          this.loading = false;
                        });
              }
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
        margin:25px 0;
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
        margin:5px 0 30px 0;
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
    .nav-logo{
      width: 180px;
      margin: 20px 0;
    }
    .form-input input{
        width:100%;
        height:20px;
        border:0;
        outline:0;
        border-bottom: 1px solid #ABABAB;
        text-indent: 4px;
        padding-bottom:4px;
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
    .login-loader{
      width:100px;
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