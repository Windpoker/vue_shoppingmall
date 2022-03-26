<template>
    <div class="login_container">
        <div class="login_box"></div>
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
}
</style>
