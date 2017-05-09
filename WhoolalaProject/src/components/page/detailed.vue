<template>
	<div class="detailedPage"> 
		<nav-bar :type="type"></nav-bar>
		<div class="productPic">
			<swiper-D :banner-list="bannerList"></swiper-D>
		</div>
		<div class="detailsContent">
			<div class="productInfo">
				<h3>{{detailsList.productTitle}}</h3>
				<p class="price">￥<b>{{detailsList.currentPrice}}</b> <span>{{detailsList.originalPrice}}</span></p>
				<p class="like"><span><b>{{detailsList.like}}</b> 的用户喜欢</span> <span>运费：{{detailsList.feeReg}}</span></p>
			</div>

			<div class="productSizeColor">
				<ul>
		            <li>
		              	<label class="pdSize">
		                	<p class="black">尺寸: <span class="upIcon"></span></p>
		                	<p class="scV">{{size}}</p>
		                	<select class="select" v-model="size">
			                    <option v-for="item in sizeColorNum.size" v-bind:value="item">{{item}}</option>
		                	</select>
		              	</label>
		            </li>
		            <li>
		              	<label class="pdColor">
		                	<p class="black">颜色: <span class="upIcon"></span></p>
		                	<p class="scV">{{color}}</p>
		                	<select v-model="color">
		                  		<option v-for="item in sizeColorNum.color" v-bind:value="item.c">{{item.c}}</option>
		                	</select>
		              	</label>
		            </li>
		          </ul>
			</div>

			<div class="productSales">
	          	<p>销量 {{detailsList.sales}}</p>
	          	<p class="totalNum">剩余库存 <span id="num">{{num}}</span>件</p>
	        </div>
	
	        <div class="productMerchantWrap">
	          	<div class="shop" @click="toggleShow(1,isShow1)">
	            	<div class="logo">
	                	<img :src="shop.logo">
	            	</div>
	            	<h2>{{shop.name}}</h2>
	            	<i class="fa fa-angle-down"></i>
	          	</div>
	          	<div class="contInfo" v-show="isShow1">
	            	<p class="info" v-if="shop.shopInfo!=''">{{shop.shopInfo}}</p>
	            	<p class="merchantBtns">
	              		<a href="javascript:;" class="goMerchant">
	              			<span>进入店铺</span>
	              		</a>
	                	<a href="javascript:;" class="followedMerchant">
	                		<i class="addFollow">+</i>
	                		<span>关注品牌</span>
	                	</a>
	            	</p>
	          	</div>
	        </div>
	         <div class="showPic cell">
	        	<div class="title" @click="toggleShow(2,isShow2)">
	        		<h3>{{description.title}}</h3>
	        		<i class="fa fa-angle-down"></i>
	        	</div>
	        	<div class="contentInfo" v-show="isShow2">
	        		<p>{{description.info}}</p>
	        	</div>
	        </div>

	        <div class="productSizeList" v-if="detailsList.sizeList!=''">
	        	<div class="title" @click="toggleShow(3,isShow3)">
	        		<h3></h3>
	        		<i class="fa fa-angle-down"></i>
	        	</div>
	        </div>

	        <div class="productAfterSales cell">
	        	<div class="title" @click="toggleShow(4,isShow4)">
	        		<h3>{{afterSalesTerms.title}}</h3>
	        		<i class="fa fa-angle-down"></i>
	        	</div>
	        	<div class="contentInfo" v-html="afterSalesTerms.info" v-show="isShow4">
	        		
	        	</div>
	        </div>
	        <div class="showPic cell">
	        	<div class="title" @click="toggleShow(5,isShow5)">
	        		<h3>{{showPic.title}}</h3>
	        		<i class="fa fa-angle-down"></i>
	        	</div>
	        	<div class="contentInfo" v-show="isShow5">
	        		<img :src="showPic.img" alt="">
	        	</div>
	        </div>

	        <div class="productRecommend">
	        	<div class="title">
	        		<h3>{{recommendList.title}}</h3>
	        		<p>{{recommendList.EnglishT}}</p>
	        	</div>
	        	<div class="recommendListPic">
	        		<nav>
	        			<a href="javascript:;" v-for="item in recommendList.recommendProduct"><img :src="item" alt=""></a>
	        		</nav>
	        	</div>
	        </div>
	        <div class="changeMark" @click="toggleShow(6,isShowChange)" v-show="isShowChange"></div>
	        <div class="productSizeColorChange" v-show="isShowChange">

	        	<div class="goodsInfo">
	        		<div class="img" :style='{backgroundImage:"url("+detailsList.smallImg+")"}'>
	        			<div class="cheng">
	        				
	        			</div>
	        		</div>
	        		<div class="info">
	        			<h3>
	        				{{detailsList.productTitle}}
	        			</h3>
	        			<p>
	        				￥<span>{{detailsList.currentPrice}}</span>
	        			</p>
	        		</div>
	        	</div>
				<ul>
		            <li>
		              	<label class="pdSize">
		                	<p class="black">尺寸: <span class="upIcon"></span></p>
		                	<p class="scV">{{size}}</p>
		                	<select class="select" v-model="size">
			                    <option v-for="item in sizeColorNum.size" v-bind:value="item">{{item}}</option>
		                	</select>
		              	</label>
		            </li>
		            <li>
		              	<label class="pdColor">
		                	<p class="black">颜色: <span class="upIcon"></span></p>
		                	<p class="scV">{{color}}</p>
		                	<select v-model="color">
		                  		<option v-for="item in sizeColorNum.color" v-bind:value="item.c">{{item.c}}</option>
		                	</select>
		              	</label>
		            </li>
		        </ul>
		        <div class="changeNum">
		        	<p id="quantity" class="quantity">
	                    <span class="quanTxt">数量:</span>
	                    <span class="quanBtn sub" @click="subNum"><strong>-</strong></span>
	                    <span class="quanNumber">
	                    	<input type="text" value="1" name="purchaseQuantity" id="count" disabled="disabled">
	                    </span>
	                    <span class="quanBtn add" @click="addNum"><strong>+</strong></span>
	                    <span class="totalNum">库存<em>{{num}}</em>件</span>
                  	</p>
		        </div>
		        <div class="sure">
		        	<button class="btn" id="btn" @click="sureClick">确认加入购物车</button>
		        </div>
			</div>
		</div>
		
		
		<div class="shopBtn">
			<nav>
				<a href="javascript:;">
					<img src="../../../static/images/kefu.png" alt="">
					<span>联系客服</span>
				</a>
				<a href="javascript:;">
					立即购买
				</a>
				<a href="javascript:;" @click="toggleShow(6,isShowChange)">
					加入购物车
				</a>
			</nav>
		</div>
	</div>
