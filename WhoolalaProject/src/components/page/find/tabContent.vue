<template>
	<div class="tabContent">
		<search-swiper :swiper-list="swiperList"></search-swiper>
		<classify :search-list="searchList"></classify>
	</div>

</template>

<script>
	import searchSwiper from "@/components/page/find/searchSwiper"
	import classify from "@/components/page/find/classify"
	export default {
		props:{
			tabId:{
				type:Number,
				default:11
			}
		},
		components:{
			searchSwiper,
			classify
		},
		data (){
			return {
				swiperList:[],
				searchList:[]
			}
			
		},
		watch:{
			tabId:function(){
				this.getFindList()
			}
		},
		created (){
			this.getFindList();
		},
		methods:{
			getFindList:function(){
				if(this.tabId==11){
					this.$http.get("http://localhost:8080/mock/searchMen.json",{
		          	
		      		}).then(function(data){
		      			this.swiperList=data.body.recommendPosts;
		      			this.searchList=data.body.categorieslist;
		      			console.log(this.swiperList)
		      		})
				}else{
					this.$http.get("http://localhost:8080/mock/searchWomen.json",{
		          	
		      		}).then(function(data){
		      			this.swiperList=data.body.recommendPosts;
		      			this.searchList=data.body.categorieslist
		      		})
				}
			}
		}

	}
</script>

<style lang="less" scoped>
	
</style>