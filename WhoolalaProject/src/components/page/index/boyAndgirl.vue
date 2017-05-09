<template>
	<div>
		<div class="banner">
			<swiper-bar :banner-list="bannerList"></swiper-bar>
		</div>
		
		<bg-content :content-list="contentList"></bg-content>
	</div>

</template>

<script>
	import swiperBar from "@/components/page/index/swiperBar"
	import bgContent from "@/components/page/index/content"
	export default {
		props :{
			navId:{
				type:Number,
				default:1
			}
		},
		components:{
			swiperBar,
			bgContent
		},
		data (){
			return {
				listInfo:{},
				bannerList:[],
				contentList:[]
			}
		},
		created (){
			this.getBoyInfo();
		},
		watch:{
			navId:function(){
				this.getBoyInfo()
			}
		},
		methods :{
			getBoyInfo:function(){
				
				if(this.navId==1){
					this.$http.get("http://localhost:8080/mock/boyList.json",{
		          	
		      		}).then(function(data){
		      			this.listInfo=JSON.parse(data.bodyText)
		      			this.bannerList=this.listInfo.postObjectInfo[0].datas;
		      			this.contentList=this.listInfo.postObjectInfo;
		      		})
				}else{
					
					this.$http.get("http://localhost:8080/mock/girlList.json",{
		          	
		      		}).then(function(data){
		      			this.listInfo=JSON.parse(data.bodyText)
		      			this.bannerList=this.listInfo.postObjectInfo[0].datas;
		      			this.contentList=this.listInfo.postObjectInfo;

		      		})
				}
				
			},
		}
	}
</script>
<style lang="less" scoped>
	.banner{
		padding-top:75px;
	}
</style>