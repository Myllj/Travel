<template>
<div class="homo">
  {{ msg }}
</div>
</template>

<script>
  export default({
    name:'Home',
    data(){
      return {
        msg:"你好啊"
      }
    }

  })
</script>

<style>
.home{
  font-size: 60px;
  color:red;
  }
</style>