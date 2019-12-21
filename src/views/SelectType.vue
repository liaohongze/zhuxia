<template>
    <div id="SelectType">
        <div class="title_name">
            <h2>请选择您领取的红包类型</h2>
        </div>
        <div class="change_type">
            <ul>
                <li
                    :class="{'isSelect': currentSort === index}"
                    v-for="(item,index) in getReceiveType"
                    :key="index"
                    @click="changeBg(index)"
                >
                    <div class="selectTop">
                        <h3>{{item.title}}</h3>
                        <span>{{item.howMuch}}积分/次</span>
                    </div>
                    <div
                        class="selectBottom"
                        v-if="currentSort === index"
                    >
                        <p>{{item.describe1}}</p>
                        <p>{{item.describe2}}</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="phoneInput">
            <h3>请输入饿了么手机号</h3>
            <input
                type="text"
                placeholder="11位手机号"
                maxlength="11"
                v-model="inputPhoneValue"
            >
            <button
                type="submit"
                @click="onSubmit()"
            >马上领取饿了么大红包</button>
            <h4>领取规则</h4>
            <p>1.饿了么红包领取统一规则！</p>
            <p>2.饿了么红包领取统一规则！</p>
            <p>3.饿了么红包领取统一规则！</p>
            <p>4.饿了么红包领取统一规则！</p>
        </div>
         <!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell> -->

      <van-popup v-model="show">很抱歉，领取失败，错误结果很抱歉，领取失败，错误结果</van-popup>
    </div>
</template>

<script>
export default {
  data() {
    return {
        show: false,      
      getReceiveType: [
        {
          title: '通用红包组合',
          howMuch: '6',
          describe1: '4元平台通用红包满¥30.00可用',
          describe2: '最高科技领取满16-16满66-66大额红包哦'
        },
        {
          title: '品质联盟30-5',
          howMuch: '6',
          describe1: '4元平台通用红包满¥30.00可用',
          describe2: '最高科技领取满16-16满66-66大额红包哦'
        },
        {
          title: '每日礼包1号',
          howMuch: '6',
          describe1: '4元平台通用红包满¥30.00可用',
          describe2: '最高科技领取满16-16满66-66大额红包哦'
        },
        {
          title: '每日礼包2号',
          howMuch: '6',
          describe1: '4元平台通用红包满¥30.00可用',
          describe2: '最高科技领取满16-16满66-66大额红包哦'
        },
        {
          title: '天天抢15元红包',
          howMuch: '6',
          describe1: '4元平台通用红包满¥30.00可用',
          describe2: '最高科技领取满16-16满66-66大额红包哦'
        }
      ],
      currentSort: 0,
      inputPhoneValue: ''
    }
  },
  mounted() {},
  methods: {
    changeBg(i) {
      this.currentSort = i
    },
    onSubmit() {
      var inputValue = this.inputPhoneValue
      var currentSort = this.currentSort //选择的哪个红包
      let reg = /^1[3|4|5|7|8][0-9]{9}$/
      console.log(inputValue, currentSort)
      if(!inputValue){
          this.$toast('手机号码不能为空!')
          return false
      }
      if (reg.test(inputValue)) {
          // 号码验证成功
           this.$toast.loading({
            message: '加载中...',
            forbidClick: true
        });
         this.show = true; //弹窗
      } else {
        //   号码验证失败
        this.$toast('手机号码格式不正确')
        return false
      }
    }
  }
}
</script>

