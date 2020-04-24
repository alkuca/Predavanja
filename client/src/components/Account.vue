<template>
    <div>
        <Navbar/>
        <div>
            <div>
                <div class="section-left-container">
                    <div class="section-left">
                        <div class="lecturer-image-name">
                            <img class="lecturer-image" src="../assets/profileImage.png" alt="lecturer"/>
                            <h1>Adam Smith</h1>
                            <div class="user-status-container" v-on:click="isOpen = !isOpen">
                                <p>Basic User</p>
                                <img class="dropdown-arrow" src="../assets/navbarArrow.svg" alt="navbar arrow" v-bind:class="{rotate: isOpen}"/>
                            </div>
                            <div class="status-dropdown" v-bind:class="{toggled: isOpen}" v-on:click="isOpen = false">
                                <a v-on:click="becomeLecturer = true">Become a Lecturer</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section-bottom">
                    <nav>
                        <a v-on:click="resetAccountPage">Lectures</a>
                        <a v-on:click="topics = true">Following Topics</a>
                        <a class="settings-mobile-only">Settings</a>
                    </nav>
                    <button>Settings</button>
                </div>
            </div>
            <div class="section-right">
                <AccountSectionRight v-if="!becomeLecturer && !topics"/>
                <BecomeLecturer v-if="becomeLecturer"/>
                <TopicSelect v-if="topics"/>
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from "./Navbar";

    import AccountSectionRight from "./AccountSectionRight"
    import BecomeLecturer from "./BecomeLecturer";
    import TopicSelect from "./TopicSelect";
    export default {
        name: "Account",
        components: {TopicSelect, BecomeLecturer, Navbar,AccountSectionRight},
        data(){
            return{
                attendedLecturesToggle: false,
                isOpen:false,
                becomeLecturer:false,
                topics:false
            }
        },
        methods:{
            resetAccountPage(){
                this.becomeLecturer = false;
                this.topics = false;
            }
        }
    }
</script>

<style scoped>
    .section-left-container{
        padding:30px 50px 0 50px;
        background: #4A50D9;
    }
    .section-left{
        width:280px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px 5px 0 0;
        background: #2F35B5;
        padding:15px 0;
    }
    .lecturer-image-name{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
    }
    .lecturer-image{
        margin-bottom:15px;
        width:100%;
        border-radius: 50%;
    }
    .lecturer-image-name h1{
        font-size:19px;
        color:white;
    }
    .lecturer-image-name p{
        margin:5px;
        color:white;
    }
    .section-right{
        background: white;
        width:calc(100% - 420px);
        min-height:calc(100% - 120px);
        position: absolute;
        top:90px;
        right:55px;
        border-radius: 5px;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.16);
        margin-bottom:20px;
    }
    .section-bottom{
        width:280px;
        height:300px;
        background: white;
        margin:20px 50px 0 50px;
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.16);
    }
    .section-bottom nav{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .section-bottom nav a {
        padding: 18px 18px;
        font-weight: bold;
        border-bottom:1px solid rgba(0, 0, 0, 0.10);
        text-decoration: none;
        color:#676767;
        cursor: pointer;
    }
    .section-bottom button{
        align-self: flex-end;
        width: 100px;
        height:34px;
        margin: auto 5px 5px 0;
        border:none;
        background:none;
        color:#0093A4;
        font-weight: bold;
        font-size:15px;
    }
    .section-right nav{
        display: flex;
        height:55px;
        border-bottom:1px solid rgba(0, 0, 0, 0.15);
        background: white;
        border-radius: 5px 5px 0 0;
    }
    .account-links p {
        font-weight: bold;
        font-size:16px;
        text-decoration: none;
        color: #676767;
    }
    .settings-mobile-only{
        display: none;
    }
    .user-status-container{
        display: flex;
    }
    .dropdown-arrow{
        margin-left:3px;
        transform: rotate(0);
        transition: 0.1s ease-in;
    }
    .user-status-container{
        cursor: pointer;
    }
    .status-dropdown{
        background: white;
        border-radius: 3px;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.20);
        position: absolute;
        bottom: -30px;
        right: -100px;
        z-index: 5;
        transition: 0.1s ease-in;
        opacity: 0;
        visibility: hidden;
    }
    .status-dropdown a{
        color:#676767;
        font-weight: bold;
        font-size: 15px;
        text-align: center;
        padding: 15px 18px;
        display: inline-block;
        text-decoration: none;
        cursor: pointer;
    }
    .rotate{
        transform: rotate(90deg) !important;
        transition: 0.1s ease-out;
    }
    .toggled{
        bottom: -52px !important;
        transition: 0.1s ease-out;
        opacity: 1 !important;
        visibility: visible !important;
    }

    @media screen and (max-width: 1370px) {
        .section-left{
            width:200px;
        }
        .section-right{
            width:calc(100% - 335px);
        }
        .section-bottom{
            width:200px;
            height: auto;
        }
        .section-bottom nav a{
            font-size: 14px;
            padding: 16px 16px;
        }
        .lecturer-image-name h1{
            font-size: 16px;
        }
        .lecturer-image-name p{
            font-size: 13px;
        }
        .lecturer-image-name{
            width:85%;
        }
        .account-links a{
            font-size: 13px;
            margin: 0 15px;
        }
    }
    @media screen and (max-width: 880px) {
        .section-left{
            width:130px;
        }
        .section-right{
            width:calc(100% - 260px);
        }
        .section-bottom{
            width:130px;
        }
        .section-bottom nav a{
            font-size: 12px;
            padding: 14px 11px;
        }
        .lecturer-image-name h1{
            font-size: 13px;
        }
        .lecturer-image-name p{
            font-size: 11px;
        }
        .lecturer-image-name{
            width:90%;
        }
    }
    @media screen and (max-width: 700px) {
        .settings-mobile-only{
            display: initial;
        }
        .section-left-container {
            padding: 15px 15px 0 15px;
        }
        .section-left{
            width: 100%;
            margin: auto;
        }
        .lecturer-image-name{
            width:40%
        }
        .lecturer-image-name h1{
            font-size: 16px;
        }
        .lecturer-image-name p{
            font-size: 14px;
        }
        .section-right{
            width:initial;
            position: initial;
            margin:20px 50px 25px 50px;
            min-height: 450px;
        }
        .section-bottom{
            width:initial;
            margin: 20px 50px 0 50px;
        }
        .section-bottom nav{
            flex-direction: row;
            justify-content: space-around;
        }
        .section-bottom button{
            display: none;
        }
        .section-bottom nav a{
            font-size: 14px;
            padding: 18px 12px;
            border-bottom:none;
        }
    }
    @media screen and (max-width: 650px) {
        .section-right{
            margin: 15px 15px 25px 15px;
        }
        .section-bottom{
            margin: 15px 15px 0 15px;
        }
    }
    @media screen and (max-width: 580px) {
        .section-bottom nav a{
            font-size: 13px;
            padding: 20px 12px;
        }
    }
</style>