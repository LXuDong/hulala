<template>
	<div class="swiper-container" id="swiper-box">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in bannerList">
            	<a href="javascript:;" 
            		class="bg"
            		:style='{backgroundImage:"url("+item.coverImg+")"}'
            	>
            		<div class="ac"></div>
            	</a>
            </div>
        </div>
        <div class="swiper-pagination swiper-pagination-white"></div>
    </div>
</template>

<script>
	
	export default {
		props:["bannerList"],
		mounted:function(){
		   var swiper = new Swiper('#swiper-box', {
		        pagination: '.swiper-pagination',
        		paginationClickable: true,
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
					background-position: center center;
					background-size: cover;
					.ac{
						padding-top:130%;
					}
				}
			}
		}
		.swiper-pagination{
			height:1.2rem;
			
		}
	}




</style>