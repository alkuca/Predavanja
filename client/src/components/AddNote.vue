<template>
  <div class="add-note-container">
    <div class="add-note-top">
      <h1>Add note as the lecturer {{ firstName }} {{ secondName }}</h1>
    </div>
    <form>
      <textarea required class="textarea" id="note" name="note" v-model="value"/>
      <button v-on:click="postNote">Post</button>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "AddNote",
  data(){
    return{
      value: ""
    }
  },
  props:{
    notes:{
      type: Array
    },
    firstName:{
      type: String
    },
    secondName:{
      type: String
    }
  },
  methods:{
    postNote(e){
      e.preventDefault()
      let newNote = {
        user : this.firstName + " " + this.secondName,
        value : this.value,
        date : Date.now(),
        user_id : firebase.auth().currentUser.uid
      }
      let lectureRef = firebase.firestore().collection("lectures").doc(this.$route.params.id)
      lectureRef.update({
        notes: firebase.firestore.FieldValue.arrayUnion(newNote)
      });
      this.notes.push(newNote)
      this.value = ""
    }
  },
}
</script>

<style scoped>
.add-note-container{
  width:60%;
  border-radius: 5px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.20);
  padding:8px 20px;
  margin: 12px 0;
}
.add-note-container h1{
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
  .add-note-container{
    width:80%;
  }
}
@media screen and (max-width: 800px) {
  .add-note-container{
    width: initial;
  }
}
@media screen and (max-width: 580px) {
  .add-note-container{
    padding:8px 15px;
  }
}
</style>