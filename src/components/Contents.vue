<template>
  <div class="content-box">
    <div class="content">
      <div class="color-value">
        <div class="CMYKcolor">
          <span class="line"></span>
          <span class="flag">C</span>
          <van-circle
            v-model="currentRate"
            :size="50"
            :rate="seletedItem.CMYK[0]"
            :speed="50"
            color="#0093d3"
            :stroke-width="50"
            stroke-linecap="butt"
            layer-color="rgba(255,255,255,0.5)"
          >
            <span slot="default" class="num" style="color:#0093d3;">{{seletedItem.CMYK[0]}}</span>
          </van-circle>
          <span class="line"></span>
          <span class="flag">M</span>
          <van-circle
            v-model="currentRate1"
            :size="50"
            :rate="seletedItem.CMYK[1]"
            :speed="50"
            color="#CC006B"
            :stroke-width="50"
            stroke-linecap="butt"
            layer-color="rgba(255,255,255,0.5)"
          >
            <span slot="default" class="num" style="color:#CC006B;">{{seletedItem.CMYK[1]}}</span>
          </van-circle>
          <span class="line"></span>
          <span class="flag">Y</span>
          <van-circle
            v-model="currentRate2"
            :size="50"
            :rate="seletedItem.CMYK[2]"
            :speed="50"
            color="#FFF10C"
            :stroke-width="50"
            stroke-linecap="butt"
            layer-color="rgba(255,255,255,0.5)"
          >
            <span slot="default" class="num" style="color:#FFF10C;">{{seletedItem.CMYK[2]}}</span>
          </van-circle>
          <span class="line"></span>
          <span class="flag">K</span>
          <van-circle
            v-model="currentRate3"
            :size="50"
            :rate="seletedItem.CMYK[3]"
            :speed="50"
            color="#333"
            :stroke-width="50"
            stroke-linecap="butt"
            layer-color="rgba(255,255,255,0.5)"
          >
            <span slot="default" class="num" style="color:#333;">{{seletedItem.CMYK[3]}}</span>
          </van-circle>
          <span class="line"></span>
        </div>
        <div class="RGBcolor">
          <span class="flag flag1">R</span>
          <div class="rgb-num">{{seletedItem.RGB[0]}}</div>
          <span class="line"></span>
          <span class="flag flag1">G</span>
          <div class="rgb-num">{{seletedItem.RGB[1]}}</div>
          <span class="line"></span>
          <span class="flag flag1">B</span>
          <div class="rgb-num">{{seletedItem.RGB[2]}}</div>
          <span class="line"></span>
        </div>
      </div>
      <h2>
        <span class="name" v-text="seletedItem.name != null?(seletedItem.name):'中国色'"></span>
        <span class="pinyin">{{seletedItem.pinyin}}</span>
        <span
          class="hex"
          @contextmenu.prevent="copy(seletedItem.hex)"
        >{{seletedItem.hex}}</span>
      </h2>
      <div class="logo"></div>
      <div class="footer">
        <div>
          Copyright © 2020 by
          <a href="//www.qnets.cn" target="_blank">Qnet</a> Zhengzhou | 仿自
          <a href="http://zhongguose.com/">中国色</a>
        </div>
        <div>参看: 色谱 中科院科技情报编委会名词室.科学出版社,1957. Adobe RGB / CMYK FOGRA39, Dot Gain 15%</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["seletedItem"],
  data() {
    return {
      currentRate: 0,
      currentRate1: 0,
      currentRate2: 0,
      currentRate3: 0,
    };
  },
  methods: {
    copy(hex) {
      let hex1 = hex;
      let oInput = document.createElement("input");
      oInput.value = hex1;
      document.body.appendChild(oInput);
      oInput.select();
      document.execCommand("Copy");
      alert("复制成功!\n" + oInput.value);
      document.body.removeChild(oInput);
    },
  },
};
</script>

