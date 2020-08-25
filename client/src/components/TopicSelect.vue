<template>
    <div class="inner-container">
        <h1>Select topics</h1>
        <p>Lectures with the selected categories will be displayed on your home screen under "Following Lectures"</p>
        <div class="topics-container">
            <ul>
                <li v-for="topic in allTopics" v-bind:key="topic" @click="handleSelectItem(topic)">
                    <div class="select" v-bind:class="{ selected: checkedTopics.indexOf(topic) !== -1 }"/>
                    <p :value="topic" :id="topic">{{topic}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

    export default {
        name: "TopicSelect",
        data(){
            return{
                checkedTopics: []
            }
        },
        props: ['allTopics','subscribedTopics'],
        methods: {
            handleSelectItem(item){
                if(!this.checkedTopics.includes(item) ){
                    this.checkedTopics.push(item)
                }else {
                    let index = this.checkedTopics.indexOf(item);
                    this.$delete(this.checkedTopics, index)
                }
              this.emitToParent(this.checkedTopics);
            },
          emitToParent (a) {
            this.$emit('childToParent', a)
          },
          selectAlreadySubscribedTopics(){
            this.checkedTopics = this.subscribedTopics;
            this.emitToParent(this.checkedTopics);
          },
        },
      mounted() {
        this.selectAlreadySubscribedTopics()
      }
    }
</script>

<style scoped>
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
        font-size:21px;
        margin: 0;
        padding: 25px 20px 10px 20px;
    }
    .inner-container p{
        padding: 10px 20px;
        text-align: center;
        margin:0;
    }
    .topics-container{
        width:60%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin: 0 0 20px 0;
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
    @media screen and (max-width: 1400px) {
        .topics-container{
            width:80%;
        }
        .inner-container{
            margin: 0 30px 0 30px;
        }
        .inner-container h1{
            font-size:17px;
            padding: 25px 20px 5px 20px;
        }
        .inner-container p{
            font-size:14px;
        }
        .topics-container ul{
            margin:0;
        }
        .topics-container ul li{
            height: 50px;
            margin: 15px 0;
        }
    }

    @media screen and (max-width: 700px) {
        .topics-container{
            width:90%;
        }
        .inner-container{
            margin: 0 10px 0 10px;
        }
        .inner-container h1{
            font-size:17px;
        }
        .inner-container p{
            font-size:13px;
            padding: 5px 20px 0 20px;
        }
    }
    @media screen and (max-width: 550px) {
        .inner-container{
            margin: 0;
        }
        .inner-container a{
            align-self: center;
        }
    }
</style>