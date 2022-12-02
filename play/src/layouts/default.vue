<template>
  <a-layout has-sider>
    <a-layout-sider :style="{
      overflow: 'auto',
      height: '100vh',
      position: 'fixed',
      left: 0,
      top: 0,
      bottom: 0,
    }">
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item :key="index" v-for="(route, index) in routes" @click="handlePush(route)">
          <appstore-outlined />
          <span class="nav-text">{{ route.label }}</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '200px' }">
      <a-layout-header class="layout-header z-50" />
      <a-layout-content class="mt-16">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { AppstoreOutlined, } from "@ant-design/icons-vue";
import getAllRoute, { IRoute } from "../hooks/getAllRoute";
const selectedKeys = ref([0]);
const router = useRouter()
const routes = getAllRoute();
console.log(routes);

const handlePush = (route: IRoute) => {
  router.push(route.path)
};
</script>
<style>
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}

[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}

.layout-header {
  position: fixed;
  top: 0px;
  right: 0px;
  width: calc(100% - 200px);
  background: #fff;
}
</style>
