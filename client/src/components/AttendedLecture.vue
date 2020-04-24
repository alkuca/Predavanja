<template>
    <router-link to="/lecture">
        <div class="attended-lecture">
            <p class="title">E-commerce Marketing</p>
            <div class="lecturer">
                <img class="lecturer-image" src="../assets/teacher.png" alt="lecturer"/>
                <p class="name">John Doe</p>
            </div>
            <p class="rating">Rating: 4.3/5</p>
            <button class="review-button">Add Review</button>
        </div>
    </router-link>
</template>

<script>
    export default {
        name: "AttendedLecture"
    }
</script>

<style scoped>
    a{
        text-decoration: none;
    }
    .attended-lecture{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px 0;
        margin: 20px 0;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.20);
        font-weight: bold;
        color:#686868;
        cursor: pointer;
    }
    .title{
        padding: 0 30px;
    }
    .rating{
        padding: 0 30px;
    }
    .lecturer{
        display: flex;
        padding: 0 30px;
        align-items: center;
    }
    .lecturer img{
        width:35px;
        height:35px;
    }
    .name{
        padding: 0 15px;
    }
    .review-button{
        height:34px;
        border:none;
        background:#4A50D9;
        align-self: center;
        color:white;
        font-weight: bold;
        width:100px;
        border-radius: 4px;
        margin: 0 30px;
        white-space: nowrap;
    }
    @media screen and (max-width: 1400px) {
        .attended-lecture p{
            font-size:14px;
        }
    }
    @media screen and (max-width: 1370px) {
        .attended-lecture p{
            font-size:13px;
        }
        .attended-lecture p{
            padding:0 15px;
        }
        .attended-lecture div{
            padding:0 15px;
        }
        .review-button{
            margin: 0 15px;
        }
    }
    @media screen and (max-width: 1200px) {
        .review-button{
            height: 32px;
            width: 86px;
            font-size: 12px;
        }
    }
    @media screen and (max-width: 950px) {
        .attended-lecture p{
            font-size:12px;
        }
        .attended-lecture p{
            padding:0 10px;
        }
        .attended-lecture div{
            padding:0 10px;
        }
        .review-button{
            margin: 0 10px;
            height: 30px;
            width: 76px;
            font-size: 11px;
        }
    }

    @media screen and (max-width: 450px) {
        .review-button{
            padding:0 8px;
        }
        .rating{
            display: none;
        }
        .attended-lecture p{
            padding:0 8px;
        }
        .attended-lecture div{
            padding:0 8px;
        }
    }

</style>