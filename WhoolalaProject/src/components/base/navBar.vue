<template>
	<div>
		<div class="header" v-if="type=='index'">
			<div class="headerBar">
				<div class="logo">
					<router-link to="/">
						<img src="../../../static/images/logo-w.png" alt="">
					</router-link>
				</div>
				
			</div>
			<div class="navBar">
				<div class="leftBgColor"></div>
				<div class="swiper-container" id="swiper">
			        <div class="swiper-wrapper">
			            <div class="swiper-slide" v-for="(item,index) in navList" :id="item.id">
			            	<a href="javascript:;" @click="toggleClass(index,item.id)">{{item.name}}</a>
			            </div>
			        </div>
			    </div>
			    <div class="rightBgColor"></div>
			</div>
		</div>
		<div class="find" v-if="type=='find'">
			<div class="search">
				<label for="">
					<input type="search" placeholder="搜索">
					<i class="fa fa-search"></i>
				</label>
				<p class="more">
					<i class="fa fa-reorder"  @click="toggleShow(show)"></i>
				</p>
			</div>
		</div>
		<div class="shoppCar" v-if="type=='nav'">
			<div class="icon-group icon-group-left">
				<a href="javascript:history.go(-1);"><i class="fa fa-angle-left"></i></a>
			</div>
			<h2 class="title" v-if="title">{{title}}</h2>
			<div class="icon-group icon-group-right">
				<a href="javascript:;">
					<span v-if="carList.length>0">{{carList.length}}</span>
					<i class="fa fa-reorder" @click="toggleShow(show)"></i>
				</a>
			</div>
		</div>
		<div class="tip" v-if="type=='nav' || type=='find'"  v-show="show">
			<nav>
				<router-link class="footer-icon" to="/">
					<i class="fa fa-home"></i>
					<span>首页</span>
				</router-link>
				<router-link class="footer-icon" to="/find">
					<i class="fa fa-search"></i>
					<span>发现</span>
				</router-link>
				<router-link class="footer-icon" to="/shoppingCar">
					<div class="tipA" v-if="carList.length>0">{{carList.length}}</div>
					<i class="fa fa-shopping-cart"></i>
					<span>购物车</span>
				</router-link>
				<router-link class="footer-icon" to="/mine">
					<i class="fa fa-user"></i>
					<span>我的</span>
				</router-link>
			</nav>
		</div>
	</div>
</template>

<script>
	
	export default {
		props:{
			type:{
				type:String,
				default:""
			},
			title:{
				type:String,
				default:""
			}
		},
		data (){
			return {
				navList:[
					{
						name:"男士",
						id:1
					},
					{
						name:"女士",
						id:2
					},
					{
						name:"品牌",
						id:3
					},
					{
						name:"男士",
						id:1
					},
					{
						name:"女士",
						id:2
					},
					{
						name:"品牌",
						id:3
					},
					{
						name:"男士",
						id:1
					},
					{
						name:"女士",
						id:2
					},
					{
						name:"品牌",
						id:3
					},
					{
						name:"男士",
						id:1
					},
					{
						name:"女士",
						id:2
					},
					{
						name:"品牌",
						id:3
					},
					{
						name:"男士",
						id:1
					},
					{
						name:"女士",
						id:2
					},
					{
						name:"品牌",
						id:3
					},
					{
						name:"男士",
						id:1
					},
					{
						name:"女士",
						id:2
					},
					{
						name:"品牌",
						id:3
					},

				],
				show:false,
				carList:this.$store.state.carList
			}
		},
		mounted (){
			var that=this;
			var swiper = new Swiper('#swiper', {
		       	pagination: '.swiper-pagination',
		        slidesPerView: 5,
		        centeredSlides: true,
		        paginationClickable: true,
		        spaceBetween: 30,
		        initialSlide :6,
		        loop:true,
				onTouchEnd: function(swiper){
					 var index=swiper.activeIndex;
					 var id=index%3;
					 if(id==0){
					 	id=3;
					 }
					 that.toggleClass((index-1),id);
				}
		    });

		},
		methods:{

	  		toggleClass (index,id) {
	  			

	  			this.$emit('tabContent',index,id);
	  		},
	  		toggleShow:function(show){
	  			this.show=!show;
	  		}

	  	}
	}
</script>

