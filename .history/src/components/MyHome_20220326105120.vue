<template>
    <div>
        Home组件
         <el-button type="info" @click="SignOut">退出</el-button>
    </div>
</template>

<!-- ----------------------下面是script文件----------------- -->
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    SignOut() {
      // 清空token，以此实现账户退出
      window.sessionStorage.clear()
      // 跳转到登录页
      this.$router.push('/mylogin')
    }
  }

})
</script>

<!-- ----------------------下面是script文件----------------- -->
<style lang="less" scoped>

</style>
