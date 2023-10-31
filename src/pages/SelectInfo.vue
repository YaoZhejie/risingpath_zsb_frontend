<template>
  <div class="table">
    <div class="container">
      <div class="handle-box">
        <el-select class="select" size="mini"  v-model="region" placeholder="查询条件">
         <el-option label="报考院校" value="schoolName"></el-option>
         <el-option label="报考专业" value="professName"></el-option>
         <el-option label="专科专业" value="remarks"></el-option>
        </el-select>
        <el-input v-model="yourData" size="mini" placeholder="输入条件" class="handle-input" ></el-input> 
        <el-button type="primary" size="mini" round plain @click="getData" icon="el-icon-search">点击查询</el-button>
      </div>

      <el-table  :data="data" stripe border size="mini" style="width: 100%" height="600px"  ref="multipleTable">
      <el-table-column label="类型" prop="type" width="80" align="center"></el-table-column>
     <el-table-column label="学校代码" prop="schoolCode" width="80" align="center"></el-table-column>
     <el-table-column label="学校名称" prop="schoolName" width="120" align="center"></el-table-column>
     <el-table-column label="专业代码" prop="proCode" width="80" align="center"></el-table-column>
     <el-table-column label="专业名" prop="professName" width="120" align="center"></el-table-column>
     <el-table-column label="总计划数" prop="totalPlan" width="80" align="center"></el-table-column>
     <el-table-column label="普通计划数" prop="troublePlan" width="80" align="center"></el-table-column>
     <el-table-column label="免试计划数" prop="soldierPlan" width="80" align="center"></el-table-column>
     <el-table-column label="学费" prop="tuition" width="80" align="center"></el-table-column>
     <el-table-column label="英语要求" prop="englishReq" width="200" align="center"></el-table-column>
     <el-table-column label="报考专业要求"  prop="remarks" align="center">
      <template slot-scope="scope">
            <div class="scrollable custom-remarks">
            <p class="scrollable-content">{{ scope.row.remarks }}</p>
          </div>
        </template>
  </el-table-column>
    <el-table-column label="收藏" width="100" align="center">
     <template slot-scope="scope">
      <el-button type="warning" icon="el-icon-star-off" circle @click="handleForSelect(scope.row)"></el-button>
      </template>
    </el-table-column> 
        </el-table>
     

      <div class="pagination">
        <el-pagination
          @current-change="handleCurrentChange"
          background
          layout="total, prev, pager, next"
          :current-page="currentPage"
          :page-size="pageSize"
          :total="tableData.length">
        </el-pagination>
      </div>
    </div>


  </div>
</template>

<script>
import { mixin } from '../mixins'
import { mapGetters } from 'vuex'
import {getProfessinfoBySchool,
        getProfessinfoLikeName,
        getProfessinfoLikeRemark,
        insertCollectForUser} from '../api/index'

export default {
  mixins: [mixin],
  data () {
    return {
      region: 'schoolName',
      yourData:'',
      tableData: [],
      centerDialogVisible: false,
      editVisible: false,
      delVisible: false,
      pageSize: 4, // 页数
      currentPage: 1, // 当前页
      idx: -1,
      form: { // 记录编辑的信息
          userId: '',
          schoolId: '',
          proId: ''
        },
    }
  },
  computed: {
    // 计算当前表格中的数据
    data () {
      return this.tableData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
    },
    ...mapGetters([
      'userId',
    ])
  },

  created () {
    this.getData()
  },
  methods: {
    // 获取专业院校信息
    getData () {
      this.tableData = []
    
      if(this.region ==='schoolName'){
        getProfessinfoBySchool(this.yourData).then(res =>{
          this.tableData = res.data
          this.currentPage = 1
        })
      }else if(this.region ==='professName'){
        getProfessinfoLikeName(this.yourData).then(res =>{
          this.tableData = res.data
          this.currentPage = 1
        })
      }else if(this.region === 'remarks'){
        getProfessinfoLikeRemark(this.yourData).then(res =>{
          this.tableData = res.data
          this.currentPage = 1
        })
      }
  
    },
    // 获取当前页
    handleCurrentChange (val) {
      this.currentPage = val
    },
    handleForSelect(row){
      this.form = {
          schoolId: row.schoolId,
          proId: row.proId,
          userId: this.userId,
        }
      insertCollectForUser(this.form).then(res =>{
        if(res.code === 1){
          this.notify('收藏志愿成功', 'success')
        }else{
          this.notify('您已经收藏该志愿','error')
        }
      })
    }
   
  }
}
</script>

<style scoped>
.handle-box {
    margin-bottom: 20px;
}

.handle-input {
    width: 150px;
    margin-left: 5px;
    margin-right:5px;
    display: inline-block;
}

.select{
  width: 120px;
  display: inline-block;
}
.pagination {
    display: flex;
    justify-content: center;
}

.scrollable {
height: 120px;
overflow: scroll;
}
.scrollable-content {
margin: 0;
padding: 0;
}
.custom-remarks {
  color: rgb(192, 0, 0); /* 更改文字颜色 */
  background-color:  rgb(247, 247, 247);
  /* 添加其他样式属性以满足你的需求 */
}
</style>
