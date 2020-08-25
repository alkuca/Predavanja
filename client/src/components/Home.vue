<template>
    <div>
        <Navbar/>
        <LecturesNavbar v-on:childToParent="onChildClick"/>
        <div class="lectures-container">
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
                        this.followingLectures = this.allLectures.filter((x) => {
                          return Object.values(this.currentUserProfile.subscribed_topics).indexOf(x.category) > -1;
                        });
                        this.upcomingLectures = this.allLectures.filter((x) => {
                          return Object.values(this.currentUserProfile.upcoming_lectures).indexOf(x.id) > -1;
                        });
                        console.log(this.followingLectures)
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
    @media screen and (max-width: 1400px) {
        .lectures{
            padding: 0 40px;
            margin-top: 0;
        }
    }
    @media screen and (max-width: 650px) {
        .lectures{
            padding: 0 15px;
        }
    }
</style>