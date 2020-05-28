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
            Vivamus ut dolor purus.
        </p>
        <div class="stars-container">
            <star-rating :rating="3.8" :show-rating="false" :star-size="15" :read-only="true" :increment="0.01"></star-rating>
        </div>
    </div>
</template>

<script>
    import StarRating from "vue-star-rating";

    export default {
        name: "LectureReview",
        components: {
            StarRating
        },
        data(){
            return{
                rating: 0
            }
        },
    }
</script>

<style scoped>
    .review-container{
        width:60%;
        border-radius: 5px;
        box-shadow: 0 3px 10px rgba(0,0,0,0.20);
        padding:8px 20px;
        margin: 12px 0;
    }
    .review-container h1{
        font-size: 14px;
        font-weight: bold;
        color: #434343;
    }
    .review-container p{
        font-size: 12px;
        color: #434343;
        line-height: 17px;
        margin-top:5px;
        margin-bottom:8px;
    }
    .review-top{
        display: flex;
        justify-content: space-between;
        align-items: center;
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
    .stars{
        width:80px;
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