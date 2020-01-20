<template>
    <div>
        <Navbar/>
        <div class="section-left-container">
            <div class="section-left">
                <div class="lecturer-image-name">
                    <img class="lecturer-image" src="../assets/profileImage.png" alt="lecturer"/>
                    <h1>Adam Smith</h1>
                    <p>Basic User</p>
                </div>
            </div>
        </div>
        <div class="section-bottom">
            <nav>
                <a>Lectures</a>
                <a>Groups</a>
                <a>Lorem Ipsum</a>
                <a>Lorem Ipsum</a>
            </nav>
            <button>Settings</button>
        </div>
        <div class="section-right">

        </div>

    </div>
</template>

<script>
    import Navbar from "./Navbar";
    export default {
        name: "Account",
        components: {Navbar}
    }
</script>

<style scoped>
    .section-left-container{
        padding:30px 50px 0 50px;
        background: #4A50D9;
    }
    .section-left{
        width:280px;
        height:calc(40vh - 60px);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px 5px 0 0;
        background: #2F35B5;
    }
    .lecturer-image-name{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .lecturer-image-name img{
        margin-bottom:20px;
        width:200px;
        border-radius: 50%;
    }
    .lecturer-image-name h1{
        font-size:19px;
        color:white;
    }
    .lecturer-image-name p{
        margin:5px;
        color:white;
    }
    .section-right{
        background: white;
        width:calc(100% - 420px);
        height:calc(100% - 120px);
        position: absolute;
        top:90px;
        right:55px;
        border-radius: 5px;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.16);
    }
    .section-bottom{
        width:280px;
        height:calc(60vh - 80px);
        background: white;
        margin:20px 50px 0 50px;
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.16);
    }
    .section-bottom nav{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top:5px;
    }
    .section-bottom nav a {
        padding: 18px 15px;
        font-weight: bold;
    }
    .section-bottom button{
        align-self: flex-end;
        width: 100px;
        height:34px;
        margin: auto 5px 5px 0;
        border:none;
        background:none;
        color:#0093A4;
        font-weight: bold;
        font-size:15px;
    }
</style>