<template>
    <div id="RechargeRecordNoData-page">
        <div class="nodata">
            <img
                src="@/assets/images/noData-img.png"
                alt=""
            >
            <p>暂无充值记录</p>
        </div>
    </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
    }
  },
  mounted() {},
  methods: {
    jumpUrl(e) {
      this.$router.push({ path: '/' + e })
    }
  }
}
</script>


<style lang="less" scoped>
#RechargeRecordNoData-page {
  background: rgba(245, 245, 245, 1);
    width: 100%;
    height: 177.5vw;
    .nodata{
        width: 100%;
        padding-top: 50vw;
        img{
            width: 48.2vw;
        }
        p{
            margin-top: 7.2vw;
            height:3.7vw;
            font-size:3.7vw;
            font-weight:bold;
            color:rgba(179,179,179,1);
            line-height:1;
        }
    }
}
</style>

