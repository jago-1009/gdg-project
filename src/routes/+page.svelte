<script>
import Hero from '$lib/components/Hero.svelte';
import Carousel from '$lib/components/Carousel.svelte';
import { register } from 'swiper/element/bundle';
  
  register();

  const spaceBetween = 10;
  const onProgress = (e) => {
    const [swiper, progress] = e.detail;
    console.log(progress)
  };
  const onSlideChange = (e) => {
    console.log('slide changed')
  }
</script>

<div class="home-page">
<Hero title="Game Developer's Group at IU Indianapolis" joinButton='true' subtitle = "This is a motivating tagline." joinHref='#'/>
<div class="header">
<h2>Motivating Header.</h2>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto illum possimus ab eveniet voluptatem fuga consectetur unde esse reiciendis sequi deleniti quod voluptate, sapiente suscipit porro veritatis provident pariatur eaque.</p>
</div>

<div class="calendar">
<!-- IFRAME GOES HERE -->
 <div class="iframe-box">

 </div>

</div>
<div class="calendar-link">
<a href="#calendar" >View all upcoming events</a>
</div>
</div>
<div class="subhead games">
    <div class="subhead-header">
    <h3>Our Games</h3>
    <p>Basic, general info about the games GDG makes, what members learn, any resources, etc. Super cool awesome text</p>
    <a class="carousel-button" href="#games">View our games</a>

    </div>
<Carousel position = 'right' />
</div>
<div class="subhead officers">
    
    <div class="subhead-header">
    <h3>Our Officers</h3>
    <p>Our officers are awesome! Check them out! Meet the team and learn what they all do for GDG.</p>
    <a class="carousel-button" href="/officers">Meet the Team</a>

    </div>
    <Carousel position = 'left' />
</div>
<style>
    .carousel-button {
        text-decoration: none;
        color: var(--secondary-color);
        background-color: var(--main-color);
        padding: 10px;
        padding-left: 50px;
        padding-right: 50px;
        border-radius: 10px;
    }
    .subhead-header {
        width:30%;
    }
    .games .subhead-header {
        text-align: right;
        margin-right:50px;

    }
    .officers .subhead-header {
        text-align: left;
        margin-left:50px;
    }
    .subhead.officers {
        flex-direction: row-reverse;
    }
    .subhead {
        margin-right:24px;
        width: 100%;
        display: flex;
        margin-top:5%;
        justify-content: space-evenly;
    }
    .games {
        
    }
    .officers {
       
    }
    .subhead p {
        color: var(--main-color);
        font-size: 16px;
    }
    .subhead h3 {
        font-size: 30px;
        color: var(--main-color);
    }
    .calendar-link {
        text-decoration: none;
        text-align: center;
        margin-top: 5%;
    }
    .calendar-link a {
        color:white;
        background-color: var(--main-color);
        padding:10px;
        font-size: 20px;
        text-decoration: none;
        border-radius: 10px;
    }
    .header {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 75%;
        margin: 0 auto;
        margin-top : 50px;   
    }
    h2 {
       color: var(--main-color);
    }
    p {
        color: var(--main-color);
    }
    .calendar {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        margin-top : 50px;
        height:500px;
     }
   
     .iframe-box {
        width:80%;
        height:100%;
        background-color: var(--secondary-color);
     }

     @media (max-width: 600px) {
        .subhead-header {
            width:100%;
            text-align: center;
        }
        .subhead {
            flex-direction: column;
            width: 80%;
            display: flex;
            justify-content: center;
            margin-top:5%;
        }
     }
</style>