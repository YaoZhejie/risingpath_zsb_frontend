<template>
<div class="signUp-page">
  <loginLogo/>
  <div class="signUp">
    <div class="signUp-head">
      <span>用户注册</span>
    </div>
    <el-form :model="registerForm" status-icon :rules="rules" ref="registerForm" label-width="70px" class="demo-ruleForm">
      <el-form-item prop="userName" label="姓名">
        <el-input v-model="registerForm.userName" placeholder="姓名"></el-input>
      </el-form-item>
      <el-form-item prop="userAccount" label="用户名">
        <el-input v-model="registerForm.userAccount" placeholder="登录账号不小于四位"></el-input>
      </el-form-item>
      <el-form-item prop="professInfo" label="所学专业">
        <el-input v-model="registerForm.professInfo" placeholder="所学专业"></el-input>
      </el-form-item>
      <el-form-item prop="userPassword" label="密码">
        <el-input type="password" placeholder="不小于八位" v-model="registerForm.userPassword"></el-input>
      </el-form-item>
      <el-form-item prop="checkPassword" label="确认密码">
        <el-input type="password" placeholder="不小于八位" v-model="registerForm.checkPassword"></el-input>
      </el-form-item>
      <el-form-item prop="phone" label="手机" >
        <el-input  placeholder="手机" v-model="registerForm.phone"></el-input>
      </el-form-item>
      <div class="login-btn">
        <el-button @click="goback(-1)">取消</el-button>
        <el-button type="primary" @click="SignUp">确定</el-button>
      </div>
    </el-form>
  </div>
</div>
</template>

<script>
import loginLogo from '../components/LoginLogo'
import { mixin } from '../mixins'
import { rules, cities } from '../assets/data/form'
import axios from 'axios'
export default {
  name: 'SignUp-page',
  components: {
    loginLogo
  },
  mixins: [mixin],
  
  data () {
    return {
      registerForm: { // 注册
        userName: '',
        userAccount:'',
        userPassword: '',
        checkPassword:'',
        phone: '',
        professInfo:''
      },
      rules: {
      },
    }
  },
  created () {
    this.rules = rules

  },
  methods: {
     
    SignUp () {
      let _this = this
      let UserRegisterRequest = {
        userAccount: this.registerForm.userAccount,
        userPassword: this.registerForm.userPassword,
        checkPassword: this.registerForm.checkPassword,
        userName: this.registerForm.userName,
        professInfo: this.registerForm.professInfo,
        phone: this.registerForm.phone,

        }

      axios.post('/user/register', UserRegisterRequest, {
              headers: { 'Content-Type': 'application/json' }
          }).then(response => {
              // 根据 code 判断是否注册成功
              if (response.data.code === 1) {
                // 登录成功，显示相应内容
                _this.notify('注册成功', 'success')
                setTimeout(function () {
              _this.$router.push({path: '/'})
            }, 2000)
              } else {
                // 登录失败，显示相应内容
                _this.notify('注册失败,请检查输入密码是否一致', 'error')
              }
            }).catch(error => {
              console.log(error)
            })
    },
    goback (index) {
      this.$router.go(index)
    }
  }
}

</script>

<style lang="scss" scoped>
@import '../assets/css/sign-up.scss';
</style>
