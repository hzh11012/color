<template>
  <div class="list">
    <div class="item" @click="changeColor(item)" v-for="item in colorList" :key="item.name">
      <div class="color" :style="'background-color:'+item.hex"></div>
      <div class="header">
        <div class="circle-box">
          <div class="circle" v-for="(item1,index) in item.CMYK" :key="index">
            <div
              class="circle-fill"
              :style=" item1>50?('transform: rotate('+(item1/100-0.5)+'turn);background: rgb(175, 175, 175);'):('transform: rotate('+(item1/100)+'turn)')"
            ></div>
          </div>
        </div>
        <div class="color-name">{{item.name}}</div>
      </div>
      <div class="footer">
        <span class="rgb">{{item.hex}}</span>
        <span class="progress-box">
          <div class="progress" v-for="(item1,index) in item.RGB" :key="index">
            <div class="progress-fill" :style="'width:'+(item1/255*100)+'%'"></div>
          </div>
        </span>
        <span class="pinyin">{{item.pinyin}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["colorList"],
  methods: {
    changeColor(item) {
      this.$emit("change", item);
    },
  },
};
</script>

<style lang="less" scoped>
.list {
  height: 100%;
  max-width: 500px;
  margin: 70px 150px 0 auto;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  display: flex;
  .item {
    margin: 9px;
    height: 320px;
    width: 50px;
    cursor: pointer;
    .color {
      height: 7px;
      width: 50px;
    }
    .header {
      padding-top: 1em;
      display: flex;
      .circle-box {
        flex: 1;
        .circle {
          position: relative;
          width: 25px;
          height: 25px;
          margin-bottom: 7px;
          background: #fff;
          opacity: 0.6;
          background-image: linear-gradient(
            to right,
            transparent 50%,
            rgb(175, 175, 175) 0
          );
          border-radius: 50%;
          mask: radial-gradient(transparent 5px, #000 6px);
          .circle-fill {
            position: absolute;
            top: 0;
            left: 49%;
            width: 50%;
            height: 101%;
            background-color: inherit;
            transform-origin: left;
          }
        }
      }
      .color-name {
        flex: 1;
        text-align: right;
        opacity: 0.6;
      }
    }
    .footer {
      display: flex;
      align-items: center;
      padding-top: 5px;
      .pinyin,
      .rgb {
        width: 1em;
        display: block;
        color: #fff;
        font-size: 0.8em;
        transform: rotate(90deg);
        -webkit-transform: rotate(90deg);
        text-transform: uppercase;
      }
      .progress-box {
        flex: 1;
        width: 18px;
        transform: rotate(90deg);
        -webkit-transform: rotate(90deg);
        .progress {
          margin: 3px 0 3px 7px;
          width: 160px;
          height: 2px;
          background-color: rgba(255, 255, 255, 0.5);
          border-radius: 2px;
          .progress-fill {
            background-color: #fff;
            height: 100%;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  .list {
    max-width: 500px;
    margin: 70px 75px 0 75px;
  }
}
@media screen and (max-width: 960px) {
  .list {
    max-width: 450px;
    margin: 70px 60px 0 60px;
  }
}
@media screen and (max-width: 800px) {
  .list {
    max-width: none;
    width: 400px;
    margin: 70px 20px 0 55px;
  }
}
@media screen and (max-width: 680px) {
  .list {
    max-width: none;
    width: 350px;
    margin: 70px 20px 0 35px;
  }
}
@media screen and (max-width: 630px) {
  .list {
    max-width: none;
    width: 300px;
    margin: 70px 20px 0 35px;
  }
}
@media screen and (max-width: 570px) {
  .list {
    max-width: none;
    width: 210px;
    margin: 70px 25px 0 25px;
  }
}
@media screen and (max-width: 480px) {
  .list {
    max-width: none;
    width: 210px;
    margin: 25px 0 0 25px;
  }
}
@media screen and (max-width: 320px) {
  .list {
    max-width: none;
    width: 210px;
    margin: 10px 0 0 10px;
  }
}
</style>