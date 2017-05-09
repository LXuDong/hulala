<template>
	<div class="swiper-container" id="swiper-box">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in bannerList">
            	<a href="javascript:;">
            		<img :src="item.coverImg" alt="">
            	</a>
            </div>
        </div>
    </div>
</template>

<script>
	
	export default {
		props:["bannerList"],
		mounted:function(){
		   var swiper = new Swiper('#swiper-box', {
		        pagination: '.swiper-pagination',
		        slidesPerView: 1,
			    paginationClickable: true,
			    observer:true,
			    observeParents:true,
			    autoplay:2000
		    });
	  	}
	}
</script>
<style lang="less">
	
	#swiper-box{
		.swiper-wrapper{
			box-sizing:border-box;
			.swiper-slide{
				background: #eee;
				a{
					display: block;
					width:100%;
					box-sizing:border-box;
					img{
						display: block;
						width:100%;
					}
					/* img[lazy=loading] {
						position: absolute;
						left:0;
						right:0;
						top:0;
						bottom:0;
					 	display: block;
					 	width:15%; 
					 	margin:auto; 
					} */
				}
			}
		}
		.swiper-pagination{
			height:1.2rem;
			
		}
	}




</style>