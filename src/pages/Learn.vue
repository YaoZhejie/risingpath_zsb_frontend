<template>
    <div class="table">
      <div class="container">
        <div class="handle-box">
          <el-input v-model="title" size="mini" placeholder="筛选资料类型" class="handle-input mr10"></el-input>
        </div>
        <el-table :data="data" border size="mini" style="width: 100%" height="600px" ref="multipleTable">
        <el-table-column label="资料类型" prop="title" width="250" align="center"></el-table-column>
        <el-table-column label="资料描述" prop="description" width="400" align="center"></el-table-column>
        <el-table-column
        label="链接地址"
        align="center"
        prop="downloadLink"
        :show-overflow-tooltip="true"
        >
            <template slot-scope="scope">
            <el-link type="primary" :underline="false" :href="scope.row.downloadLink" target="_blank">{{ scope.row.downloadLink }}</el-link>
            </template>
        </el-table-column>
        <el-table-column label="提取码" prop="code" width="120" align="center"></el-table-column>
        <el-table-column label="发布时间" prop="publishTime" width="240" align="center"></el-table-column>

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
  import {getAllLeranLink} from '../api/index'
  
  export default {
    mixins: [mixin],
    data () {
      return {
        tableData: [],
        tempDate: [],
        centerDialogVisible: false,
        editVisible: false,
        delVisible: false,
        title: '',
        pageSize: 5, // 页数
        currentPage: 1, // 当前页
        idx: -1
      }
    },
    computed: {
      // 计算当前表格中的数据
      data () {
        return this.tableData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
      }
    },
    watch: {
      //搜索框里面的内容发生变化时，搜索结果table列表内容跟着内容发生变化
      title: function () {
        if (this.title === '') {
          this.tableData = this.tempDate
        } else {
          this.tableData = []
          for (let item of this.tempDate) {
            if (item.title.includes(this.title)) {
              this.tableData.push(item)
            }
          }
        }
      }
    },
    created () {
      this.getData()
    },
    methods: {
      // 获取专业院校信息
      getData () {
        this.tableData = []
        this.tempDate = []
        getAllLeranLink().then((res) => {
          this.tableData = res
          this.tempDate = res
          this.currentPage = 1
        })
      },
      // 获取当前页
      handleCurrentChange (val) {
        this.currentPage = val
      },
    }
  }
  </script>
  
  <style scoped>
  .handle-box {
      margin-bottom: 20px;
  }
  
  .handle-input {
      width: 163px;
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
  </style>
  