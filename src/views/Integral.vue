<template>
  <div id="integral-page">
    <div class="top_bg">
      <div class="first_div">
        <p>当前积分余额</p>
      </div>
      <h1>{{ integralNun }}</h1>
      <button>充值积分</button>
    </div>
    <div class="record">
      <div class="recordList">
        <ul>
          <li v-for="(item, index) in recordList" :key="index">
            <div class="recordlf">
              <img :src="item.src" alt="" />
              <div>
                <p>{{ item.title }}</p>
                <p>{{ item.operationTime }}</p>
              </div>
            </div>
            <div class="recordrt">
              <span v-if="item.type == 1">+{{ item.operationMoney }}</span>
              <span v-else class="colorred">-{{ item.operationMoney }}</span>
            </div>
            <div class="clear"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      integralNun: 4579,
      recordList: [
        {
          src: require('@/assets/images/jiajifen-icon.png'),
          title: '首次注册奖励',
          operationTime: '2019-11-29  21:19:09',
          operationMoney: '6',
          type: 1
        },
        {
          src: require('@/assets/images/jianjifen-icon.png'),
          title: '领取【饿了么红包】',
          operationTime: '2019-11-29  21:19:09',
          operationMoney: '1',
          type: 2
        },
        {
          src: require('@/assets/images/jiajifen-icon.png'),
          title: '系统赠送',
          operationTime: '2019-11-29  21:19:09',
          operationMoney: '10',
          type: 1
        }
      ]
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
#integral-page {
  background: #fff;
  .top_bg {
    width: 100%;
    height: 46.3vw;
    background: url('../assets/images/top_bg2.png') no-repeat;
    background-size: 100%;
    padding-top: 4.9vw;
    .first_div {
      height: 4.2vw;
      position: relative;
      p {
        height: 100%;
        line-height: 1;
        font-size: 4.3vw;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
      }
    }

    h1 {
      height: 6.8vw;
      line-height: 1;
      margin: 6.2vw 0 7.2vw 0;
      font-size: 7.4vw;
      font-family: FZLTTHK_XARB;
      font-weight: normal;
      color: rgba(255, 255, 255, 1);
      text-shadow: 0 1vw 0 rgba(0, 44, 90, 0.21);
    }
    button {
      width: 30.7vw;
      height: 8vw;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 0.5vw 1.7vw 0 rgba(0, 44, 90, 0.21);
      border-radius: 4vw;
      font-size: 3.7vw;
      font-weight: 400;
      color: rgba(41, 97, 255, 1);
      cursor: pointer;
    }
  }
  .record {
    width: 100%;
    height: auto;
    margin-top: 3.6vw;
    ul {
      margin-top: 3.5vw;
      padding: 0 5.7vw 0 5.7vw;
      li {
        width: 100%;
        height: 15.5vw;
        border-bottom: 0.2vw solid rgba(245, 245, 245, 1);
        padding: 2.6vw 0.7vw 0;
        .recordlf {
          float: left;
          display: flex;
          img {
            width: 9.26vw;
            height: 9.26vw;
            border-radius: 0.6vw;
            overflow: hidden;
          }
          p {
            height: 3.4vw;
            line-height: 1;
            font-size: 3.5vw;
            font-weight: 400;
            color: rgba(43, 41, 41, 1);
            display: block;
            margin-top: 0.9vw;
            text-align: left;
            margin-left: 2.7vw;
            width: 100%;
            &:nth-of-type(2) {
              height: 2.8vw;
              line-height: 1;
              font-size: 2.8vw;
              color: rgba(138, 138, 138, 1);
              margin-top: 1.9vw;
            }
          }
        }
        .recordrt {
          float: right;
          span {
            height: 2.9vw;
            display: inline-block;
            line-height: 1;
            font-size: 3.7vw;
            font-weight: 500;
            color: rgba(78, 194, 0, 1);
            margin-top: 3vw;
            &.colorred {
              color: rgba(255, 52, 19, 1);
            }
          }
        }
        .clear {
          clear: both;
        }
      }
    }
  }
}
</style>

