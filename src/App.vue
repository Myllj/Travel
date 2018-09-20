<template>

  <div id="app">
    <!-- exclude的意思是跳过该组件,不进行缓存 -->
    <keep-alive exclude="Details">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
