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
                                    <a>Details</a>
                                    <a>Lecturer Notes<span> !</span></a>
                                    <a>Comments(4)</a>
                                    <a>FAQ</a>
                                    <div class="underline"/>
                                </div>
                                <a class="interested-button"><button>Interested</button></a>
                            </div>
                        </nav>
                        <div class="section-bottom-content">
                            <div class="details">
                                <p>Date: 18.05.2020</p>
                                <p>Time: 18:00</p>
                                <p>Duration: 120 min</p>
                                <p>Location: 372 Rose Street</p>
                                <p>City: Pula</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from "./Navbar";
    export default {
        name: "Lecture",
        components: {Navbar}
    }
</script>

<style scoped>
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
        height:100%;
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
    }
    .lecturer-image-name{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .lecturer-image-name img{
        margin-bottom:10px;
    }
    .lecturer-image-name h1{
        font-size:17px;
        color:white;
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
        padding: 17px 10px;
        margin: 0 30px;
        cursor: pointer;
        color: #676767;
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
        min-height:358px;
    }
    span{
        color: #FFB300;
    }
    .details p{
        font-weight: bold;
        color: #595959;
        margin: 20px 0;
    }
    .interested-button{
        align-self: center;
    }
    .interested-button button{
        background: #4A50D9;
        color:white;
        border-radius: 4px;
        border:none;
        font-weight: bold;
        font-size:15px;
        height:35px;
        width:110px;
    }
    .underline{
        position: absolute;
        height:2px;
        background: #46497E;
        bottom:-1px;
        width:70px;
        left:30px;
        transition: 0.2s;
        border-radius: 10px 10px 0 0;
    }
</style>