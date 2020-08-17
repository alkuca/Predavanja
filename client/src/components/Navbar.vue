<template>
    <header>
        <router-link to="/home" class="nav-logo">
            <img src="../assets/logoWhite.svg" alt="navbar logo"/>
        </router-link>
        <nav>
            <ul class="navbar-links">
                <li><router-link to="/home" class="nav-logo">Home</router-link></li>
                <li><router-link to="/account" class="nav-logo">Profile</router-link></li>
            </ul>
            <div class="profile-menu" v-on:click="isOpen = !isOpen">
                <div class="profile-menu-image-container">
                    <img src="../assets/profileImage.png" alt="profile image"/>
                    <div class="circle">
                        <span>3</span>
                    </div>
                </div>
                <img class="dropdown-arrow" src="../assets/navbarArrow.svg" alt="navbar arrow" v-bind:class="{rotate: isOpen}" />
            </div>
            <div class="profile-menu-dropdown" v-bind:class="{toggled: isOpen}">
                <div class="dropdown-section-one">
                    <img src="../assets/profileImage.png" alt="profile image"/>
                    <div class="user-details">
                        <p class="name">{{ this.currentUserProfile.firstName + " " + this.currentUserProfile.secondName }}</p>
                        <p class="username">{{ this.currentUserProfile.username }}</p>
                        <p class="user-type">Basic User</p>
                    </div>
                </div>
                <div class="dropdown-section-two">
                    <div class="dropdown-link only-mobile">
                        <router-link to="/account" class="nav-logo">Home</router-link>
                    </div>
                    <div class="dropdown-link only-mobile">
                        <router-link to="/account" class="nav-logo">Profile</router-link>
                    </div>
                    <div class="line"/>

                </div>
                <div class="dropdown-section-three">
                    <Notification/>
                    <Notification/>
                    <Notification/>
                    <div class="clear-all-container">
                      <div class="dropdown-link logout">
                        <img src="../assets/logout.svg" alt="logout icon"/>
                        <button v-on:click=logout class="nav-logo">Log Out</button>
                      </div>
                        <button>clear all</button>
                    </div>
                </div>
            </div>
        </nav>
        <div class="dark" v-if="isOpen" v-on:click="isOpen = false"/>
    </header>
</template>

<script>
    import firebase from 'firebase';
    import Notification from "./Notification";
    export default {
        name: "Navbar",
        components: {Notification},
        data(){
            return{
              isOpen: false,
              currentUserToken: "",
              currentUserProfile: ""
            }
        },
        methods: {
            logout(){
                firebase.auth().signOut().then(() => {
                    this.$router.push('login')
                })
            }
        },
        created() {
         this.currentUserToken = firebase.auth().currentUser;

          firebase.firestore().collection("users").doc(this.currentUserToken.uid).get()
              .then(
                  (docRef) => {
                    this.currentUserProfile = docRef.data();
                  })
              .catch(
                  (error) => {
                    console.log(error)
                  })
       }
    }
</script>

