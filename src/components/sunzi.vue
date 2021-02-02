<template>
  <div class="sunzi">
    <h4>this is sunzi page</h4>
    孙子看到爷爷的年龄：{{sendToSunzi}}
  </div>
</template>
<script>
export default {
  inject:['sendToSunzi']
}
</script>

<style scoped>
.sunzi{
  width: 100%;
  height: 100px;
  border:2px solid #666;
}
</style>
