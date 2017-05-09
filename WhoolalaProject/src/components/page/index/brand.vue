<template>
	<div class="brandPage">
		<div class="img-box" v-for="item in listInfo">
			<a class="bg" href="javascript:;" v-lazy:background-image="item.merchantinfo.merchantobj.imgGroup.logo">
				<div class="ac"></div>
				<div class='mark'></div>
			</a>
			<span>{{item.merchantinfo.merchantobj.name}}</span>
		</div>
	</div>

</template>

<script>
	
	export default {
		props :{
			navId:{
				type:Number,
				default:1
			}
		},
		data (){
			return {
				listInfo:{}
			}
		},
		created (){
			this.getBoyInfo();
		},
		methods :{
			getBoyInfo:function(){
				console.log(this.navId)
				this.$http.get("http://localhost:8080/mock/brandList.json",{
		          	
	      		}).then(function(data){
	      			this.listInfo=JSON.parse(data.bodyText)
	          		console.log(JSON.parse(data.bodyText))
	      		})
			},
		}
	}
</script>
<style lang="less" scoped>
	.brandPage{
		padding-top:75px;
		padding-bottom:46px;
	}
	.img-box{
		width:100%;
		margin-bottom:1px;
		padding-top:65%;
		position: relative;
			
		.bg{
			display: block;
			position: absolute;
			top:0;
			left:0;
			width:100%;
			background-position:center center;
			background-size: cover;
			.ac{
				padding-top:65%;
			}
			.mark{
				width: 100%;
			    background: rgba(0,0,0,.3);
			    height: 100%;
			    position: absolute;
			    top: 0;
			    left:0;
			    bottom: 0;
			    right:0;
			}
		}
		.bg[lazy=loading] {
			position: absolute;
			top: 0;
		    left:0;
		    bottom: 0;
		    right:0;
		    background-position:center center;
			background-size: 15%;
			background-repeat: no-repeat;
		}
		.bg[lazy=error] {
			background-size:60%;
			background-repeat: no-repeat;
			position: absolute;
			top: 0;
		    left:0;
		    bottom: 0;
		    right:0;
		}
		span{
			position: absolute;
			top:45%;
			left:0;
			right:0;
			text-align: center;
			font-size: 0.22rem;
			color:#fff;
		}
		
	}
</style>