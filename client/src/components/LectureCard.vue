<template>
    <div class="card-container">
        <div class="section-left">
            <div class="lecturer-info">
                <div class="lecturer-image-name">
                    <img class="lecturer-image" src="../assets/teacher.png" alt="lecturer"/>
                    <img class="star" src="../assets/star.png" alt="star"/>
                    <h1>Adam Smith</h1>
                </div>
                <div class="white-line"/>
                <div class="lecturer-details">
                    <p>Lectures lectured: 8</p>
                    <p>Rating 4.3/5</p>
                </div>
            </div>
        </div>
        <div class="section-right">
            <div class="lecture-text">
                <h1>E-commerce Marketing</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut dolor purus.Lorem ipsum dolor sit amet consectetur adipiscing.</p>
            </div>
            <div class="date-section">
                <div class="date">
                    <p>Date: 18.02.2020</p>
                    <p>People interested: 24</p>
                </div>
                <router-link to="/lecture">
                    <button>View Details</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LectureCard"
    }
</script>

<style scoped>
    .card-container{
        flex: 0 calc(50% - 50px);
        background: #4A50D9;
        height:360px;
        margin: 20px 25px;
        border-radius: 5px;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.22);
        position: relative;
        display: flex;
    }
    .section-left{
        width:32%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .lecturer-info{
        width:100%;
        margin:20px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background: #2F35B5;
        height:320px;
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
    .section-right{
        width:68%;
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
    .date-section{
        display: flex;
        justify-content: space-between;
        margin: 10px 25px 33px 25px;
        align-items: center;
    }
    .date-section a{
        align-self: flex-end;
    }
    .date-section button{
        height:32px;
        border:none;
        background: white;
        width:100px;
        border-radius: 3px;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.22);
        font-weight: bold;
        color:#4A50D9;
    }
    .date p{
        color:white;
        font-weight: bold;
    }
    .star{
        position: absolute;
        top:10px;
        right:10px;
    }
</style>