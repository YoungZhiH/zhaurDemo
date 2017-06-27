<template>

    <div v-wechat-title="$route.meta.title">
    <div id="home">
      <!-- <switchbtn :result="result" @on-result-change="onResultChange"></switchbtn>
      <input type="button" value="change" @click="change"> -->
      <popus 
        :show.sync="showNotification"
        :options.sync="options">
      </popus>
      <!-- <popus 
          :isShowIf = "isShowIf"
          :isShow = "isShow" 
          :title ="Popustitle" @on-result-change = " onResultChange "></popus> -->

        <!-- <div v-on:click="changVuex">获取数据</div> -->
        <!-- @a-msg = "textBlur" -->
        <!-- <alert>
          <span>你好阿~</span>
        </alert> -->
        <!-- <input type="text" v-model = "question" > -->
        <!-- <alert @clickMeEmit = "textBlur"></alert> -->
        <!-- <il v-on:dianjiWo="dianjiWoTotal" :height = "height"></il> -->
        <slider></slider>
        <nav>
            <ul class="home-list-item flex">
                <li class="flex-1"><a>影院热映</a></li>
                <li class="flex-1"><a @click= "TsaoShiChang"  href="javascript:;">跳蚤市场</a></li>
            </ul>
            <ul class="home-list-item flex">
                <li class="flex-1"><a @click= "notice" href="javascript:;" >美好的事情</a></li>
                <li class="flex-1"><a href="javascript:;">下载Zhaur吧</a></li>
            </ul>
        </nav>
        <div class="section"  v-scroll="loadMore">
          <nv-list :list="info"></nv-list>
          <center v-show="!show" class="loading-center">
            <loading-center></loading-center>
          </center>
       </div>
    </div>
    </div>
</template>
<script>
  import nvList from '../componentslist/list-item.vue';
  import slider from '../componentslist/slider.vue';
  import loadingCenter from '../componentslist/loading-center.vue';
  import alert from '../componentslist/alert.vue';
  import directives from '../directives/directives.vue';
  import popus from '../componentslist/popus.vue';
  import switchbtn from '../componentslist/switchbtn.vue';

  var ils = {
    template:'<div @click ="dianjiWo">惦记我吧</div>',
    props:{
      height : {
        type : Number,
        required : true,
        default : 4,
        myMessage05 : "myMessage05"
      }
    },                                                                                                                                                                 
    data(){
      return{
        acount : 0
      }
    },
    methods:{
      dianjiWo(){
        this.acount +=1;
        this.$emit('dianjiWo');
      }
    }
  }
  var alertTemp = {
    autoClose: false,
    content: 'Uhh...it tastes yummy!~！',
    color :'#ff8080'
  }
  var TsaoShiChang = {
    autoClose: false,
    content: 'Uhh...跳蚤市场！',
    background :'#fff',
    color : '#000'
  }
  export default {
    name : '#home',
    data(){
      return {
        options: '',
        showNotification: false,
        result:true,
        isShow : true,
        isShowIf : false,
        msg: 'DarkRanger',
        a:"",
        answer: 'I cannot give you an answer until you ask a question!',
        question:'',
        total : 0,
        info : {},
        htmldemo:"<div>这货是v-html指令</div>",
        banner : [],
        show : true,
        scroll : true,
        Popustitle:"测试title",
        list: [
          'segmentfault',
          'github',
          'w3c'
        ],
        counter: 1, //当前页
        num: 10, // 一页显示多少条
        num2: 33, // 一页显示多少条
        pageStart: 0, // 开始页数
        pageEnd: 0, // 结束页数
        listdata: [], // 下拉更新数据存放数组
        downdata: [], // 上拉更多的数据存放数组
        newBankName: '我是修改newBankName的初始属性的',
        scrollData:{ 
          noFlag: false //暂无更多数据显示
        }
      }
    },
    watch:{
      question(){
        this.answer = 'Waiting for you to stop typing...';
        this.getAnswer();
      }
    },
    mounted(){
      this.$on('hello',function(e){
      })
    },
    methods:{
      notice(){
        this.options = alertTemp;
        this.showNotification = true;
      },
      TsaoShiChang(){
        this.options = TsaoShiChang;
        this.showNotification = true;
      },
      change() {
          this.result = !this.result;
      },
      onResultChange(val){
          this.result=val;//④外层调用组件方注册变更方法，将组件内的数据变更，同步到组件外的数据状态中
      },
      showPopus(){
        var self = this;
            self.isShow = false;
            self.isShowIf = true;
      },
      changVuex(){
        var self = this;
        this.$store.dispatch('newBankName',{'loadingBoxShow' : true}).then(function(){
          // 异步修改状态后回调
          console.log(self.$store.state.a.loadingBoxShow);
        })
      },
      textBlur(e){
        console.log(e);
      },
      getAnswer(){
        if (this.question.indexOf('?') === -1) {
           this.answer = 'Questions usually contain a question mark. ;-)';
           return
        }
      },
      dianjiWoTotal(){
        this.total += 1;
      },
      loadMore(){
          var self = this,newAry = [];
          if(!self.scroll){return false}
          self.scroll = false;
          self.show = false;
          function ObjStory(id,biaoti,author,type) //声明对象
            {
                this.title = id;
                this.desc= biaoti;
                this.Author= author;
                this.Type = type;
            }
          self.show = true;
          this.info.push(new ObjStory('测试添加14','大家去看天空1','李小胆','文艺类'));
          this.info.push(new ObjStory('测试添加15','大家去看天空2','李小胆','文艺类'));
          this.info.push(new ObjStory('测试添加16','大家去看天空3','李小胆','文艺类'));
          this.info.push(new ObjStory('测试添加17','大家去看天空4','李小胆','文艺类'));
          this.info.push(new ObjStory('测试添加18','大家去看天空5','李小胆','文艺类'));
          this.info.push(new ObjStory('测试添加19','大家去看天空6','李小胆','文艺类'));
          this.info.push(new ObjStory('测试添加20','大家去看天空7','李小胆','文艺类'));
          self.scroll = true;
      },
      getList() {
        var response = []
        for(let i = 0; i < 60; i++) {
          response.push({
            name: i
          })
        }
        this.listdata = response.slice(0, this.num);
      },
      onRefresh(done) {
        this.getList();
        done(); // call done
      },
      onInfinite(done) {
        this.counter++;
        let end = this.pageEnd = this.num * this.counter;
        let i = this.pageStart = this.pageEnd - this.num;
        let more = this.$el.querySelector('.load-more')
        for(i; i < end; i++) {
          if(i >= 30) {
            more.style.display = 'none'; //隐藏加载条
            //走完数据调用方法
            this.scrollData.noFlag = true;
            break;
          } else {
            this.downdata.push({
              name: i + "==="
            })
            more.style.display = 'none'; //隐藏加载条
          }
        }
        done();
      }
    }, 
    beforeCreate(){
        console.log(this.$store.state.a.bankInf.name+"?");
        var ImgArray = [],i;
        var self = this;
        //本地json数据 
        this.$http.get('../../data/homeList.json').then(function(res){
        // this.$http.get('./data/homeList.json').then(function(res){
          self.info = res.data.info ;
          $(".loadingBox").addClass('nsr-loading-hiden');
        },function(response){
        });
    },
    components:{
      'nvList' : nvList,
      'loadingCenter' : loadingCenter,
      'slider' : slider,
      'il':ils,
      'alert':alert,
      'popus' : popus,
      'switchbtn' : switchbtn
    }

  }

</script>