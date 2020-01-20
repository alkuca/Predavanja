<template>
    <div>
        <Navbar/>
        <LecturesNavbar/>
        <div class="lectures-container">
            <LectureCard/>
            <LectureCard/>
            <LectureCard/>
        </div>
    </div>
</template>

<script>
    import Navbar from "./Navbar";
    import LecturesNavbar from "./LecturesNavbar";
    import LectureCard from "./LectureCard";
    export default {
        name: "Home",
        components: {LectureCard, Navbar, LecturesNavbar}
    }
</script>

<style scoped>
    .lectures-container{
        margin-top:5px;
        display: flex;
        flex-wrap: wrap;
        padding:0 25px;
        position: relative;
    }
</style>