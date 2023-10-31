<template>
  <div class="the-footer">
    <p v-for="(item, index) in list" :key="index">
      {{item}}
    </p>
   <p>浙ICP备2023018293号-1</p> 
  </div>
</template>

<script>
export default {
  name: 'the-footer',
  data () {
    return {
      list: [
        // `杭州市钱塘新区东投心悦广场11楼非凡教育`,
        // `联系方式:13910969812`,
        `©2023 Designed by Yzj `
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/the-footer.scss';
</style>
