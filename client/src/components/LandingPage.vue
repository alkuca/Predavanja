<template>
    <div class="landing-page">
        <nav>
            <h1>Lorem</h1>
            <div class="nav-links">
                <p class="register">Register</p>
                <p class="login">Login</p>
                <div class="underline"/>
            </div>
        </nav>
        <div class="main-container">
            <section class="section-left">
                <img class="dots2" src="../assets/dots2.png" alt="dots background"/>
                <p class="small-title">LOREM IPSUM DOLOR SIT AMET</p>
                <h1 class="main-title">Lorem ipsum dolor sit amet,consectetur.</h1>
                <p class="title-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sem eu tellus gravida egestas maximus nec felis.
                    Nunc suscipit, eros et finibus placerat, nisl neque interdum dolor, iaculis fermentum nisi urna a neque.
                </p>
                <div class="start-button">
                    <p>Sign Up</p>
                    <div class="mask"/>
                </div>
                <img class="dots" src="../assets/dots.png" alt="dots background"/>
            </section>
            <section class="section-right">
                <img class="landing-image" src="../assets/main.png" alt="landing image"/>
            </section>
            <div class="section-bottom"/>
        </div>
        <div class="blue-background-section" />
        <div class="section-two">
            <div class="landing-text">
                <h1>Lorem ipsum dolor sit amet,consectetur</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut dolor purus.Lorem
                    ipsum dolor sit amet consectetur.</p>
            </div>
            <div class="blocks-container">
                <div class="block">
                    <img class="block-img" src="../assets/learn.svg" alt="learn image"/>
                    <h1>Learn</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus ut dolor purus.Lorem ipsum dolor sit amet consectetur adipiscing.</p>
                </div>
                <div class="block">
                    <img class="block-img" src="../assets/teach.svg" alt="teach image"/>
                    <h1>Teach</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus ut dolor purus.Lorem ipsum dolor sit amet consectetur adipiscing.</p>
                </div>
                <div class="block">
                    <img class="block-img" src="../assets/earn.svg" alt="earn image"/>
                    <h1>Earn</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus ut dolor purus.Lorem ipsum dolor sit amet consectetur adipiscing.</p>
                </div>
            </div>
        </div>
        <div class="section-three">
            <div class="section-three-left">
                <img class="discover-img" src="../assets/discover.png" alt="discover"/>
                <img class="dots3" src="../assets/dots2.png" alt="dots"/>
            </div>
            <div class="section-three-right">
                <h1 class="blue-title">Lorem ipsum dolor sit amet,consectetur.</h1>
                <p class="blue-subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sem eu tellus gravida egestas maximus nec felis.
                    Nunc suscipit, eros et finibus placerat, nisl neque interdum dolor, iaculis fermentum nisi urna a neque.
                </p>
                <img class="dots4" src="../assets/dots2.png" alt="dots"/>
            </div>
        </div>
        <div class="section-four">
            <div class="section-four-block">
                <h1>Learn</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus ut dolor purus.Lorem ipsum dolor sit amet consectetur adipiscing.</p>
            </div>
            <div class="section-four-block">
                <h1>Learn</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus ut dolor purus.Lorem ipsum dolor sit amet consectetur adipiscing.</p>
            </div>
            <div class="section-four-block">
                <h1>Learn</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus ut dolor purus.Lorem ipsum dolor sit amet consectetur adipiscing.</p>
            </div>
        </div>
        <div class="section-five">
            <div class="section-five-left">
                <h1 class="blue-title">Lorem ipsum dolor sit amet,consectetur.</h1>
                <p class="blue-subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sem eu tellus gravida egestas maximus nec felis.
                    Nunc suscipit, eros et finibus placerat, nisl neque interdum dolor, iaculis fermentum nisi urna a neque.
                </p>
            </div>
            <div class="section-five-right">
                <img class="review-image" src="../assets/review.png" alt="review"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LandingPage"
    }
</script>

