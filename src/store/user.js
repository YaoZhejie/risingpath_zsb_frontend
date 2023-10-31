const user = {
  state: {
    userId: '',
    username: '',
    avator: '',
    professInfo: ''
  },
  getters: {
    userId: state => {
      let userId = state.userId
      if (!userId) {
        userId = JSON.parse(window.localStorage.getItem('userId') || null)
      }
      return userId
    },
    username: state => {
      let username = state.username
      if (!username) {
        username = JSON.parse(window.localStorage.getItem('username') || null)
      }
      return username
    },
    avator: state => {
      let avator = state.avator
      if (!avator) {
        avator = JSON.parse(window.localStorage.getItem('avator') || null)
      }
      return avator
    },
    professInfo: state => {
      let professInfo = state.professInfo
      if (!professInfo) {
        professInfo = JSON.parse(window.localStorage.getItem('professInfo') || null)
      }
      return professInfo
    },
  },
  mutations: {
    setUserId: (state, userId) => {
      state.userId = userId
      window.localStorage.setItem('userId', JSON.stringify(userId))
    },
    setUsername: (state, username) => {
      state.username = username
      window.localStorage.setItem('username', JSON.stringify(username))
    },
    setAvator: (state, avator) => {
      state.avator = avator
      window.localStorage.setItem('avator', JSON.stringify(avator))
    },
    setProfessInfo: (state, professInfo) => {
      state.professInfo = professInfo
      window.localStorage.setItem('professInfo', JSON.stringify(professInfo))
    }
  },
  actions: {}
}

export default user
