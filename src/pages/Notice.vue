<template>

        <div class="mail">
      <div class="announcement-content">
        <div class="announcement-item">
          <h3 class="announcement-item-title">{{ title }}</h3>
          <p class="announcement-item-content">{{ content }}</p>
          <p class="announcement-item-date">{{ "发布时间：" + publishTime}}</p>
        </div>
      </div>
    </div>
      

  </template>

<script>
import { mixin } from '../mixins'
import {getNotice} from '../api/index'
export default {
  name: 'Mail',
  data () {
    return {
        title:'',
        content:'',
        publishTime:''

    }
  },
  mixins: [mixin],
  created () {
    this.getData()
  },
  methods: {
    getData () {
        getNotice().then((res) => {
            this.title = res.title;
            this.content = res.content;
            this.publishTime = res.publishTime;
      })
      console.log(this.title)
    },
  }
}
</script>

<style scoped>
.mail {
  width: 1450px;
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

announcement-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  color: #333;
}




.announcement-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.announcement-item {
  margin-bottom: 20px;
}

.announcement-item-title {
    text-align:center;
  font-size: 32px;
  margin-bottom: 10px;
}

.announcement-item-content {
  font-size: 26px;
  color: #555;
  padding: 30px;
  font-style: italic;
  margin-bottom: 10px;
}

.announcement-item-date {
  padding: 30px;
  font-size: 25px;
  color: #888;
}


</style>