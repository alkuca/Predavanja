<template>
    <div class="review-container">
        <div class="review-top">
            <h1>Stacey Johnson</h1>
            <div class="time">
                <p>19.05.2020</p>
                <p>at 13:56</p>
            </div>
        </div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut dolor purus. Consectetur adipiscing elit.
        </p>
    </div>
</template>

<script>
    export default {
        name: "LectureReview"
    }
</script>

<style scoped>
    .review-container{
        width:60%;
        border-radius: 5px;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16);
        padding:8px 20px;
        margin: 12px 0;
    }
    .review-container h1{
        font-size: 16px;
        font-weight: bold;
        color: #434343;
    }
    .review-container p{
        font-size: 13px;
        font-weight: bold;
        color: #434343;
        line-height: 17px;
        margin-top:5px;
    }
    .review-top{
        display: flex;
        justify-content: space-between;
    }
    .time{
        display: flex;
    }
    .time p{
        padding: 0 2px;
        font-size: 11px;
        color:#8A8A8A;
        font-weight: normal;
    }
    @media screen and (max-width: 1000px) {
        .review-container{
            width:80%;
        }
    }
    @media screen and (max-width: 800px) {
        .review-container{
            width: initial;
        }
    }
</style>