<style scoped>
    .landing-page{
        height:100vh;
        background: url(../assets/bg.svg) no-repeat;
        background-size: cover;
    }
    .main-container{
        width:100%;
        padding: 80px 0 180px 0;
        margin:0;
        display: flex;
        flex-wrap: wrap;
    }
    nav{
        z-index: 2;
        position: relative;
        display: flex;
        justify-content: space-between;
        padding: 0 100px;
        align-items: center;
        border-bottom:1px solid rgba(0, 0, 0, 0.12)
    }
    .nav-links{
        display: flex;
        position: relative;
    }
    .nav-links p{
        font-weight: bold;
        color:#303030;
        padding: 25px 30px;
        margin: 0;

        cursor: pointer;
    }
    .nav-links p:hover{

    }
    .section-left{
        width:calc(40% - 100px);
        margin-left:100px;
        position: relative;
        z-index: 2;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .small-title{
        color:#8E93FF;
        font-weight: bold;
        margin: 5px 0;
        font-size: 22px;
    }
    .main-title{
        font-weight: bold;
        font-size: 60px;
        margin: 10px 0;
        color:#303030;
    }
    .title-text{
        color: #404040;
        font-size: 18px;
    }
    .section-right{
        width: calc(60% - 50px);
        margin-right: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 2;
        position: relative;
        justify-content: flex-end;
    }
    .landing-image{
        width:70%;
        margin-left:100px;
    }
    .dots{
        position: absolute;
        width: 90px;
        right:0;
        bottom:150px;
        z-index: 2;
        opacity: 0.4;
    }
    .dots2{
        width: 70px;
        z-index: 2;
        margin-top:-50px;
        margin-bottom:30px;
    }
    .section-bottom{
        width:100%;
        background: #2E34CC;
        z-index: 3;
        flex-flow: column;
    }
    .blue-background-section{
        position: absolute;
        top:0;
        left:0;
        background: rgba(248, 248, 255, 0.70);
        width: calc(40% + 80px);
        height: calc(55% + 200px);
        z-index: 1;
    }
    .start-button p {
        text-decoration: none;
        transition:0.2s;
        margin:0;
    }
    .start-button {
        position: relative;
        padding: 12px 5px;
        text-align: center;
        cursor: pointer;
        overflow: hidden;
        text-decoration: none;
        width: 130px;
        font-weight: bold;
        font-size: 26px;
        color:#4A50D9;
        border-left: 5px solid #4A50D9;
        transition: 0.2s;
        z-index: 10;
        margin-top:20px;
    }
    .start-button:hover p {
        color:white;
    }
    .start-button:hover {
        transition: 0.2s;
        width:180px;
    }
    .start-button .mask {
        position: absolute;
        width: 0;
        height: 100%;
        top: 0;
        left: 0;
        background: #4A50D9;
        z-index: -1;
        transition: 0.2s;
    }
    .start-button:hover .mask {
        background: #4A50D9;
        width:100%;
        transition:0.2s;
        z-index: -1;
    }
    .underline{
        position: absolute;
        height:3px;
        background: transparent;
        bottom:0;
        width:100px;
        left:12px;
        transition: left 0.2s, width 0.2s, background 0.1s;
        border-radius: 10px 10px 0 0;
    }
    .login:hover ~ .underline{
        left:133px;
        width:85px;
        transition: left 0.2s, width 0.2s;
        background: #46497E;
    }
    .register:hover ~ .underline{
        width:100px;
        background: #46497E;
        left:12px;
        transition: left 0.2s, width 0.2s;
    }
    .section-two{
        background: url(../assets/bgs2.svg) no-repeat;
        background-size: cover;
        position: relative;
        z-index: 2;
    }
    .landing-text{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        padding: 140px 0 0 0;
    }
    .landing-text h1{
        margin: 0;
        color:white;
        font-size: 22px;
        text-align: center;
    }
    .landing-text p{
        color:#CED0FF;
        text-align: center;
        font-size: 16px;
        width: 50%;
    }
    .blocks-container{
        display: flex;
        justify-content: space-around;
        align-content: center;
        padding: 0 10% 0 10%;
        margin-top: 5%;
    }
    .block{
        width:33%;
        height: 400px;
        background: white;
        border-radius: 5px;
        box-shadow: 0 0 7px rgba(0,0,0,0.22);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin:0 40px
    }
    .block-img{
        width: 100px;
    }
    .block h1{
        color:#4A50D9;
        text-align: center;
        font-weight: bold;
        font-size: 24px;
        margin: 50px 0 12px 0;
    }
    .block p{
        font-size: 16px;
        text-align: center;
        color:#8F8F8F;
        margin: 0 50px;
    }
    .section-three{
        display: flex;
        background: #fdfdff;
        margin-top:35px;
        padding:100px 0;
    }
    .section-three-left{
        width: 60%;
        margin: 0 0 0 40px;
        justify-content: center;
        display: flex;
        position: relative;
        flex-direction: column;
        align-items: center;
    }
    .section-three-right{
        width: 40%;
        margin: 0 10% 0 0;
        justify-content: center;
        display: flex;
        position: relative;
        flex-direction: column;
    }
    .discover-img{
        width:70%;
    }
    .blue-title{
        color: #4A50D9;
        font-weight: bold;
        font-size: 30px;
    }
    .blue-subtitle{
        margin-top:0;
        font-size: 15px;
    }
    .dots3{
        width:50px;
        top:-20px;
        left: 0;
        z-index: 2;
        position: absolute;
    }
    .dots4{
        width:50px;
        bottom:-10px;
        right: 0;
        z-index: 2;
        position: absolute;
        transform: rotate(180deg);
    }
    .section-four{
        display: flex;
        justify-content: center;
        align-content: center;
        padding: 90px 0;
        background: #2e34cc;
    }
    .section-four-block{
        width:20%;
        margin: 0 40px;
    }
    .section-four-block h1{
        font-weight: bold;
        font-size: 18px;
        text-align: center;
        color:white;
    }
    .section-four-block p{
        margin-top:0;
        font-size: 14px;
        text-align: center;
        color:#F8F8F8;
    }

    .section-five{
        display: flex;
        margin-top:35px;
        padding:100px 0;
    }
    .section-five-left{
        width: 40%;
        margin: 0 40px 0 10%;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .section-five-right{
        width: 60%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-right: 40px;
        align-items: center;
    }
    .review-image{
        width:65%;
    }

    @media screen and (max-width: 1400px) {
        .small-title{
            font-size: 17px;
        }
        .main-title{
            font-size: 36px;
        }
        .title-text{
            font-size: 15px;
        }
        .start-button {
            font-size: 20px;
            margin-top:5px;
            width:105px;
        }
        nav{
            padding: 0 50px;
            height: 50px;
        }
        .section-left{
            width:calc(40% - 50px);
            margin-left:70px;
        }
        .dots{
            bottom:50px;
        }
        .dots2{
            width: 50px;
            margin-top:-30px;
        }
        .nav-links p {
            padding: 17px 20px;
            font-size: 13px;
        }
        nav h1{
            font-size: 18px;
        }
        .section-right{
            margin-right: 30px;
        }
        .login:hover ~ .underline{
            left:99px;
            width:60px;
        }
        .register:hover ~ .underline{
            width:75px;
            left:7px;
        }
        .landing-text{
            padding: 70px 20px 0 20px;
        }
        .landing-text h1{
            font-size: 20px;
        }
        .landing-text p{
            font-size: 15px;
        }
        .blocks-container{
            margin-top: 4%;
            padding: 0 3%;
        }
        .block{
            width:33%;
            height: 350px;
            margin:0 30px
        }
        .dots4{
            right:-30px;
        }
    }
    @media screen and (max-width: 1140px) {
        .start-button{
            font-size: 18px;
            width:95px;
        }
        .small-title{
            font-size: 14px;
        }
        .main-title{
            font-size: 30px;
        }
        .title-text{
            font-size: 13px;
        }
        .landing-image{
            width:60%;
        }
        .block{
            height: 280px;
            margin:0 15px
        }
        .block-img {
            width: 70px;
        }
        .block h1 {
            font-size: 16px;
            margin: 50px 0 12px 0;
        }
        .block p {
            font-size: 12px;
            margin: 0 25px;
        }
        .blue-title {
            font-size: 25px;
        }
        .blue-subtitle {
            font-size: 14px;
        }
        .discover-img {
            width: 80%;
        }
        .review-image{
            width: 75%;
        }
        .section-four-block {
            width: 25%;
            margin: 0 20px;
        }
        .blocks-container{
            padding-bottom: 50px;
        }
        .section-two{
            background-size: initial;
        }
    }
    @media screen and (max-width: 850px) {
        .start-button{
            font-size: 16px;
            width:80px;
        }
        .small-title{
            font-size: 12px;
        }
        .main-title{
            font-size: 20px;
        }
        .title-text{
            font-size: 12px;
        }
        .landing-image{
            width:80%;
        }
        .block{
            height: 250px;
        }
        .block-img {
            width: 60px;
        }
        .block h1 {
            margin: 30px 0 12px 0;
        }
        .block p {
            margin: 0 15px;
        }
        .blocks-container{
            margin-top: 2%;
            padding-bottom:50px;
        }
        .discover-img {
            width: 100% !important;
        }
        .review-image{
            width: 95% !important;
        }
        .blue-title {
            font-size: 20px;
        }
        .blue-subtitle {
            font-size: 13px;
        }
    }
    @media screen and (max-width: 680px) {
        nav{
            padding: 0 25px;
        }
        .dots2{
            display: none;
        }
        .main-container{
            height: auto;
        }
        .section-left{
            width: calc(100% - 50px);
            margin-left:25px;
            margin-top:7%;
            margin-bottom:5%;
        }
        .small-title{
            font-size: 14px;
        }
        .main-title{
            font-size: 30px;
        }
        .title-text{
            font-size: 14px;
        }
        .section-right{
            width: 100%;
            margin-right:0;
        }
        .landing-image{
            width:70%;
            margin-left:0;
        }
        .dots{
            display: none;
        }
        .blue-background-section{
            width: 100%;
            height:75%;
        }
        .section-bottom{
            display: none;
        }
        .section-two{
            background: #2e34cc;
        }
        .section-three{
            flex-direction: column;
            align-items: center;
        }
        .section-three-left{
            width: 100%;
            margin: 0 0 60px 0;
        }
        .discover-img {
            width: 80% !important;
        }
        .section-three-right {
            width: 80%;
            margin: 0;
            align-items: center;
        }
        .section-three-right h1 {
            text-align: center;
        }
        .section-three-right p {
            text-align: center;
        }
        .dots3 {
            top: -40px;
            left: 20px;
        }
        .dots4 {
            right:-50px;
            bottom: -55px;
        }
        .section-four {
            flex-direction: column;
            align-items: center;
        }
        .section-four-block {
            width: 60%;
            margin: 25px 50px;
        }
        .blocks-container {
            flex-direction: column;
            align-items: center;
            margin-top: 50px;
        }
        .block{
            width:65%;
            margin: 20px 0;
            height: 350px;
        }
        .block h1{
            font-size: 24px;
            margin: 12px 35px;
        }
        .block p{
            font-size: 15px;
            margin: 0 35px;
        }
        .block-img{
            width: 90px;
        }
        .main-container {
            width: 100%;
            padding: 0 0 100px 0;
        }
        .section-five{
            flex-direction: column;
            align-items: center;
            padding:40px 0;
        }
        .section-five-right{
            width: 100%;
            margin: 50px 0 60px 0;
        }
        .review-image {
            width: 80% !important;
        }
        .section-five-left {
            width: 80%;
            margin: 0;
            align-items: center;
        }
        .section-five-left h1 {
            text-align: center;
        }
        .section-five-left p {
            text-align: center;
        }
        .underline{
            display: none;
        }
        .start-button {
            width: 120px;
            font-size: 20px;
            border-radius: 3px;
            color:white;
            border:none;
            background: #4A50D9;
            margin-top: 15px;
            padding: 10px 5px;
        }
        .start-button:hover p {
            color:white;
        }
        .start-button:hover {
            width: 120px;
        }
    }
    @media screen and (max-width: 580px) {
        nav{
            padding: 0 10px 0 25px;
        }
        .nav-links p{
            padding:17px 10px;
        }
        .main-container{
            padding: 0 0 50px 0;
        }
        .section-left{
            margin-top:30px;
            margin-bottom:45px;
        }
        .landing-text{
            padding: 60px 15px 0 15px;
        }
        .landing-text p {
            width: 100%;
        }
        .blocks-container{
            margin-top:25px;
        }
        .block{
            width: 85%;
            margin: 15px 0;
            height: 300px;
        }
        .section-three{
            padding: 50px 0;
        }
        .section-three-left{
            margin: 0 0 25px 0;
        }
        .dots4 {
            right: -20px;
            bottom: -35px;
        }
        .blue-title {
            font-size: 24px;
        }
        .blue-subtitle{
            font-size: 16px;
        }
        .section-four{
            padding:30px 0;
        }
        .section-four-block h1{
            font-size: 24px;
        }
        .section-four-block p {
            font-size: 16px;
        }
        .section-four-block {
            width: 80%;
            margin: 20px 0;
        }
        .section-five{
            padding:25px 0;
            margin-top:0;
        }
    }
</style>