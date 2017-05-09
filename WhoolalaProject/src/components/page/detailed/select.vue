<template>
	<div>
		<div>
			<div class="productSizeColor">
				<ul>
		            <li>
		              	<label class="pdSize">
		                	<p class="black">尺寸: <span class="upIcon"></span></p>
		                	<p class="scV">{{sizeL}}</p>
		                	<select class="select" v-model="sizeL">
		                		
			                    <option 
			                    	v-for="(item,index) in size" 
			                    	v-bind:value="item">
			                    		{{item}}
			                    </option>
		                	</select>
		              	</label>
		            </li>
		            <li>
		              	<label class="pdColor">
		                	<p class="black">颜色: <span class="upIcon"></span></p>
		                	<p class="scV">{{colorL}}</p>
		                	<select v-model="colorL">
		                  		<option 
		                  			v-for="(item,index) in color" 
		                  			v-bind:value="item.c">
		                  				{{item.c}}
		                  		</option>
		                	</select>
		              	</label>
		            </li>
		          </ul>
			</div>

			<div class="productSales">
	          	<p>销量</p>
	          	<p class="totalNum">剩余库存 <span id="num">{{numL}}</span>件</p>
	        </div>
		</div>
		
	</div>

</template>

<script>
	
	export default {
		props:{
			color:{
				type:Array,
				default:function(){}
			},
			size:{
				type:Array,
				default:function(){}
			},
			num:{
				type:Array,
				default:function(){}
			}
		},
		data (){
			return {
				sizeL:1,
				colorL:"水洗灰拼接",
				numL:0,
			}
		},
		watch :{
			sizeL:function(){
				this.toggleNum();
			},
			colorL:function(){
				this.toggleNum();
			}
		},
		mounted (){
			console.log(this.size)
		},
		methods :{
			toggleNum:function(){

				var index1=0,index2=0;
				
				for(var i=0;i<this.size.length;i++){
					if(this.sizeL==this.size[i]){
						index1=i
					}
				}
				for(var i=0;i<this.color.length;i++){
					if(this.colorL==this.color[i].c){
						index2=i
					}
				}
				this.numL=this.num[index2].n[index1];
				
			}
		}
	}
</script>

<style lang="less" scoped>
	.productSizeColor{
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
</style>