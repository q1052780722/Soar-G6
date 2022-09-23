<template>
  <div id="mountNode" :style="{width:width}">
    <div class="editor" >
      <context-menu />
      <!--toolbar-->
      <toolbar @transferPlaybook="getPlaybook"/>
	  
      <div style="height: 42px;"></div>
	  
      <div class="bottom-container">
        <!--itempannel-->
        <item-panel />
        <!--detailpannel-->
        <detail-panel />
        <!--miniMap-->
        <minimap />
		
        <!--page-->
        <page :height="height" :width="width"  :data="data" />
		
		<!-- 抽屉 用来展示剧本 剧本的内容由toolbar组件获取返回给G6Editor组件-->
		<el-drawer
		  title="剧本展示"
		  :visible.sync="drawer"
		  :with-header="true">
		  <span>{{this.playbook}}</span>
		</el-drawer>
		
      </div>
    </div>
    <Flow />
	
  </div>
</template>

<script>
import Toolbar from "../Toolbar";
import ItemPanel from "../ItemPanel";
import DetailPanel from "../DetailPanel";
import Minimap from "../Minimap";
import Page from "../Page";
import Flow from "../Flow"
import ContextMenu from "../ContextMenu";
import Editor from "@/components/Base/Editor";
import command from "@/command";
export default {
  name: "G6Editor",
  components: {
    Toolbar,
    ItemPanel,
    DetailPanel,
    Minimap,
    Page,
    ContextMenu,
    Flow
  },
  props: {
    height: {
      type: Number,
      default: document.documentElement.clientHeight
    },
    width: {
      type: Number,
      default: document.documentElement.clientWidth
    },
    data: {
      type: Object,
      default: () => {}
    }
  },
  created() {
    this.init();
  },
  data() {
    return {
      editor: {},
      command: null,
	   drawer: false,
	   playbook:"",
    };
  },
  methods: {
    init() {
      this.editor = new Editor();
      this.command = new command(this.editor);
	},
	getPlaybook(playbook){
		this.playbook=playbook;
		this.drawer=true;
	}
  },
   
};
</script>

<style scoped>
.editor {
  position: relative;
  width: 100%;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
.bottom-container {
  position: relative;
}
</style>