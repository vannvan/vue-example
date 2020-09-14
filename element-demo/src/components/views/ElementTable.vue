<template>
  <div>
    <div class="btn">
      <el-button @click="goEdit">编 辑</el-button>
      <el-button>导 出</el-button>
    </div>
    <p class="tab_title">Chinagoods平台运营指标精度统计表</p>
    <el-table :data="tableData" style="width:100%" ref="table" height="550" show-summary>
      <el-table-column prop="marketName" label="市场" width="150"></el-table-column>
      <el-table-column prop="name" label="交易额" align="center">
        <el-table-column prop="date" label="目标交易额(亿元)"></el-table-column>
        <el-table-column prop="city" label="交易额(万元)" width="120"></el-table-column>
        <el-table-column prop="address" label="完成率" width="120"></el-table-column>
      </el-table-column>
      <el-table-column label="交易用户" align="center">
        <el-table-column prop="province" label="交易用户目标(户)" width="120"></el-table-column>
        <el-table-column prop="city" label="支付开通成功" width="120"></el-table-column>
        <el-table-column prop="address" label="交易用户(≥1)" width="120"></el-table-column>
        <el-table-column prop="province" label="占比" width="120"></el-table-column>
        <el-table-column prop="city" label="交易用户(≥10笔且≥15)" width="120"></el-table-column>
        <el-table-column prop="address" label="占比" width="120"></el-table-column>
        <el-table-column prop="city" label="交易用户(≥10笔且≥15)" width="120"></el-table-column>
        <el-table-column prop="address" label="占比" width="120"></el-table-column>
      </el-table-column>
      <el-table-column label="上架商品" align="center">
        <el-table-column prop="address" label="上架产品目标数(万个)" width="120"></el-table-column>
        <el-table-column prop="city" label="上架产品数(个)" width="120"></el-table-column>
        <el-table-column prop="address" label="完成率" width="120"></el-table-column>
      </el-table-column>
      <el-table-column label="采购商招引" align="center">
        <el-table-column prop="address" label="采购商招引目标(人)" width="120"></el-table-column>
        <el-table-column prop="city" label="采购商APP邀请下载量(人)" width="120"></el-table-column>
        <el-table-column prop="address" label="完成率" width="120"></el-table-column>
      </el-table-column>
      <el-table-column label="经营户培训" align="center">
        <el-table-column prop="address" label="培训场次" width="120"></el-table-column>
        <el-table-column prop="city" label="实际培训人数" width="120"></el-table-column>
      </el-table-column>
      <!-- <div slot="append" class="slot-footer">
        <tr>
          <td v-for="i in 15"></td>
        </tr>
      </div>-->
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      marketData: [
        {
          marketName: "一公司",
        },
        {
          marketName: "二公司",
        },
        {
          marketName: "三公司",
        },
        {
          marketName: "四公司",
        },
        {
          marketName: "五公司",
        },
        {
          marketName: "篁园",
        },
        {
          marketName: "义西",
        },
        {
          marketName: "采购商服务公司",
        },
        {
          marketName: "酒管公司",
        },
        {
          marketName: "商城国际",
        },
      ],
      tableData: [
        {
          date: "23",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "33",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "43",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "54",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "55",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "14",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "36",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "77",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "83",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "/",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "/",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
      ],
    };
  },
  created() {},
  mounted() {
    this.firstColum();
    this.$nextTick(() => {
      this.append();
    });
  },
  methods: {
    firstColum() {
      this.tableData.map((i, n) => {
        this.marketData.forEach((k, p) => {
          if (n == p) {
            this.$set(i, "marketName", k.marketName);
          }
        });
      });
    },
    goEdit() {
      this.$router.push({ name: "operationDetail" });
    },
    append() {
      let tbody = document.querySelectorAll("tbody")[1];
      var div = document.createElement("tr");
      div.className = "table-slot";
      let htmlStr = "";
      for (let i = 0; i < 20; i++) {
        htmlStr += "<td>啊啊啊啊</td>";
      }
      div.innerHTML = htmlStr;

      tbody.appendChild(div);
      document.querySelectorAll("tbody")[1].children[0].children[0].rowSpan = 1;
      console.log(tbody);
    },

    //使用时重新赋值this.form.remark = document.getElementById('allowance_remark').value;
  },
};
</script>

<style lang="scss" scoped>
.tab_title {
  text-align: center;
  height: 50px;
  background: #dcdee2;
  font-size: 13px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 50px;
}
.footer_btn {
  float: right;
  margin-right: 50px;
  margin-top: 20px;
  .el-button {
    width: 132px;
    height: 40px;
  }
}
.btn {
  text-align: right;
  margin-right: 50px;
  margin-bottom: 20px;
  /deep/.el-button {
    background: #2baf63;
    color: white;
  }
}
.bot_row {
  width: 100%;
  height: 63px;
  background: blanchedalmond;
}

.table-slot {
  height: 40px;
  background: #f00;
  width: 100%;
}
</style>