<style lang="less" scoped>
#SelectType{
  padding-bottom: 5vw;
}
.title_name {
  height: 9.4vw;
  width: 100%;
  line-height: 9.4vw;
  text-align: left;
  padding-left: 7.3vw;
  box-sizing: border-box;
  h2 {
    font-size: 3.9vw;
    font-weight: 400;
    color: rgba(33, 33, 33, 1);
  }
}
.change_type {
  width: 90.2vw;
  height: 93.6vw;
  margin: 0 auto;
  background: rgba(233, 240, 245, 1);
  box-shadow: 0 0.5vw 1.5vw 0 rgba(4, 0, 0, 0.07);
  border-radius: 1.5;
  ul {
    width: 100%;
    padding-top: 3.6vw;
    li {
      margin: 0 auto;
      width: 81.1vw;
      height: 13vw;
      background: rgba(255, 255, 255, 1);
      border-radius: 1.3vw;
      margin-bottom: 1.9vw;
      padding: 3.8vw 4.2vw;
      overflow: hidden;
      .selectTop {
        overflow: hidden;
        h3 {
          height: 4.3vw;
          line-height: 1;
          font-size: 4.4vw;
          font-weight: 600;
          color: rgba(33, 33, 33, 1);
          float: left;
        }
        span {
          float: right;
          height: 3.8vw;
          font-size: 3.9vw;
          font-weight: 500;
          color: rgba(243, 74, 0, 1);
        }
      }
      &.isSelect {
        width: 81.1vw;
        height: 24.1vw;
        background: rgba(243, 248, 255, 1);
        border: 0.2vw solid rgba(41, 89, 255, 1);
        box-shadow: 0 0.6vw 2.2vw 0 rgba(23, 110, 200, 0.27);
        border-radius: 1.3vw;
        h3 {
          color: rgba(41, 89, 255, 1);
        }
        p {
          height: 3.5vw;
          line-height: 1;
          font-size: 3.7vw;

          font-weight: 400;
          color: rgba(84, 84, 84, 1);
          margin: 2.5vw 0;
          text-align: left;
          &:last-of-type {
            margin: 0;
          }
        }
      }
    }
  }
}
.phoneInput {
  width: 90.2vw;
  height: 78.9vw;
  background: rgba(255, 255, 255, 1);
  border-radius: 1.3vw;
  margin: 0 auto;
  padding: 5.3vw 0 0 4.8vw;
  text-align: left;
  margin-bottom: 15vw;
  h3 {
    height: 3.8vw;
    line-height: 1;
    text-align: left;
    font-size: 3.9vw;
    font-weight: 400;
    margin-bottom: 5.3vw;
    color: rgba(33, 33, 33, 1);
  }
  input {
    width: 79.4vw;
    height: 11.1vw;
    background: rgba(242, 242, 242, 1);
    border-radius: 0.9vw;
    padding-left: 2.6vw;
    font-size: 3.5vw;
    font-weight: 400;
    color: rgba(167, 167, 167, 1);
    margin-bottom: 5.6vw;
  }
  button {
    width: 79.4vw;
    height: 11.1vw;
    background: linear-gradient(
      267deg,
      rgba(41, 85, 255, 1) 0%,
      rgba(39, 134, 255, 1) 100%
    );
    box-shadow: 0vw 0.9vw 2.2vw 0vw rgba(0, 53, 233, 0.36);
    border-radius: 0.9vw;
    font-size: 4.3vw;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
  }
  h4 {
    height: 3.4vw;
    font-size: 3.5vw;
    margin: 4.6vw 0 3.9vw 0;
    font-weight: 400;
    color: rgba(83, 83, 83, 1);
    line-height: 1;
  }
  p {
    height: 3.3vw;
    line-height: 1;
    font-size: 3.3vw;
    font-weight: 400;
    color: rgba(83, 83, 83, 1);
    margin-bottom: 2vw;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
}
/deep/
.van-popup{
  width:60.6vw;
  height:18.7vw;
  background:linear-gradient(88deg,rgba(41,87,255,1),rgba(39,134,255,1));
  border-radius:9.4vw;
  font-size:3.6vw;
  font-weight:400;
  color:rgba(255,255,255,1);
  line-height:5vw;
  text-align: left;
  padding: 4.6vw 6.4vw 0;

}
</style>