<style lang="less" scoped>
.content-box {
  // flex: 1;
  width: 900px;
  margin-top: 75px;
  transition: all 0.3s ease-in;
  .content {
    position: fixed;
    display: flex;
    .color-value {
      .CMYKcolor,
      .RGBcolor {
        width: 50px;
        .num {
          position: absolute;
          top: 50%;
          font-size: 24px;
          font-weight: 300;
          transform: translateX(-50%) translateY(-50%);
        }
        .flag {
          color: #fff;
        }
        .flag1 {
          font-size: 12px;
        }
        .line {
          width: 50px;
          height: 2px;
          margin: 5px 0 5px 0;
          display: block;
          background: rgba(255, 255, 255, 0.5);
        }
        .rgb-num {
          color: #fff;
          font-size: 22px;
          font-weight: 300;
          text-align: right;
        }
      }
    }
    h2 {
      width: 400px;
      text-align: center;
      font-weight: normal;
      color: #fff;
      text-align: center;
      font-family: "楷体";
      .name {
        font-size: 100px;
        margin: 0 auto;
        display: block;
        width: 110px;
      }
      .pinyin {
        font-size: 35px;
        text-transform: uppercase;
      }
      .hex {
        margin-top: 50px;
        font-size: 35px;
        display: block;
        cursor: pointer;
      }
    }
    .logo {
      height: 520px;
      width: 60px;
      background: url(//www.ftp.qnets.cn/img/color_logo.png) no-repeat;
    }
    .footer {
      position: absolute;
      bottom: -100px;
      width: 650px;
      color: #fff;
      font-size: 10px;
      a {
        color: #fff;
        text-decoration: underline;
      }
    }
  }
}

@media screen and (max-width: 1600px) {
  .content-box {
    width: 750px;
  }
}
@media screen and (max-width: 1400px) {
  .content-box {
    width: 550px;
    .content {
      h2 {
        width: 300px;
      }
      .footer {
        width: 500px;
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  .content-box {
    width: 350px;
    .content {
      h2 {
        width: 200px;
        .name {
          font-size: 70px;
        }
      }
      .footer {
        width: 380px;
      }
    }
  }
}
@media screen and (max-width: 1080px) {
  .content-box {
    width: 150px;
    .content {
      h2 {
        width: 180px;
        .name {
          width: 55px;
          font-size: 50px;
        }
        .pinyin {
          font-size: 18px;
        }
      }
      .footer {
        width: 300px;
      }
      .logo {
        height: 520px;
        width: 60px;
      }
    }
  }
}
@media screen and (max-width: 960px) {
  .content-box {
    width: 150px;
    .content {
      h2 {
        width: 200px;
        .name {
          width: 55px;
          font-size: 55px;
        }
        .pinyin {
          font-size: 18px;
        }
      }
      .footer {
        display: none;
      }
      .logo {
        display: none;
      }
    }
  }
}
@media screen and (max-width: 680px) {
  .content-box {
    width: 150px;
    .content {
      h2 {
        width: 200px;
        .name {
          width: 55px;
          font-size: 50px;
        }
        .pinyin {
          font-size: 18px;
        }
      }
      .footer {
        display: none;
      }
      .logo {
        display: none;
      }
    }
  }
}
@media screen and (max-width: 480px) {
  .content-box {
    max-width: 100px;
    margin: 70px auto;
    .content {
      .color-value {
        display: none;
      }
      h2 {
        max-width: 100px;
        .name {
          width: 45px;
          font-size: 45px;
        }
        .pinyin {
          font-size: 18px;
        }
        .hex {
          font-size: 26px;
        }
      }
      .footer {
        display: none;
      }
      .logo {
        display: none;
      }
    }
  }
}
@media screen and (max-width: 420px) {
  .content-box {
    max-width: 80px;
    margin: 75px auto;
    display: flex;
    align-items: center;
    .content {
      .color-value {
        display: none;
      }
      h2 {
        max-width: 80px;
        .name {
          width: 45px;
          font-size: 45px;
        }
        .pinyin {
          display: none;
        }
        .hex {
          font-size: 22px;
        }
      }
      .footer {
        display: none;
      }
      .logo {
        display: none;
      }
    }
  }
}
</style>