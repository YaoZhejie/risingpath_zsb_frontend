<template>
    <div class="container">
      <el-table  :data="tableData" stripe style="width: 100%" :row-class-name="tableRowClassName">
        <el-table-column prop="key" label="推荐志愿号" align="center"></el-table-column>
        <el-table-column prop="type" label="类型" align="center"></el-table-column>
        <el-table-column prop="schoolCode" label="学校代码" align="center"></el-table-column>
        <el-table-column prop="schoolName" label="学校名称" align="center"></el-table-column>
        <el-table-column prop="proCode" label="专业代码" align="center"></el-table-column>
        <el-table-column prop="professName" label="专业名称" align="center"></el-table-column>
        <el-table-column prop="minScore" label="去年最低分" align="center"></el-table-column>
      </el-table>
      <div class="handle-box center">
          <el-button type="success" size="medium" @click="centerDialogVisible = true">智能生成志愿</el-button>
        </div>
        <!--基本信息-->
        <el-dialog title="基本信息" :visible.sync="centerDialogVisible" width="400px" center>
        <el-form :model="basicInfoForm" status-icon  ref="basicInfoForm" label-width="70px" class="demo-ruleForm">
          <el-form-item label="高职专业" prop="remarks" size="mini">
            <el-input v-model="basicInfoForm.remarks" placeholder="高职所学专业"></el-input>
          </el-form-item>
          <el-form-item label="模拟总分" prop="score" size="mini">
            <el-input v-model="basicInfoForm.score" placeholder="请输入2023真题模拟总分"></el-input>
          </el-form-item>
          <el-form-item label="报考类型" prop="type">
            <el-select v-model="basicInfoForm.type" size="mini" placeholder="请选择报考类型">
              <el-option label="文史类" value="文史类"></el-option>
              <el-option label="法学类" value="法学类"></el-option>
              <el-option label="教育类" value="教育类"></el-option>
              <el-option label="艺术类" value="艺术类"></el-option>
              <el-option label="理工类" value="理工类"></el-option>
              <el-option label="经管类" value="经管类"></el-option>
              <el-option label="农学类" value="农学类"></el-option>
              <el-option label="医学类" value="医学类"></el-option>
            </el-select>
            </el-form-item>
            <el-form-item label="学习习惯" prop="regularity">
            <el-select v-model="basicInfoForm.regularity" size="mini" placeholder="请选择学习习惯">
              <el-option label="规律" value="1"></el-option>
              <el-option label="不规律" value="0"></el-option>
            </el-select>
            </el-form-item>
            <el-form-item label="每日学习" prop="hours">
            <el-select v-model="basicInfoForm.hours" size="mini" placeholder="请选择报考类型">
              <el-option label="2小时" value="2"></el-option>
              <el-option label="4小时" value="4"></el-option>
              <el-option label="6小时" value="6"></el-option>
              <el-option label="8小时" value="8"></el-option>
              <el-option label="10小时" value="10"></el-option>
              <el-option label="12小时" value="12"></el-option>
            </el-select>
            </el-form-item>
            <el-form-item label="学习方式" prop="method">
            <el-select v-model="basicInfoForm.method" size="mini" placeholder="请选择学习方式">
              <el-option label="报班" value="1"></el-option>
              <el-option label="自学" value="0"></el-option>
            </el-select>
            </el-form-item>
            <el-form-item label="生源背景" prop="background">
            <el-select v-model="basicInfoForm.background" size="mini" placeholder="请选择生源背景">
              <el-option label="普高" value="1"></el-option>
              <el-option label="职高" value="0"></el-option>
            </el-select>
            </el-form-item>
            <el-form-item label="开始时间" prop="start">
            <el-select v-model="basicInfoForm.start" size="mini" placeholder="请选择学习开始时间">
              <el-option label="较早" value="1"></el-option>
              <el-option label="较晚" value="0"></el-option>
            </el-select>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button size="mini" @click="centerDialogVisible = false">取 消</el-button>
          <el-button type="primary" size="mini" @click="addBasicInfo">生成</el-button>
        </span>
      </el-dialog>
    </div>



    
  </template>
  
  <script>
    import { mixin } from '../mixins'
    import {getNoTargetVolunteer} from '../api/index'
    export default {
      data() {
        return {
        basicInfoForm: { 
          hours: '',
          regularity: '',
          method: '',
          background: '',
          start: '',
          remarks: '',
          score: '',
          type: '',
           },
        responseData: {
          "A": {
          "schoolName": "浙江水利水电学院",
          type: "理工类",
          schoolCode: "0030",
          proCode: "010",
          professName: "软件工程",
          minScore: 242
        },
        "B": {
          "schoolName": "浙江水利水电学院",
          type: "理工类",
          schoolCode: "0030",
          proCode: "011",
          professName: "物联网工程",
          minScore: 238
        }
        },
          centerDialogVisible: false,
          
        }
      },
      computed:{
        tableData() {
      const data = [];
      for (const key in this.responseData) {
        if (this.responseData.hasOwnProperty(key)) {
          const item = this.responseData[key];
          data.push({
            key: key,
            ...item
          });
        }
      }
      return data;
    }
      },
      methods: {
        addBasicInfo(){
          this.centerDialogVisible = false
          this.generate()
        },
        tableRowClassName({row, rowIndex}) {
          if (rowIndex === 1) {
            return 'warning-row';
          } else if (rowIndex === 3) {
            return 'success-row';
          }
          return '';
        },
        generate(){
          getNoTargetVolunteer(this.basicInfoForm).then(res =>{
            this.responseData = res.data  
            console.log(res.data)
          })
        }
      }

    }
  </script>
   
   <style scoped>
   .el-table .warning-row {
     background: oldlace;
   }
 
   .el-table .success-row {
     background: #f0f9eb;
   }
   .handle-box {
      margin: 20px;
      
  }
  .center {
  display: flex;
  justify-content: center;
  align-items: center;
}
 </style>
 