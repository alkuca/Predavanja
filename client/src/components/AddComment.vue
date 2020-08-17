<template>
    <div class="add-comment-container">
        <div class="add-comment-top">
            <h1>Comment as Adam Smith</h1>
        </div>
        <form>
            <textarea required class="textarea" id="comment" name="comment" v-model="value"/>
            <button v-on:click="postComment">Post</button>
        </form>
    </div>
</template>

<script>
    import firebase from "firebase";

    export default {
      name: "AddComment",
      data(){
        return{
          author: "Adam",
          value: ""
        }
      },
      props:{
        comments:{
          type: Array
        }
      },
      methods:{
        postComment(e){
          e.preventDefault()
          let newComment = {
            user : this.author,
            value : this.value,
            date : Date.now(),
            user_id : firebase.auth().currentUser.uid
          }
          let lectureRef = firebase.firestore().collection("lectures").doc(this.$route.params.id)
          lectureRef.update({
            comments: firebase.firestore.FieldValue.arrayUnion(newComment)
          });
          this.comments.push(newComment)
          this.value = ""
        }
      }
    }
</script>

<style scoped>
    .add-comment-container{
        width:60%;
        border-radius: 5px;
        box-shadow: 0 3px 10px rgba(0,0,0,0.20);
        padding:8px 20px;
        margin: 12px 0;
    }
    .add-comment-container h1{
        font-size: 12px;
        font-weight: bold;
        color: #434343;
    }
    .textarea{
        color: #434343;
        font-size: 12px;
        outline:0;
        height: 50px;
        border-radius: 5px;
        resize: none;
        margin-left:-5px;
        padding:5px;
        border-color:#cccccc;
        width: 100%;
    }
    form{
        display: flex;
        flex-direction: column;
    }
    form button{
        align-self: flex-end;
        width:82px;
        margin: 10px -5px 3px 0;
        color:#F3F3F3;
        background: #4A50D9;
        border:0;
        font-weight: bold;
        border-radius: 3px;
        outline: 0;
        height:27px;
        cursor: pointer;
    }
    form button:hover{
        opacity: 0.9;
        transition: 0.2s;
    }
    @media screen and (max-width: 1000px) {
        .add-comment-container{
            width:80%;
        }
    }
    @media screen and (max-width: 800px) {
        .add-comment-container{
            width: initial;
        }
    }
    @media screen and (max-width: 580px) {
        .add-comment-container{
            padding:8px 15px;
        }
    }
</style>