<template>
    <router-link to="/lecture">
        <div class="upcoming-lecture">
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
    .upcoming-lecture{
        display: flex;
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
    }
</style>