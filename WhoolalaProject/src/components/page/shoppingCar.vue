<template>
	<div class="shoppingCar">
		<nav-bar :type="type" :title="title"></nav-bar>
		<div class="shoppContent">
			<p class="carTip" v-if="carList.length==0">
				<i class="fa fa-shopping-cart"></i>
				购物车空空如也,赶快去添加吧!
			</p>
			<div class="shopList" v-if="carList.length>0" v-for="(item,index) in carList">
				<div class="vendor">
					<label for="">
						<input type="checkBox" :checked="item.isCheck" @click="choise(index,item.isCheck)">
					</label>
					<h3>
						卖家：<a href="javascript:;">{{item.vendor}}</a>
					</h3>
				</div>
				<div class="goodsInfo">
					<label for="">
						<input type="checkBox" :checked="item.isCheck" @click="choise(index,item.isCheck)">
					</label>
					<div class="info">
						<div class="img" :style='{backgroundImage:"url("+item.src+")"}'>
							<div class="cheng"></div>
						</div>
						<div class="details">
							<h4 class="title">{{item.name}}</h4>
							<p class="cSn">
								<span>颜色：</span><span>{{item.choise.color}}</span>
								
								<span>尺寸：</span><span>{{item.choise.size}}</span>
								
								<span>数量：</span><span>{{item.num}}</span>
								
							</p>
							<p class="priceGoods">
								<span class="allPrice">￥{{item.price}}</span>
								<i class="fa fa-trash" @click="removeGoods(index)"></i>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="footer">
			<div class="allContent">
				<div class="check">
					<label for=""></label>
					<input type="checkbox" id="checkAll" :checked="isCheckAll" @click="choiseAll(isCheckAll)">
				</div>
				<div class="countInfo">
					<span class="heji">本次合计：</span>
					<span class="priceCont">￥<b class="price">{{priceAll}}</b></span>
				</div>
			</div>
			<div class="sure">
				结算
			</div>
		</div>
	</div>

</template>

<script>
	import navBar from "@/components/base/navBar"
	export default {
		data (){
			return {
				type:"nav",
				title:"购物车",
				carList:this.$store.state.carList,
				price:[],
				arr:[],
				isCheckAll:true,
				scrollWatch:true
			}
		},
		components:{
			navBar
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
		computed:{
			priceAll() {
				let count = 0;
				this.carList.forEach(function(item){
					if( item.isCheck ){
						count += item.num*item.price
					}
				});
				return count.toFixed(2);

			}
		},
		methods:{
			
			removeGoods (index){
				//console.log(index)
				this.$store.commit("removeGood",index);
			},
			choise (index,isCheck){
				this.carList[index].isCheck=!isCheck;
				this.CheckAllCheck();
			},
			CheckAllCheck (){
				var co=0;
				for(var i=0;i<this.carList.length;i++){
					if(this.carList[i].isCheck==true){
						co++
					}
				}
				if(co==this.carList.length){
					this.isCheckAll=true;
				}else{
					this.isCheckAll=false;
				}
			},
			choiseAll (isCheckAll){
				this.isCheckAll=!isCheckAll;
				for(var i=0;i<this.carList.length;i++){
					if(this.isCheckAll==false){
						this.carList[i].isCheck=false;
					}else{
						this.carList[i].isCheck=true;
					}
					
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	
	.shoppingCar{
		padding-top:40px;
		height:100%;
		width:100%;
		padding-bottom: 54px;
		.shoppContent{
			.carTip{
				color:#ccc;
				font-size: 0.14rem;
				width:100%;
				position: absolute;
				top:40%;
				text-align: center;
				i{
					display: block;
					font-size: 0.6rem;
				}
			}
			.shopList{
				font-size: 0.12rem;
				background:#fff;
				margin-top:12px;
				.vendor{
					padding:10px;
					box-sizing:border-box;
					display: -webkit-box;
					-webkit-box-align:center;
					border-bottom: 1px solid #eee;
					label{
						display: block;
						display: -webkit-box;
						-webkit-box-align:center;
						margin:0 5px 0 6px;
						input{
							display: block;
							height:14px;
							width:14px;
						}
					}
					h3{
						font-weight: normal;
						color:#666;
						font-size: 0.12rem;
						a{
							color:#111;
						}
					}
				}
				.goodsInfo{
					display: -webkit-box;
					label{
						display: block;
						display: -webkit-box;
						-webkit-box-align:center;
						margin:0 5px 0 6px;
						input{
							display: block;
							height:14px;
							width:14px;
						}
					}
					padding:10px;
					box-sizing:border-box;
					.info{
						display: -webkit-box;
						-webkit-box-flex:1;
						
						.img{
							width:70px;
							height:70px;
							background-position: center center;
							background-size: cover;
							.cheng{
								padding-top:100%;
								overflow: hidden;
							}
						}
						.details{
							-webkit-box-flex:1;
							margin-left:10px;
							box-sizing:border-box;
							h4{
								font-size: 0.12rem;
								font-weight: normal;
								margin-top:-3px;
							}
						}
						.cSn{
							color:#aaa;
						}
						.priceGoods{
							color:#111;
							font-size: 0.14rem;
							display: -webkit-box;
							-webkit-box-align:center;
							span{
								display: block;
								-webkit-box-flex:1;
							}
							i{
								display: block;
								color:#ccc;
								font-size: 0.20rem;
							}
						}
					}
				}
			}
		}
		.footer{
			height:44px;
			background: #fff;
			display: -webkit-box;
			font-size: 0.14rem;
			position: fixed;
			bottom:0;
			left:0;
			width:100%; 
			.sure{
				height:100%;
				width:25%;
				background: #000;
				color:#fff;
				line-height: 44px;
				text-align: center;
				font-size: 0.16rem;
			}
			.allContent{
				display: -webkit-box;
				-webkit-box-flex:1;
				padding-left:10px;
				box-sizing:border-box;
				-webkit-box-align:center;
				.check{
					margin-right:6px;
					input{
						width:16px;
						height:16px;
					}
				}
				.countInfo{
					.heji{
						font-size: 0.12rem;
					}
					.priceCont{
						font-size: 0.18rem;
						b{
							font-weight: normal;
						}
					}
				}
			}
		}
	}
</style>