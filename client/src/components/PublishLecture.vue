<template>
    <div class="main-container">
        <div class="title">
            <div class="title-inner-container">
                <p>Publish Lecture</p>
                <span v-if="step === 1">/ Name</span>
                <span v-if="step === 2">/ Description</span>
                <span v-if="step === 3">/ Settings</span>
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
            <div v-if="step === 1">
                <div class="step-content">
                    <div class="form-input">
                        <label for="LectureName">Lecture's Name:</label>
                        <input id="LectureName" type="text" name="LectureName"/>
                    </div>
                </div>
            </div>
            <div v-if="step === 2">
                <div class="step-content">
                    <div class="form-input">
                        <label for="LectureDescription">Lecture's Description:</label>
                        <textarea required class="textarea" id="LectureDescription" name="LectureDescription"/>
                    </div>
                </div>
            </div>
            <div class="step" v-if="step === 3">
                <label class="container noSelect">Public Lecture
                    <input type="checkbox">
                    <span class="checkmark"></span>
                </label>
                <label class="container noSelect">Public Lecture
                    <input type="checkbox">
                    <span class="checkmark"></span>
                </label>
                <label class="container noSelect">Public Lecture
                    <input type="checkbox">
                    <span class="checkmark"></span>
                </label>
                <label class="container noSelect">Public Lecture
                    <input type="checkbox">
                    <span class="checkmark"></span>
                </label>
                <label class="container noSelect">Public Lecture
                    <input type="checkbox">
                    <span class="checkmark"></span>
                </label>
                <div class="select-box">
                    <select>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                        <option>Option 4</option>
                        <option>Option 5</option>
                    </select>
                </div>
            </div>
        </form>
        <p class="steps-counter">step {{step}} of {{totalSteps}}</p>
    </div>
</template>

<script>
    export default {
        name: "PublishLecture",
        data(){
            return{
                step:1,
                totalSteps:3,
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
    .step-content{
        flex-direction: column;
        display: flex;
        align-items: center;
        height: 100%;
        padding: 150px 0 0 0;
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
    .form-input input{
        margin-top:24px;
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
        margin-left: 140px;
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
        margin: 30px 0;
    }
    .select-box select {
        color: #404040;
        padding: 10px 10px 10px 0;
        width: 160px;
        border: none;
        font-size: 16px;
        font-weight: bold;
        outline: none;
        border-bottom: 1px solid black;
    }

    .select-box select option {
        padding: 30px;
    }

    @media screen and (max-width: 1400px) {
        .form-input{
            margin:18px 0;
        }
        .form-input label{
            font-size: 13px;
        }
        .form-input input{
            margin:14px 0;
            font-size: 13px;
        }
        .form-input input::placeholder{
            font-size: 13px;
        }
        .form-input textarea{
            margin:5px 0;
            font-size: 13px;
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
    }
</style>