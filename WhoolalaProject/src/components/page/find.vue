<template>
	<div class="findPage">
		<nav-bar :type="type"></nav-bar>

		<div class="tabTitle">
			<nav>
				<a 
					href="javascript:;" 
					v-for="(item,index) in tabInfo" 
					@click="toggleCla(item.id,index)" 
					:class="index==0?'on':''"
					ref="a">
					{{item.title}}
				</a>
			</nav>
		</div>
		<tab-content :tabId="navId"></tab-content>

		<footer-bar></footer-bar>
	</div>

</template>

<script>
	import footerBar from "@/components/base/footer"
	import navBar from "@/components/base/navBar"
	import tabContent from "@/components/page/find/tabContent"
	export default {
		data (){
			return {
				type:"find",
				tabInfo:[
					{
						title:"男士 MEN",
						id:11
					},
					{
						title:"女士 WOMEN",
						id:22
					}
				],
				navId:11,
				index:0,
				scrollWatch:true
			}
		},
		components:{
			navBar,
			tabContent,
			footerBar
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
			toggleCla:function(id,index){
				this.navId=id;

				var aList=this.$refs.a;
				for(var i=0;i<aList.length;i++){
					aList[i].className=""
				}
				aList[index].className="on";
			}
		}
	}
</script>
<style lang="less" scoped>
	.findPage{
		font-size: 0.14rem;
		.tabTitle{
			height:35px;
			width:100%;
			position: fixed;
			top:40px;
			z-index: 10;
			background:#fff;
			nav{
				display: -webkit-box;
				-webkit-box-align:center;
				height:100%;
				a{
					width: 50%;
					display: block;
					font-size: 15px;
					color:#666;
					height:100%;
					text-align: center;
					line-height: 35px;
					box-sizing:border-box;
					&:first-child{
						position:relative;
						&:after {
						    content: "";
						    width: 1px;
						    height: 15px;
						    background-color: #ddd;
						    right: 0px;
						    top: 10px;
						    display: block;
						    position: absolute;
						}
					}
					&.on{
						border-bottom:1px solid #000;
					}
				}
			}
		}
	}
</style>