<template>
    <div>
        <Navbar/>
        <LecturesNavbar v-on:childToParent="onChildClick"/>
        <div class="lectures-container">
            <div class="lectures" v-if="lectureNavToggle === 'following'">
                <LectureCard/>
                <LectureCard/>
                <LectureCard/>
            </div>
            <div class="lectures" v-if="lectureNavToggle === 'all'">
                <LectureCard/>
                <LectureCard/>
                <LectureCard/>
                <LectureCard/>
                <LectureCard/>
                <LectureCard/>
            </div>
            <div class="lectures" v-if="lectureNavToggle === 'upcoming'">
                <LectureCard/>
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from "./Navbar";
    import LecturesNavbar from "./LecturesNavbar";
    import LectureCard from "./LectureCard";
    export default {
        name: "Home",
        components: {LectureCard, Navbar, LecturesNavbar},
        data(){
            return{
                lectureNavToggle:"following"
            }
        },
        methods: {
            onChildClick (value) {
                this.lectureNavToggle = value
            }
        }
    }
</script>

<style scoped>
    .lectures{
        margin-top:5px;
        display: flex;
        flex-wrap: wrap;
        padding:0 25px;
        position: relative;
    }
    @media screen and (max-width: 1400px) {
        .lectures{
            padding: 0 40px;
            margin-top: 0;
        }
    }
    @media screen and (max-width: 650px) {
        .lectures{
            padding: 0 15px;
        }
    }
</style>