<!-- 剧本列表 -->
<template>

	<div>
	<!-- 	<ul>
			<li>
				<router-link to="/edit/1">剧本1</router-link>
			</li>
			<li>
				<router-link to="/edit/2">剧本2</router-link>
			</li>
		</ul>
		 -->
		<el-card class="box-card" style="font-size: 30px;">
		  <div slot="header" class="clearfix">
		    <span>剧本列表</span>
		    <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
		  </div>
		  <div  class="text item">  
			<router-link to="/edit/1">剧本1</router-link>
		  </div>
		  <div  class="text item">
		    <router-link to="/edit/2">剧本2</router-link>		
		  </div>
		 
		</el-card>
		
		
	</div>
</template>

<script>
	export default {
    data() {
      return {
        
      };
    },
    methods: {
  
    }
  };


</script>

<style>
	 .text {
	    font-size: 20px;
	  }
	
	  .item {
	    margin-bottom: 18px;
	  }
	
	  .clearfix:before,
	  .clearfix:after {
	    display: table;
	    content: "";
	  }
	  .clearfix:after {
	    clear: both
	  }
	
	  .box-card {
	    width: 480px;
	  }
</style>