</template>

<script>
	import swiperD from "@/components/page/index/swiperD"
	import navBar from "@/components/base/navBar"
	export default {
		data (){
			return {
				type:"nav",
				bannerList:[],
				detailsList:[],
				shop:{},
				afterSalesTerms:{},
				showPic:{},
				recommendList:{},
				description:{},
				sizeColorNum:[],
				size:"",
				color:"",
				num:"",
				isShow1:false,
				isShow2:false,
				isShow3:false,
				isShow4:false,
				isShow5:false,
				isShowChange:false,
				isDisabled:false,
				scrollWatch:true
			}
		},
		components:{
			navBar,
			swiperD
		},
		created (){
			this.getDetailed()
		},
		mounted (){
			this.taggleDisable();
			window.scrollTop=0;
			window.onScroll=function(){
				if(this.scrollWatch){

				}
			}
		},
		
		destroyed () {
			this.scrollWatch = false;
		},
		watch :{
			size:function(){
				this.toggleNum(this.sizeColorNum);
			},
			color:function(){
				this.toggleNum(this.sizeColorNum);
			},
			num:function(){
				this.taggleDisable();
			}
		},
		methods:{
			getDetailed:function(){
				var that=this;
				this.$http.get("http://localhost:8080/mock/details.json",{
		          	
	      		}).then(function(data){
	      			that.detailsList=data.body;
	      			that.bannerList=data.body.productImg;
	      			that.shop=that.detailsList.shop;
	      			that.afterSalesTerms=that.detailsList.afterSalesTerms;
	      			that.showPic=that.detailsList.showPic;
	      			that.recommendList=that.detailsList.recommend;
	      			that.description=that.detailsList.description;
	      			that.sizeColorNum=that.detailsList.sizeColorNum;
	      			that.size=that.sizeColorNum.size[0];
	      			that.color=that.sizeColorNum.color[0].c;
	      			that.num=that.sizeColorNum.num[0].n;
	      			that.toggleNum(that.sizeColorNum);
	      		})
			},
			toggleShow:function(index,show){
				if(index==1){
					this.isShow1=!show;
				}else if(index==2){
					this.isShow2=!show;
				}else if(index==3){
					this.isShow3=!show;
				}else if(index==4){
					this.isShow4=!show;
				}else if(index==5){
					this.isShow5=!show;
				}else if(index==6){
					this.isShowChange=!show;
				}
			},
			toggleNum:function(sizeColorNum){
				
				var num=document.getElementById("num");
				var index1=0,index2=0;
				var sizeL=sizeColorNum.size,
					colorL=sizeColorNum.color,
					numL=sizeColorNum.num;
				for(var i=0;i<sizeL.length;i++){
					if(this.size==sizeL[i]){
						index1=i
					}
				}
				for(var i=0;i<colorL.length;i++){
					if(this.color==colorL[i].c){
						index2=i
					}
				}
				this.num=numL[index2].n[index1];
				
			},
			taggleDisable:function(){
				var btn=document.getElementById("btn");
				if(this.num==0){
					btn.setAttribute("disabled",true);
					btn.className="btn hui"
				}else{
					btn.className="btn";
					btn.removeAttribute("disabled");

				}
				
			},
			sureClick:function(){
				this.isShowChange=!this.isShowChange;
				var count=document.getElementById("count");
				var value=count.value;
				var data = {
					vendor:this.detailsList.shop.name,
					name:this.detailsList.productTitle,
					src:this.detailsList.smallImg,
					num:value,
					isCheck:true,
					choise:{
						size:this.size,
						color:this.color
					},
					price:this.detailsList.currentPrice
				}
				this.$store.commit("addCarList",data);
			},
			addNum:function(){
				var count=document.getElementById("count");
				if(this.num==0){
					return false;
				}else{
					if(count.value<this.num){
						count.value++
					}else{
						return false;
					}
				}
			},
			subNum:function(){
				var count=document.getElementById("count");
				if(this.num==0){
					return false;
				}else{
					if(count.value>1){
						count.value--
					}else{
						return false;
					}
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.detailedPage{
		width:100%;
		background: #fff;
		.productPic{

			padding-top:40px;
		}
		.detailsContent{
			padding-bottom:38px;
			font-size: 0.14rem;
			.productInfo{
				padding:10px;
				box-sizing:border-box;
				h3{
					font-size: 0.18rem;
					font-weight: normal;
					color:#000;
					line-height:1.2;
				}
				.price{
					margin:4px 0;
					color:#000;
					b{
						font-size: 0.16rem;
						font-weight: 400;
					} 
					span{
						color: #999;
    					font-size: 12px;
    					text-decoration: line-through;
					}
				}
				.like{
					display: -webkit-box;
					span{
						display: block;
						&:nth-child(1){
							color:#999;
							width:50%;
							b{
								color:#000;
								font-weight: normal;
							}
						}
						&:nth-child(2){
							color:#999;
							-webkit-box-flex:1;
							text-align: end;
						}
					}
				}
			}
			.changeMark{
				height:100%;
				width:100%;
				position: fixed;
				top:0;
				right:0;
				bottom:0;
				left:0;
				background:rgba(0,0,0,0.5);
				z-index: 10;
			}
			.productSizeColorChange{
				position: fixed;
				bottom:0;
				left:0;
				z-index: 100;
				background: #fff;
				width:100%;
				.goodsInfo{
					padding:16px 8px 10px 8px;
					display: -webkit-box;
					box-sizing:border-box;
					border-bottom: 1px solid #ddd;
					.img{
						width:20%;
						margin-right:10px;
						background-size: cover;
						background-position: center center;
						.cheng{
							padding-top:100%;
						}
					}
					.info{
						-webkit-box-flex:1;
						h3{
							font-weight: normal;
							font-size: 0.14rem;
							margin-bottom: 4px;
						}
						p{
							color:#f00;
							span{
								font-weight: bold;
								font-size: 0.14rem;
							}
						}
					}

				}
				.changeNum{
					border-top: 1px solid #ddd;
					p{
						padding: 15px 10px;
					    line-height: 20px;
					    text-align: right;
					    span{
					    	display: inline-block;
						    text-align: right;
						    vertical-align: middle;
						    color: #000;
						    font-size: 0.12rem;
						    &.quanBtn{
								
								width:22px;
								height:22px;
								line-height: 22px;
								text-align: center;
								border:2px solid #000;
								border-radius: 100%; 
								strong{
									font-size: 0.28rem;
									font-weight: normal;
									margin-top:-2.4px;
									display: block;
								}

						    }
						    &.add{
								background:#000;
								color:#fff;
						    }
						    input{
								width: 32px;
							    min-width: 32px;
							    border: none;
							    height: 100%;
							    display: block;
							    text-align: center;
							    font-size: 14px;
						    }
					    }
					}
				}
				.sure{
					padding:8px;
					box-sizing:border-box;
					.btn{
						width: 100%;
					    height: 40px;
					    font-size: 16px;
					    background: #222;
					    border: none;
					    color: #fff;
					}
					.hui{
						background: #eee;
						color:#333;
					}
				}
			}
			.productSizeColor,.productSizeColorChange{
				border-top: 1px solid #ddd;
				ul{
					display: -webkit-box;
					li{
						width:50%;
					    text-align: center;
						padding: 5px;
						box-sizing:border-box;
						&:first-child{
							border-right: 1px solid #ddd;
							box-sizing:border-box;
						}
						label{
							display: block;
						    height: 100%;
						    position: relative;
						    padding-top: 5px;
						    p{
						    	margin-bottom: 3px;
							    height: 18px;
							    line-height: 18px;
							    text-overflow: ellipsis;
							    overflow: hidden;
							    white-space: nowrap;
							    &.black{
							    	color:#000;
							    	.upIcon {
									    position: relative;
									    width: 12px;
									    display: inline-block;
									    top: -12px;
									    left: -5px;
									    float: none;
									    &:before {
										    content: "";
										    border: 6px solid transparent;
										    border-bottom-color: #000;
										    width: 0;
										    height: 0;
										    border-top-width: 0;
										    position: absolute;
										    top: 5px;
										    left: 8px;
										}
										&:after{
											content: "";
										    border: 4px solid transparent;
										    border-bottom-color: #fff;
										    width: 0;
										    height: 0;
										    border-top-width: 0;
										    position: absolute;
										    top: 7px;
										    left: 10px
										}
									}
							    }
							    .scV{
							    	color:#666;
							    }
						    }
						    select{
								display: block;
							    height: 100%;
							    position: absolute;
							    left: 0;
							    top: 0;
							    width: 100%;
							    outline: none;
							    opacity: 0;
							}
						}

					}
				}
			}
			.productSales{
				border-top: 1px solid #ddd;
				display: -webkit-box;
				padding:14px 0;
				box-sizing:border-box;
				p{
					width:50%;
					text-align: center;
					font-size: 0.12rem;
				}
			}
			.productMerchantWrap{
				border-top: 1px solid #ddd;
				.shop{
					display: -webkit-box;
					height:0.7rem;
					padding:0 10px;
					box-sizing:border-box;
					-webkit-box-align:center;
					.logo{
						height:100%;
						padding:10px 10px;
						box-sizing:border-box;
						img{
							display: block;
							height:100%;
						}
					}
					h2{
						-webkit-box-flex:1;
						font-size: 0.18rem;
						font-weight: normal;
					}

					i{
						display: block;
						font-size: 0.20rem;
						color:#666;
					}
				}
				.contInfo{
					padding:0 10px 10px 10px;
					box-sizing:border-box;
					.info{
						font-size: 0.12rem;
						color:#666;
					}
					.merchantBtns{
						display: -webkit-box;
						margin-top:10px;
						a{
							display: block;
							width:50%;
							height:35px;
							line-height:35px;
							text-align: center;
							color:#000;
							border:1px solid #000;
							border-radius:3px; 
							box-sizing:border-box;
							&:first-child{
								margin-right:5px;
							}
							&:last-child{
								margin-left:5px;
							}
						}
					}
				}
			}
			.cell{
				border-top: 1px solid #ddd;
				.title{
					height:0.5rem;
					padding:0 10px;
					box-sizing:border-box;
					display: -webkit-box;
					-webkit-box-align:center;
					h3{
						font-size:0.14rem;
						font-weight: normal;
						color:#666;
						-webkit-box-flex:1;
					}
					i{
						font-size: 0.2rem;
						color:#666;
					}
				}
				.contentInfo{
					padding:10px;
					box-sizing:border-box;
					img{
						display: block;
						width:100%;
					}
					p{
						font-size: 0.12rem;
						color:#666;
						b{
							font-weight: normal;
						}
					}
				}
			}
			.productRecommend{
				
				.title{
					background:#000;
					padding:5px;
					box-sizing:border-box;
					h3{
						font-size: 0.14rem;
						color:#fff;
						text-align: center;
					}
					p{
						font-size: 0.12rem;
						color:#999;
						text-align: center;
					}
				}
				.recommendListPic{
					background:#000;
					padding:0 5px;
					box-sizing:border-box;
					nav{
						display: -webkit-box;
						overflow-x:scroll;
						&::-webkit-scrollbar{
							width:0;
						}
						a{
							display: block;
							width:28%;
							margin-right:5px;
							img{
								display: block;
								width:100%;
							}
						}
					}
				}
			}
		}
		.shopBtn{
			height:50px;
			font-size: 0.16rem;
			background: #fff;
			position: fixed;
			bottom:0;
			left:0;
			width:100%;
			nav{
				height:100%;
				display: -webkit-box;
				a{
					display: block;
					width:37%;
					text-align: center;
					color:#fff;
					&:nth-child(1){
						width:26%;
						font-size: 0.14rem;
						color:#000;
						img{
							display: block;
							width:25%;
							margin:3px auto;
						}
						span{
							display: block;
						}
					}
					&:nth-child(2){
						background: #333;
						text-align: center;
						line-height: 50px;
					}
					&:nth-child(3){
						background: #000;
						text-align: center;
						line-height: 50px;
					}
					
				}
			}
		}
	}
</style>