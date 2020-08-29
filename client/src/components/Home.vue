<template>
    <div>
        <Navbar/>
        <LecturesNavbar v-on:childToParent="onChildClick"/>
        <div v-if="!loaded" class="loader-container">
          <img src="../assets/loaderWhiteBg.gif" alt="loader"/>
        </div>
        <div class="lectures-container">
          <div v-if="loaded">
            <div v-if="currentUserProfile.subscribed_topics.length === 0 && lectureNavToggle === 'following'" class="center-screen">
              <h1>Subscribe to your favorite topics to get recommended lectures</h1>
              <router-link to="/account" tag="button">Subscribe Now</router-link>
            </div>
            <div v-if="upcomingLectures.length === 0 && lectureNavToggle === 'upcoming'" class="upcoming-empty">
              <h1>Lectures you show interest in will appear here</h1>
              <img class="interested-img" src="../assets/place.png" alt="star"/>
            </div>
            <div class="lectures" v-if="lectureNavToggle === 'following'">
              <LectureCard v-for="lecture in followingLectures" :key="lecture.id" :lecture="lecture"/>
            </div>
            <div class="lectures" v-if="lectureNavToggle === 'all'">
              <LectureCard v-for="lecture in allLectures" :key="lecture.id" :lecture="lecture"/>
            </div>
            <div class="lectures" v-if="lectureNavToggle === 'upcoming'">
              <LectureCard v-for="lecture in upcomingLectures" :key="lecture.id" :lecture="lecture"/>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
    import Navbar from "./Navbar";
    import LecturesNavbar from "./LecturesNavbar";
    import LectureCard from "./LectureCard";
    import firebase from "firebase";
    export default {
        name: "Home",
        components: {LectureCard, Navbar, LecturesNavbar},
        data(){
            return{
              lectureNavToggle:"following",
              allLectures:[],
              currentUserToken: "",
              currentUserProfile: "",
              followingLectures:[],
              upcomingLectures:[],
              loaded:false
            }
        },
        methods: {
            onChildClick (value) {
                this.lectureNavToggle = value
            },
            getUserProfile(){
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
            },
            getAllLectures(){
              firebase.firestore().collection("lectures").get()
                  .then(
                      (querySnapshot) => {
                       this.allLectures = querySnapshot.docs.map(doc => {
                         const data = doc.data();
                         data.id = doc.id;
                         return data
                       });
                        this.allLectures =  this.allLectures.filter( x => {
                          return x.is_completed === false;
                        });
                        this.followingLectures = this.allLectures.filter((x) => {
                          return Object.values(this.currentUserProfile.subscribed_topics).indexOf(x.category) > -1;
                        });
                        this.upcomingLectures = this.allLectures.filter((x) => {
                          return Object.values(this.currentUserProfile.upcoming_lectures).indexOf(x.id) > -1;
                        });
                        this.loaded = true
                     })
                  .catch(
                      (error) => {
                       console.log(error)
                     })
            }
          },
      created() {
        this.getUserProfile();
        this.getAllLectures();
      }
    }
</script>

<style scoped>
    .lectures{
        margin-top:5px;
        display: flex;
        flex-wrap: wrap;
        padding:0 25px;
        position: relative;
    }
    .loader-container{
      width: 100%;
      height: 100vh;
      background: white;
      top: 60px;
      z-index: 100;
      position: fixed;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .loader-container img{
      width: 220px;
      margin-top:-60px;
    }
    .center-screen{
      margin: auto;
      top:0;
      bottom: 0;
      left:0;
      right:0;
      position: absolute;
      height:400px;
      width: 500px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding:0 20px;
    }
    .center-screen h1{
      font-size: 18px;
      text-align: center;
      line-height: 23px;
    }
    .center-screen button{
      font-size: 17px;
      margin-top:12px;
      padding: 12px 18px;
      background:#2E34CC;
      color:white;
      font-weight: bold;
      border:0;
      border-radius: 3px;
      cursor: pointer;
    }
    .center-screen button:hover{
      opacity: 0.9;
      transition: 0.2s;
    }
    .upcoming-empty{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 5%;
      margin: 0 20%;
    }
    .upcoming-empty h1{
      font-size: 21px;
      text-align: center;
    }
    .interested-img{
      border-radius: 13px;
      height: auto;
      width: 50%;
      margin-top:15px;
      box-shadow: 4px 4px 11px rgba(0, 0, 0, 0.3);
    }
    @media screen and (max-width: 1400px) {
        .lectures{
            padding: 0 40px;
            margin-top: 0;
        }
        .interested-img{
          width: 70%;
        }
    }
    @media screen and (max-width: 1050px) {
      .interested-img{
        width: 100%;
      }

    }
    @media screen and (max-width: 650px) {
        .lectures{
            padding: 0 15px;
        }
        .upcoming-empty h1{
          font-size: 17px;
          text-align: center;
        }
        .interested-img{
          width: 100%;
        }
        .upcoming-empty{
          margin: 0 30px;
        }
    }
</style>