<template>
    <div class="table">
      <div class="container">
        <div class="generate">
        <el-button type="primary" size="mini" round plain @click="loadCollect" >导出志愿收藏</el-button>
      </div>
        <el-table  :data="data" stripe :header-row-style="() => { return 'line-height:50px'; }" border size="mini" style="width: 100%" height="630px"  ref="multipleTable">
        <el-table-column label="类型" prop="type" width="80" align="center" ></el-table-column>
       <el-table-column label="学校代码" prop="schoolCode" width="80" align="center"></el-table-column>
       <el-table-column label="学校名称" prop="schoolName" width="120" align="center"></el-table-column>
       <el-table-column label="专业代码" prop="proCode" width="80" align="center"></el-table-column>
       <el-table-column label="专业名" prop="professName" width="120" align="center"></el-table-column>
       <el-table-column label="总计划数" prop="totalPlan" width="100" align="center"></el-table-column>
       <el-table-column label="普通计划数" prop="troublePlan" width="100" align="center"></el-table-column>
       <el-table-column label="免试计划数" prop="soldierPlan" width="100" align="center"></el-table-column>
       <el-table-column label="学费" prop="tuition" width="120" align="center"></el-table-column>
       <el-table-column label="英语要求" prop="englishReq" width="200" align="center"></el-table-column>
       <el-table-column label="报考专业要求"  prop="remarks" align="center">
        <template slot-scope="scope">
            <div class="scrollable custom-remarks">
            <p class="scrollable-content">{{ scope.row.remarks }}</p>
          </div>
        </template>
    </el-table-column>
      <el-table-column label="操作" width="100" align="center">
       <template slot-scope="scope">
        <el-button type="danger" icon="el-icon-delete" circle @click="showDeleteDialog"></el-button>
            <el-dialog
            :visible.sync="deleteDialogVisible"
            title="确认删除"
            width="20%" 
            @close="deleteDialogVisible = false"
            >
            <p>你确定要删除吗？</p>
            <span slot="footer" class="dialog-footer">
                <el-button @click="deleteDialogVisible = false" size="mini">取消</el-button>
                <div class="button-spacer"></div> 
                <el-button type="danger" size="mini" @click="deleteItem(scope.row)">删除</el-button>
            </span>
            </el-dialog>
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
  import {selectCollectInfoByUserId,deleteColletByIds} from '../api/index'
  
  export default {
    mixins: [mixin],
    data () {
      return {
        deleteDialogVisible: false,
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
        selectCollectInfoByUserId(this.userId).then(res =>{
            this.tableData = res.data
            this.currentPage = 1
        }).catch(error => {
              console.log(error)
            })
      },
      // 获取当前页
      handleCurrentChange (val) {
        this.currentPage = val
      },

      showDeleteDialog() {
      this.deleteDialogVisible = true;
        },
        deleteItem(row) {
        // 执行实际的删除操作
        this.deleteCollect(row);
        this.deleteDialogVisible = false;
        },
        deleteCollect(row) {
            this.form = {
                schoolId : row.schoolId,
                proId : row.proId
            }
        deleteColletByIds(this.form).then(res =>{
            if(res.code === 1){
                this.notify('删除成功!', 'success')
                this.getData()
            }else{
                this.notify('删除失败!','error')
            }
        }) 
        },
        loadCollect(){
        var newURL = "http://localhost:8888/api/collect/generateCollect/"+this.userId;
        // 使用window.location.href打开新URL
        window.location.href = newURL;
      }
    }
  }
  </script>
  
  <style scoped>
  .dialog-footer {
    display: flex;
   justify-content: center; /* 水平居中 */
}
.button-spacer {
  width: 10px; /* 调整间距的大小，根据需要进行调整 */
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
 .generate{
  margin-bottom: 13px;
 }

  </style>
   