<template>
    <header>
        <img class="nav-logo" src="../assets/logoWhite.svg" alt="navbar logo"/>
        <nav>
            <ul class="navbar-links">
                <li><a>Home</a></li>
                <li><a>My Lectures</a></li>
            </ul>
            <div class="profile-menu" v-on:click="isOpen = !isOpen">
                <div class="profile-menu-image-container">
                    <img src="../assets/profileImage.png" alt="profile image"/>
                </div>
                <img class="dropdown-arrow" src="../assets/navbarArrow.svg" alt="navbar arrow" v-bind:class="{rotate: isOpen}" />
            </div>
            <div class="profile-menu-dropdown" v-bind:class="{toggled: isOpen}">
                <div class="dropdown-section-one">
                    <img src="../assets/profileImage.png" alt="profile image"/>
                    <div class="user-details">
                        <p class="name">John Doe</p>
                        <p class="username">username</p>
                        <p class="user-type">Basic User</p>
                    </div>
                </div>
                <div class="dropdown-section-two">
                    <div class="dropdown-link">
                        <img src="../assets/settings.svg" alt="settings icon"/>
                        <p>Account</p>
                    </div>
                    <div class="line"/>
                    <div class="dropdown-link">
                        <img src="../assets/logout.svg" alt="logout icon"/>
                        <p>Log out</p>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: "Navbar",
        data(){
            return{
                isOpen:false
            }
        }
    }
</script>

<style scoped>
     *{
         box-sizing: border-box;
         margin:0;
         padding:0;
         background:#2F35B5;
     }
    li, a {
        font-weight: bold;
        font-size:16px;
        color:white;
        text-decoration: none;
    }
    header{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 0 50px;
        height: 60px;
    }
    nav{
        display: flex;
        align-items: center;
        position: relative;
    }
    .nav-logo{
        width:150px;
        cursor: pointer;
        margin-right:auto;
    }
    .navbar-links{
        list-style: none;
    }
    .navbar-links li{
       display: inline-block;
       padding:0 20px;
    }
    .navbar-links li a{

    }
    .profile-menu{
        height: 60px;
        margin-left:30px;
        display: flex;
        cursor: pointer;
    }
    .profile-menu-image-container{
        width: 60px;
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
    }
     .profile-menu-image-container img{
         position: absolute;
         height:70%;
         border-radius: 50%;
     }
    .profile-menu-dropdown{
        width:330px;
        background: blue;
        height:250px;
        position: absolute;
        top:-270px;
        z-index: -1;
        transition: 0.2s ease-in;
        opacity: 0;
    }
     .dropdown-section-one{
        padding:25px 30px;
         display: flex;
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
    }
     .dropdown-link{
         display: flex;
         align-items: center;
         cursor: pointer;
     }
     .dropdown-link img{
         width:24px;
     }
    .dropdown-link p{
        color:white;
        font-weight: bold;
        margin-left: 15px;
    }
    .line{
        width:100%;
        height:1px;
        background: #5e77d9;
        margin: 10px 0 12px 0;
    }
    .toggled{
        top:60px !important;
        transition: 0.2s ease-out;
        opacity: 1 !important;
    }
    .dropdown-arrow{
        transform: rotate(0);
        transition: 0.2s ease-in;
        background: none;
    }
    .rotate{
        transform: rotate(90deg) !important;
        transition: 0.2s ease-out;
    }
</style>