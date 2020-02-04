<template>
    <div class="nav-container" v-on:click="emitToParent">
        <nav>
            <div class="lectures-links">
                <a class="following-lectures" v-on:click="allLecturesToggle = false" v-bind:class="{linkActive: !allLecturesToggle}">Following Lectures</a>
                <a class="all-lectures" v-on:click="allLecturesToggle = true" v-bind:class="{linkActive: allLecturesToggle}">All Lectures</a>
                <div  class="underline" v-bind:class="{allLectures: allLecturesToggle}" />
                <div class="category-menu" v-on:click="isOpen = !isOpen">
                    <p>Category</p>
                    <img class="dropdown-arrow" src="../assets/nav-arrow.svg" alt="nav arrow" v-bind:class="{rotate: isOpen}" />
                    <div class="category-menu-dropdown" v-bind:class="{toggled: isOpen}">
                        <a>Statistics</a>
                        <a>Physics</a>
                        <a>Technology</a>
                        <a>Marketing</a>
                        <a>Biology</a>
                        <a>Mathematics</a>
                    </div>
                </div>
                <div class="search-container">
                    <img class="glass" src="../assets/glass.svg" alt="search icon"/>
                    <input class="search" type="search" autocomplete="off" placeholder="Search...">
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "LecturesNavbar",
        data(){
            return{
                isOpen:false,
                allLecturesToggle: false
            }
        },
        methods: {
            emitToParent () {
                this.$emit('childToParent', this.allLecturesToggle)
            }
        }
    }
</script>

<style scoped>
    *{
        box-sizing: border-box;
        margin:0;
        padding:0;
    }
    .lectures-links a {
        font-weight: bold;
        font-size:16px;
        text-decoration: none;
        padding: 17px 10px;
        margin: 0 30px;
        cursor: pointer;
        color: #676767;
    }
    .lectures-links p {
        font-weight: bold;
        font-size:16px;
        text-decoration: none;
        color: #676767;
    }
    .nav-container{
        padding: 0 50px;
        height: 70px;
        position: relative;
        z-index: 2;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        background: white;
    }
    nav{
        display: flex;
        height:55px;
        border-radius: 6px;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.22);
        background: white;
    }
    .lectures-links{
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
    }
    .linkActive{
        color:#46497E !important;
    }
    .category-menu{
        position: relative;
        cursor: pointer;
        padding: 18px 5px;
        margin: 0 30px;
        display: flex;
    }
    .category-menu-dropdown{
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        width:calc(100% + 100px);
        left:-56px;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.22);
        border-radius: 5px;
        top:-20px;
        z-index: -1;
        transition: 0.1s;
        opacity: 0;
        visibility: hidden;
    }
    .category-menu-dropdown a{
        width:100%;
        padding:16px 5px;
        text-align: center;
        margin:0;
        color: #232323;
        background: white;
        border-bottom:1px solid rgba(59, 59, 255, 0.08);
        cursor: pointer;
    }
    .category-menu-dropdown a:hover{
        background: #E1E2FF;
    }
    .dropdown-arrow{
        transform: rotate(-90deg);
        transition: 0.2s ease-in;
        background: none;
        margin-left:12px;
        margin-top: 3px;
    }
    .rotate{
        transform: rotate(0) !important;
        transition: 0.2s ease-out;
    }
    .toggled{
        top:60px !important;
        transition: 0.1s;
        opacity: 1 !important;
        visibility: visible !important;
    }
    .search{
        border:none;
        font-size: 16px;
        outline:none;
    }
    .search::placeholder{
        color:#B9B9B9;
        font-weight: bold;
    }
    .glass{
        margin-right:7px;
    }
    .search-container{
        padding: 18px 5px;
        margin: 0 30px;
        display: flex;
    }
    .underline{
        position: absolute;
        height:3px;
        background: #46497E;
        bottom:0;
        width:165px;
        left:30px;
        transition: 0.2s;
        border-radius: 10px 10px 0 0;
    }
    .all-lectures:hover ~ .underline{
        left:246px;
        width:130px;
        transition: 0.2s;
    }
    .following-lectures:hover ~ .underline{
        width:165px;
        left:30px;
        transition: 0.2s;
    }
    .allLectures{
        left:246px ;
        width:130px ;
    }
</style>