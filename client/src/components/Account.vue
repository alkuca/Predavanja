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
                                <a v-on:click="toggleBecomeLecturer">Become a Lecturer</a>
                                <a>Account Settings</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section-bottom">
                    <nav>
                        <a v-on:click="toggleLectures" v-bind:class="{bottomNavActive: lectures}">Lectures</a>
                        <a v-on:click="toggleTopics" v-bind:class="{bottomNavActive: topics}">Topics</a>
                        <a v-on:click="togglePublishLecture" v-bind:class="{bottomNavActive: publish}">Publish</a>
                        <a v-on:click="toggleGroups" v-bind:class="{bottomNavActive: groups}">Groups</a>
                    </nav>
                </div>
            </div>
            <div class="section-right">
                <LecturesAccount v-if="lectures"/>
                <BecomeLecturer v-if="becomeLecturer" :togglePublishLecture="this.togglePublishLecture"/>
                <SubscribedTopics v-if="topics"/>
                <PublishLecture v-if="publish"/>
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from "./Navbar";
    import LecturesAccount from "./LecturesAccount"
    import BecomeLecturer from "./BecomeLecturer";

    import PublishLecture from "./PublishLecture";
    import SubscribedTopics from "./SubscribedTopics";
    export default {
        name: "Account",
        components: {SubscribedTopics, PublishLecture, BecomeLecturer, Navbar,LecturesAccount},
        data(){
            return{
                attendedLecturesToggle: false,
                isOpen:false,
                lectures:true,
                becomeLecturer:false,
                topics:false,
                publish:false,
                groups:false
            }
        },
        methods:{
            toggleLectures(){
                this.lectures = true
                this.becomeLecturer = false;
                this.topics = false;
                this.publish = false;
                this.groups = false;
            },
            toggleTopics(){
                this.lectures = false
                this.becomeLecturer = false;
                this.publish = false;
                this.topics = true;
                this.groups = false;
            },
            togglePublishLecture(){
                this.lectures = false
                this.becomeLecturer = false;
                this.topics = false;
                this.publish = true;
                this.groups = false;
            },
            toggleBecomeLecturer(){
                this.lectures = false
                this.becomeLecturer = true;
                this.topics = false;
                this.publish = false;
                this.groups = false;
            },
            toggleGroups(){
                this.lectures = false
                this.becomeLecturer = false;
                this.topics = false;
                this.publish = false;
                this.groups = true;
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
        position: relative;
    }
    .section-bottom nav a {
        padding: 18px 18px;
        font-weight: bold;
        border-bottom:1px solid rgba(0, 0, 0, 0.10);
        text-decoration: none;
        color:#676767;
        cursor: pointer;
        border-left: 0 solid transparent;
        transition: 0.1s;
    }
    .bottomNavActive{
        background:#f8f8ff;
        border-left:5px solid #6c71f3 !important;
        border-radius:3px;
        transition: 0.2s;
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
        bottom: -60px;
        right: -100px;
        z-index: 5;
        transition: 0.1s ease-in;
        opacity: 0;
        visibility: hidden;
        width: 170px;
        text-align: center;
    }
    .status-dropdown a{
        color:#676767;
        font-weight: bold;
        font-size: 14px;
        text-align: center;
        width: 100%;
        padding: 16px 0;
        display: inline-block;
        text-decoration: none;
        cursor: pointer;
        border-bottom:1px solid rgba(0, 0, 0, 0.10);
    }
    .status-dropdown a:hover{
        background: #E1E2FF;
    }
    .rotate{
        transform: rotate(90deg) !important;
        transition: 0.1s ease-out;
    }
    .toggled{
        bottom: -100px !important;
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
        .section-bottom nav a{
            font-size: 14px;
            padding: 18px 12px;
            border-bottom: 0 solid transparent;
            transition: none;
        }
        .bottomNavActive{
            background:transparent;
            border-bottom:2px solid #6c71f3 !important;
            border-left:0 !important;
            border-radius: 0;
            transition: none;
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