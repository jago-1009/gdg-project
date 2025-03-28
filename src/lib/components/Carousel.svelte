<script>
    import { register } from 'swiper/element/bundle';
    import { onMount } from 'svelte';
    
    let {image1, image2, image3, position} = $props();
  </script>
  {#if position == 'left'}
  <div class="container left">
  
  <swiper-container  class="mySwiper"  effect="coverflow" grab-cursor="true" centered-slides="true"
  slides-per-view="1" lazy="true" loopAddBlankSlides="false" spacebetween="0"  coverflow-effect-rotate="0" coverflow-effect-stretch="0" coverflow-effect-depth="100"
  coverflow-effect-modifier="1" coverflow-effect-slide-shadows="true">
  <swiper-slide>
    <img src=" https://swiperjs.com/demos/images/nature-1.jpg" />
  </swiper-slide>
  <swiper-slide>
    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
  </swiper-slide>
  <swiper-slide>
    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
  </swiper-slide>
 
  
</swiper-container>
</div>
{:else if position == 'right'}
<div class="container right">
  
    <swiper-container  class="mySwiper"  effect="coverflow" grab-cursor="true" centered-slides="true"
    slides-per-view="1" lazy="true" loopAddBlankSlides="false" spacebetween="0"  coverflow-effect-rotate="0" coverflow-effect-stretch="0" coverflow-effect-depth="100"
    coverflow-effect-modifier="1" coverflow-effect-slide-shadows="true">
    <swiper-slide>
      <img src=" https://swiperjs.com/demos/images/nature-1.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
    </swiper-slide>
   
    
  </swiper-container>
  </div>
{/if}
<style>
    .container.left {
        justify-content: flex-start;
        align-items: center;
        margin-left: 10%;

    }
    .container.right {
        justify-content: flex-end;
        align-items: center;
        margin-right: 10%;

    }
.container {
display: flex;

}
    swiper-container {
        margin:0;
    }
    .mySwiper {
        width: 300px;
        height: auto;
    }
    swiper-slide {
        width: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img {
        width: 250px;
        height: auto;
        object-fit: cover;
    }
    @media (max-width: 600px) {
        .mySwiper {
            margin-top:10%;
            width: 100%;
            height: auto;
        }
        swiper-slide {
            width: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .container {
            margin:0 !important;
        }
    }
</style>