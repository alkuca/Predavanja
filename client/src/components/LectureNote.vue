<template>
  <div class="note-container">
    <h1>{{ note.date | moment }}</h1>
    <p>{{ note.value }}</p>
  </div>
</template>

<script>
    import moment from "moment";

    export default {
      name: "LectureNote",
      props:{
        note:{
          type: Object
        }
      },
      filters: {
        moment: function (date) {
          return moment(date).format("MMMM Do YYYY, H:mm");
        }
      }
    }
</script>

<style scoped>
    .note-container{
        width:60%;
        border-radius: 5px;
        box-shadow: 0 3px 10px rgba(0,0,0,0.20);
        padding:8px 20px;
        margin: 12px 0;
    }
    .note-container h1{
        font-size: 13px;
        font-weight: bold;
        color: #434343;
    }
    .note-container p{
        font-size: 12px;
        color: #434343;
        line-height: 17px;
    }
    @media screen and (max-width: 1000px) {
        .note-container{
            width:80%;
        }
    }
    @media screen and (max-width: 800px) {
        .note-container{
            width: initial;
        }
    }
</style>