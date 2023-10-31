<template>
  <div class="home">
    <!--轮播图-->
    <swiper/>
    <thank-you/>
</div>
</template>

<script>
import Swiper from '../components/Swiper'
import ThankYou from '../components/ThankYou.vue';

export default {
  name: 'home',
  components: {
    Swiper,
    ThankYou
  },
  data () {
    return {

    }
  },
  created () {
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/home.scss';
</style>
