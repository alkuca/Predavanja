<template>
    <div>
        <Navbar/>
        <div v-if="!loaded" class="loader-container">
          <img src="../assets/loaderWhiteBg.gif" alt="loader"/>
        </div>
        <div v-if="loaded" class="lecture-container">
            <div class="lecture-inner-container">
                <div class="section-top">
                    <div class="top-left">
                        <div class="lecturer-info">
                            <div class="lecturer-image-name">
                                <img class="lecturer-image" :src=authorImage alt="lecturer"/>
                                <h1>{{ lecture.author }}</h1>
                            </div>
                            <div class="lecturer-details">
                                <p>Lectures lectured: {{ lecturesLectured.length}}</p>
                                <p>Rating {{ rating }}/5</p>
                            </div>
                        </div>
                    </div>
                    <div class="top-right">
                        <div class="lecture-text">
                            <h1>{{  lecture.title }}</h1>
                            <p>{{  lecture.description }}</p>
                        </div>
                        <div class="date-countdown">
                            <div v-if="!lectureCompleted">
                                <h1>{{  timeCountdown }} until lecture starts</h1>
                                <p>{{ peopleInterested.length }} People are interested</p>
                            </div>
                            <div class="complete-section" v-if="lectureCompleted">
                              <h1 class="complete-text">LECTURE COMPLETED</h1>
                              <p>{{ peopleInterested.length }} People attended this lecture</p>
                              <div v-if="!rewards_collected.includes(this.$route.params.id) && attended_lectures.includes(this.$route.params.id)"
                                   class="reward-container" v-on:click="limitReward">
                                <drizzle-contract-form
                                    contractName="CollectReward"
                                    method="set"
                                    id="collectButton"
                                />
                                <span>+ 250</span>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section-bottom">
                    <div class="section-bottom-inner-container">
                        <nav>
                            <div class="nav-container">
                                <div class="lecture-links">
                                    <a v-on:click="toggleDetails" v-bind:class="{linkActive: detailsToggle}">Details</a>
                                    <a v-on:click="toggleNotes" v-bind:class="{linkActive: notesToggle}">Notes</a>
                                    <a v-on:click="toggleComments" v-bind:class="{linkActive: commentsToggle}">Comments</a>
                                    <a v-on:click="toggleReviews" v-bind:class="{linkActive: reviewsToggle}">Reviews</a>
                                </div>
                                <button v-if="!lectureCompleted" v-on:click="addToUpcoming" v-bind:class="{ disabled: upcoming_lectures.includes(this.$route.params.id) }"
                                        class="interested-button">Interested</button>
                            </div>
                        </nav>
                        <div class="section-bottom-content">
                            <transition name="fade">
                                <div v-if="detailsToggle" class="section-bottom-container">
                                    <p>Date: {{ dateHappening | moment }}</p>
                                    <p>Time: {{ timeStarting }}</p>
                                    <p>Duration: {{ duration }} minutes</p>
                                    <p>Location: {{ address }}</p>
                                    <p>City: {{ city }}</p>
                                    <p>Additional instructions: {{ additionalInstructions }}</p>
                                    <div v-if="!lectureCompleted" class="interested-button-mobile">
                                        <button v-on:click="addToUpcoming" v-bind:class="{ disabled: upcoming_lectures.includes(this.$route.params.id)}">Interested</button>
                                    </div>
                                </div>
                            </transition>
                            <transition name="fade">
                                <div v-if="notesToggle" class="section-bottom-container">
                                    <AddNote v-if="currentUserId === authorId" :notes="notes" :first-name="firstName" :second-name="secondName"/>
                                    <LectureNote v-for="note in notes" :key="note.uid" :note="note"/>
                                </div>
                            </transition>
                            <transition name="fade">
                                <div v-if="commentsToggle" class="section-bottom-container">
                                    <AddComment :comments="comments" :first-name="firstName" :second-name="secondName"/>
                                    <LectureComment v-for="comment in comments" :key="comment.uid" :comment="comment"/>
                                </div>
                            </transition>
                            <transition name="fade">
                                <div v-if="reviewsToggle" class="section-bottom-container" v-bind:class="{disabled : !lectureCompleted}">
                                    <AddReview v-if="currentUserId !== authorId" :reviews="reviews" :first-name="firstName" :second-name="secondName"/>
                                    <LectureReview v-for="review in reviews" :key="review.uid" :review="review"/>
                                </div>
                            </transition>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from "./Navbar";
    import LectureNote from "./LectureNote";
    import LectureComment from "./LectureComment";
    import LectureReview from "./LectureReview";
    import AddComment from "./AddComment";
    import AddReview from "./AddReview";
    import firebase from "firebase";
    import moment from 'moment'
    import AddNote from "@/components/AddNote";
    import { mapGetters } from 'vuex';

    export default {
        name: "Lecture",
        components: { AddNote, AddReview, AddComment, LectureReview, LectureComment, LectureNote, Navbar},
        computed: {
          ...mapGetters('drizzle',['drizzleInstance', "isDrizzleInitialized"]),
          ...mapGetters('accounts', ['activeAccount', 'activeBalance'])
        },
        data(){
            return{
              hover:false,
              detailsToggle:true,
              notesToggle:false,
              commentsToggle:false,
              reviewsToggle:false,
              upcoming_lectures:[],
              attended_lectures:[],
              rewards_collected:[],
              lecture:"",
              lecturesLectured: [],
              rating: "0.0",
              timeCountdown: "",
              dateHappening: "",
              peopleInterested: "",
              timeStarting: "",
              duration: "",
              address: "",
              city: "",
              additionalInstructions: "",
              notes:[],
              comments:[],
              reviews:[],
              firstName: "",
              secondName: "",
              lectureCompleted : false,
              loaded : false,
              authorImage:  "",
              authorId : "",
              currentUserId : "",
              value:''
            }
        },
        methods:{
            toggleDetails(){
                this.detailsToggle = true;
                this.notesToggle = false;
                this.commentsToggle = false;
                this.reviewsToggle = false;
            },
            toggleNotes(){
                this.detailsToggle = false;
                this.notesToggle = true;
                this.commentsToggle = false;
                this.reviewsToggle = false;
            },
            toggleComments(){
                this.detailsToggle = false;
                this.notesToggle = false;
                this.commentsToggle = true;
                this.reviewsToggle = false;
            },
            toggleReviews(){
                this.detailsToggle = false;
                this.notesToggle = false;
                this.commentsToggle = false;
                this.reviewsToggle = true;

            },
            calculateTime(){
              let time_now  = moment(Date.now()).format("YYYY-MM-DD HH:mm");
              let time_happening = this.dateHappening + " " + this.timeStarting;

              let ms = moment(time_happening,"YYYY-MM-DD HH:mm:ss").diff(moment(time_now,"YYYY-MM-DD HH:mm:ss"));
              let d = moment.duration(ms);
              this.timeCountdown = Math.floor(d.asHours())+ " hours and " + moment.utc(ms).format("mm") + " minutes";

              this.checkIfLectureCompleted(time_now,time_happening)
              this.checkIfUserAttendedLecture()
            },
            checkIfLectureCompleted(time_now, time_happening){
              if(time_now > time_happening){
                this.lectureCompleted = true;

                let lectureRef = firebase.firestore().collection("lectures").doc(this.$route.params.id)
                lectureRef.update({
                  is_completed: true
                });
                let userRef = firebase.firestore().collection("users").doc(this.lecture.author_id);
                return userRef.update({
                  lectures_lectured: firebase.firestore.FieldValue.arrayUnion(this.$route.params.id)
                })
              }
            },
            addToUpcoming(){
              let userRef = firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid)
              userRef.update({
                upcoming_lectures: firebase.firestore.FieldValue.arrayUnion(this.$route.params.id)
              });
              let lectureRef = firebase.firestore().collection("lectures").doc(this.$route.params.id)
              lectureRef.update({
                people_interested: firebase.firestore.FieldValue.arrayUnion(firebase.auth().currentUser.uid)
              });
              this.peopleInterested.push(firebase.auth().currentUser.uid)
              this.upcoming_lectures.push(this.$route.params.id)
            },
            checkIfUserAttendedLecture(){
              let userId = firebase.auth().currentUser.uid;
              if(this.peopleInterested.includes(userId) && this.lectureCompleted === true){
                let userRef = firebase.firestore().collection("users").doc(userId)
                userRef.update({
                  attended_lectures: firebase.firestore.FieldValue.arrayUnion(this.$route.params.id)
                });
                this.attended_lectures.push(this.$route.params.id)
              }
              this.loaded = true;
            },
            getAuthorImage(){
              firebase.storage().ref(this.lecture.author_id + '/profilePicture/profile' ).getDownloadURL().then(url => {
                this.authorImage = url;
              });
            },
            getLectureData(){
              firebase.firestore().collection("lectures").doc(this.$route.params.id).get()
                  .then(doc => {
                    this.lecture = doc.data()
                    this.dateHappening = doc.data().date_happening
                    this.duration = doc.data().duration
                    this.city = doc.data().city
                    this.address = doc.data().address
                    this.location = doc.data().location
                    this.additionalInstructions = doc.data().additional_instructions
                    this.timeStarting = doc.data().time_starting
                    this.peopleInterested = doc.data().people_interested
                    this.notes = doc.data().notes
                    this.reviews = doc.data().reviews
                    this.comments = doc.data().comments
                    this.authorId = doc.data().author_id
                    this.currentUserId = firebase.auth().currentUser.uid

                    firebase.firestore().collection("users").doc(this.lecture.author_id).get()
                        .then(doc => {
                          this.lecturesLectured = doc.data().lectures_lectured
                          this.rating = doc.data().rating;
                        })
                    this.getAuthorImage();
                    this.calculateTime();
                  })
            },
            getAuthorData(){
              firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).get()
                  .then(doc => {
                    this.upcoming_lectures = doc.data().upcoming_lectures
                    this.attendedLectures = doc.data().attended_lectures
                    this.rewards_collected = doc.data().rewards_collected
                    this.firstName = doc.data().firstName
                    this.secondName = doc.data().secondName
                  })
            },
          styleCollectButton(){
            const c = document.getElementById("collectButton")
            c.children[0].style.cssText = "font-weight:bold; color:white; background: #00c1cf;" +
                " border:0; border-radius: 3px; padding: 12px; font-size: 16px; cursor:pointer;";
            c.children[0].innerHTML = "Collect Reward"
          },
          limitReward(){
            let userRef = firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid);
            this.rewards_collected.push(this.$route.params.id)
            return userRef.update({
              rewards_collected: firebase.firestore.FieldValue.arrayUnion(this.$route.params.id)
            })
          }
        },
      filters: {
        moment: function (date) {
          return moment(date).format('MMMM Do YYYY');
        }
      },
      created() {
        this.getLectureData();
        this.getAuthorData();
      },
      updated() {
          if(this.isDrizzleInitialized && !this.rewards_collected.includes(this.$route.params.id) && this.attended_lectures.includes(this.$route.params.id)){
            this.styleCollectButton();
          }
      }
    }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
        transition: 0s;
    }
    .lecture-container{
        display: flex;
        position: relative;
        min-height:calc(100vh - 90px);
        margin:15px 0;
    }
    .lecture-inner-container{
        background: #4A50D9;
        width: 100%;
        margin:0 50px;
        height:100%;
        border-radius: 5px;
    }
    .section-top{
        width:100%;
        display: flex;
        position: relative;
    }
    .section-bottom{
        padding: 0 20px;

    }
    .top-left{
        display: flex;
        align-items: center;
        height: 313px;
        margin:20px 0;
        width:20%;
    }
    .lecturer-info{
        width:100%;
        margin:0 20px;
        display: flex;
        padding: 15px 0;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background: #2F35B5;
        border-radius: 5px;
        position: relative;
        height:90%;
    }
    .lecturer-image-name{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .lecturer-image-name img{
        margin-bottom:10px;
        width:175px;
        max-height: 175px;
    }
    .lecturer-image-name h1{
        font-size:17px;
        color:white;
        margin: 7px;
    }
    .lecturer-details p{
        margin: 13px 7px;
    }
    .lecturer-details{
        color:white;
        font-weight: bold;
        font-size: 15px;
        text-align: center;
    }
    .top-right{
        width:80%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .lecture-text{
        margin:35px 25px;
        color:white;
        font-weight: bold;
    }
    .lecture-text h1{
        font-size:28px;
    }
    .lecture-text p{
        font-size:16px;
    }
    .date-countdown{
        display: flex;
        margin: 10px 25px 33px 25px;
    }
    .date-countdown h1{
        color:white;
        font-size: 20px;
        font-weight: bold;
    }
    .date-countdown p{
        color:white;
        font-weight: bold;
        font-size:15px;
    }
    .section-bottom-inner-container{
        background: white;
        width:100%;
        border-radius: 5px;
        margin-bottom:20px;
    }
    .lecture-links a {
        font-weight: bold;
        font-size:15px;
        text-decoration: none;
        padding: 19px 10px;
        margin: 0 30px;
        cursor: pointer;
        color: #676767;
        border-bottom: 2px solid transparent;
    }
    .lecture-links p {
        font-weight: bold;
        font-size:16px;
        text-decoration: none;
        color: #676767;
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
    nav{
        display: flex;
        height:55px;
        border-bottom:1px solid rgba(0, 0, 0, 0.15);
        background: white;
        border-radius: 5px 5px 0 0;
    }
    .lecture-links{
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
    }
    .section-bottom-content{
        padding: 30px 60px;
        display: flex;
        min-height:355px;
    }
    .section-bottom-container{
        width: 100%;
    }
    .section-bottom-container p{
        font-weight: bold;
        color: #595959;
        margin: 16px 0;
    }
    .interested-button{
        background: #4A50D9;
        color:white;
        border-radius: 4px;
        border:none;
        font-weight: bold;
        font-size:14px;
        height:35px;
        width:120px;
        align-self: center;
        cursor: pointer;
    }
    .interested-button:hover{
        opacity: 0.9;
        transition: 0.2s;
    }
    .interested-button-mobile button{
        background: #4A50D9;
        color:white;
        border-radius: 4px;
        border:none;
        font-weight: bold;
        font-size:15px;
        height:35px;
        width:100%;
    }
    .interested-button-mobile{
        display: none;
    }

    .linkActive{
        border-bottom: 2px solid #46497E !important;
    }
    .bottom-info{
        display: flex;
        align-items: center;
    }
    .disabled{
      pointer-events: none;
      opacity: 0.4;
    }
    .complete-section button{
      color:white;
      background: #00cf49;
      border:0;
      padding:12px 20px;
      font-weight: bold;
      font-size: 16px;
      border-radius: 3px;
      margin-top: 5px;
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
    .reward-container{
      position: relative;
      display: flex;
    }
    .reward-container span{
      font-weight: bold;
      color: #00e4f5;
      margin: auto;
      font-size: 20px;
      pointer-events: none;
      padding-left: 5px;
    }

    @media screen and (max-width: 1600px) {
        .section-bottom-content{
            min-height:initial;
        }
    }

    @media screen and (max-width: 1400px) {
        .lecture-text h1{
            font-size: 20px;
        }
        .lecture-text{
          margin: 10px 25px;
        }
        .date-countdown{
          margin: 10px 25px 15px 25px;
        }
        .lecture-text p{
            font-size: 12px;
        }
        .lecturer-details{
            font-size: 12px;
        }
        .date-countdown h1{
            font-size: 16px;
        }
        .date-countdown p{
            font-size: 11px;
        }
        .lecturer-image-name img{
            width:100px;
            max-height: 100px;
        }
        .section-bottom-container p{
            font-size: 14px;
            margin: 14px 0;
        }
        .top-left{
            width: 270px;
            height: 212px;
        }
        .lecture-links a{
            padding:15px 0;
            font-size: 14px;
        }
        nav{
            height:48px;
        }
        .section-bottom-content{
            padding: 20px 50px;
        }
        .interested-button{
            font-size:13px;
            height:33px;
            width:95px;
        }
    }
    @media screen and (max-width: 1100px) {
        .lecturer-image-name img{
            width:125px;
            max-height: 125px;
        }
        .lecturer-image-name h1{
            font-size: 16px;
        }
        .lecturer-details p{
            font-size: 13px;
        }
        .top-left{
            height: 250px;
        }
        .lecture-text h1{
            font-size: 19px;
        }
        .lecture-text p{
            font-size: 13px;
        }
        .date-countdown h1{
            font-size: 16px;
        }
        .date-countdown p{
            font-size: 12px;
        }
        .section-bottom-container p{
            font-size: 14px;
        }
        .lecture-text {
            margin: 35px 17px;
        }
        .date-countdown {
            margin: 10px 10px 33px 10px;
        }
        .lecture-links a{
            font-size: 14px;
        }
    }
    @media screen and (max-width: 900px) {
        .interested-button button{
            height: 32px;
            width: 94px;
            font-size: 14px;
        }
        .nav-container{
            padding: 0 15px;
        }
        .lecture-text {
            margin: 35px 15px;
        }
        .lecture-links a{
            font-size: 14px;
            margin: 0 15px;
            padding: 16px 10px;
        }
        nav{
            height:48px;
        }
    }
    @media screen and (max-width: 760px) {
        .interested-button button{
            height: 30px;
            width: 84px;
            font-size: 13px;
        }
        .nav-container{
            padding: 0 15px;
        }
        .lecture-text {
            margin: 35px 15px;
        }
        .lecture-links a{
            font-size: 12px;
            margin: 0 6px;
        }
    }
    @media screen and (max-width: 650px) {
        .lecture-inner-container {
            margin: 0 15px;
        }
    }
    @media screen and (max-width: 560px) {
        .section-top{
            flex-direction: column;
        }
        .top-left{
            width: 92%;
            align-self: center;
            height: 240px;
            margin: 30px 0 10px 0;
        }
        .lecturer-info{
            height: 100%;
        }
        .top-right{
            align-self: center;
        }
        .lecture-text{
            margin: 15px 0 5px 0;
        }
        .date-countdown{
            margin: 5px 0 25px 0;
        }
        .interested-button{
            display: none;
        }
        .nav-container{
            padding: 0 5px;
            justify-content: center;
        }
        .section-bottom {
            padding: 0 10px;
        }
        .section-bottom-content {
            min-height:initial;
            padding: 20px 11px;
        }
        .section-bottom-inner-container {
            margin-bottom: 10px;
        }
        .interested-button-mobile{
            display: initial;
        }
    }
</style>