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

        </div>
    </div>
</template>

<script>
    export default {
        name: "LandingPage"
    }
</script>

<style scoped>
    .section-two{
        height:2000px;
        background: #4A50D9;
    }

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
        background: #4A50D9;
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

    @media screen and (max-width: 1400px) {
        .small-title{
            font-size: 18px;
        }
        .main-title{
            font-size: 40px;
        }
        .title-text{
            font-size: 16px;
        }
        .start-button {
            width:140px;
            font-size: 22px;
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
</style>