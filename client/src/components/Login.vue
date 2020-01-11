<template>
    <div class="login-page">
        <div class="login-form-container">
            <div class="logo-container">
                <img src="../assets/logo.svg" alt="logo"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>
    .login-page{
        width:100%;
        height:100vh;
        background:#2E34CC;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .login-form-container{
        width:370px;
        height:370px;
        background:white;
        border-radius:5px;
        box-shadow: 0 0 11px rgba(0, 0, 0, 0.40);
        position:relative;
    }
    .logo-container{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        height: 110px;
    }
    .logo-container img{
        width:200px;
    }
</style>