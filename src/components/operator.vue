<template>
  <div>
    <div class="tableDiv">
      <!--table-->
      <el-table :data="tableData" style="width: 100%" class="dataForm">
        <el-table-column prop="date" label="日期" width="100">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="100">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="dialogVisible = true">弹出dialog
            </el-button>
            <el-button
              size="mini"
              @click="goMessage(scope.$index, scope.row)">message提示
            </el-button>
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--分页栏-->
    <div class="paginationDiv">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="1000">
      </el-pagination>
    </div>

    <!--dialog-->
    <el-dialog
      title="dialog标题"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
      center>
      <div>这是dialog哦~</div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

    <!--新增dialog-->
    <Add :dialog-add-visible="dialogAddVisible"
            @dialogClose='dialogClose'
            v-if="dialogAddVisible"
    ></Add>

  </div>

</template>
<script>
  import Add from '@/components/add'
  export default {
    components: {
      Add
    },
    data () {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        dialogVisible: false,
        dialogAddVisible:false
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
          done();
      })
      .catch(_ => {});
      },
      goMessage(){
        this.$alert('弹出的是消息哦', '消息标题', {
            confirmButtonText: '确定',
            callback: action => {
            this.$message({
            type: 'info',
            message: `action: ${ action }`
          });
      }
      })
      },
      handleEdit(val){
        this.dialogAddVisible = true
      },
      dialogClose() {
        console.log('dialogClose')
        this.dialogAddVisible = false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .tableDiv {
    width: 45%;
    border: 2px solid #dca6a654;
  }

  .paginationDiv {
    width: 40%;
  }
</style>
