<template>
  
      <div class="container">
      <div>
            <el-select class="type" v-model="type" size="mini" @change="clear()" placeholder="报考类型">
              <el-option label="文史类" value="文史类"></el-option>
              <el-option label="法学类" value="法学类"></el-option>
              <el-option label="教育类" value="教育类"></el-option>
              <el-option label="艺术类" value="艺术类"></el-option>
              <el-option label="理工类" value="理工类"></el-option>
              <el-option label="经管类" value="经管类"></el-option>
              <el-option label="农学类" value="农学类"></el-option>
              <el-option label="医学类" value="医学类"></el-option>
            </el-select>
      </div>
        <div class="handle-box1">
            <el-tag style="font-size: 18px" class="custom-icon" type="success">志愿号</el-tag>
            <el-tag class="lable1" type="success">院校代码</el-tag>
            <el-tag class="lable2" type="info">院校名称</el-tag>
            <el-tag class="lable2" type="warning">专业代码</el-tag>
            <el-tag class="lable2" type="danger">专业名称</el-tag>
        </div>
        <div class="handle-box">
          <i  style="font-size: 24px" class="el-icon-sunny custom-icon">A</i>
          <el-input class="select" placeholder="学校代码" v-model="code" :disabled="true" ></el-input>
        <el-select @change="getSchools()" class="select" v-model="selectedSchool" clearable placeholder="请选择学校"  >
            <el-option
                v-for="item in schoolOptions"
                :key="item.schoolCode"
                :label="item.schoolName"
                :value="item.schoolName">
            </el-option>
        </el-select>
        <el-input class="select" placeholder="专业代码" v-model="majorCode" :disabled="true" ></el-input>
        <el-select class="select" v-model="selectedMajor" clearable placeholder="请选择专业" >
            <el-option
                v-for="item in majorOptions"
                :key="item.proCode"
                :label="item.professName"
                :value="item.professName">
            </el-option>
        </el-select>
      </div>


      <div class="handle-box">
          <i  style="font-size: 24px" class="el-icon-sunset custom-icon">B</i>
        <el-input class="select" placeholder="学校代码" v-model="code2" :disabled="true" ></el-input>
        <el-select @change="getSchools()" class="select" v-model="selectedSchool2" clearable placeholder="请选择学校" >
            <el-option
                v-for="item in schoolOptions"
                :key="item.schoolCode"
                :label="item.schoolName"
                :value="item.schoolName">
            </el-option>
        </el-select>
        <el-input class="select" placeholder="专业代码" v-model="majorCode2" :disabled="true" ></el-input>
        <el-select class="select" v-model="selectedMajor2" clearable placeholder="请选择专业" >
            <el-option
                v-for="item in majorOptions"
                :key="item.proCode"
                :label="item.professName"
                :value="item.professName">
            </el-option>
        </el-select>
      </div>

      <div class="handle-box">
          <i  style="font-size: 24px" class="el-icon-sunrise-1 custom-icon">C</i>
          <el-input class="select" placeholder="学校代码" v-model="code3" :disabled="true" ></el-input>
        <el-select @change="getSchools()" class="select" v-model="selectedSchool3" clearable placeholder="请选择学校" >
            <el-option
                v-for="item in schoolOptions"
                :key="item.schoolCode"
                :label="item.schoolName"
                :value="item.schoolName">
            </el-option>
        </el-select>
        <el-input class="select" placeholder="专业代码" v-model="majorCode3" :disabled="true" ></el-input>
        <el-select class="select" v-model="selectedMajor3" clearable placeholder="请选择专业" >
            <el-option
                v-for="item in majorOptions"
                :key="item.proCode"
                :label="item.professName"
                :value="item.professName">
            </el-option>
        </el-select>
      </div>
      <div class="handle-box">
          <i  style="font-size: 24px" class="el-icon-sunrise custom-icon">D</i>
          <el-input class="select" placeholder="学校代码" v-model="code4" :disabled="true" ></el-input>
        <el-select @change="getSchools()" class="select" v-model="selectedSchool4" clearable placeholder="请选择学校" >
            <el-option
                v-for="item in schoolOptions"
                :key="item.schoolCode"
                :label="item.schoolName"
                :value="item.schoolName">
            </el-option>
        </el-select>
        <el-input class="select" placeholder="专业代码" v-model="majorCode4" :disabled="true" ></el-input>
        <el-select class="select" v-model="selectedMajor4" clearable placeholder="请选择专业" >
            <el-option
                v-for="item in majorOptions"
                :key="item.proCode"
                :label="item.professName"
                :value="item.professName">
            </el-option>
        </el-select>
      </div>
      <div class="handle-box">
          <i  style="font-size: 24px" class="el-icon-cloudy-and-sunny custom-icon">E</i>
          <el-input class="select" placeholder="学校代码" v-model="code5" :disabled="true" ></el-input>
        <el-select @change="getSchools()"  class="select" v-model="selectedSchool5" clearable placeholder="请选择学校" >
            <el-option
                v-for="item in schoolOptions"
                :key="item.schoolCode"
                :label="item.schoolName"
                :value="item.schoolName">
            </el-option>
        </el-select>
        <el-input class="select" placeholder="专业代码" v-model="majorCode5" :disabled="true" ></el-input>
        <el-select class="select" v-model="selectedMajor5" clearable placeholder="请选择专业" >
            <el-option
                v-for="item in majorOptions"
                :key="item.proCode"
                :label="item.professName"
                :value="item.professName">
            </el-option>
        </el-select>
      </div>
      <div class="handle-box">
          <i  style="font-size: 24px" class="el-icon-cloudy custom-icon">F</i>
          <el-input class="select" placeholder="学校代码" v-model="code6" :disabled="true" ></el-input>
        <el-select @change="getSchools()" class="select" v-model="selectedSchool6" clearable placeholder="请选择学校" >
            <el-option
                v-for="item in schoolOptions"
                :key="item.schoolCode"
                :label="item.schoolName"
                :value="item.schoolName">
            </el-option>
        </el-select>
        <el-input class="select" placeholder="专业代码" v-model="majorCode6" :disabled="true" ></el-input>
        <el-select class="select" v-model="selectedMajor6" clearable placeholder="请选择专业" >
            <el-option
                v-for="item in majorOptions"
                :key="item.proCode"
                :label="item.professName"
                :value="item.professName">
            </el-option>
        </el-select>
      </div>
      <div class="handle-box">
          <i  style="font-size: 24px" class="el-icon-light-rain custom-icon">G</i>
          <el-input class="select" placeholder="学校代码" v-model="code7" :disabled="true" ></el-input>
        <el-select @change="getSchools()" class="select" v-model="selectedSchool7" clearable placeholder="请选择学校" >
            <el-option
                v-for="item in schoolOptions"
                :key="item.schoolCode"
                :label="item.schoolName"
                :value="item.schoolName">
            </el-option>
        </el-select>
        <el-input class="select" placeholder="专业代码" v-model="majorCode7" :disabled="true" ></el-input>
        <el-select class="select" v-model="selectedMajor7" clearable placeholder="请选择专业" >
            <el-option
                v-for="item in majorOptions"
                :key="item.proCode"
                :label="item.professName"
                :value="item.professName">
            </el-option>
        </el-select>
      </div>
      <div class="handle-box">
          <i  style="font-size: 24px" class="el-icon-lightning custom-icon">H</i>
          <el-input class="select" placeholder="学校代码" v-model="code8" :disabled="true" ></el-input>
        <el-select @change="getSchools()" class="select" v-model="selectedSchool8" clearable placeholder="请选择学校" >
            <el-option
                v-for="item in schoolOptions"
                :key="item.schoolCode"
                :label="item.schoolName"
                :value="item.schoolName">
            </el-option>
        </el-select>
        <el-input class="select" placeholder="专业代码" v-model="majorCode8" :disabled="true" ></el-input>
        <el-select class="select" v-model="selectedMajor8" clearable placeholder="请选择专业" >
            <el-option
                v-for="item in majorOptions"
                :key="item.proCode"
                :label="item.professName"
                :value="item.professName">
            </el-option>
        </el-select>
      </div>
      <div class="handle-box center">
          <el-button type="primary" size="medium" @click="SimVolunteersCache">保存志愿</el-button>
          <div style="width: 50px;"></div> 
          <el-button type="success" size="medium" @click="loadSimVolunteers">导出志愿</el-button>
        </div>
      </div>
  
  

  </template>

  <script>
  import { mixin } from '../mixins'
  import { mapGetters } from 'vuex'
  import {getSimulationSchool,getSimulationMajor,
          SimVolunteersCache,getSimVolunteersCache} from '../api/index'
  
  export default {
    mixins: [mixin],
    data() {
      return {
        type:'',
        remarks:'',
        schoolOptions: [],
        majorOptions: [],
        code: '', //志愿一
        school:'',
        majorCode:'',
        major:'',
        code2: '',//志愿二
        school2: '',
        majorCode2: '',
        major2: '',
        code3: '',//志愿三
        school3: '',
        majorCode3: '',
        major3: '',
        code4: '',//志愿四
        school4: '',
        majorCode4: '',
        major4: '',
        code5: '',//志愿五
        school5: '',
        majorCode5: '',
        major5: '',
        code6: '',//志愿六
        school6: '',
        majorCode6: '',
        major6: '',
        code7: '',//志愿七
        school7: '',
        majorCode7: '',
        major7: '',
        code8: '',//志愿八
        school8: '',
        majorCode8: '',
        major8: '',

      }
    },

    computed: {
      // 计算当前表格中的数据
      ...mapGetters([
        'professInfo',
      ]),
      //计算属性
      selectedSchool: {
      get() {
        return this.school;
      },
      set(newValue) {
        const matched = this.schoolOptions.find(option => option.schoolName === newValue);
        if (matched) {
          this.school = matched.schoolName;
          this.code = matched.schoolCode;
          this.majorCode = '';
          this.major = '';
         //在获取学校的同时获取对应专业信息
          this.getMajorData(this.school)
        } else {
          this.school = '';
          this.code = '';
        }
      }
    },
    selectedMajor:{
        get(){
            return this.major
        },
        set(newValue){
            const matched = this.majorOptions.find(option => option.professName === newValue);
            if(matched){
                this.major = matched.professName;
                this.majorCode = matched.proCode
            } else{
                this.major = '';
                this.majorCode = '';
            }
        }
    },
    selectedSchool2: {
      get() {
        return this.school2;
      },
      set(newValue) {
        const matched = this.schoolOptions.find(option => option.schoolName === newValue);
        if (matched) {
          this.school2 = matched.schoolName;
          this.code2 = matched.schoolCode;
          this.majorCode2 = '';
          this.major2 = '';
         //在获取学校的同时获取对应专业信息
          this.getMajorData(this.school2)
        } else {
          this.school2 = '';
          this.code2 = '';
        }
      }
    },
    selectedMajor2:{
        get(){
            return this.major2
        },
        set(newValue){
            const matched = this.majorOptions.find(option => option.professName === newValue);
            if(matched){
                this.major2 = matched.professName;
                this.majorCode2 = matched.proCode
            } else{
                this.major2 = '';
                this.majorCode2 = '';
            }
        }
    },
    selectedSchool3: {
      get() {
        return this.school3;
      },
      set(newValue) {
        const matched = this.schoolOptions.find(option => option.schoolName === newValue);
        if (matched) {
          this.school3 = matched.schoolName;
          this.code3 = matched.schoolCode;
          this.majorCode3 = '';
          this.major3 = '';
         //在获取学校的同时获取对应专业信息
          this.getMajorData(this.school3)
        } else {
          this.school3 = '';
          this.code3 = '';
        }
      }
    },
    selectedMajor3:{
        get(){
            return this.major3
        },
        set(newValue){
            const matched = this.majorOptions.find(option => option.professName === newValue);
            if(matched){
                this.major3 = matched.professName;
                this.majorCode3 = matched.proCode
            } else{
                this.major3 = '';
                this.majorCode3 = '';
            }
        }
    },
    selectedSchool4: {
      get() {
        return this.school4;
      },
      set(newValue) {
        const matched = this.schoolOptions.find(option => option.schoolName === newValue);
        if (matched) {
          this.school4 = matched.schoolName;
          this.code4 = matched.schoolCode;
          this.majorCode4 = '';
          this.major4 = '';
         //在获取学校的同时获取对应专业信息
          this.getMajorData(this.school4)
        } else {
          this.school4 = '';
          this.code4 = '';
        }
      }
    },
    selectedMajor4:{
        get(){
            return this.major4
        },
        set(newValue){
            const matched = this.majorOptions.find(option => option.professName === newValue);
            if(matched){
                this.major4 = matched.professName;
                this.majorCode4 = matched.proCode
            } else{
                this.major4 = '';
                this.majorCode4 = '';
            }
        }
    },
    selectedSchool5: {
      get() {
        return this.school5;
      },
      set(newValue) {
        const matched = this.schoolOptions.find(option => option.schoolName === newValue);
        if (matched) {
          this.school5 = matched.schoolName;
          this.code5 = matched.schoolCode;
          this.majorCode5 = '';
          this.major5 = '';
         //在获取学校的同时获取对应专业信息
          this.getMajorData(this.school5)
        } else {
          this.school5 = '';
          this.code5 = '';
        }
      }
    },
    selectedMajor5:{
        get(){
            return this.major5
        },
        set(newValue){
            const matched = this.majorOptions.find(option => option.professName === newValue);
            if(matched){
                this.major5 = matched.professName;
                this.majorCode5 = matched.proCode
            } else{
                this.major5 = '';
                this.majorCode5 = '';
            }
        }
    },
    selectedSchool6: {
      get() {
        return this.school6;
      },
      set(newValue) {
        const matched = this.schoolOptions.find(option => option.schoolName === newValue);
        if (matched) {
          this.school6 = matched.schoolName;
          this.code6 = matched.schoolCode;
          this.majorCode6 = '';
          this.major6 = '';
         //在获取学校的同时获取对应专业信息
          this.getMajorData(this.school6)
        } else {
          this.school6 = '';
          this.code6 = '';
        }
      }
    },
    selectedMajor6:{
        get(){
            return this.major6
        },
        set(newValue){
            const matched = this.majorOptions.find(option => option.professName === newValue);
            if(matched){
                this.major6 = matched.professName;
                this.majorCode6 = matched.proCode
            } else{
                this.major6 = '';
                this.majorCode6 = '';
            }
        }
    },
    selectedSchool7: {
      get() {
        return this.school7;
      },
      set(newValue) {
        const matched = this.schoolOptions.find(option => option.schoolName === newValue);
        if (matched) {
          this.school7 = matched.schoolName;
          this.code7 = matched.schoolCode;
          this.majorCode7 = '';
          this.major7 = '';
         //在获取学校的同时获取对应专业信息
          this.getMajorData(this.school7)
        } else {
          this.school7 = '';
          this.code7 = '';
        }
      }
    },
    selectedMajor7:{
        get(){
            return this.major7
        },
        set(newValue){
            const matched = this.majorOptions.find(option => option.professName === newValue);
            if(matched){
                this.major7 = matched.professName;
                this.majorCode7 = matched.proCode
              
            } else{
                this.major7 = '';
                this.majorCode7 = '';
            }
        }
    },
    selectedSchool8: {
      get() {
        return this.school8;
      },
      set(newValue) {
        const matched = this.schoolOptions.find(option => option.schoolName === newValue);
        if (matched) {
          this.school8 = matched.schoolName;
          this.code8 = matched.schoolCode;
          this.majorCode8 = '';
          this.major8 = '';
         //在获取学校的同时获取对应专业信息
          this.getMajorData(this.school8)
        } else {
          this.school8 = '';
          this.code8 = '';
        }
      }
    },
    selectedMajor8:{
        get(){
            return this.major8
        },
        set(newValue){
            const matched = this.majorOptions.find(option => option.professName === newValue);
            if(matched){
                this.major8 = matched.professName;
                this.majorCode8 = matched.proCode
            } else{
                this.major8 = '';
                this.majorCode8 = '';
            }
        }
    },
    },
    created () {
        this.getSimVolunteers(this.userId)
        // this.getSchoolData()
    },
    methods: {
        //获取学校数据
      getSchoolData(){
        let remarks = this.professInfo
        getSimulationSchool(remarks,this.type).then(res =>{
            this.schoolOptions =res.data 
            })
      },
      //获取专业数据
      getMajorData(school){
        this.remarks = this.professInfo
        if(this.remarks === null || this.remarks === ''){
            this.notify('请在个人信息添加自己所学专业！', 'error')
        }else if(school === null || school === ''){
            this.notify('请先选择学校！', 'error')
        }else if(this.type === null || this.type === ''){
            this.notify('请先选择报考类型！', 'error')
        }else{
            getSimulationMajor(this.remarks,school,this.type).then(res =>{
            this.majorOptions = res.data
        }).catch(error => {
              console.log(error)
            })
            console.log(this.majorOptions)
        }
      },
      //缓存数据
      SimVolunteersCache(){
        let params = {
        userId:this.userId,
        code: this.code, //志愿一
        school:this.school,
        majorCode:this.majorCode,
        major:this.major,
        code2: this.code2,//志愿二
        school2: this.school2,
        majorCode2: this.majorCode2,
        major2: this.major2,
        code3: this.code3,//志愿三
        school3: this.school3,
        majorCode3: this.majorCode3,
        major3: this.major3,
        code4: this.code4,//志愿四
        school4: this.school4,
        majorCode4: this.majorCode4,
        major4: this.major4,
        code5: this.code5,//志愿五
        school5: this.school5,
        majorCode5: this.majorCode5,
        major5: this.major5,
        code6: this.code6,//志愿六
        school6: this.school6,
        majorCode6: this.majorCode6,
        major6: this.major6,
        code7: this.code7,//志愿七
        school7: this.school7,
        majorCode7: this.majorCode7,
        major7: this.major7,
        code8: this.code8,//志愿八
        school8: this.school8,
        majorCode8: this.majorCode8,
        major8: this.major8,
        type: this.type
        }
        SimVolunteersCache(params).then(res =>{
          if(res.data === true){
            this.notify('保存志愿成功！','success')
          }
        })
      },
      getSimVolunteers(userId){
        getSimVolunteersCache(userId).then(res =>{
       if(res.code === 1){
          this.code = res.data.code, //志愿一
          this.school = res.data.school,
          this.majorCode = res.data.majorCode,
          this.major = res.data.major,
          this.code2 = res.data.code2,//志愿二
          this.school2 = res.data.school2,
          this.majorCode2 = res.data.majorCode2,
          this.major2 = res.data.major2,
          this.code3 = res.data.code3,//志愿三
          this.school3 = res.data.school3,
          this.majorCode3 = res.data.majorCode3,
          this.major3 = res.data.major3,
          this.code4 = res.data.code4,//志愿四
          this.school4 = res.data.school4,
          this.majorCode4 = res.data.majorCode4,
          this.major4 = res.data.major4,
          this.code5 = res.data.code5,//志愿五
          this.school5 = res.data.school5,
          this.majorCode5 = res.data.majorCode5,
          this.major5 = res.data.major5,
          this.code6 = res.data.code6,//志愿六
          this.school6 = res.data.school6,
          this.majorCode6 = res.data.majorCode6,
          this.major6 = res.data.major6,
          this.code7 = res.data.code7,//志愿七
          this.school7 = res.data.school7,
          this.majorCode7 = res.data.majorCode7,
          this.major7 = res.data.major7,
          this.code8 = res.data.code8,//志愿八
          this.school8 = res.data.school8,
          this.majorCode8 = res.data.majorCode8,
          this.major8 = res.data.major8,
          this.type = res.data.type
          }
        })
      },
      clear(){
          this.code = '', //志愿一
          this.school = '',
          this.majorCode = '',
          this.major = '',
          this.code2 ='',//志愿二
          this.school2 = '',
          this.majorCode2 = '',
          this.major2 = '',
          this.code3 = '',//志愿三
          this.school3 = '',
          this.majorCode3 = '',
          this.major3 = '',
          this.code4 = '',//志愿四
          this.school4 = '',
          this.majorCode4 = '',
          this.major4 = '',
          this.code5 = '',//志愿五
          this.school5 = '',
          this.majorCode5 = '',
          this.major5 = '',
          this.code6 = '',//志愿六
          this.school6 = '',
          this.majorCode6 = '',
          this.major6 = '',
          this.code7 = '',//志愿七
          this.school7 = '',
          this.majorCode7 = '',
          this.major7 = '',
          this.code8 = '',//志愿八
          this.school8 = '',
          this.majorCode8 = '',
          this.major8 = ''
          this.getSchoolData()
      },
      getSchools(){
        // if(this.type === null){
        //   this.notify('请先选择报考类型！','error')
        // }
        if(this.schoolOptions.length === 0){
          this.getSchoolData()
        }
          
      },
      loadSimVolunteers(){
        var newURL = "http://localhost:8888/api/simulation/exportSimVolunteers/"+this.userId;
        // 使用window.location.href打开新URL
        window.location.href = newURL;
      }

    }
  }
  </script>
  
  <style scoped>
.custom-icon {
  color: rgb(131, 247, 154); /* 更改图标颜色 */
  font-family: Arial, sans-serif; /* 更改字体 */
  font-size: 20px; /* 更改字体大小 */
}

.handle-box1 {
       margin-top: 10px ;
      margin-bottom: 20px;
      /* display: flex;
      align-items: center; 将内部元素垂直居中 */
  }
  .handle-box {
       margin-top: 30px ;
      margin-bottom: 20px;
      /* display: flex;
      align-items: center; 将内部元素垂直居中 */
  }
  .select{
  margin-left: 30px;
  width: 300px;
  display: inline-block;
}
.type{
  width: 100px;
  display: inline-block;
}
.lable1{
    font-size: 22px;
  margin-left: 5px;
  height: 30px;
  width: 280px;
 text-align: center;
  display: inline-block;
}
.lable2{
    font-size: 22px;
  margin-left: 50px;
  height: 30px;
  width: 280px;
 text-align: center;
  display: inline-block;
}
.handle-box.center {
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
}


  
  </style>
  