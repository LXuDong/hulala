<template>
	<div class="">
		<nav-bar :type="type" v-on:tabContent="tabContent"></nav-Bar>
		<keep-alive>
			<component v-bind:is="currentView" :navId="navId"></component>
		</keep-alive>
		<footer-bar></footer-bar>
	</div>
</template>

<script>
	import navBar from "@/components/base/navBar"
	import boyAndgirl from "@/components/page/index/boyAndgirl"
	import brand from "@/components/page/index/brand"
	import footerBar from "@/components/base/footer"

	export default {
		components:{
			navBar,
			boyAndgirl,
			brand,
			footerBar
		},
		data (){
			return {
				currentView:"boyAndgirl",
				navId:1,
				index:0,
				scrollWatch: true,
				type:"index"
			}
		},
		watch:{
			index:function(){

			}
		},
		
		mounted() {
			window.scrollTop=0;
			window.onScroll=function(){
				if(this.scrollWatch){

				}
			}
		},
		destroyed () {
			this.scrollWatch = false;
		},
		methods:{
			
			tabContent:function(index,Id) {
				this.navId=Id;
				console.log(this.navId)
				this.index=index;
	  			if(this.index%3==0 || this.index%3==1){
	  				this.currentView='boyAndgirl';
	  			}else{
	  				this.currentView="brand";
	  			}
	  			

	  		}
		}
	}
</script>

<style lang="less" scoped>
	


</style>