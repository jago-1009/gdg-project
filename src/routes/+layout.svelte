<script>
let {children} = $props();
import Image from '$lib/assets/favicon.png';
</script>

<style>
    * {
        margin: 0;
    }
    :root {
        --main-color: #5e428d;
        --secondary-color: #f2f2f2;
    }
    nav {
        display: flex;
        gap: 10px;
        width: 100%;
        height:50px;
        justify-content: space-between;
        background-color: var(--main-color);
        margin:0;
    }
    .logo {
        display: flex;
        align-items: center;
        gap: 10px;
        
    }
    .logo h1 {
        font-size:16px;
    }
    h1, a {
        color: white;
    text-decoration: none;}
    .logo, .logo img {
        height: 100%;
    }
    .links {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 50%;
    }
</style>

<nav>
    <div class="logo">
        <img src={Image} alt="GDG Logo">
         <h1>Game Developer's Group</h1>
    </div>
    <div class="links">
    <a href="/">Home</a>
    <a href="/events">Events</a>
    <a href="/games">Games</a>
    <a href="/officers">Officers</a>
</div>
</nav>

{@render children()}

<footer>
    <p>Footer</p>
</footer>