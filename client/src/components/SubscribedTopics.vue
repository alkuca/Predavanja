<template>
    <div class="main-container">
        <div class="title">
            <div class="title-inner-container">
                <p v-bind:class="{lighter: editToggled}">Subscribed Topics</p>
                <span v-if="editToggled">/ Edit</span>
            </div>
            <div class="nav-buttons">
                <button v-on:click="toggleEdit" v-if="!editToggled" class="edit-button">Edit</button>
                <button class="return-button" v-if="editToggled" v-on:click="toggleEdit">
                    <img class="return-arrow" src="../assets/navbarArrow.svg" alt="navbar arrow" />
                </button>
                <button v-on:click="updateTopics" v-if="editToggled" class="save-button">Save Changes</button>
            </div>
        </div>
        <div v-if="!editToggled" class="subscribed-topics-container">
            <ul>
                <li v-for="topic in subscribedTopics" v-bind:key="topic">
                    {{ topic }}
                </li>
            </ul>
        </div>
        <TopicSelect v-if="editToggled" :allTopics="allTopics" :subscribedTopics="subscribedTopics" v-on:childToParent="onChildClick"/>
    </div>
</template>

<script>
    import TopicSelect from "./TopicSelect";
    import firebase from "firebase";
    export default {
        name: "SubscribedTopics",
        components: {TopicSelect},
        data() {
            return {
                checkedTopics: null,
                allTopics: ["Ekonomija", "Matematika", "Informatika", "Programiranje", "Blockchain", "Marketing", "Facebook Marketing"],
                editToggled: false
            }
        },
        props:{
            subscribedTopics:{
              type:Array
            }
        },
        methods:{
            toggleEdit(){
                this.editToggled = !this.editToggled
            },
            onChildClick (value) {
              this.checkedTopics = value
            },
            updateTopics(){
              let userRef = firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid)
              userRef.update({
                subscribed_topics: this.checkedTopics
              });
              this.toggleEdit();
            }
        }
    }
</script>

<style scoped>
    .main-container{
        width:100%;
        height:100%;
    }
    .title{
        display: flex;
        height: 55px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.15);
        background: white;
        border-radius: 5px 5px 0 0;
        align-items: center;
        justify-content: space-between;
    }
    .title-inner-container{
        padding: 0 10px 0 40px;
        display: flex;
        align-items: center;
    }
    .title-inner-container p{
        font-weight: bold;
        color: #676767;
    }
    .edit-button{
        width:96px;
        height:35px;
        font-size: 14px;
        border: 3px solid #4A50D9;
        background:white;
        color:#4A50D9;
        font-weight: bold;
        border-radius: 3px;
        margin: 0 20px 0 6px;
        outline: 0;
        cursor: pointer;
    }
    .edit-button:hover{
        border: 3px solid #4A50D9;
        transition: 0.1s;
        background:#4A50D9;
        color:white;
    }
    .save-button{
        width:120px;
        height:35px;
        font-size: 14px;
        border: 3px solid #4A50D9;
        background:#4A50D9;
        color:white;
        font-weight: bold;
        border-radius: 3px;
        margin: 0 20px 0 6px;
        outline: 0;
        cursor: pointer;
    }
    .save-button:hover{
        opacity: 0.8;
        transition: 0.1s;
    }
    .subscribed-topics-container{
        margin: 0 0 0 40px;
    }
    .subscribed-topics-container ul{
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: start;
    }
    .subscribed-topics-container ul li{
        display: inline-block;
        margin: 10px 0;
        padding: 10px 20px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
        font-weight: bold;
        background: #5c61d6;
        color:white;
        border-radius: 3px;
    }
    .return-button{
        height:35px;
        margin: 0 6px 0 10px;
        border:0;
        background:#eaebff;
        width:32px;
        border-radius: 4px;
        outline: 0;
        cursor: pointer;
    }
    .return-arrow{
        transform:rotate(90deg);
        transform-origin: 58% 36%;
    }
    .title-inner-container span{
        color: #636363;
        font-weight: bold;
        margin-left: 5px;
    }
    .lighter{
        color:#b7b7b7 !important;
    }
    @media screen and (max-width: 1400px) {
        .subscribed-topics-container ul li{
            margin: 7px 0;
            padding: 10px 20px;
            font-size: 14px;
        }
    }
    @media screen and (max-width: 710px) {
        .title-inner-container p{
            font-size: 13px;
        }
        .title-inner-container{
            padding:0 10px 0 12px;
        }
        .title-inner-container span{
            font-size: 12px;
            display: none;
        }
        .edit-button{
            margin: 0 12px 0 6px
        }
        .save-button{
            margin: 0 12px 0 6px
        }
        .return-button{
            margin: 0 2px 0 10px;
        }
        .subscribed-topics-container ul li{
            margin: 5px 0;
            padding: 8px 16px;
            font-size: 12px;
        }
    }
    @media screen and (max-width: 700px) {
        .title-inner-container{
            padding:0 10px 0 12px;
        }
        .title-inner-container span{
            font-size: 12px;
            display: none;
        }
        .edit-button{
            margin: 0 12px 0 6px
        }
        .save-button{
            margin: 0 12px 0 6px
        }
        .return-button{
            margin: 0 2px 0 10px;
        }
        .subscribed-topics-container ul li{
            margin: 5px 0;
            padding: 9px 16px;
            font-size: 13px;
        }
        .subscribed-topics-container{
            margin: 0 0 0 15px;
        }
    }
</style>