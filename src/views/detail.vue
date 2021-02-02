<template>
  <div class="detail">
    <h4>this is detail</h4>
  </div>
</template>
<script>
export default {
  mounted () {  console.log(this.$route.query.arg) },
}
</script>
