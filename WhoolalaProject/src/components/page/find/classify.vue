<template>
	<div class="classify">
		<h2>分类 CATEGORIES</h2>
		<div class="classList">
			<ul>
				<li v-for="item in searchList">
					<a href="javascript:;">
						<img v-lazy="item.headImgUrl" alt="">
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	
	export default {
		props:["searchList"],

	}
</script>

<style lang="less" scoped>
	.classify{
		width:100%;
		padding-bottom:49px;
		background:#fff;
		h2{
			padding:10px 0 10px 10px;
			box-sizing:border-box;
			font-size: 0.15rem;
			color:#000;
			font-weight: normal; 
		}
		.classList{
			padding:0 10px;
			box-sizing:border-box;
			ul{
				width:100%;
				overflow: hidden;
				li{
					width:50%;
					float: left;
					margin-bottom: 10px;
					&:nth-child(even){
						padding-left:5px;
						box-sizing:border-box;
					}
					&:nth-child(odd){
						padding-right:5px;
						box-sizing:border-box;
					}
					a{
						width:100%;
						display: block;
						position: relative;
						padding-top:50%;
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
						 	width:60%;
						 	position: absolute;
							top:0;
							left:0;
							right:0;
							bottom:0;
						 	margin:auto;
						 	display: block;
						}
					}
				}
			}
		}
	}
</style>