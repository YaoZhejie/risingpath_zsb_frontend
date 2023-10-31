<template>
    <div class="mail">
      <el-form ref="mailForm" :model="mail" :rules="rules" label-width="100px">
        <h2>意见箱</h2>
        <el-form-item label="主题" prop="title">
          <el-input v-model="mail.title"></el-input>
        </el-form-item>
        <el-form-item label="内容" prop="content">
          <el-input type="textarea" v-model="mail.content"  rows="16"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit">发送</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>

<script>
import { mixin } from '../mixins'
import {sendLetter} from '../api/index'
export default {
  name: 'Mail',
  data () {
    return {
      mail: {
        title: '',
        content: ''
      },
      rules: {
        title: [
          { required: true, message: '请输入主题', trigger: 'blur' }
        ],
        content: [
          { required: true, message: '请输入内容', trigger: 'blur' }
        ]
      }
    }
  },
  mixins: [mixin],
  methods: {
    handleSubmit () {
      let _this = this
      let params = {
        title: this.mail.title,
        content: this.mail.content,

        }
        
        //调用封装的发送信息方法
        sendLetter(params,{
            headers: { 'Content-Type': 'application/json' }
        }).then(response => {
              // 根据 code 判断是否发送成功
              if (response.code === 1) {
                // 发送成功，显示相应内容
                _this.notify('感谢您的宝贵建议', 'success');
                this.$router.go(-1);
              } else {
                // 发送失败，显示相应内容
                _this.notify('发送失败', 'error')
              }
            }).catch(error => {
              console.log(error)
            })
    },
  }
}
</script>

<style scoped>
.mail {
  width: 1400px;
  height: 740px;
  margin: auto;
  padding: 20px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
}

h2 {
  margin-top: 0;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #2b0185;
}

.el-form-item__label {
  font-weight: bold;
}

.el-button {
  margin-top: 20px;
  width: 100%;
}

.el-button--primary {
  background-color: #409EFF;
  border-color: #409EFF;
}

.el-button--primary:hover {
  background-color: #66B1FF;
  border-color: #66B1FF;
}


</style>