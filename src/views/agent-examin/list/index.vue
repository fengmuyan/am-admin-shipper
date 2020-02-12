<template>
  <div class="app-container">
    <el-collapse-transition>
      <div class="form-p" v-if="formShow" ref="formPublic" v-resize="resize">
        <el-form :model="queryForm" ref="queryForm" :inline="true">
          <el-form-item label="申请人" prop="orderno">
            <el-input
              v-model="queryForm.orderno"
              placeholder="请输入申请人名称"
              clearable
              size="small"
              style="width: 240px"
            />
          </el-form-item>
          <el-form-item label="审核状态" prop="state">
            <el-select
              v-model="queryForm.state"
              placeholder="请选择"
              clearable
              size="small"
              style="width: 240px"
            >
              <el-option label="认证中" value="1" />
              <el-option label="认证失败" value="2" />
              <el-option label="认证成功" value="3" />
            </el-select>
          </el-form-item>
          <el-form-item label="申请时间">
            <el-date-picker
              v-model="dateRange"
              size="small"
              style="width: 260px"
              format="yyyy-MM-dd"
              value-format="yyyy-MM-dd"
              type="daterange"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
            <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-collapse-transition>

    <div class="table-p" :style="{ 'min-height': minHeight }">
      <el-row :gutter="10" class="mb10 f-r icon-wrap">
        <el-col :span="1.5">
          <div class="icon-box icon-box-f" @click="formShow = !formShow">
            <i class="el-icon-zoom-in" v-show="!formShow"></i>
            <i class="el-icon-zoom-out" v-if="formShow"></i>
          </div>
        </el-col>
        <el-col :span="1.5">
          <div class="icon-box icon-box-t" @click="handleQuery">
            <i class="el-icon-refresh"></i>
          </div>
        </el-col>
      </el-row>
      <el-table style="width: 100%" v-loading="loading" :data="userList">
        <el-table-column label="申请编号" prop="usercode" />
        <el-table-column label="申请人名称" prop="user" />
        <el-table-column label="申请人手机号" prop="phone" />
        <el-table-column label="备注" prop="remarks" />
        <el-table-column label="审核状态" prop="examinStatus" />
        <el-table-column label="状态" align="center">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.status"
              active-value="0"
              inactive-value="1"
              @change="handleStatusChange(scope.row)"
            ></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="申请时间" prop="time" width="150px" />
        <el-table-column label="操作" width="220px">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="text"
              icon="el-icon-edit"
              @click="handleDetail(scope.row)"
            >查看</el-button>
            <el-button
              size="mini"
              type="text"
              icon="el-icon-circle-close"
              @click="handleRefuse(scope.row)"
            >拒绝</el-button>
            <el-button
              size="mini"
              type="text"
              icon="el-icon-circle-check"
              @click="handleAgree(scope.row)"
            >同意</el-button>
          </template>
        </el-table-column>
      </el-table>
      <pagination
        v-show="true || total>0"
        :total="total"
        :page.sync="queryForm.pageNum"
        :limit.sync="queryForm.pageSize"
        @pagination="getList"
      />
    </div>
  </div>
</template>
<script>
import { getOrderList } from "@/api/order";
import minHeightMix from "@/mixins/minHeight";
export default {
  mixins: [minHeightMix],
  data() {
    return {
      loading: false,
      formShow: true,
      userList: [
        {
          usercode: 1000022221,
          title: "泰国进口龙眼 精选一级果 1kg装 新鲜水果",
          user: "北京联塑管业有限公司",
          remarks: "电话联系过的",
          phone: 15810684090,
          examinStatus: "审核中",
          status: 1,
          time: "2020-02-10 20:00:00",
          handleTime: "2020-02-10 20:00:00"
        },
        {
          usercode: 1000022221,
          title: "泰国进口龙眼 精选二级果",
          user: "北京联塑管业有限公司",
          remarks: "电话联系过的",
          phone: 15810684090,
          examinStatus: "已同意",
          status: 1,
          time: "2020-02-10 20:00:00",
          handleTime: "2020-02-10 20:00:00"
        }
      ],
      total: 0,
      dateRange: [],
      queryForm: {
        pageNum: 1,
        pageSize: 10,
        state: undefined
      }
    };
  },
  filters: {
    initState(val) {
      const arr = ["待认证", "认证中", "认证失败", "认证成功"];
      return arr[val];
    }
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      try {
        this.loading = true;
        const { _initParams, queryForm } = this;
        const {
          code,
          data: {
            pageResult: { content, totalSize }
          }
        } = await getOrderList(_initParams(queryForm));
        this.loading = false;
        if (code === 200) {
          this.userList = content;
          this.total = totalSize;
        }
      } catch (err) {
        this.loading = false;
        console.log(err);
      }
    },
    handleQuery() {
      this.queryForm.pageNum = 1;
      this.getList();
    },
    resetQuery() {
      this.dateRange = [];
      this.resetForm("queryForm");
      this.handleQuery();
    },
    handleDetail(item) {},
    handleAgree(item) {
      this.$confirm("确定要通过审核吗？", "系统提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        customClass: "el-message-box-wran"
      }).then(async () => {
        try {
        } catch (err) {
          console.log(err);
        }
      });
    },
    handleRefuse(item) {
      this.$prompt("请输入拒绝原因", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      }).then(async ({ value }) => {
        try {
        } catch (err) {
          console.log(err);
        }
      });
    },
    handleStatusChange(row) {
      let text = row.status === "0" ? "启用" : "停用";
      this.$confirm(
        '确认要"' + text + '""' + row.userName + '"用户吗?',
        "警告",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
          customClass: "el-message-box-wran"
        }
      )
        .then(function() {})
        .catch(function() {
          row.status = row.status === "0" ? "1" : "0";
        });
    },
    _initParams(obj) {
      const dateRange = this.dateRange;
      Object.assign(obj, {
        beginTime: dateRange.length > 0 ? dateRange[0] : null,
        endTime: dateRange.length > 0 ? dateRange[1] : null
      });
      return obj;
    }
  }
};
</script>