<template>
	<div>
		<div class="goTop" v-show="isShow" @click="goTop">
            <i class="fa fa-chevron-up"></i>
        </div>
	</div>
</template>

<script>
	
	export default {
		data (){
			return {
				isShow:false
			}
		},
		mounted (){
			var that=this;
			window.onscroll=function(){
				var scrollTop=document.documentElement.scrollTop  || document.body.scrollTop;
				var clientH=document.documentElement.clientHeight;
				if(scrollTop>clientH){
					that.isShow=true
				}
				else{
					that.isShow=false
				}
			}
		},
		methods :{
			goTop:function(){
				document.documentElement.scrollTop=0;
				document.body.scrollTop=0;
			}
		}
	}
</script>

<style lang="less" scoped>
	.goTop {
	    position: fixed;
	    right: 15px;
	    bottom: 60px;
	    width: 30px;
	    height: 30px;
	    border-radius: 3px;
	    border: 5px solid rgba(0,0,0,0.5);
	    z-index: 333;
	   	i{
	   		display: block;
		    border: 1px solid #f5f5f5;
		    background: rgba(0,0,0,0.8);
		    color: #fff;
		    border-radius: 3px;
		    height: 100%;
		    box-sizing: border-box;
		    text-align: center;
		    line-height: 27px;
		    font-size: 0.18rem;
	   	}
	}
</style>