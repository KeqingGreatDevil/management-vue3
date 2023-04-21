<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="!store.state.isCollapse ? '180px' : '64px'">
        <CommonAside />
      </el-aside>
      <el-container>
        <CommonHeader />
        <el-main><router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import CommonHeader from "../components/CommonHeader.vue";
import CommonAside from "../components/CommonAside.vue";
import { useStore } from "vuex";
let store = useStore();
</script>

<style lang="scss" scoped>
.el-container {
  flex-wrap: wrap;
  align-items: flex-start;
}
</style>
