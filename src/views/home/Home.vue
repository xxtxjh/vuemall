<template>
  <div id="home">
    <nav-bar class="homeStyle">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      v-show="isTabFixed"
      class="tab-contro2"
      :titles="['流行','新款','精选']"
      @tabClick="tabClick"
      ref="tabControl1"
    ></tab-control>
    <div>
      <scroll
        class="content"
        ref="scroll"
        :probe-type="3"
        :pull-up-load="true"
        @contentOffset="contentOffset"
        @pullingUp="loadMore" > 
        <home-swiper :banners="banners" @swiperItemLoadImg="swiperItemLoadImg"></home-swiper>
        <recommend-view :recommend="recommend"></recommend-view>
        <feature-view></feature-view>
        <tab-control
          class="tab-control"
          ref="tabControl2"
          :titles="['流行','新款','精选']"
          @tabClick="tabClick"
        ></tab-control>
        <goods-list :goods="showGoodsType"></goods-list>
      </scroll>
    </div>
    <back-top @click.native="backTopClick" v-show="isBackTopShow"></back-top>
  </div>
</template>
<script>
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/content/scroll/Scroll";

import { getHomeMultidata, getHomeGoods } from "network/home";
import { debouce } from "@/common/utils";
import { itemListernerMixin, backTopMixin } from "@/common/mixin";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll
  },
  mixins: [itemListernerMixin, backTopMixin],
  data() {
    return {
      banners: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0
    };
  },
  computed: {
    showGoodsType() {
      return this.goods[this.currentType].list;
    }
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
	 console.log(this.banners);
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getContentY();
    this.$bus.$off("itemImgLoad", this.itemImgListener);
  },
  mounted() {
    let refresh = debouce(this.$refs.scroll.refresh, 150);
    this.$bus.$on("itemImageLoad", () => {
      refresh();
    });
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    contentOffset(position) {
      this.isBackTopShow = -position.y > 100;
      this.isTabFixed = -position.y > this.tabOffsetTop;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    swiperItemLoadImg() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
    debounce(func, delay) {
      return function(...args) {
        let timer = null;
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    },
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        //上拉加载更多
        this.$refs.scroll.finishPullUp();
      });
    }
  }
};
</script>
<style lang="scss" scoped>
#home {
  height: 100vh;
  position: relative;
  .homeStyle {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: #ff8198;
    color: #fff;
  }
  .content {
    position: absolute;
    top: 0;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
  .tab-contro2 {
    position: relative;
    top: 44px;
    left: 0;
    z-index: 999;
    background-color: #fff;
  }
}
</style>
