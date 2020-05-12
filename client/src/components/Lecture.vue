<template>
    <div>
        <Navbar/>
        <div class="lecture-container">
            <div class="lecture-inner-container">
                <div class="section-top">
                    <div class="top-left">
                        <div class="lecturer-info">
                            <div class="lecturer-image-name">
                                <img class="lecturer-image" src="../assets/teacher.png" alt="lecturer"/>
                                <h1>Adam Smith</h1>
                            </div>
                            <div class="white-line"/>
                            <div class="lecturer-details">
                                <p>Lectures lectured: 8</p>
                                <p>Rating 4.3/5</p>
                            </div>
                        </div>
                    </div>
                    <div class="top-right">
                        <div class="lecture-text">
                            <h1>E-commerce Marketing</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut dolor purus.Lorem ipsum dolor sit amet consectetur adipiscing.</p>
                        </div>
                        <div class="date-countdown">
                            <div>
                                <h1>98h 32min 33sec until lecture starts</h1>
                                <p>12 people are coming</p>
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
                                <button v-if="detailsToggle || notesToggle" class="interested-button">Interested</button>
                                <button v-if="commentsToggle" class="interested-button">Add Comment</button>
                                <button v-if="reviewsToggle" class="interested-button">Add Review</button>
                            </div>
                        </nav>
                        <div class="section-bottom-content">
                            <transition name="fade">
                                <div v-if="detailsToggle" class="section-bottom-container">
                                    <p>Date: 18.05.2020</p>
                                    <p>Time: 18:00</p>
                                    <p>Duration: 120 min</p>
                                    <p>Location: 372 Rose Street</p>
                                    <p>City: Pula</p>
                                    <p>Additional instructions: First door on the right</p>
                                    <div class="interested-button-mobile">
                                        <button>Interested</button>
                                    </div>
                                </div>
                            </transition>
                            <transition name="fade">
                                <div v-if="notesToggle" class="section-bottom-container">
                                    <LectureNote/>
                                </div>
                            </transition>
                            <transition name="fade">
                                <div v-if="commentsToggle" class="section-bottom-container">
                                    <LectureComment/>
                                    <LectureComment/>
                                    <LectureComment/>
                                    <div class="interested-button-mobile">
                                        <button>Add Comment</button>
                                    </div>
                                </div>
                            </transition>
                            <transition name="fade">
                                <div v-if="reviewsToggle" class="section-bottom-container">
                                    <LectureReview/>
                                    <div class="interested-button-mobile">
                                        <button>Add Review</button>
                                    </div>
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
    export default {
        name: "Lecture",
        components: {LectureReview, LectureComment, LectureNote, Navbar},
        data(){
            return{
                detailsToggle:true,
                notesToggle:false,
                commentsToggle:false,
                reviewsToggle:false
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
        width:100%;
    }
    .lecturer-image-name h1{
        font-size:17px;
        color:white;
        margin: 13px;
    }
    .lecturer-details p{
        margin: 13px 7px;
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
        font-size: 22px;
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
        align-self: center;
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

    @media screen and (max-width: 1600px) {
        .section-bottom-content{
            min-height:initial;
        }
    }

    @media screen and (max-width: 1400px) {
        .lecture-text h1{
            font-size: 20px;
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
            width:53%;
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

    }
    @media screen and (max-width: 1100px) {
        .lecturer-image-name img{
            width:75%;
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
            height: 95%;
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
        .lecturer-image-name img{
            width:60%;
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
            padding: 20px 30px;
        }
        .section-bottom-inner-container {
            margin-bottom: 10px;
        }
        .interested-button-mobile{
            display: initial;
        }
    }
</style>