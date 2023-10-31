
import { mapGetters } from 'vuex'

export const mixin = {
  computed: {
    ...mapGetters([
      'userId',
      'loginIn',
      'professInfo'
    ])
  },
  methods: {
    // 提示信息
    notify (title, type) {
      this.$notify({
        title: title,
        
        type: type
      })
    },
    // 获取头像图片信息
    attachImageUrl (srcUrl) {
      return srcUrl ? this.$store.state.configure.HOST + '/api/images/'+ srcUrl : 'https://bpic.51yuansu.com/pic2/cover/00/30/60/581089402dbcb_610.jpg' 
    },
     //

  }
}
