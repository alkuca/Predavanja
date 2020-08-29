<template>
    <div class="card-container">
        <div class="section-left">
            <div class="lecturer-info">
                <div class="lecturer-image-name">
                    <img v-if="authorImage" class="lecturer-image" :src=authorImage alt="lecturer"/>
                    <img class="star" src="../assets/star.png" alt="star"/>
                    <h1>{{ lecture.author }}</h1>
                </div>
                <div class="white-line"/>
                <div class="lecturer-details">
                    <p>Lectures lectured: {{ lecturesLectured.length }}</p>
                    <p>Rating {{ rating }}/5</p>
                </div>
            </div>
        </div>
        <div class="section-right">
            <div class="lecture-text">
                <h1>{{ lecture.title }}</h1>
                <p>{{ lecture.description }}</p>
            </div>
            <div class="date-section">
                <div class="date">
                    <p>Date: {{ lecture.date_happening | moment }}</p>
                    <p>People interested: {{ lecture.people_interested.length }}</p>
                </div>
                <router-link v-bind:to="{ name: 'lecture', params: {id: this.lecture.id}}">
                    <button>View Details</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import firebase from "firebase";

    export default {
      name: "LectureCard",
      data(){
        return{
          lecturesLectured: "0",
          rating: "0.0",
          authorImage:""
        }
      },
      props:{
          lecture:{
            type: Object
          }
      },
      filters: {
        moment: function (date) {
          return moment(date).format('MMMM Do YYYY');
        }
      },
      methods:{
        getAuthorProfile(){
          firebase.firestore().collection("users").doc(this.lecture.author_id).get()
              .then(doc => {
                this.lecturesLectured = doc.data().lectures_lectured
                this.rating = doc.data().rating;
              })
        },
        getAuthorImage(){
          firebase.storage().ref(this.lecture.author_id + '/profilePicture/profile' ).getDownloadURL().then(url => {
            this.authorImage = url;
          });
        }
      },
      created() {
        this.getAuthorProfile();
        this.getAuthorImage()
      }
    }
</script>

<style scoped>
    .card-container{
        flex: 0 calc(50% - 50px);
        background: #4A50D9;
        height:360px;
        margin: 20px 25px;
        border-radius: 5px;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.22);
        position: relative;
        display: flex;
    }
    .section-left{
        width:32%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .lecturer-info{
        width:100%;
        margin:20px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background: #2F35B5;
        height:320px;
        border-radius: 5px;
        position: relative;
    }
    .lecturer-image-name{
      display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .lecturer-image{
        margin-bottom:10px;
        max-height: 160px;
        height: auto;
        border-radius: 5px;
    }
    .lecturer-image-name h1{
        font-size:17px;
        color:white;
    }
    .white-line{
        background: #646BF2;
        height:1px;
        width:80%;
    }
    .lecturer-details{
        color:white;
        font-weight: bold;
        font-size: 15px;
        text-align: center;
        padding: 0 10px;
    }
    .section-right{
        width:68%;
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
    .date-section{
        display: flex;
        justify-content: space-between;
        margin: 10px 25px 33px 25px;
        align-items: center;
    }
    .date-section a{
        align-self: flex-end;
    }
    .date-section button{
        height:34px;
        border:none;
        background: #00c1cf;
        width:110px;
        border-radius: 3px;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.22);
        font-weight: bold;
        color:white;
        cursor:pointer;
    }
    .date-section button:hover{
        transition: 0.2s;
        opacity: 0.9;
    }
    .date p{
        color:white;
        font-weight: bold;
    }
    .star{
        position: absolute;
        top:10px;
        right:10px;
    }

    @media screen and (max-width: 1400px) {
        .lecturer-details p{
            font-size:13px;
        }
        .lecturer-image-name h1{
            font-size: 15px;
        }
        .lecturer-image {
            max-height: 125px;
        }
        .lecture-text h1 {
            font-size: 22px;
        }
        .lecture-text p {
            font-size: 14px;
        }
        .date p{
            font-size: 14px;
        }
        .card-container{
            height: 320px;
            flex: 0 calc(50% - 20px);
            margin: 10px 10px;
        }
        .lecturer-info{
            height: 280px;
        }
    }

    @media screen and (max-width: 1250px) {
        .section-left{
            width: 40%;
        }
        .lecturer-info{
            margin: 20px 15px;
        }
        .lecture-text{
            margin: 10px 13px 10px 5px;
        }
        .date-section{
            margin: 10px 13px 28px 5px;
        }
        .date-section a{
            margin-right:10px;
            margin-bottom: 5px;
        }
        .card-container{
            height: 300px;
        }
        .lecturer-info{
            height: 260px;
        }
    }

    @media screen and (max-width: 1100px) {
        .lecturer-details p{
            font-size:12px;
        }
        .lecturer-image-name h1{
            font-size: 14px;
        }
        .lecturer-image{
          max-height: 110px;
        }
        .lecture-text h1 {
            font-size: 19px;
        }
        .lecture-text p {
            font-size: 12px;
        }
        .date p{
            font-size: 12px;
        }
        .card-container{
            height: 280px;
        }
        .lecturer-info{
            height: 240px;
        }
        .date-section a button{
            height: 30px;
            width: 90px;
            border-radius: 2px;
            font-size: 12px;
        }
        .date-section a{
            margin-right: 0;
            margin-bottom: 5px;
        }
    }
    @media screen and (max-width: 900px) {
        .card-container{
            flex: 0 100%;
        }
    }
    @media screen and (max-width: 650px) {
        .card-container{
            margin: 10px 0 7px 0;
        }
    }
    @media screen and (max-width: 450px) {
        .section-left{
            width:45%;
        }
        .lecturer-info{
            margin: 15px 10px;
        }
        .lecture-text{
            margin: 10px 13px 10px 5px;
        }
        .date-section{
            flex-direction: column;
            align-items: flex-start;
        }
        .card-container{
            height: auto;
        }
        .lecturer-info{
            height: 90%;
        }
        .date-section{
            margin: 10px 13px 25px 5px;
            flex-direction: column;
            align-items: flex-start;
        }
        .date-section a{
            align-self: flex-start;
            width: 100%;
            margin-bottom: 0;
            padding-top: 3px;
        }
        .date-section a button{
            width: 100%;
        }
    }
</style>