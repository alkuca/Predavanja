<template>
    <div class="nav-container" v-on:click="emitToParent">
        <nav>
            <div class="lectures-links">
                <a class="following-lectures" v-on:click="lectureToggle = 'following'" v-bind:class="{linkActive: lectureToggle === 'following'}">Following Lectures</a>
                <a class="all-lectures" v-on:click="lectureToggle = 'all'" v-bind:class="{linkActive: lectureToggle === 'all'}">All Lectures</a>
                <a class="upcoming-lectures" v-on:click="lectureToggle = 'upcoming'" v-bind:class="{linkActive: lectureToggle === 'upcoming'}">Upcoming</a>
                <div class="underline" v-bind:class="{all: lectureToggle === 'all', following: lectureToggle === 'following', upcoming: lectureToggle === 'upcoming' }"/>
                <!--
                <div class="category-menu" v-on:click="isOpen = !isOpen">
                    <p>Category</p>
                    <img class="dropdown-arrow" src="../assets/nav-arrow.svg" alt="nav arrow" v-bind:class="{rotate: isOpen}" />
                    <div class="category-menu-dropdown" v-bind:class="{toggled: isOpen}">
                        <a>Statistics</a>
                        <a >Physics</a>
                        <a>Technology</a>
                        <a>Marketing</a>
                        <a>Biology</a>
                        <a>Mathematics</a>
                    </div>
                </div>
                -->
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
                lectureToggle:"following",
                categoryToggle:""
            }
        },
        methods: {
            emitToParent () {
                this.$emit('childToParent', this.lectureToggle)
            },
            emitCategoryToParent(e) {
              this.categoryToggle = e.target.text
              this.$emit('categoryToParent', this.categoryToggle)
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
        padding: 17px 40px;
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
        white-space: nowrap;

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
        width:calc(100% + 87px);
        left:-56px;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.22);
        border-radius: 5px;
        top:40px;
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
        transition: 0.1s ease-in;
        background: none;
        margin-left:12px;
        margin-top: 3px;
    }
    .rotate{
        transform: rotate(0) !important;
        transition: 0.1s ease-out;
    }
    .toggled{
        top:60px !important;
        transition: 0.1s;
        opacity: 1 !important;
        visibility: visible !important;
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
    .upcoming-lectures:hover ~ .underline{
        width:115px;
        left:418px;
        transition: 0.2s;
    }
    .all{
        left:246px;
        width:130px;
    }
    .upcoming{
        width:115px;
        left:418px;
    }
    @media screen and (max-width: 1400px) {
        .nav-container{
            height: 60px;
        }
        nav{
            height:50px;
        }
        .underline{
            width: 134px;
            left: 15px;
        }
        .all-lectures:hover ~ .underline{
            left: 174px;
            width: 109px;
        }
        .following-lectures:hover ~ .underline{
            width: 134px;
            left: 15px;
        }
        .upcoming-lectures:hover ~ .underline{
            width: 92px;
            left: 304px;
        }
        .all{
            left: 174px;
            width: 109px;
        }
        .upcoming{
            width: 92px;
            left: 304px;
        }
        .category-menu-dropdown a{
            padding: 12px 5px !important;
            font-size: 12px !important;
        }
        .lectures-links a{
            font-size: 13px;
            padding: 17px 25px;
        }
        .lectures-links p{
            font-size: 13px;
        }
        .category-menu-dropdown{
            width: calc(100% + 70px);
            left: -45px;
        }
        .toggled{
            top: 54px !important;
        }
        .category-menu{
            margin: 0 25px;
        }
    }
    @media screen and (max-width: 650px) {
        .lectures-links a {
            font-size:12px;
            padding: 17px 13px;
        }
        .category-menu-dropdown a{
            padding: 13px 13px !important;
        }
        .lectures-links p {
            font-size:12px;
        }
        .category-menu{
            margin: 0 3px;
        }
        .lectures-links{
            justify-content: space-evenly;
        }
        .nav-container{
            padding: 0 15px;
        }
        nav{
            width:100%;
        }
        .lectures-links{
            width:100%;
        }
        .underline{
            display: none;
        }
        .lectures-links a{
            border-bottom: 2px solid transparent;
        }
        .linkActive{
            border-bottom: 2px solid #46497E !important;
        }
        .lectures-links p {
            font-size:12px;
        }
    }
    @media screen and (max-width: 550px) {
        .category-menu{
            display: none;
        }
    }

</style>