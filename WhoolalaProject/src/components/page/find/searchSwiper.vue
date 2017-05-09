<template>
	<div class="swip">
		<div class="swiper-container" id="searchSwiper">
	        <div class="swiper-wrapper">
	            <div class="swiper-slide" v-for="item in swiperList">
	            	<h3>{{item.postTitle}}</h3>
	            	<div class="picList">
	            		<div class="cheng" v-for="it in item.imgGroups">
	            			<a 	class="bg"
	            				href="javascript:;" 
	            				:style='{backgroundImage:"url("+it.x400+")"}'>
		            			<div class="ac"></div>
		            		</a>
	            		</div>
	            	</div>
	            </div>
	        </div>
	    </div>
	</div>
</template>

<script>
	
	export default{
		props:["swiperList"],
		mounted (){
			var swiper = new Swiper('#searchSwiper', {
		        pagination: '.swiper-pagination',
		        slidesPerView:1.3,
		        centeredSlides: true,
		        spaceBetween: 10,
		        autoplay:2000,
		        initialSlide :2,
		        loop:true,
		        observer:true,
				observeParents:true
		    });
		}
	}
</script>
<style lang="less" scoped>
	.swip{
		padding-top:75px;
	}
	#searchSwiper{
		padding:10px 0;
		background: #eee;
		.swiper-wrapper{
			.swiper-slide{
				background: #fff;
				h3{
					display: block;
					font-size: 0.12rem;
					font-weight: normal;
					padding:12px 0 8px 5px;
					color:#666;
					box-sizing:border-box;
				}
				.picList{
					display: -webkit-box;
					padding:8px;
					box-sizing:border-box;
					.cheng{
						-webkit-box-flex:1;
						padding-top:33.4%;
						position: relative;
						margin-right: 8px;
						&:last-child{
							margin-right:0;
						}
						a{
							width:100%;
							position: absolute;
							top:0;
							left:0;
							display: block;
							background-size: cover;
							background-position: center center;
							img{
								display: block;
								width:100%;
							}
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
					}
				}
			}
		}
	}
</style>