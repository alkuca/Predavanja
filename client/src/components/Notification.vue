<template>
    <div class="notification">
        <div class="icon">
            <img src="../assets/comment.svg" alt="comment"/>
        </div>
        <div class="notification-text">
            <p class="notification-lecture">Functional Programing</p>
            <p class="notification-type">Collect your Reward</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Notification"
    }
</script>

<style scoped>
    .notification{
        border-radius: 4px;
        width:100%;
        background: #2F35B5;
        display: flex;
        padding: 8px 0;
        position: relative;
        cursor: pointer;
        margin-bottom:12px;
    }
    .icon{
        width:25%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .icon img{
        width: 30px;
    }
    .notification-text{
        width:75%
    }
    .notification-lecture{
        padding:4px 5px;
        font-size: 13px;
        color:white;
        font-weight: bold;
        margin: 0;
    }
    .notification-type{
        padding:4px 5px;
        font-size: 13px;
        color:#B8BBF3;
        margin: 0;
    }
</style>