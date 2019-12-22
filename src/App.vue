<template>
  <div id="app">
    <router-view v-if="hadToken" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      hadToken: false
    }
  },

  beforeMount() {
    this.login()
    this.getUserInfo()
  },

  methods: {
    async login() {
      if (!localStorage.getItem('token')) {
        const res = await this.$api.getToken({ code: this.$route.query.code })
        localStorage.setItem('token', res.token)
      }

      this.hadToken = true
    },

    async getUserInfo() {
      const res = await this.$api.getUserInfo()
      console.log(res)
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: @theme-color;
    }
  }
}
</style>
