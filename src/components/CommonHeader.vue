<template>
  <el-header>
    <div class="l-content">
      <el-button size="small" plain @click="handleCollapse">
        <el-icon>
          <Menu />
        </el-icon>
      </el-button>
      <el-breadcrumb separator="/" class="bread">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="current.path" v-if="current">{{
          current.lable
        }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown>
        <img src="../assets/vue.svg" alt="" />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

let store = useStore();
let handleCollapse = () => {
  store.commit("updateIsCollapse");
};
const current = computed(() => {
  return store.state.currentMenu;
});
console.log(current.value);
</script>
<style lang="scss" scoped>
.el-header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  .l-content {
    display: flex;
    align-items: center;
    .el-button {
      margin-right: 20px;
    }
  }
  .r-content {
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}
.bread :deep(span) {
  color: #fff !important;
  cursor: pointer;
}
</style>
