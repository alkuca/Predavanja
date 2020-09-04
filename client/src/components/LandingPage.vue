<template>
    <div class="landing-page">
        <nav>
            <img src="../assets/LecturityLogoBlue.svg" class="nav-logo" alt="navbar logo"/>
            <div class="nav-links">
                <router-link to="/login" class="login" tag="button">Login</router-link>
            </div>
        </nav>
        <div class="main-container">
            <section class="section-left">
                <img class="dots2" src="../assets/dots2.png" alt="dots background"/>
                <p class="small-title" data-aos-once="true" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">LOREM IPSUM DOLOR SIT AMET</p>
                <h1 class="main-title" data-aos-once="true" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1200">Lorem ipsum dolor sit amet,consectetur.</h1>
                <p class="title-text" data-aos-once="true" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1200">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sem eu tellus gravida egestas maximus nec felis.
                    Nunc suscipit, eros et finibus placerat, nisl neque interdum dolor, iaculis fermentum nisi urna a neque.
                </p>
                <div data-aos-once="true" data-aos="fade-in" data-aos-delay="1200" data-aos-duration="1800" data-aos-anchor=".main-title">
                    <router-link to="/register" class="start-button" tag="button">Sign Up <img class="arrow-button" src="../assets/arrowRight.svg" alt="arrow" /></router-link>
                </div>
                <img class="dots" src="../assets/dots.png" alt="dots background"/>
            </section>
            <section class="section-right" data-aos-once="true" data-aos="fade" data-aos-duration="1500">
                <img class="landing-image" src="../assets/ppl.svg" alt="landing image"/>
            </section>
            <div class="section-bottom"/>
        </div>
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div class="block">
                    <img class="block-img" src="../assets/teach.svg" alt="teach image"/>
                    <h1>Teach</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div class="block">
                    <img class="block-img" src="../assets/earn.svg" alt="earn image"/>
                    <h1>Earn</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </div>
        <div class="large-section">
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
                    <img class="review-image" src="../assets/blog.svg" alt="review"/>
                </div>
            </div>
            <div class="section-three">
                <div class="section-three-left">
                    <img class="discover-img" src="../assets/creativity.svg" alt="discover"/>
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
        <div class="notebook-section">
            <div class="notebook-section-left">
                <h1 class="blue-title text-right">Lorem ipsum dolor sit amet,consectetur.</h1>
                <p class="blue-subtitle text-right">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sem eu tellus gravida egestas maximus nec felis.
                    Nunc suscipit, eros et finibus placerat, nisl neque interdum dolor, iaculis fermentum nisi urna a neque.
                </p>
            </div>
            <div class="notebook-section-right">
                <img class="notebook-image" src="../assets/laptop.png" alt="notebook"/>
            </div>
        </div>
        <div class="phone-section">
            <div class="phone-section-left">
                <img  class="phone-image" src="../assets/phone.png" alt="phone"/>
            </div>
            <div class="phone-section-right">
                <h1  class="blue-title">Lorem ipsum dolor sit amet,consectetur.</h1>
                <p  class="blue-subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sem eu tellus gravida egestas maximus nec felis.
                    Nunc suscipit, eros et finibus placerat, nisl neque interdum dolor, iaculis fermentum nisi urna a neque.
                </p>
            </div>
        </div>
        <div class="tablet-section">
            <div class="tablet-section-left">
                <h1  class="blue-title text-right">Lorem ipsum dolor sit amet,consectetur.</h1>
                <p  class="blue-subtitle text-right">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sem eu tellus gravida egestas maximus nec felis.
                    Nunc suscipit, eros et finibus placerat, nisl neque interdum dolor, iaculis fermentum nisi urna a neque.
                </p>
            </div>
            <div class="tablet-section-right">
                <img class="tablet-image" src="../assets/tablet.png" alt="chat"/>
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
        <div class="blockchain-section">
            <div class="content-center">
                <h1 class="center-title">Blockchain lorem ipsum dolor sit amet</h1>
                <p class="center-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut dolor purus.Lorem
                    ipsum dolor sit amet consectetur.</p>
                <img class="blockchain" src="../assets/blockchain.svg" alt="blockchain"/>
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
        background: url(../assets/bgs5.svg) no-repeat;
        background-size: cover;
    }
    .main-container{
        width:100%;
        padding: 80px 0 130px 0;
        margin:0;
        display: flex;
        flex-wrap: wrap;
    }
    nav{
        z-index: 2;
        position: relative;
        display: flex;
        justify-content: space-between;
        padding: 0 80px 0 100px;
        align-items: center;
    }
    .nav-links{
        display: flex;
        position: relative;
    }
    .login{
        margin:0 15px;
        outline:0;
        height: 32px;
        width:95px;
        background: transparent;
        border:3px solid #4A50D9;
        font-weight: bold;
        color: #4A50D9;
        border-radius: 3px;
        cursor: pointer;
    }
    .login:hover{
        background: #4A50D9;
        color:white;
        transition: 0.2s;
        opacity: 0.9;
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
        justify-content: center;
    }
    .landing-image{
        width:90%;
        margin-left:60px;
        margin-top: 60px;
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
    .start-button{
        background: #4A50D9;
        color:white;
        border:0;
        width:150px;
        height:46px;
        margin-top:12px;
        font-size: 19px;
        font-weight: bold;
        border-radius: 4px;
        position: relative;
        transition: 0.2s;
        cursor: pointer;
    }
    .arrow-button{
        margin-left: 6px;
        opacity: 0;
        transition: 0.2s;
        width:20px;
        position: absolute;
        right:23px;
        top: 15px;
    }
    .start-button:hover .arrow-button{
        opacity: 1;
        transition: 0.2s;
    }
    .start-button:hover{
        width:170px;
        padding-right:36px;
        transition: 0.2s;
    }
    .section-two{
        background: url(../assets/bgs3.svg) no-repeat;
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
        padding: 0 15% 80px 15%;
        margin-top: 5%;
        margin-bottom: 10%;
    }
    .block{
        width:23%;
        height: 350px;
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
        font-size: 15px;
        text-align: center;
        color:#8F8F8F;
        margin: 0 50px;
        font-weight: bold;
    }
    .section-three{
        display: flex;
        margin-top:35px;
        padding:50px 0 50px 0;
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
        font-size: 32px;
    }
    .blue-subtitle{
        margin-top:0;
        font-size: 16px;
        font-weight: bold;
        color:#525252;
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
        padding: 75px 0;
        margin-top: 100px;
        background: #2e34cc;
    }
    .section-four-block{
        width:20%;
        margin: 0 40px;
    }
    .section-four-block h1{
        font-weight: bold;
        font-size: 22px;
        text-align: center;
        color:white;
    }
    .section-four-block p{
        margin-top:0;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
        color: #f8f8f8;
    }

    .section-five{
        display: flex;
        margin-top:35px;
        padding:50px 0 0 0;
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
        width:70%;
    }
    .blockchain-section{
        margin-top:35px;
        padding:50px 0 0 0;
        background: url(../assets/bgs6.svg) no-repeat;
        background-size: cover;
    }
    .content-center{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        padding:0 30px;
    }
    .center-title{
        font-size: 25px;
        text-align: center;
        color:#4A50D9;
    }
    .center-text{
        font-size: 20px;
        margin: 5px 0;
        width:500px;
        text-align: center;
        color:#313131;
    }
    .blockchain{
        padding: 70px 0 155px 0;
        width: 450px;
    }
    .large-section{
        background: url(../assets/bgs7.svg) no-repeat;
        background-size: cover;
    }
    .notebook-section{
        padding:100px 0 50px 0;
        display: flex;
        justify-content: flex-end;
        overflow-x: hidden;
        height: 100%;
        background: url(../assets/bgs8.svg) no-repeat;
        background-size: cover;
    }
    .notebook-section-right{
        width: 50%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        position: relative;
    }
    .notebook-image{
        width:100%;
        position: absolute;
        right:0;
    }
    .notebook-section-left{
        width: 50%;
        margin: 0 0 0 10%;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .text-right{
        text-align: right;
    }

    .phone-section{
        padding:50px 0 0 0;
        display: flex;
        justify-content: flex-start;
        background: url(../assets/bgs9.svg) no-repeat;
        background-size: cover;
    }
    .phone-section-right{
        width: 40%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        position: relative;
        margin-right: 40px;
    }
    .phone-image{
        width:80%;
    }
    .phone-section-left{
        width: 35%;
        margin: 0 0 0 50px;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .tablet-section{
        padding:100px 0 50px 0;
        display: flex;
        justify-content: flex-end;
        overflow-x: hidden;
        height: 100%;
    }
    .tablet-section-right{
        width: 40%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin-right: 50px;
    }
    .tablet-section-left{
        width: 40%;
        margin: 0 30px 0 8%;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .tablet-image{
        width:90%;
    }
    .nav-logo{
      width: 180px;
      margin: 20px 0;
    }
    @media screen and (max-width: 1400px) {
        .small-title{
            font-size: 17px;
        }
        .main-container{
            padding: 20px 0 47px 0;
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
        }
        nav{
            padding: 0 40px 0 70px;
            height:70px;
        }
        .section-left{
            width:calc(40% - 50px);
            margin-left:70px;
        }
        .center-title{
            font-size: 21px;
        }
        .center-text{
            font-size: 15px;
        }
        .dots{
            bottom:50px;
        }
        .dots2{
            width: 50px;
            margin-top:-30px;
        }
        .nav-links p {
            padding: 22px 20px;
            font-size: 13px;
        }
        nav h1{
            font-size: 18px;
        }
        .section-right{
            margin-right: 30px;
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
            padding: 0 7% 80px 7%;
        }
        .block{
            height: 320px;
            margin:0 20px
        }
        .dots4{
            right:-30px;
        }
        .blockchain{
            width: 250px;
        }
    }
    @media screen and (max-width: 1140px) {
        .small-title{
            font-size: 14px;
        }
        .notebook-section{
            padding-bottom: 40px !important;
        }
        .main-title{
            font-size: 30px;
        }
        .title-text{
            font-size: 13px;
        }
        .landing-image{
            width:90%;
            margin-top:0;
        }
        .block{
            width: 25%;
            height: 240px;
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
        .small-title{
            font-size: 12px;
        }
        .main-title{
            font-size: 20px;
        }
        .title-text{
            font-size: 12px;
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
            margin-left:0;
        }
        .dots{
            display: none;
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
            width:55%;
            margin: 20px 0;
            height: 320px;
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
            flex-direction: column-reverse;
            align-items: center;
            padding:40px 0;
        }
        .section-five-right{
            width: 100%;
            margin: 50px 0 0 0;
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
        .text-right{
            text-align: center;
        }
        .notebook-section{
            padding:50px 0 100px 0;
            flex-direction: column-reverse;
        }
        .notebook-section-right{
            width: 100%;
            position: initial;
        }
        .notebook-image{
            width:70%;
            position: initial;
            align-self: flex-end;
        }
        .notebook-section-left{
            width: 90%;
            margin: 0;
            padding: 8% 5% 0 5%;
        }
        .phone-section{
            padding:0;
            flex-direction: column;
        }
        .phone-section-right{
            width: 90%;
            margin: 0;
            padding: 8% 5% 0 5%;
            text-align: center;
        }
        .phone-image{
            width:60%;
        }
        .phone-section-left{
            width: 100%;
            justify-content: center;
            align-items: center;
            margin: 0;
        }

        .tablet-section{
            padding:50px 0 0 0;
            flex-direction: column-reverse;
        }
        .tablet-section-right{
            width: 100%;
            justify-content: center;
            align-items: center;
            margin: 0;
        }
        .tablet-section-left{
            width: 90%;
            margin: 0;
            padding: 8% 5% 0 5%;
            text-align: center;
        }
        .tablet-image{
            width:80%;
        }
    }
    @media screen and (max-width: 580px) {
        nav{
            padding: 0 10px 0 25px;
        }
        .login{
            margin: 0 6px;
            width:90px;
        }
        .notebook-section{
            height:auto;
        }
        .tablet-section{
            height:auto;
        }
        .main-container{
            padding: 0 0 50px 0;
        }
        .notebook-image{
            width:90%;
        }
        .notebook-section{
            padding:50px 0 0 0;
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
            width: 72%;
            margin: 15px 0;
            height: 280px;
        }
        .section-three{
            padding: 50px 0 25px 0;
            margin-top:0;
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
        .center-text{
            width:auto;
        }
        .section-five-right{
            margin:0;
        }
    }
</style>