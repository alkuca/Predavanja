<template>
    <div class="main-container">
        <div class="title">
            <div class="title-inner-container">
                <p>Publish Lecture</p>
                <span v-if="step === 1">/ Name</span>
                <span v-if="step === 2">/ Description</span>
                <span v-if="step === 3">/ Location and Time</span>
                <span v-if="step === 4">/ Instructions</span>
                <span v-if="step === 5">/ Settings</span>
            </div>
            <div class="nav-buttons">
                <button class="return-button" v-if="step !== 1 && !formSuccess" v-on:click="prevStep">
                    <img class="return-arrow" src="../assets/navbarArrow.svg" alt="navbar arrow" />
                </button>
                <button v-if="step !== totalSteps && !formSuccess" class="continue-button" v-on:click="nextStep">Next Step</button>
                <button v-if="step === totalSteps && !formSuccess" class="continue-button" v-on:click="sendForm">Publish</button>
            </div>
        </div>
        <form>
            <div v-if="step === 1">
                <div class="step-content">
                    <div class="form-input">
                        <label for="LectureName">Lecture's Name:</label>
                        <input id="LectureName" type="text" name="LectureName" v-model="newLecture.title"/>
                    </div>
                </div>
            </div>
            <div v-if="step === 2">
                <div class="step-content">
                    <div class="form-input">
                        <label for="LectureDescription">Lecture's Description:</label>
                        <textarea required class="textarea" id="LectureDescription" name="LectureDescription" v-model="newLecture.description"/>
                    </div>
                </div>
            </div>
            <div v-if="step === 3">
                <div class="step">
                    <div class="form-input form-input-left">
                        <label for="LectureCity">City:</label>
                        <input id="LectureCity" type="text" name="LectureCity" v-model="newLecture.city"/>
                    </div>
                    <div class="form-input form-input-left">
                        <label for="LectureAddress">Address:</label>
                        <input id="LectureAddress" type="text" name="LectureAddress" v-model="newLecture.address"/>
                    </div>
                    <div class="form-input form-input-left">
                      <label for="LectureDate">Date:</label>
                      <input id="LectureDate" type="date" name="LectureDate" v-model="newLecture.date_happening"/>
                    </div>
                    <div class="form-input form-input-left">
                        <label for="LectureTime">Start Time:</label>
                        <input id="LectureTime" type="time" name="LectureTime" v-model="newLecture.time_starting"/>
                    </div>
                    <div class="form-input form-input-left">
                        <label for="LectureDuration">Duration(min):</label>
                        <input id="LectureDuration" type="number" name="LectureDuration" v-model="newLecture.duration"/>
                    </div>
                </div>
            </div>
            <div v-if="step === 4">
                <div class="step-content">
                    <div class="form-input">
                        <label for="LectureAdditionalInstructions">Additional instructions:</label>
                        <textarea required class="textarea" id="LectureAdditionalInstructions" name="LectureAdditionalInstructions" v-model="newLecture.additional_instructions"/>
                    </div>
                </div>
            </div>
            <div class="step" v-if="step === 5">
                <label class="container noSelect">Public Lecture
                    <input type="checkbox" v-model="newLecture.public_lecture">
                    <span class="checkmark"></span>
                </label>
                <label class="container noSelect">Password protected
                    <input type="checkbox" v-model="newLecture.password_protected">
                    <span class="checkmark"></span>
                </label>
                <div v-if="newLecture.password_protected" class="form-input form-input-left">
                  <label for="password_protected">Password:</label>
                  <input id="password_protected" type="password" name="password_protected" v-model="newLecture.password"/>
                </div>
                <label class="container noSelect">Group specific
                  <input type="checkbox" v-model="newLecture.group_specific">
                  <span class="checkmark"></span>
                </label>
                <div v-if="newLecture.group_specific" class="select-box">
                  <select>
                    <option disabled value="">Select group</option>
                    <option>Group 1</option>
                    <option>Group 2</option>
                    <option>Group 3</option>
                  </select>
                </div>
                <label class="container noSelect">Nastavak?
                  <input type="checkbox" >
                  <span class="checkmark"></span>
                </label>
                <div class="select-box">
                    <select v-model="newLecture.category">
                      <option disabled value="">Select category</option>
                      <option>Art</option>
                      <option>Business</option>
                      <option>Economics</option>
                      <option>Education</option>
                      <option>Informatics</option>
                      <option>Photography</option>
                      <option>Psychology</option>
                      <option>Music</option>
                      <option>Chemistry</option>
                      <option>Statistics</option>
                    </select>
                </div>
            </div>
        </form>
        <div v-if="formSuccess">
            <div class="step-content">
                <h1>Congratulations</h1>
                <h1>You successfully Published a Lecture</h1>
                <router-link to="/lecture">
                    <button class="view-lecture-button" v-on:click="emitToParent">View Lecture</button>
                </router-link>
            </div>
        </div>
        <p class="steps-counter">step {{step}} of {{totalSteps}}</p>
    </div>
