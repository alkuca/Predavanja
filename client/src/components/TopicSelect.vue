<template>
    <div>
        <Navbar/>
        <div class="main-container">
            <div class="inner-container">
                <h1>Select topics</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut dolor purus.</p>
                <div class="topics-container">
                    <ul>
                        <li v-for="topic in allTopics" v-bind:key="topic" @click="handleSelectItem(topic)">
                            <div class="select" v-bind:class="{ selected: checkedTopics.indexOf(topic) !== -1 }"/>
                            <p :value="topic" :id="topic">{{topic}}</p>
                        </li>
                    </ul>
                    <router-link to="/">
                        <button>Continue</button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from "./Navbar";
    export default {
        name: "TopicSelect",
        components: {Navbar},
        data(){
            return{
                checkedTopics: [],
                allTopics: ["Ekonomija","Fizika","Matematika","Informatika","Programiranje","Blockchain","Marketing","Facebook Marketing"]
            }
        },
        methods: {
            handleSelectItem(item){
                if(!this.checkedTopics.includes(item) ){
                    this.checkedTopics.push(item)
                }else {
                    let index = this.checkedTopics.indexOf(item);
                    this.$delete(this.checkedTopics, index)
                }
            }
        }
    }
</script>

<style scoped>
    .main-container{
        background: #F9F9F9;
    }
    .inner-container{
        background: white;
        margin: 0 50px 0 50px;
        position: relative;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    .inner-container h1{
        font-size:22px;
        margin: 0;
        padding: 30px 20px 10px 20px;
    }
    .inner-container p{
        padding: 10px 20px;
        text-align: center;
    }
    .topics-container{
        width:60%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin: 0 0 50px 0;
        align-items: center;
    }
    .topics-container ul{
        list-style: none;
        padding: 0;
        width:100%;
    }
    .topics-container ul li{
        height: 56px;
        display: flex;
        align-items: center;
        margin: 20px 0;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
        cursor: pointer;
        font-weight: bold;
        color:#707070;
    }

    .inner-container button{
        margin: 10px 0 0 0;
        width:130px;
        height:40px;
        border:none;
        background:#4A50D9;
        font-weight: bold;
        color:white;
        font-size:15px;
        border-radius: 5px;
        cursor: pointer;
    }
    .inner-container a{
        align-self: flex-end;
    }
    .selected{
        background: #4A50D9 !important;
        border: 2px solid #4A50D9 !important;
    }
    .select{
        width:14px;
        height:14px;
        border-radius: 50%;
        border:2px solid #929292;
        margin: 0 25px;
    }

    @media screen and (max-width: 900px) {
        .topics-container{
            width:80%;
        }
    }
    @media screen and (max-width: 700px) {
        .inner-container h1{
            font-size:18px;
            padding: 20px 20px 0 20px;
        }
        .inner-container p{
            font-size: 14px;
            padding: 5px 25px;
        }
        .topics-container ul li{
            margin: 17px 0;
            height: 50px;
        }
        .topics-container ul{
            margin: 0;
        }
    }
    @media screen and (max-width: 550px) {
        .topics-container{
            width:85%;
        }
        .inner-container{
            margin: 0;
        }
        .inner-container a{
            align-self: center;
        }
    }
</style>