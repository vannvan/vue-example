<template>
  <div>
    <!-- <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      @select="handleSelectOne"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="日期" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div> -->
    <el-input v-model="value1" placeholder="请输入内容" type="number" v-Int='{"limit":720}'   ></el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      multipleSelection: [],
      value1:0,
      limitNum:1000
    };
  },
  
 

  watch: {
    multipleSelection: {
      handler(newData, oldData) {
        if (newData.length < oldData.length) {
            //
        }
      }
    },
    
  },
  computed:{
    expression() {
      return `if(value>${this.limitNum})value=value.substr(0,3);if(value<0)value=0;value=value.replace(/^[0]/,'')`
    }
  },

  methods: {
    
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    initNum(val,e) {
    
      console.log(val,'--',e.target);
      let value = e.target.value
      
  
      var reg = /^\d+(\.\d+)?$/; 
      if(!reg.test(value)) {
        console.log('不是数字');
      }
    },
    change(e) {
      console.log(e);
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleSelectOne(val) {
      //   console.log(val);
    }
  }
};
</script>