</template>

<script>

    import firebase from "firebase";

    export default {
        name: "PublishLecture",
        data(){
            return{
                step:1,
                totalSteps:5,
                formSuccess: false,
                newLecture:{
                  additional_instructions: "",
                  title: "",
                  address: "",
                  author: this.currentUserProfile.firstName + " " + this.currentUserProfile.secondName,
                  author_id: this.currentUserUid,
                  city:"",
                  category:"",
                  date_created: Date.now(),
                  date_happening:"",
                  description:"",
                  duration:0,
                  is_completed:false,
                  comments:[],
                  notes:[],
                  reviews:[],
                  rating:0,
                  time_starting:null,
                  public_lecture:true,
                  password_protected:false,
                  group_specific:false,
                  password:"",
                  people_interested:[]
                }
            }
        },
        props: [
          "currentUserProfile",
          "currentUserUid"
        ],
        methods:{
            nextStep(){
                this.step ++;
            },
            prevStep(){
                this.step --;
            },
            sendForm(){
              if(this.title && this.address && this.category && this.duration > 0 && this.time_starting && this.date_happening){
                this.formSuccess = true;
                this.step = 0;
                firebase.firestore().collection("lectures").add(this.newLecture)
              }else{
                alert("some fields are missing")
              }
            },
          emitToParent () {
            this.$emit('childToParent')
          },
        }
    }
</script>

