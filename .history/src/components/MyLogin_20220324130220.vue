/* eslint-disable no-undef */
/* eslint-disable no-undef */
<template>
    <div class="login_container">
        <div class="login_box">
            <!-- 头像区域 -->
            <div class="avatar_box">
                <img src="../assets/patpat_logo.png" alt="">
            </div>
            <!-- 登录表单区域 -->
            <!-- Ref帮助组件拿到表单的实例对象； :model="form"指的是将表单内的数据绑定到form对象中 -->
            <el-form ref="LoginFormRef" :model="LoginForm" :rules="LoginFormRules" label-width="0px" class="login_form">
                <el-form-item prop="username">
                    <el-input v-model="LoginForm.username" prefix-icon="el-icon-user-solid" placeholder="请输入登录账号"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="LoginForm.password" prefix-icon="el-icon-view" placeholder="请输入密码" type="password"></el-input>
                </el-form-item>
                <el-form-item class="btns">
                    <el-button type="info" @click="resetLoginForm">清空</el-button>
                    <el-button type="success" @click="Login">登录</el-button>
                </el-form-item>
        </el-form>
        </div>
    </div>
</template>

<!-- ----------------------下面是script文件----------------- -->
<script>

export default {
  data () {
    return {
      // 这是登录表单的数据绑定对象
      LoginForm: {
        username: 'wzz',
        password: '123456'
      },
      // 这是表单的验证规则
      LoginFormRules: {
        // 验证用户名是否合法
        username: [
          { required: true, message: '请输入登录账号', trigger: 'blur' },
          { min: 3, max: 10, message: '账号应该是3到10个字符', trigger: 'blur' }
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 3, max: 10, message: '密码应该是6到20个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 点击重置按钮，重置登录表单
    resetLoginForm () {
      this.$refs.LoginFormRef.resetFields()
    }
  },
  Login () {
    this.$refs.LoginFormRef.validate(async valid => {
      if (!valid) return
      const result = await this.$http.post('login', this.LoginForm)
      console.log(result)
    })
  }
}

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

.login_form{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
}

.btns{
    display: flex;
    justify-content: flex-end;
}
</style>
