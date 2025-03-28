<script>
let {title,subtitle, joinHref, joinButton} = $props();
</script>
    
    
    <div class="hero">
        <main class="title">
        <h2>{title}</h2>
        </main>
        <aside class="subtitle">
            <p>{subtitle}</p>
        </aside>
        {#if joinButton == 'true'}
        <a href={joinHref}>Join our Discord</a>
        {/if}
    </div>

    
    
    <style>
        a {
            background-color: var(--main-color);
            padding: 5px 10px;
            border-radius: 5px;
            border: none;
            color: var(--secondary-color);
            text-decoration: none;
        }
        .hero {
            margin:0;
            height:300px;
            background-color:var(--secondary-color);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            
        }
        .subtitle {
            color:var(--main-color);
            font-weight: 100;
        }
        h2 {
            width: 100%;
           color:var(--main-color);
            text-align: center;
            margin:0;
        }
        .title {
            width: 43%;
        }
    
    </style>