<style scoped>
    .main-container{
        width:100%;
        height:100%;
    }
    .title{
        display: flex;
        height: 55px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.15);
        background: white;
        border-radius: 5px 5px 0 0;
        align-items: center;
        justify-content: space-between;
    }
    .title-inner-container{
        padding: 0 10px 0 40px;
        display: flex;
        align-items: center;
    }
    .title-inner-container p{
        font-weight: bold;
        color: #b7b7b7;
    }
    .title-inner-container span{
        color: #636363;
        font-weight: bold;
        margin-left: 5px;
    }
    .steps-counter{
        position: absolute;
        bottom:5px;
        right:23px;
        font-weight: bold;
        color:#676767;
        font-size: 13px;
    }
    .step-content{
        flex-direction: column;
        display: flex;
        align-items: center;
        height: 100%;
        padding: 150px 0 0 0;
    }
    .step-content h1{
        margin: 14px;
        font-size: 22px;
        padding: 0 10px;
        text-align: center;
    }
    .step{
        margin: 45px 40px 0 40px;
    }
    .step-1-content h1{
        margin: 14px;
        font-size: 22px;
        padding: 0 10px;
        text-align: center;
    }
    .step-1-content p{
        max-width:450px;
        text-align: center;
        line-height: 24px;
        color: #707070;
        font-weight: bold;
        margin: 13px 30px;
    }
    .nav-buttons{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .continue-button{
        width:130px;
        height:35px;
        font-size: 14px;
        border:none;
        background:#4A50D9;
        color:white;
        font-weight: bold;
        border-radius: 4px;
        margin: 0 20px 0 6px;
        outline: 0;
        cursor: pointer;
    }
    .return-button{
        height:35px;
        margin: 0 6px 0 10px;
        border:0;
        background:#eaebff;
        width:32px;
        border-radius: 4px;
        outline: 0;
        cursor: pointer;
    }
    .return-arrow{
        transform:rotate(90deg);
        transform-origin: 58% 36%;
    }
    .form-input{
        width:300px;
        display: flex;
        flex-direction: column;
        margin:26px 0;
    }
    .form-input label{
        font-weight: bold;
        color: #676767;
        text-align: center;
    }
    .form-input-left{
        align-items: flex-start !important;
    }
    .form-input-left input{
        width:100%;
    }
    .form-input input{
        margin-top:15px;
        color:#676767;
        font-size: 17px;
        font-weight: bold;
        outline:0;
        border:0;
        border-bottom: 2px solid #cccccc;
        padding: 3px;
    }
    .form-input input::placeholder{
        font-weight: bold;
        color:#b9b9b9;
        font-size: 14px;
        padding: 3px;
    }
    .form-input textarea{
        margin:20px 0;
        color:#676767;
        font-size: 17px;
        outline:0;
        resize: none;
        border:none;
        border-bottom: 2px solid #cccccc;
        padding: 5px;
        transition:0.8s;
        height:20px;
    }
    .form-input textarea:focus{
        height:100px;
        transition:0.8s;
    }
    .form-input textarea:valid{
        height:100px;
    }
    .container {
        display: block;
        position: relative;
        margin-bottom: 30px;
        padding-left: 33px;
        cursor: pointer;
        font-size: 17px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        font-weight: bold;
        color:#404040;
        max-width: 175px;
    }

    .container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }
    .noSelect {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
    }
    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 16px;
        width: 16px;
        border-radius: 4px;
        border: 2px solid #959595;
        transition: 0.1s;
    }
    .container:hover input ~ .checkmark {
        border: 2px solid #CECECE;
        transition: 0.1s;
    }
    .container input:checked ~ .checkmark {
        background-color: #4a50d9;
        border: 2px solid #4a50d9;
        transition:0.2s;
    }
    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }
    .container input:checked ~ .checkmark:after {
        display: block;
    }
    .container .checkmark:after {
        left: 5px;
        top: 1px;
        width: 3px;
        height: 8px;
        border: solid white;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
    }

    .select-box{
        margin: 10px 0 30px 0;
    }
    .default-label{
      font-weight: bold;
      color: #676767;
      font-size: 17px;
    }
    .select-box select {
        color: #404040;
        padding: 10px 10px 10px 0;
        width: 200px;
        border: none;
        font-size: 16px;
        font-weight: bold;
        outline: none;
        border-bottom: 1px solid black;
    }

    .select-box select option {
        padding: 30px;
    }
    .view-lecture-button{
        margin-top:15px;
        width:130px;
        height:35px;
        font-size:14px;
        border:none;
        background:#4A50D9;
        color:white;
        font-weight: bold;
        border-radius: 4px;
        outline: 0;
        cursor: pointer;
    }
    .disabled-checkbox{
      opacity: 0.4;
    }

    @media screen and (max-width: 1400px) {
        .form-input{
            margin:13px 0;
        }
        .form-input label{
            font-size: 13px;
        }
        .form-input input{
            margin:12px 0;
            font-size: 13px;
        }
        .form-input input::placeholder{
            font-size: 13px;
        }
        .form-input textarea{
            margin:5px 0;
            font-size: 13px;
        }
        .step-content h1{
            margin: 8px;
            font-size: 19px;
        }
    }
    @media screen and (max-width: 950px) {
        .form-input{
            margin:12px 0;
        }
        .form-input label{
            font-size: 12px;
        }
        .form-input input{
            font-size: 12px;
        }
        .form-input input::placeholder{
            font-size: 12px;
        }
        .form-input textarea{
            font-size: 12px;
            margin:4px 0;
        }
        .title-inner-container{
            padding:0 10px 0 15px;
        }
        .title-inner-container p{
            font-size: 13px;
        }
        .title-inner-container span{
            font-size: 13px;
        }
        .continue-button{
            width:100px;
            font-size: 13px;
            margin: 0 20px 0 6px;
        }
        .step-content h1{
            margin: 5px;
            font-size: 16px;
        }
    }
    @media screen and (max-width: 750px) {
        .title-inner-container{
            padding:0 10px 0 10px;
        }
        .title-inner-container p{
            display: none;
        }
        .title-inner-container span{
            font-size: 12px;
        }
        .continue-button{
            width:90px;
            font-size: 13px;
            margin: 0 15px 0 0;
        }
    }
    @media screen and (max-width: 700px) {
        .steps-counter{
            display: none;
        }
        .step-content{
            margin:40px 25px 0 25px;
        }
        .form-input{
            margin:20px 0;
        }
        .form-input label{
            font-size: 14px;
        }
        .form-input input{
            margin:18px 0;
            font-size: 14px;
        }
        .form-input input::placeholder{
            font-size: 14px;
        }
        .form-input textarea{
            margin: 10px 0;
            font-size: 14px;
        }
        .form-input{
            width:90%;
        }
        .step-content{
            padding: 85px 0 0 0;
        }
        .step-content h1{
            margin: 8px;
            font-size: 19px;
        }
    }
</style>