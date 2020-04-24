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
        <form>
            <div class="step-1" v-if="step === 1">
                <div class="step-1-content">
                    <h1>Upload a photo of you</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut dolor purus.</p>
                    <div class="upload-container">
                        <img class="upload-image" src="../assets/upload.svg" alt="upload"/>
                    </div>
                    <input type="file">
                </div>
            </div>
            <div class="step-2" v-if="step === 2">
                <div class="step-content">
                    <div class="form-input">
                        <label for="firstName">First Name:</label>
                        <input id="firstName" type="text" name="firstName"/>
                    </div>
                    <div class="form-input">
                        <label for="secondName">Second Name:</label>
                        <input id="secondName" type="text" name="secondName"/>
                    </div>
                    <div class="form-input">
                        <label for="address">Address:</label>
                        <input id="address" type="text" name="address"/>
                    </div>
                    <div class="form-input">
                        <label for="phoneNumber">Phone number:</label>
                        <input id="phoneNumber" type="text" name="phoneNumber"/>
                    </div>
                </div>
            </div>
            <div class="step-3" v-if="step === 3">
                <div class="step-content">
                    <div class="form-input">
                        <label for="highSchool">High School:</label>
                        <input id="highSchool" type="text" name="highSchool"/>
                    </div>
                    <div class="form-input">
                        <label for="university">University:</label>
                        <input id="university" type="text" name="university"/>
                    </div>
                    <div class="form-input">
                        <label for="achievements">Other Academic Achievements:</label>
                        <textarea cols="30" rows="5" id="achievements" name="achievements"/>
                    </div>
                </div>
            </div>
            <div class="step-4" v-if="step === 4">
                <div class="step-content">
                    <div class="form-input">
                        <label for="currentEmployment">Current Employment:</label>
                        <input id="currentEmployment" type="text" name="currentEmployment"/>
                    </div>
                    <div class="form-input">
                        <label for="hobbies">Hobbies:</label>
                        <input id="hobbies" type="text" name="hobbies" placeholder="Swimming, Bowling..."/>
                    </div>
                </div>
            </div>
        </form>
        <div v-if="formSuccess">
            <div class="step-1-content">
                <h1>Congratulations</h1>
                <h1>You successfully became a Lecturer</h1>
                <p>You are ready to publish your first Lecture</p>
                <router-link to="/publishLecture" class="publish-button" tag="button">Publish Lecture</router-link>
            </div>
        </div>
        <p class="steps-counter">step {{step}} of {{totalSteps}}</p>
    </div>
</template>

<script>
    export default {
        name: "BecomeLecturer",
        data(){
            return{
                step:1,
                totalSteps:4,
                formSuccess: false
            }
        },
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
                console.log("sendForm()")
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
        padding: 80px 0 0 0;
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
        width: 176px;
        margin: 10px 0 50px 0;
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
        border: 2px solid #cccccc;
        padding: 5px;
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