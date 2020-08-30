<template>
    <div class="main-container">
        <div class="title">
            <div class="title-inner-container">
                <p>Become a Lecturer</p>
                <span v-if="step === 1">/ Image</span>
                <span v-if="step === 2">/ Personal Information</span>
                <span v-if="step === 3">/ Academic Background</span>
                <span v-if="step === 4">/ Employment and Hobbies</span>
            </div>
            <div class="nav-buttons">
                <button class="return-button" v-if="step !== 1 && !formSuccess" v-on:click="prevStep">
                    <img class="return-arrow" src="../assets/navbarArrow.svg" alt="navbar arrow" />
                </button>
                <button v-if="step !== totalSteps && !formSuccess" class="continue-button" v-on:click="nextStep">Next Step</button>
                <button v-if="step === totalSteps && !formSuccess" class="continue-button" v-on:click="sendForm">Finish</button>
            </div>
        </div>
      <progress v-if="step === 1" id="progress" :value="uploadValue" max="100" ></progress>
        <form>
            <div class="step-1" v-if="step === 1">
                <div class="step-1-content">
                    <h1>Upload a photo of you</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut dolor purus.</p>
                    <div class="upload-container">
                      <img v-if="!picture" class="upload-image" src="../assets/upload.svg" alt="upload"/>
                      <img v-if="picture" class="preview-image" :src="picture" alt="preview">
                    </div>
                  <div>
                    <input type="file" @change="previewImage" accept="image/*">
                  </div>
                    <div v-if="imageData!=null">
                      <button v-if="this.uploadValue === 0" class="upload-button" @click="onUpload">Upload</button>
                    </div>
                </div>
            </div>
            <div class="step-2" v-if="step === 2">
                <div class="step-content">
                    <div class="form-input">
                        <label for="firstName">First Name:</label>
                        <input id="firstName" type="text" name="firstName" v-model="updateProfile.firstName"/>
                    </div>
                    <div class="form-input">
                        <label for="secondName">Second Name:</label>
                        <input id="secondName" type="text" name="secondName" v-model="updateProfile.secondName"/>
                    </div>
                    <div class="form-input">
                        <label for="address">Address:</label>
                        <input id="address" type="text" name="address" v-model="updateProfile.address"/>
                    </div>
                    <div class="form-input">
                        <label for="phoneNumber">Phone number:</label>
                        <input id="phoneNumber" type="text" name="phoneNumber" v-model="updateProfile.phoneNumber"/>
                    </div>
                </div>
            </div>
            <div class="step-3" v-if="step === 3">
                <div class="step-content">
                    <div class="form-input">
                        <label for="highSchool">High School:</label>
                        <input id="highSchool" type="text" name="highSchool" v-model="updateProfile.highSchool"/>
                    </div>
                    <div class="form-input">
                        <label for="university">University:</label>
                        <input id="university" type="text" name="university" v-model="updateProfile.university"/>
                    </div>
                    <div class="form-input">
                        <label for="achievements">Other Academic Achievements:</label>
                        <textarea required id="achievements" name="achievements" v-model="updateProfile.achievements"/>
                    </div>
                </div>
            </div>
            <div class="step-4" v-if="step === 4">
                <div class="step-content">
                    <div class="form-input">
                        <label for="currentEmployment">Current Employment:</label>
                        <input id="currentEmployment" type="text" name="currentEmployment" v-model="updateProfile.currentEmployment"/>
                    </div>
                    <div class="form-input">
                        <label for="hobbies">Hobbies:</label>
                        <input id="hobbies" type="text" name="hobbies" placeholder="Swimming, Bowling..." v-model="updateProfile.hobbies"/>
                    </div>
                </div>
            </div>
        </form>
        <div v-if="formSuccess && currentUserProfile.is_lecturer">
          <div class="step-1-content">
            <h1>Congratulations</h1>
            <h1>You successfully became a Lecturer</h1>
            <p>You are ready to publish your first Lecture</p>
            <button v-on:click="togglePublishLecture" class="publish-button">Publish Lecture</button>
          </div>
        </div>
        <p class="steps-counter">step {{step}} of {{totalSteps}}</p>
    </div>
</template>

