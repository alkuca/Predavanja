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
                            <p>Basic User</p>
                        </div>
                    </div>
                </div>
                <div class="section-bottom">
                    <nav>
                        <a>Lectures</a>
                        <router-link to="/topics">
                            Following Topics
                        </router-link>
                        <a class="settings-mobile-only">Settings</a>
                    </nav>
                    <button>Settings</button>
                </div>
            </div>
            <div class="section-right">
                <nav>
                    <div class="nav-container">
                        <div class="account-links">
                            <a class="upcoming-lectures" v-on:click="attendedLecturesToggle = false" v-bind:class="{linkActive: !attendedLecturesToggle}">Upcoming Lectures</a>
                            <a class="attended-lectures" v-on:click="attendedLecturesToggle = true" v-bind:class="{linkActive: attendedLecturesToggle}">Attended Lectures</a>
                            <a class="disabled">My Lectures</a>
                            <div class="underline"  v-bind:class="{attendedLectures: attendedLecturesToggle}" />
                        </div>
                    </div>
                </nav>
                <div class="content">
                    <div class="upcoming-lectures-container" v-if="!attendedLecturesToggle">
                        <UpcomingLecture/>
                        <UpcomingLecture/>
                        <UpcomingLecture/>
                        <UpcomingLecture/>
                    </div>
                    <div class="attended-lectures-container" v-if="attendedLecturesToggle">
                        <AttendedLecture/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from "./Navbar";
    import UpcomingLecture from "./UpcomingLecture";
    import AttendedLecture from "./AttendedLecture";
    export default {
        name: "Account",
        components: {AttendedLecture, UpcomingLecture, Navbar},
        data(){
            return{
                attendedLecturesToggle: false
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
    }
    .lecturer-image-name img{
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
        height:calc(100% - 120px);
        position: absolute;
        top:90px;
        right:55px;
        border-radius: 5px;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.16);
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
    .nav-container{
        padding: 0 20px;
        position: relative;
        z-index: 2;
        width: 100%;
        display: flex;
        justify-content: space-between;
        background: white;
        border-radius: 5px 5px 0 0;
    }
    .section-right nav{
        display: flex;
        height:55px;
        border-bottom:1px solid rgba(0, 0, 0, 0.15);
        background: white;
        border-radius: 5px 5px 0 0;
    }
    .account-links{
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
    }
    .account-links a {
        font-weight: bold;
        font-size:15px;
        text-decoration: none;
        padding: 17px 10px;
        margin: 0 30px;
        cursor: pointer;
        color: #676767;
    }
    .account-links p {
        font-weight: bold;
        font-size:16px;
        text-decoration: none;
        color: #676767;
    }
    .underline{
        position: absolute;
        height:2px;
        background: #46497E;
        bottom:-1px;
        width:161px;
        left:30px;
        transition: 0.2s;
        border-radius: 10px 10px 0 0;
    }
    .disabled{
        color: #c4c4c4 !important;
        cursor: default !important;
    }
    .content{
        padding: 10px 55px;
    }
    .attended-lectures:hover ~ .underline{
        left:246px;
        width:161px;
        transition: 0.2s;
    }
    .upcoming-lectures:hover ~ .underline{
        width:161px;
        left:30px;
        transition: 0.2s;
    }
    .attendedLectures{
        left:246px;
        width:161px;
    }
    .linkActive{
        color:#46497E !important;
    }
    .settings-mobile-only{
        display: none;
    }

    @media screen and (max-width: 1200px) {
        .content{
            padding: 10px 25px;
        }
        .section-left{
            width:200px;
        }
        .section-right{
            width:calc(100% - 335px);
        }
        .section-bottom{
            width:200px;
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
        .attended-lectures:hover ~ .underline{
            left:184px;
            width:141px;
        }
        .upcoming-lectures:hover ~ .underline{
            width:141px;
            left:15px;
        }
        .underline{
            width:141px;
            left:15px;
        }
        .attendedLectures{
            left:184px;
            width:141px;
        }
    }
    @media screen and (max-width: 880px) {
        .content{
            padding: 10px 20px;
        }
        .section-left{
            width:130px;
        }
        .section-right{
            width:calc(100% - 260px);
        }
        .section-bottom{
            width:130px;
            height:240px;
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
        .account-links a{
            font-size: 12px;
            margin: 0 10px;
        }
        .nav-container{
            padding: 0 8px;
        }
        .attended-lectures:hover ~ .underline{
            left:162px;
            width:126px;
        }
        .upcoming-lectures:hover ~ .underline{
            width:126px;
            left:15px;
        }
        .underline{
            width:126px;
            left:15px;
        }
        .attendedLectures{
            left:162px;
            width:126px;
        }
    }
    @media screen and (max-width: 700px) {
        .settings-mobile-only{
            display: initial;
        }
        .section-left-container{
            display: none;
        }
        .section-right{
            width:initial;
            position: initial;
            margin:20px 50px 25px 50px;
        }
        .section-bottom{
            width:initial;
            height: auto;
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
        .account-links a{
            font-size: 14px;
            margin: 0 10px;
        }
        .account-links{
            width: 100%;
            justify-content: center;
        }
        .nav-container{
            padding:0;
            width: 100%;
        }
        .underline{
            display: none;
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
        .account-links a{
            font-size: 12px;
            margin: 0;
            padding: 17px 0;
        }
        .account-links{
            justify-content: space-around;
        }
        .content{
            padding:2px 10px;
        }
    }
</style>