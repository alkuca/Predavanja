<template>
    <div class="note-container">
        <h1>12h ago</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut dolor purus.
            Lorem ipsum dolor sit amet consectetur adipiscing. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vivamus ut dolor purus.Lorem ipsum dolor sit amet
            consectetur adipiscing.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vivamus ut dolor purus.
        </p>
    </div>
</template>

<script>
    export default {
        name: "LectureNote"
    }
</script>

<style scoped>
    .note-container{
        width:60%;
        border-radius: 5px;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16);
        padding:8px 20px;
        margin: 12px 0;
    }
    .note-container h1{
        font-size: 16px;
        font-weight: bold;
        color: #434343;
    }
    .note-container p{
        font-size: 13px;
        font-weight: bold;
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