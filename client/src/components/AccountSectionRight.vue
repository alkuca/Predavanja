<template>
    <div>
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
                <AttendedLecture/>
                <AttendedLecture/>
                <AttendedLecture/>
                <AttendedLecture/>
                <AttendedLecture/>
                <AttendedLecture/>
            </div>
        </div>
    </div>
</template>

<script>
    import UpcomingLecture from "./UpcomingLecture";
    import AttendedLecture from "./AttendedLecture";

    export default {
        name: "AccountSectionRight",
        components: {AttendedLecture, UpcomingLecture},
        data(){
            return{
                attendedLecturesToggle: false
            }
        }
    }
</script>

<style scoped>
    .lecturer-image-name h1{
        font-size:19px;
        color:white;
    }
    .lecturer-image-name p{
        margin:5px;
        color:white;
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
    .attendedLectures{
        left:246px;
        width:161px;
    }
    .linkActive{
        color:#46497E !important;
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
    .status-dropdown a{
        color:#676767;
        font-weight: bold;
        font-size: 15px;
        text-align: center;
        padding: 15px 18px;
        display: inline-block;
        text-decoration: none;
    }

    @media screen and (max-width: 1370px) {
        .content{
            padding: 10px 25px;
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