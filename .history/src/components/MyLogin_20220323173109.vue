<template>
    <div class="login_container">
        <div class="login_box">
            <!-- 头像区域 -->
            <div class="avatar_box">
                <img src="../assets/patpat_logo.png" alt="">
            </div>
            <!-- 登录表单区域 -->
            <el-form  label-width="0px">
                <el-form-item>
                    <el-input ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input ></el-input>
                </el-form-item>
                <el-button type="info">清空</el-button>
                <el-button type="success">登录</el-button>
        </el-form>
        </div>
    </div>
</template>

<!-- ----------------------下面是script文件----------------- -->
<script>
export default {}
</script>

<!-- ---------------------下面是CSS文件--------------------- -->
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
    box-shadow: 0 0 10px #000;

    .avatar_box{
        height: 130px;
        width: 130px;
        border-radius: 50%;
        border: 2px solid #eee;
        padding: 25px;
        box-shadow: 0 0 5px #000;
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
