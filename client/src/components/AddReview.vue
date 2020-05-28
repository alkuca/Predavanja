<template>
    <div class="add-review-container">
        <div class="add-review-top">
            <h1>Add a review as Adam Smith</h1>
        </div>
        <form>
            <textarea required class="textarea" id="comment" name="comment"/>
            <div class="rate-container">
                <star-rating :star-size="20" :show-rating="false" v-model="rating"></star-rating>
                <button>Post</button>
            </div>
        </form>
        <div class="stars-container">

        </div>
    </div>
</template>

<script>
    import StarRating from "vue-star-rating";

    export default {
        name: "AddReview",
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
    .add-review-container{
        width:60%;
        border-radius: 5px;
        box-shadow: 0 3px 10px rgba(0,0,0,0.20);
        padding:8px 20px;
        margin: 12px 0;
    }
    .add-review-container h1{
        font-size: 12px;
        font-weight: bold;
        color: #434343;
    }
    .add-review-container p{
        font-size: 12px;
        color: #434343;
        line-height: 17px;
        margin-top:5px;
        margin-bottom:8px;
    }
    .add-review-top{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .textarea{
        color: #434343;
        font-size: 12px;
        outline:0;
        height: 70px;
        border-radius: 5px;
        resize: none;
        margin-left:-5px;
        padding:5px;
        border-color:#cccccc;
        width: 100%;
    }
    form{
        display: flex;
        flex-direction: column;
    }
    form button{
        align-self: flex-end;
        width:82px;
        margin: 10px -5px 3px 0;
        color:#F3F3F3;
        background: #4A50D9;
        border:0;
        font-weight: bold;
        border-radius: 3px;
        outline: 0;
        height:27px;
        cursor: pointer;
    }
    form button:hover{
        opacity: 0.9;
        transition: 0.2s;
    }
    .rate-container{
        display: flex;
        justify-content: space-between;
    }
    .vue-star-rating{
        margin-top: 6px;
    }

    @media screen and (max-width: 1000px) {
        .add-review-container{
            width:80%;
        }
    }
    @media screen and (max-width: 800px) {
        .add-review-container{
            width: initial;
        }
    }
    @media screen and (max-width: 580px) {
        .add-review-container{
            padding:8px 15px;
        }
    }
</style>