<script>
import firebase from 'firebase';
    export default {
        name: "BecomeLecturer",
        data(){
            return{
                step:1,
                totalSteps:4,
                formSuccess: false,
                imageData: null,
                picture: null,
                uploadValue: 0,
                updateProfile:{
                  firstName:this.currentUserProfile.firstName,
                  secondName:this.currentUserProfile.secondName,
                  address:this.currentUserProfile.address,
                  phoneNumber:this.currentUserProfile.phoneNumber,
                  highSchool:this.currentUserProfile.highSchool,
                  university:this.currentUserProfile.university,
                  achievements:this.currentUserProfile.achievements,
                  currentEmployment:this.currentUserProfile.currentEmployment,
                  hobbies:this.currentUserProfile.hobbies
                }
            }
        },
        props: [
          "togglePublishLecture",
          "currentUserProfile",
          "currentUserUid",
          "getUserImage"
        ],
        methods:{
            nextStep(){
                this.step++;
            },
            prevStep(){
                this.step--;
            },
            sendForm(){
                this.formSuccess = true;
                this.step = 0;

                let userRef = firebase.firestore().collection("users").doc(this.currentUserUid);
                userRef.update({
                  firstName: this.updateProfile.firstName,
                  secondName: this.updateProfile.secondName,
                  address: this.updateProfile.address,
                  phoneNumber: this.updateProfile.phoneNumber,
                  highSchool: this.updateProfile.highSchool,
                  university: this.updateProfile.university,
                  achievements: this.updateProfile.achievements,
                  currentEmployment: this.updateProfile.currentEmployment,
                  hobbies: this.updateProfile.hobbies,
                  is_lecturer: true
                })
                this.getUserImage();
                this.currentUserProfile.is_lecturer = true;
            },
            previewImage(event) {
              this.uploadValue = 0;
              this.picture = null;
              this.imageData = event.target.files[0];
            },
            onUpload(e){
              e.preventDefault()
              this.picture = null;
              const storageRef = firebase.storage().ref(firebase.auth().currentUser.uid + '/profilePicture/' + "profile").put(this.imageData);
              storageRef.on(`state_changed`,snapshot => {
                this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
                }, error => {
                console.log(error.message)
                  }, () => {
                this.uploadValue = 100;
                storageRef.snapshot.ref.getDownloadURL().then((url) => {
                  this.picture = url;
                    });
                  }
              );
            }
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
    .step-1-content{
        flex-direction: column;
        display: flex;
        align-items: center;
        height: 100%;
        padding: 60px 0 0 0;
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
    .upload-container{
        border:1px solid #949494;
        margin: 20px 0;
        border-radius: 4px;
    }
    .upload-image{
        padding: 40px;
        width:130px;
    }
    .preview-image{
      width:130px;
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
    .step-1-content input{
        margin: 10px 0 40px 0;
    }
    .step-content{
        margin: 45px 40px 0 40px;
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
    }
    .form-input input{
        margin:12px 0;
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
    .publish-button{
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
    .upload-button{
      width: 130px;
      height: 35px;
      font-size: 14px;
      border: none;
      background: #4A50D9;
      color: white;
      font-weight: bold;
      border-radius: 4px;
      margin: 0 20px 0 6px;
      outline: 0;
      cursor: pointer;
    }
    progress {
      border-radius: 0;
      width: 100%;
      height: 2px;
      position: absolute;
      top:54px;
    }
    progress::-webkit-progress-bar {
      background-color: transparent;
      border-radius: 0;
    }
    progress::-webkit-progress-value {
      background-color: blue;
    }
    @media screen and (max-width: 1400px) {
        .step-1-content{
            padding: 30px 0 0 0;
        }
        .step-1-content h1{
            margin: 8px;
            font-size: 19px;
        }
        .step-1-content p{
            font-size: 13px;
        }
        .upload-container{
            margin: 10px 0;
        }
        .upload-image{
            padding: 20px;
        }
        .form-input{
            margin:18px 0;
        }
        .form-input label{
            font-size: 13px;
        }
        .form-input input{
            margin:8px 0;
            font-size: 13px;
        }
        .form-input input::placeholder{
            font-size: 13px;
        }
        .form-input textarea{
            margin:16px 0;
            font-size: 13px;
        }
    }
    @media screen and (max-width: 950px) {
        .step-1-content{
            padding: 20px 0 0 0;
        }
        .step-1-content h1{
            margin: 5px;
            font-size: 16px;
        }
        .step-1-content p{
            font-size: 12px;
            max-width: 300px;
        }
        .upload-container{
            margin: 5px 0;
        }
        .upload-image{
            padding: 10px;
        }
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
            margin:12px 0;
            font-size: 12px;
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
        .form-input{
            width:100%;
        }
    }
    @media screen and (max-width: 700px) {
        .steps-counter{
            display: none;
        }
        .step-content{
            margin:40px 25px 0 25px;
        }
        .step-1-content h1{
            margin: 8px;
            font-size: 19px;
        }
        .step-1-content p{
            font-size: 13px;
        }
        .upload-container{
            margin: 10px 0;
        }
        .upload-image{
            padding: 20px;
        }
        .form-input{
            margin:20px 0;
        }
        .form-input label{
            font-size: 14px;
        }
        .form-input input{
            margin:10px 0;
            font-size: 13px;
        }
        .form-input input::placeholder{
            font-size: 14px;
        }
        .form-input textarea{
            margin:20px 0;
            font-size: 15px;
        }
    }
</style>