<style scoped>
     *{
         box-sizing: border-box;
         margin:0;
         padding:0;
     }
    li, a {
        font-weight: bold;
        color:white;
        text-decoration: none;
        outline: none;
    }
    header{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 0 50px;
        height: 60px;
        background:#2F35B5;
        position: relative;
        z-index: 3;
    }
    nav{
        display: flex;
        align-items: center;
        background:#2F35B5;
    }
    .nav-logo{
        cursor: pointer;
        margin-right:auto;
    }
     .nav-logo img{
         width:150px;
     }
    .navbar-links{
        list-style: none;
    }
    .navbar-links li{
       display: inline-block;
       padding:0 20px;
       font-size: 16px;
    }
     .navbar-links li a{
         padding: 20px 0;
     }
     .navbar-links li a:hover{
         opacity: 0.8;
     }
     .profile-menu{
         height: 60px;
         margin-left:30px;
         display: flex;
         cursor: pointer;
     }
     .profile-menu:hover{
         opacity: 0.8;
     }
    .profile-menu-image-container{
        width: 55px;
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        background:#2F35B5;
    }
     .profile-menu-image-container img{
         position: absolute;
         height:65%;
         border-radius: 50%;
     }
    .profile-menu-dropdown{
        width:314px;
        background:#2F35B5;
        position: absolute;
        top:-60px;
        z-index: -1;
        transition: 0.1s ease-in;
        opacity: 0;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.30);
        visibility: hidden;
    }
     .dropdown-section-one{
        padding:25px 30px;
         display: flex;
         background: #262899;
     }
     .dropdown-section-one img{
         width:130px;
         border-radius: 50%;
     }
    .user-details{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left:30px;
        color:white;
        width: 100%;
    }
    .name{
        font-size:17px;
        font-weight: bold;
        margin-bottom:5px;
    }
    .username{
        font-size:15px;
        margin-bottom:20px;
    }
    .user-type{
        font-size:15px;
        color:#22B200;
    }
    .dropdown-section-two{
        padding:15px 30px;
        background:#2F35B5;
    }
     .dropdown-section-three{
         padding:15px 30px;
         background:#4A50D9;
     }
     .dropdown-link{
         display: flex;
         align-items: center;
         cursor: pointer;
     }
     .dropdown-link:hover{
         opacity: 0.8;
     }
     .dropdown-link img{
         width:24px;
     }
    .dropdown-link a{
        color:white;
        font-weight: bold;
        margin-left: 15px;
    }
    .line{
        width:100%;
        height:1px;
        background: #5e77d9;
        margin: 10px 0 12px 0;
        display: none;
    }
    .toggled{
        top:60px !important;
        transition: 0.1s ease-out;
        opacity: 1 !important;
        visibility: visible !important;
    }
    .dropdown-arrow{
        transform: rotate(0);
        transition: 0.1s ease-in;
        background: none;
        align-self: center;
    }
     ::selection {
         background-color: red;
         color: blue;
     }
    .rotate{
        transform: rotate(90deg) !important;
        transition: 0.1s ease-out;
    }
    .dark{
        height: calc(100vh - 60px);
        width: 100%;
        background: #00000061;
        position: absolute;
        top: 60px;
        z-index: -5;
        left: 0;
    }
     .only-mobile{
         display: none;
     }
     .clear-all-container{
         display: flex;
         justify-content: space-between;
     }
     .clear-all-container button{
        border:0;
        background: transparent;
        font-weight: bold;
        color:#DFE0FF;
        cursor: pointer;
         outline: 0;
     }
     .circle{
         position: absolute;
         right:5px;
         top:8px;
         width:17px;
         height:17px;
         background: #00C1CF;
         border-radius: 50%;
         display: flex;
         justify-content: center;
         align-items: center;
     }
     .circle span{
        font-weight: bold;
        color:white;
         font-size: 12px;
     }

     @media screen and (max-width: 650px) {
        header{
            padding: 0 15px;
        }
         .nav-logo img{
             width:130px;
         }
         .navbar-links li{
             padding:0 15px;
         }
         .profile-menu-dropdown{
             width:85%;
             right:0;
         }
         .dropdown-link a{
             font-size: 15px;
         }
         .dropdown-section-two{
             padding: 5px 20px;
         }
         .dropdown-link{
             padding: 10px 0;
         }
         .line {
             margin: 5px 0 6px 0;
             display: inline-block;
         }
         .logout{
             margin-left: 15px;
         }
         .dropdown-link-image{
             display: none;
         }
         .only-mobile{
             display: block;
         }
         .dark{
             background: transparent;
         }
         .dropdown-section-one{
             padding: 15px 20px;
         }

     }
     @media screen and (max-width: 540px) {
         .nav-logo img{
             width:130px;
         }
         .navbar-links li{
             padding:0 10px;
             font-size: 14px;
         }
     }
     @media screen and (max-width: 500px) {
         .profile-menu {
             margin-left: 10px;
         }
     }
     @media screen and (max-width: 450px) {
         .navbar-links{
             display: none;
         }
     }
     @media screen and (max-width: 380px) {
         .dropdown-section-one img {
             width: 90px;
         }
         .user-details{
             margin-left: 15px;
         }
     }
</style>