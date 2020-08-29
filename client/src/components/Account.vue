<template>
    <div>
        <Navbar/>
        <div>
            <div>
                <div class="section-left-container">
                    <div class="section-left">
                        <div class="lecturer-image-name">
                            <img class="lecturer-image" src="../assets/profileImage.png" alt="lecturer" id="lecturer-image"/>
                            <h1>{{ currentUserProfile.firstName + " " + currentUserProfile.secondName }}</h1>
                            <div class="user-status-container" v-on:click="isOpen = !isOpen">
                                <p>{{ currentUserProfile.is_lecturer ? "Lecturer" : "Basic User"}}</p>
                                <img class="dropdown-arrow" src="../assets/navbarArrow.svg" alt="navbar arrow" v-bind:class="{rotate: isOpen}"/>
                            </div>
                            <div class="status-dropdown" v-bind:class="{toggled: isOpen}" v-on:click="isOpen = false">
                                <a v-if="!currentUserProfile.is_lecturer" v-on:click="toggleBecomeLecturer">Become a Lecturer</a>
                                <a v-if="currentUserProfile.is_lecturer" v-on:click="toggleBecomeLecturer">Update Profile</a>
                                <a v-on:click="toggleSettings">Account Settings</a>
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
                <LecturesAccount v-if="lectures" :upcomingLectures="upcomingLectures" :attendedLectures="attendedLectures" :myLectures="myLectures"/>
                <BecomeLecturer v-if="becomeLecturer" :togglePublishLecture="togglePublishLecture" :currentUserProfile="currentUserProfile" :currentUserUid="currentUserToken.uid"/>
                <SubscribedTopics v-if="topics" :subscribedTopics="currentUserProfile.subscribed_topics"/>
                <PublishLecture v-if="publish" :currentUserProfile="currentUserProfile" :currentUserUid="currentUserToken.uid" v-on:childToParent="onChildClick"/>
                <Groups v-if="groups"/>
                <AccountSettings v-if="settings"/>
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
    import AccountSettings from "./AccountSettings";
    import Groups from "./Groups";
    import firebase from "firebase";
    export default {
        name: "Account",
        components: {Groups, AccountSettings, SubscribedTopics, PublishLecture, BecomeLecturer, Navbar,LecturesAccount},
        data(){
            return{
                attendedLecturesToggle: false,
                isOpen:false,
                lectures:true,
                becomeLecturer:false,
                topics:false,
                publish:false,
                groups:false,
                settings:false,
                currentUserToken: "",
                currentUserProfile: "",
                allLectures:[],
                attendedLectures:[],
                upcomingLectures:[],
                followingLectures:[],
                myLectures:[],
                lecturePosted:false
            }
        },
        methods:{
            toggleLectures(){
                this.lectures = true
                this.becomeLecturer = false;
                this.topics = false;
                this.publish = false;
                this.groups = false;
                this.settings = false;
            },
            toggleTopics(){
                this.lectures = false
                this.becomeLecturer = false;
                this.publish = false;
                this.topics = true;
                this.groups = false;
                this.settings = false;
            },
            togglePublishLecture(){
                this.lectures = false
                this.becomeLecturer = false;
                this.topics = false;
                this.publish = true;
                this.groups = false;
                this.settings = false;
            },
            toggleBecomeLecturer(){
                this.lectures = false
                this.becomeLecturer = true;
                this.topics = false;
                this.publish = false;
                this.groups = false;
                this.settings = false;
            },
            toggleGroups(){
                this.lectures = false
                this.becomeLecturer = false;
                this.topics = false;
                this.publish = false;
                this.groups = true;
                this.settings = false;
            },
            toggleSettings(){
                this.lectures = false
                this.becomeLecturer = false;
                this.topics = false;
                this.publish = false;
                this.groups = false;
                this.settings = true;
            },
            getUserProfile(){
              this.currentUserToken = firebase.auth().currentUser;

              firebase.firestore().collection("users").doc(this.currentUserToken.uid).get()
                  .then(
                      (docRef) => {
                        this.currentUserProfile = docRef.data();
                        if(this.currentUserProfile.subscribed_topics.length === 0){
                          this.toggleTopics();
                        }
                      })
                  .catch(
                      (error) => {
                        console.log(error)
                      })
            },
            getAllLectures(){
              firebase.firestore().collection("lectures").get()
                  .then(
                      (querySnapshot) => {
                        this.allLectures = querySnapshot.docs.map(doc => {
                          return { id: doc.id, ...doc.data() }
                        });
                        this.attendedLectures = this.allLectures.filter((x) => {
                          return Object.values(this.currentUserProfile.attended_lectures).indexOf(x.id) > -1;
                        });
                        this.upcomingLectures = this.allLectures.filter((x) => {
                          return Object.values(this.currentUserProfile.upcoming_lectures).indexOf(x.id) > -1;
                        });
                        this.myLectures = this.allLectures.filter((x) => {
                          return this.currentUserToken.uid.indexOf(x.author_id)  > -1;
                        });
                      })
                  .catch(
                      (error) => {
                        console.log(error)
                      })
            },
            getUserImage(){
              firebase.storage().ref(firebase.auth().currentUser.uid + '/profilePicture/profile' ).getDownloadURL().then(url => {
                const img = document.getElementById('lecturer-image');
                img.src = url;
              });
            },
          onChildClick() {
            this.toggleLectures()
            },
          },
      mounted(){
        this.getUserProfile();
        this.getAllLectures();
        this.getUserImage();
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
        max-width: 250px;
        max-height: 250px;
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
            top: 71px;
            min-height: calc(100% - 93px);
        }
        .section-left-container {
            padding: 10px 50px 0 50px;
        }
        .section-bottom{
            width:200px;
            height: auto;
            margin-top:12px;
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