<style lang="less" scoped>
	.tip{
		position: fixed;
		top:40px;
		left:0;
		width:100%;
		padding:2px 0;
		background: rgba(0,0,0,0.8);
		z-index: 11;
		nav{
			display: -webkit-box;
			height:100%;
			-webkit-box-align:center;
			.footer-icon{
				-webkit-box-flex:1;
				display: block;
				display: -webkit-box;
				-webkit-box-orient:vertical;
				text-align: center;
				&:nth-child(3){
					position:relative;
					.tipA{
						height:16px;
						width:16px;
						display: block;
						background:red;
						line-height: 14px;
						text-align: center;
						color:#fff;
						position: absolute;
						top:0px;
						left:54%;
						border-radius: 100%;
						font-size: 0.12rem;
					}
				}
				span{
					display: block;
					font-size: 0.14rem;
					color:#999;
				}
				i{
					margin-top:0.02rem;
					display: block;
					font-size: 0.22rem;
					color:#999;
				}
				&.on{
					span{
						color:#000;
					}
					i{
						color:#000;
					}
				}
			}

		}
	}
	.shoppCar{
		height:40px;
		position: fixed;
		top:0;
		left:0;
		width:100%;
		font-size: 0.16rem;
		color:#fff;
		background: #000;
		padding:0 10px;
		z-index: 10;
		box-sizing:border-box;
		.title{
			position: absolute;
			right:25%;
			left:25%;
			top:0;
			text-align: center;
			line-height: 40px;
			font-weight: normal;
		}
		.icon-group{
			height:100%;
			z-index: 10;
			a{
				display: block;
				height:100%;
				display: -webkit-box;
				-webkit-box-align:center;
				-webkit-box-pack:center;
				color:#fff;
			}
			&.icon-group-left{
				float: left;
				a{
					i{
						display: block;
						font-size: 0.32rem;
					}
				}
			}
			&.icon-group-right{
				float: right;
				a{
					position: relative;
					span{
						display: block;
						position: absolute;
						top:3px;
						right:-5px;
						width:16px;
						height:16px;
						background: red;
						color:#fff;
						text-align: center;
						line-height: 14px;
						border-radius: 100%;
						font-size: 0.12rem;
					}
					i{
						display: block;
						font-size: 0.28rem;
					}
				}
			}
		}
	}
	.header{
		position: fixed;
		z-index:100;
		width:100%;
		height:75px;
		z-index: 10;
		.headerBar{
			height:40px;
			background:#000;
			width:100%;
			.logo{
				height:40px;
				width:100%;
				display: -webkit-box;
				-webkit-box-align:center;
				a{
					display: block;
					width:60px;
					margin:0 auto;
					z-index:102;
					img{
						display: block;
						width:100%;
						z-index:103;
					}
				}
			}
			
		}
		.navBar{
			height:35px;
			background: #000;
			position: relative;
			padding:0 0.24rem;
			box-sizing:border-box;
			.swiper-container{
				.swiper-wrapper{
					.swiper-slide{
						line-height: 35px;
						a{
							display: block;
							text-align: center;
							font-size: 0.16rem;
							color:#fff;
						}
					}
				}
			}
			.leftBgColor{
				position: absolute;
				left:0;
				top:0;
				height:100%;
				width:40%;
				z-index:222;
				background: -webkit-linear-gradient(right, rgba(0,0,0,0), rgba(0,0,0,1));
				&:after {
				    content: "";
				    left: 0;
				    background: -moz-linear-gradient(right, rgba(0,0,0,0), rgba(0,0,0,1));
				    background: -webkit-linear-gradient(right, rgba(0,0,0,0), rgba(0,0,0,1));
				    position: absolute;
				    height: 100%;
				    width: 80%;
				}
			}
			.rightBgColor{
				position: absolute;
				right:0;
				top:0;
				height:100%;
				width:40%;
				z-index:222;
				background: -webkit-linear-gradient(right, rgba(0,0,0,1), rgba(0,0,0,0));
				&:after{
				    content: "";
				    background: -moz-linear-gradient(right, rgba(0,0,0,1), rgba(0,0,0,0));
				    background: -webkit-linear-gradient(right, rgba(0,0,0,1), rgba(0,0,0,0));
				    position: absolute;
				    right: 0;
				    height: 100%;
				    width: 80%;
				}
			}
		}
	}
	.find{
		height:40px;
		width:100%;
		background:#000;
		font-size: 0.14rem;
		color:#fff;
		position:fixed;
		top:0;
		left:0;
		z-index:10;
		.search{
			display: -webkit-box;
			padding:0 12px;
			box-sizing:border-box;
			height:100%;
			-webkit-box-align:center;
			label{
				display: block;
				position: relative;
				width:88%;
				input{
					height:26px;
					border:none;
					outline: none;
					width:100%;
					background: #2c2d2e;
					padding-left:30px;
					box-sizing:border-box;
				}
				input::-webkit-input-placeholder{
					color:#fff;
				}
				i{
					position: absolute;
					left:5px;
					top:4px;
					font-size: 0.18rem;
				}
			}
			p{
				display: block;
				-webkit-box-flex:1;
				text-align: end;
				i{
					display: block;
					font-size: 0.26rem;
					color:#fff;
				}
			}
		}

	}
	
</style>