<template>
    <div class="login_container">
        <div class="login_box">
            <div class="avatar_box">
                <img src="../assets/patpat_logo.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
//scoped 是为了防止组件之间的样式冲突
.login_container{
    background-color: #2b4b6b;
    height: 100%;
}

.login_box{
    width: 450px;
    height: 300px;
    background-color: white;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);

    .avatar_box{
        height: 130px;
        width: 130px;
        border-radius: 50%;
        border: 2px solid #eee;
        padding: 25px;
        box-shadow: 0 0 5px #ddd;
        position: absolute;
        left: 50%;
        // 百分比是根据avatar_box的大小决定的
        transform: translate(-50%,-50%);
        background: #fff;
        img{
            height: 100%;
            width: 100%;
            // background-color: #fff;
        }
    }
}
</style>
