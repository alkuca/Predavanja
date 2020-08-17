<template>
    <div class="comment-container">
        <div class="comment-top">
            <h1>{{ comment.user }}</h1>
            <div class="time">
              <p>{{ comment.date | moment }}</p>
            </div>
        </div>
        <p>{{ comment.value }}</p>
    </div>
</template>

<script>
  import moment from "moment";

    export default {
      name: "LectureComment",
      props:{
        comment:{
          type: Object
        }
      },
      filters: {
        moment: function (date) {
          return moment(date).format("MMMM Do YYYY, H:mm");
        }
      },
    }
</script>

<style scoped>
    .comment-container{
        width:60%;
        border-radius: 5px;
        box-shadow: 0 3px 10px rgba(0,0,0,0.20);
        padding:8px 20px;
        margin: 12px 0;
    }
    .comment-container h1{
        font-size: 13px;
        font-weight: bold;
        color: #434343;
        margin: 5px 0 0 0;
    }
    .comment-container p{
        font-size: 12px;
        color: #434343;
        line-height: 17px;
        margin-top:5px;
    }
    .comment-top{
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
        .comment-container{
            width:80%;
        }
    }
    @media screen and (max-width: 800px) {
        .comment-container{
            width: initial;
        }
    }
    @media screen and (max-width: 580px) {
        .comment-container{
            padding:8px 12px;
        }
    }
</style>