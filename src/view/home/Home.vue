<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 20px">
      <el-card shadow="hover">
        <div class="user">
          <img src="../../assets/vue.svg" alt="" />
          <div class="userInfo">
            <p class="name">Admin</p>
            <p class="role">超级管理员</p>
          </div>
        </div>
        <div class="loginInfo">
          <p>上次登录时间：<span>2023-4-32</span></p>
          <p>上次登录地点：<span>浙江 宁波</span></p>
        </div>
      </el-card>
      <el-card shadow="hover" style="margin-top: 20px" height="450px">
        <el-table :data="tableData">
          <el-table-column
            v-for="(val, key) in tableList"
            :key="key"
            :prop="key"
            :label="val"
          >
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16" style="margin-top: 20px"></el-col>
  </el-row>
</template>

<script setup>
const tableList = {
  name: "课程",
  todayBuy: "今日购买",
  monthBuy: "本月购买",
  totalBuy: "总购买",
};
const tableData = [
  {
    name: "oppo",
    todayBuy: 100,
    monthBuy: 300,
    totalBuy: 800,
  },
  {
    name: "vivo",
    todayBuy: 100,
    monthBuy: 300,
    totalBuy: 800,
  },
  {
    name: "苹果",
    todayBuy: 100,
    monthBuy: 300,
    totalBuy: 800,
  },
  {
    name: "小米",
    todayBuy: 100,
    monthBuy: 300,
    totalBuy: 800,
  },
  {
    name: "三星",
    todayBuy: 100,
    monthBuy: 300,
    totalBuy: 800,
  },
  {
    name: "魅族",
    todayBuy: 100,
    monthBuy: 300,
    totalBuy: 800,
  },
];
</script>

<style lang="scss" scoped>
.home {
  .user {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-right: 40px;
    }
  }
  .loginInfo {
    p {
      line-height: 30px;
      font-size: 14px;
      color: #999;
      span {
        color: #666;
        margin-left: 60px;
      }
    }
  }
}
</style>
