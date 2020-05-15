<template>
    <div class="landing-page">
        <nav>
            <h1>Lorem</h1>
        </nav>
        <div class="main-container">
            <section class="section-left">
                <p class="small-title">LOREM IPSUM DOLOR SIT AMET</p>
                <h1 class="main-title">Lorem ipsum dolor sit amet,consectetur.</h1>
                <p class="title-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus ut dolor purus. Lorem ipsum dolor sit amet consectetur adipiscing.
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
        </div>
        <div class="blue-background-section" />
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
        display: flex;
    }
    nav{
        z-index: 2;
        position: relative;
    }
    nav h1{
        padding:30px 0 0 50px;
        margin: 0;
    }
    .section-left{
        width:calc(40% - 50px);
        margin-left:50px;
        margin-top: 9%;
        margin-bottom: 9%;
        position: relative;
        z-index: 2;
    }
    .small-title{
        color:#8E93FF;
        font-weight: bold;
        margin: 5px 0;
    }
    .main-title{
        font-weight: bold;
        font-size: 40px;
        margin: 10px 0;
        color:#303030;
    }
    .title-text{
        color: #404040;
    }
    .section-right{
        width: calc(60% - 50px);
        margin-right: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 2;
    }
    .landing-image{
        width:70%;
        margin-left:100px;
    }
    .dots{
        position: absolute;
        width: 90px;
        right:0;
        bottom:-61px;
        z-index: 2;
    }
    .blue-background-section{
        position: absolute;
        top:0;
        left:0;
        background: rgba(248, 248, 255, 0.70);
        width: calc(40% + 50px);
        height: 475px;
        z-index: 1;
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
            color:#1C1C1C;
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
    @media screen and (max-width: 1140px) {
        .landing-image{
            width:70%;
            margin-left:100px;
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
        .main-container{
            flex-direction: column;
            align-content: center;
        }
        nav h1{
            padding:20px 0 0 25px;
            margin: 0;
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
    }


    .start-button p {
        text-decoration: none;
        transition:0.2s;
        margin:0;
    }
    .start-button {
        position: relative;
        padding: 7px 5px;
        text-align: center;
        cursor: pointer;
        overflow: hidden;
        text-decoration: none;
        width:140px;
        font-weight: bold;
        font-size: 22px;
        color:#4A50D9;
        border-left: 4px solid #4A50D9;
        transition: 0.2s;
        z-index: 10;
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
</style>