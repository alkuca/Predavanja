<template>
    <router-link v-bind:to="{ name: 'lecture', params: {id: upcomingLecture.id}}">
        <div class="upcoming-lecture">
            <p class="date">{{ upcomingLecture.date_happening | moment  }}</p>
            <p class="title">{{ upcomingLecture.title }}</p>
            <div class="lecturer">
                <img class="lecturer-image" src="../assets/teacher.png" alt="lecturer"/>
                <p class="name">{{  upcomingLecture.author }}</p>
            </div>
        </div>
    </router-link>
</template>

<script>
    import moment from "moment";

    export default {
      name: "UpcomingLecture",
      props: {
        upcomingLecture:{
          type: Object
        }
      },
      filters: {
        moment: function (date) {
          return moment(date).format("MMMM Do YYYY");
        }
      }
    }
</script>

<style scoped>
    a{
        text-decoration: none;
    }
    .upcoming-lecture{
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
    .upcoming-lecture p{
        padding: 0 30px;
    }
    .title{
      width: 30%;
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
    @media screen and (max-width: 1370px) {
        .upcoming-lecture p{
            font-size:14px;
        }
    }
    @media screen and (max-width: 1100px) {
        .upcoming-lecture p{
            font-size:13px;
        }
    }
    @media screen and (max-width: 1000px) {
        .upcoming-lecture p{
            padding:0 15px;
        }
        .upcoming-lecture div{
            padding:0 15px;
        }
    }
    @media screen and (max-width: 880px) {
        .upcoming-lecture p{
            padding:0 10px;
        }
        .upcoming-lecture div{
            padding:0 10px;
        }
        .upcoming-lecture p{
            font-size:11px;
        }
    }
    @media screen and (max-width: 700px) {
        .upcoming-lecture p{
            padding:0 15px;
        }
        .upcoming-lecture div{
            padding:0 15px;
        }
        .upcoming-lecture p{
            font-size:13px;
        }
    }
    @media screen and (max-width: 580px) {
        .upcoming-lecture p{
            padding:0 7px;
        }
        .upcoming-lecture div{
            padding:0 7px;
        }
        .upcoming-lecture p{
            font-size:11px;
        }
        .upcoming-lecture{
            padding: 5px 0;
            margin: 13px 0;
        }
        .lecturer img{
            width:30px;
            height:30px;
        }
    }
</style>