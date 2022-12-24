<template>
  <div class="big-box">
    <div class="login-ll">
      <div class="zhuye">
        <template>
          <router-link to="/">主页</router-link>
          /
          <span>登录</span>
        </template>
      </div>
      <div class="biaodan">
        <template>
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
            class="demo-ruleForm">
            <el-form-item label="用户名" prop="username">
              <el-input type="text" v-model.trim="ruleForm.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="token">
              <el-input type="password" v-model.trim="ruleForm.token" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="login">提交</el-button>
              <el-button>重置</el-button>
            </el-form-item>
          </el-form>
        </template>
      </div>
    </div>
    
  </div>
</template>

<script>
import { login } from '../plugins/api'
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        token: "7de298fc-2bae-4afb-b20b-ca85130e4159",
      },
      rules: {
        username: [
          { required: true, message: '用户名', trigger: 'blur' }
        ],
        token: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login() {
      this.$refs.ruleForm.validate(async (valid) => {
        if (valid) {
          // 校验成功
          const res = await login(this.ruleForm.token)
          console.log(res)
          sessionStorage.setItem('userInfo',JSON.stringify(res))
          sessionStorage.setItem('accesstoken',this.ruleForm.token)
          this.$router.push('/')
          this.$message({
            message: '恭喜你，登陆成功',
            type: 'success'
          })
          // this.$router.alert('登陆成功')
        }
      })
    }
  }
}

</script>

<style lang="less">
 .login-ll {
    width: 1400px;
    // margin: 0 auto;
    margin-left: 67px;
    border-radius: 4px;
    overflow: hidden;
  float: left;
    .zhuye {
      border-top-left-radius: 4px;
    border-top-right-radius: 4px;
      // border-radius: 4px;
      // width: 1400px;
      height: 30px;
      // margin-left: 10px;
      background-color: #ccc;
      margin-top: 30px;
      text-align: center;
    }

    .biaodan {
      background-color: #fff;
      width: 1400px;
      height: 240px;
    }
  }
  
 
</style>