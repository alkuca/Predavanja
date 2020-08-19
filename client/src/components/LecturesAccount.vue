<template>
    <div>
        <nav>
            <div class="nav-container">
                <div class="account-links">
                    <a class="upcoming-lectures" v-on:click="resetLectures" v-bind:class="{linkActive: upcomingLecturesToggle}">Upcoming Lectures</a>
                    <a class="attended-lectures" v-on:click="toggleAttendedLectures" v-bind:class="{linkActive: attendedLecturesToggle}">Attended Lectures</a>
                    <div class="category-menu" v-on:click="isOpen = !isOpen">
                        <p v-bind:class="{linkActiveMyLectures: finishedLecturesToggle || activeLecturesToggle}">{{dropdownText}}</p>
                        <img class="dropdown-arrow" src="../assets/nav-arrow.svg" alt="nav arrow" v-bind:class="{rotate: isOpen}" />
                        <div class="category-menu-dropdown" v-bind:class="{toggled: isOpen}">
                            <a v-on:click="toggleActiveLectures">Active</a>
                            <a v-on:click="toggleFinishedLectures">Finished</a>
                        </div>
                    </div>
                    <div class="underline" v-if="attendedLecturesToggle || upcomingLecturesToggle" v-bind:class="{attendedLectures: attendedLecturesToggle}" />
                </div>
            </div>
        </nav>
        <div class="content">
            <div class="upcoming-lectures-container" v-if="upcomingLecturesToggle">
                <UpcomingLecture v-for="upcomingLecture in upcomingLectures" :key="upcomingLecture.id" :upcomingLecture="upcomingLecture"/>
            </div>
            <div class="attended-lectures-container" v-if="attendedLecturesToggle">
                <AttendedLecture v-for="attendedLecture in attendedLectures" :key="attendedLecture.id" :attendedLecture="attendedLecture"/>
            </div>
            <div v-if="activeLecturesToggle">
                <ActiveLecture :activeLecturesToggle="activeLecturesToggle"
                                 v-for="myActiveLecture in myActiveLectures"
                                 :key="myActiveLecture.id"
                                 :myActiveLecture="myActiveLecture"/>
            </div>
            <div v-if="finishedLecturesToggle">
                <FinishedLecture :finishedLectureToggle="finishedLecturesToggle"
                                 v-for="myFinishedLecture in myFinishedLectures"
                                 :key="myFinishedLecture.id"
                                 :myFinishedLecture="myFinishedLecture"/>
            </div>
        </div>
    </div>
</template>

<script>
    import UpcomingLecture from "./UpcomingLecture";
    import AttendedLecture from "./AttendedLecture";
    import ActiveLecture from "@/components/ActiveLecture";
    import FinishedLecture from "@/components/FinishedLecture";

    export default {
        name: "AccountSectionRight",
        components: {FinishedLecture, ActiveLecture, AttendedLecture, UpcomingLecture},
        data(){
            return{
                isOpen:false,
                dropdownText:"My Lectures",
                attendedLecturesToggle: false,
                upcomingLecturesToggle:true,
                activeLecturesToggle:false,
                finishedLecturesToggle:false,
                finishedLectures:[],
                myActiveLectures:[],
                myFinishedLectures:[]
            }
        },
        methods:{
            resetLectures(){
                this.isOpen = false;
                this.attendedLecturesToggle = false;
                this.upcomingLecturesToggle = true;
                this.activeLecturesToggle = false;
                this.finishedLecturesToggle = false;
                this.dropdownText = "My Lectures";
            },
            toggleAttendedLectures(){
                this.isOpen = false;
                this.attendedLecturesToggle = true;
                this.upcomingLecturesToggle = false;
                this.activeLecturesToggle = false;
                this.finishedLecturesToggle = false;
                this.dropdownText = "My Lectures";
            },
            toggleActiveLectures(){
                this.myActiveLectures = this.myLectures.filter(x => {
                  return x.is_completed === false;
                });
                this.attendedLecturesToggle = false;
                this.upcomingLecturesToggle = false;
                this.activeLecturesToggle = true;
                this.finishedLecturesToggle = false;
                this.dropdownText = "Active";
            },
            toggleFinishedLectures(){
                this.myFinishedLectures = this.myLectures.filter(x => {
                  return x.is_completed === true;
                });
                this.attendedLecturesToggle = false;
                this.upcomingLecturesToggle = false;
                this.activeLecturesToggle = false;
                this.finishedLecturesToggle = true;
                this.dropdownText = "Finished";
            },
        },
      props: {
        upcomingLectures: {
          type: Array
        },
        attendedLectures: {
          type: Array
        },
        myLectures: {
          type: Array
        }
      },
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
    .linkActive{
        color:#46497E !important;
    }
    .linkActiveMyLectures{
        border-bottom:2px solid #6c71f3 !important;
        color:#46497E !important;
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
        padding: 20px 10px;
        margin: 0 30px;
        cursor: pointer;
        color: #676767;
        border-radius: 0;
    }
    .account-links p {
        font-weight: bold;
        font-size:15px;
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
    .category-menu{
        position: relative;
        cursor: pointer;
        padding: 2px 5px;
        margin: 0 25px;
        display: flex;
    }
    .category-menu p{
        padding: 20px 0;
    }
    .category-menu-dropdown{
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        width: calc(100% + 50px);
        left: -31px;
        box-shadow: 0 4px 14px rgba(0, 0, 0, 0.18);
        border-radius: 5px;
        top:40px;
        z-index: 1;
        transition: 0.1s;
        opacity: 0;
        visibility: hidden;
        background: white;
    }
    .category-menu-dropdown a{
        width:100%;
        padding:16px 0;
        text-align: center;
        margin:0;
        color: #676767;
        z-index: 2;
        border-bottom:1px solid rgba(59, 59, 255, 0.08);
        cursor: pointer;
    }
    .category-menu-dropdown a:hover{
        background: #E1E2FF;
    }
    .dropdown-arrow{
        transform: rotate(-90deg);
        transition: 0.1s ease-in;
        background: none;
        margin-left:12px;
        margin-top: 3px;
    }
    .rotate{
        transform: rotate(0) !important;
        transition: 0.1s ease-out;
    }
    .toggled{
        top:67px !important;
        transition: 0.1s;
        opacity: 1 !important;
        visibility: visible !important;
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
        .account-links p{
            font-size:13px;
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
        .category-menu{
            margin: 0 10px;
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
        .account-links p{
            font-size: 14px;
        }
        .category-menu{
            padding: 0;
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
            padding: 20px 0;
        }
        .account-links p{
            font-size: 12px;
        }
        .account-links{
            justify-content: space-around;
        }
        .content{
            padding:2px 10px;
        }
        .category-menu-dropdown{
            width: calc(100% + 35px);
            left: -25px;
        }
        .category-menu{
            margin: 0;
        }
        .toggled{
            top:61px !important;
        }
    }
</style>