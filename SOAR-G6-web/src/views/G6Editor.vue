<template>
	<div>
		 <G6Editor mode="edit">
		
		</G6Editor>
		
	</div>
</template>

<script>
	import G6Editor from '../components/G6Editor/index.vue'
	export default {
	  name: 'editor',
	  components:{G6Editor},
	  data() {
	  	return {
	  		
	  	}
	  },
	}
</script>

<style>
	html, body {
	    overflow: hidden;
	    margin: 0;
	    font-size: 12px;
	}
</style>