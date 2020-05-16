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
                    <p>Get Started</p>
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
            </div>
        </div>
        <div class="section-three">
            <div class="img-text-section-left">
                <img class="discover-img" src="../assets/discover.png" alt="discover"/>
                <img class="dots3" src="../assets/dots2.png" alt="dots"/>
            </div>
            <div class="img-text-section-right">
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
            <div class="img-text-section-right add-margin-left">
                <h1 class="blue-title">Lorem ipsum dolor sit amet,consectetur.</h1>
                <p class="blue-subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sem eu tellus gravida egestas maximus nec felis.
                    Nunc suscipit, eros et finibus placerat, nisl neque interdum dolor, iaculis fermentum nisi urna a neque.
                </p>
                <img class="dots3" src="../assets/dots2.png" alt="dots"/>
            </div>
            <div class="img-text-section-left">
                <img class="review-image" src="../assets/review.png" alt="review"/>
                <img class="dots4" src="../assets/dots2.png" alt="dots"/>
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
        padding:0;
        margin:0;
        height: calc(100% - 69px);
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
        border-bottom:1px solid rgba(0, 0, 0, 0.20)
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
        width:165px;
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
    }
    .landing-text{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        padding: 30px 0 0 0;
    }
    .landing-text h1{
        margin: 0;
        color:white;
        font-size: 18px;
        text-align: center;
    }
    .landing-text p{
        color:#CED0FF;
        text-align: center;
        font-size: 14px;
        width: 350px;
    }
    .blocks-container{
        display: flex;
        justify-content: space-around;
        align-content: center;
        padding: 50px 10%;
    }
    .block{
        width:33%;
        height: 340px;
        background: white;
        border-radius: 5px;
        box-shadow: 0 0 7px rgba(0,0,0,0.22);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .block-img{
        width: 100px;
    }
    .block h1{
        color:#4A50D9;
        text-align: center;
        font-weight: bold;
        font-size: 16px;
        margin: 50px 0 12px 0;
    }
    .block p{
        font-size: 12px;
        text-align: center;
        color:#8F8F8F;
        margin: 0 50px;
    }
    .section-three{
        display: flex;
        background: #FCFCFF;
        margin-top:35px;
        padding:50px 0;
    }
    .img-text-section-left{
        width: 60%;
        margin: 0 40px;
        justify-content: center;
        display: flex;
        position: relative;
        flex-direction: column;
        align-items: center;
    }
    .img-text-section-right{
        width: 40%;
        margin: 0 40px;
        justify-content: center;
        display: flex;
        position: relative;
        flex-direction: column;
    }
    .discover-img{
        width:85%;
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
        justify-content: space-around;
        align-content: center;
        padding: 50px 0;
        background: #2e34cc;
    }
    .section-four-block{
        width:25%;
    }
    .section-four-block h1{
        font-weight: bold;
        font-size: 16px;
        text-align: center;
        color:white;
    }
    .section-four-block p{
        margin-top:0;
        font-size: 12px;
        text-align: center;
        color:#F8F8F8;
    }

    .section-five{
        display: flex;
        padding:70px 0;
    }
    .add-margin-left{
        margin-left: 90px !important;
    }
    .review-image{
        width:80%;
    }
    .section-five .dots3{
        left:-50px;
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
            width:140px;
            font-size: 20px;
            margin-top:5px;
        }
        nav{
            padding: 0 50px;
        }
        .section-left{
            width:calc(40% - 50px);
            margin-left:50px;
        }
        .dots{
            bottom:50px;
        }
        .dots2{
            width: 50px;
            margin-top:-30px;
        }
    }
    @media screen and (max-width: 1140px) {
        .start-button{
            font-size: 18px;
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
        .dots{
            width: 70px;
            right:0;
            bottom:-50px;
        }
    }
    @media screen and (max-width: 850px) {
        .start-button{
            font-size: 16px;
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
        .start-button{
            font-size: 22px;
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
    }
</style>