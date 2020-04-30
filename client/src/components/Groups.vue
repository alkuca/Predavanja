<template>
    <div class="main-container">
        <div class="title">
            <div class="title-inner-container">
                <p>Groups</p>
            </div>
        </div>
        <div class="groups-container">

        </div>
    </div>
</template>

<script>
    export default {
        name: "Groups"
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
    .groups-container{
        margin: 45px 40px 0 40px;
    }
    @media screen and (max-width: 750px) {
        .title-inner-container{
            padding:0 10px 0 10px;
        }
        .title-inner-container span{
            font-size: 12px;
        }
    }
</style>