<template>
	<div class="content">
		<div class="picList" v-for="(item,index) in contentList">
			<div class="blog" v-if="item.type=='blog'">
				<div class="top">
					<a href="javascript:;">
						<img v-lazy="item.coverImg" alt="">
						<div class='mark'></div>
					</a>
					<span>{{item.title}}</span>
				</div>
				<div class="bottom">
					<div class="imgList" v-for="it in item.datas">
						<div class="goodsList">
							<router-link to="/detailed" class="bg"
								v-lazy:background-image="it.product.imgGroup.original"
								v-if="it.product">
								<div class="ac"></div>
							</router-link>
						</div>
						<span v-if="it.product">{{it.product.name}}</span>
					</div>
				</div>
			</div>
			<div class="scrollX" v-else-if="item.type=='products'">
				<div class="title">
					<h2>{{item.header}}</h2>
					<p>{{item.subhead}}</p>
				</div>
				<ul class="list">
					<li v-for="it in item.datas">
						<a href="javascript:;"><img v-lazy="it.coverImg" alt=""></a>
						<h3>{{it.title}}</h3>
						<p>{{it.subTitle}}</p>
					</li>
				</ul>
			</div>	
		</div>
		
	</div>
</template>

<script>
	
	export default {
		props:["contentList"],
		data (){
			return {
				contentInfo:[]
			}
		},
		created (){
			

		},
		methods :{
			
		}
	}
</script>

<style lang="less" scoped>
	 
	
	.content{
		background-color: #f6f7f9;
		font-size: 0.14rem;
		width:100%;
		padding-bottom:46px;
		.picList{
			width:100%;
			overflow: hidden;
			.scrollX{
				background: #fff;
				margin:5px 0;
				width:100%;
				padding-bottom: 5px;
				.title{
					padding:15px 0 10px 0;
					h2{
						text-align: center;
					}
					p{
						text-align: center;
					}
				}
				.list{
					display: -webkit-box;
					overflow-x:scroll;
					&::-webkit-scrollbar{
						width:0;
					}
					padding:0 5px;
					box-sizing:border-box;
					li{
						width:30%;
						margin-right:8px;
						a{
							display: block;
							padding-top:149.7%;
							position: relative;
							img{
								width:100%;
								display: block;
								position: absolute;
								top:0;
								left:0;
							}
							img[lazy=loading] {
							 	display: block;
							 	width:15%;
							 	position: absolute;
								top:0;
								left:0;
								right:0;
								bottom:0;
								margin:auto;  
							}
							img[lazy=error] {
							 	display: block;
							 	width:60%;
							 	position: absolute;
								top:0;
								left:0;
								right:0;
								bottom:0;
								margin:auto;  
							}
						}
						
						h3{
							width:100%;
							overflow: hidden;
							text-overflow: ellipsis;
	    					white-space: nowrap;
	    					color:#666;
	    					font-weight: normal;
						}
						p{
							width:100%;
							color:#000;
						}

					}
				}
			}
			
			.blog{
				background: #fff;
				padding-top:5px;
				.top{
					position: relative;
					a{
						display: block;
						padding-top:50%;
						position: relative;
						img{
							display: block;
							width:100%;
							position: absolute;
							top:0;
							left:0;
						}
						img[lazy=loading] {
						 	width:10%;
						 	position: absolute;
							top:0;
							left:0;
							right:0;
							bottom:0;
						 	margin:auto;
						 	display: block;
						}
						img[lazy=error] {
						 	width:60%;
						 	position: absolute;
							top:0;
							left:0;
							right:0;
							bottom:0;
						 	margin:auto;
						 	display: block;
						}
						.mark{
							width: 100%;
						    background: rgba(0,0,0,.3);
						    height: 100%;
						    position: absolute;
						    top: 0;
						}
						
					}
					

					span{
						position: absolute;
						top:47%;
						left:15px;
						right:15px;
						text-align: center;
						font-size: 0.18rem;
						color:#fff;
					}
				}
				.bottom{
						display: -webkit-box;
						padding-right:5px;
						box-sizing:border-box;
					.imgList{
						width:33.33333333%;
						padding-top:5px;
						padding-left:5px;
						padding-bottom:5px;
						box-sizing:border-box;
						.goodsList{
							padding-top:100%;
							position: relative;
							.bg{
								position: absolute;
								top:0;
								left:0;
								background-position: center center;
								background-size: cover;
								width:100%;
								display: block;
								.ac{
									padding-top:100%;
								}
							}
							.bg[lazy=loading] {
								width:20%;
								position: absolute;
								top:40%;
								left:40%;
							}
							.bg[lazy=error] {
								width:60%;
								background-size:100%;
								background-repeat: no-repeat;
								position: absolute;
								top:20%;
								left:20%;
							}
						}
						
						span{
							display: block;
							overflow: hidden;
							text-overflow: ellipsis;
	    					white-space: nowrap;
	    					padding:4px 0 2px 0;
						}
					}
					
				}
			}
			
		}
	}
</style>