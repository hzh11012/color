<template>
  <div class="home" v-if="isShow">
    <div class="wallpaper" :style="'backgroundColor:'+seletedItem.hex"></div>
    <list :colorList="colorList" @change="change"></list>
    <contents :seletedItem="seletedItem"></contents>
  </div>
</template>

<script>
import list from "../components/List.vue";
import contents from "../components/Contents.vue";
export default {
  data() {
    return {
      colorList: {},
      seletedItem: {
        pinyin: "zhongguose",
        CMYK: [0, 0, 0, 0],
        RGB: [0, 0, 0],
      },
      isShow: false,
    };
  },
  components: {
    list,
    contents,
  },
  methods: {
    getColorList() {
      this.$http.get("api/colors.json").then((res) => {
        this.colorList = res.data;
        this.isShow = true;
      });
    },
    change(item) {
      document.title = item.name + ' - 中国色 - 中国传统颜色'
      this.seletedItem = item;
    },
  },
  mounted() {
    this.getColorList();
  },
};
</script>

<style lang="less" scoped>
.home {
  display: flex;
  width: 100%;
  height: 100%;
  overflow-y: scroll; 
  .wallpaper {
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url("//www.ftp.qnets.cn/img/color_texture.png");
    background-color: #ddd;
    transition: all 2s ease-in;
  }
}
</style>
