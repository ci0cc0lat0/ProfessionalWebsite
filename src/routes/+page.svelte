<script>
    import Defaultpage from "../comps/Defaultpage.svelte";
    import Datasection from "../comps/Datasection.svelte";
    import Gamesection from "../comps/Gamesection.svelte";
    import Projectsection from "../comps/Projectsection.svelte";
    import { onMount } from "svelte";

    onMount(()=>{
        let toenable = document.getElementsByClassName("link")
        for(let i = 0; i < toenable.length; i++){
            toenable[i].style.transition = " 0.35s"
        }
    })
</script>

<style>
    #sec-cont{
        background: #181a1b83;
        padding: 3rem;
        border-radius: 50px;
        position: relative;
    }
    #firstchild{
        margin: 0rem 0 0rem 0;
        
    }
    .section {
        margin: 2rem 0 0rem 0;
        background-color: #2b2a33;
        border-radius: 20px;
        overflow: hidden;
        height: auto;
        scroll-margin-top:60px;

        
    }
    .headerbox {
        background: #E8E9ED;
        height: 80px;
        text-align: center;
    }
    .heading {
        position: relative;
        top: 50%;
        transform: translate(0, -50%);
        padding: 10px;
        margin: 0;
    }
    .small-about {
        padding: 0 15px 0 15px;
    }
    .picabout {
        padding: 15px 15px 0px 15px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        gap: 10px;
    }
    .picabout > div {
        background: #636172;
        width: 26vmin;
        height: 26vmin;
        padding: 15px;
        border-radius: 10px 50px 10px 50px;
    }
    .picabout div:nth-child(2) {
        border-radius: 50px 10px 50px 10px;
    }
    .link-box {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 15px;
        
    }
    .link-box > div {
        box-sizing: border-box;
        background: #636172;
        border: #E8E9ED 1px solid;
        height: 70px;
        border-radius: 5px 25px 5px 25px;
        padding: 10px;
    }
    .link {
        box-sizing: border-box;
        margin-left: 40px;
    }
    .link:hover{
        background: #83819f;
        border: #83819f 1px solid;

    }
    
    .picaboutlink {
        margin: 0;
    }
    img {
        max-width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 50px 10px 50px 10px;

    }
</style>

<!--Defaultpage holds style for sidebar margin/centering -->
<Defaultpage>
    <div id="sec-cont">
    <!--a pic and about my section-->
    <div id="firstchild" class="section">
        <div class="headerbox">
            <h1 class="heading">Anthony Ciocco</h1>
        </div>
        <div class="picabout">
            <div id="about" class="">
                <p>About and contact</p>
            </div>
            <div id="imgdiv" class="">
                <img src="Billy.jpg" alt="" />
            </div>
        </div>

        <div class="link-box">
            <div class="link picaboutlink"><a href="#projects">ppppp</a></div>
            <div class="link picaboutlink"><a href="#datascience">https://www.kaggle.com/anthonyciocco/code</a></div>
            <div class="link picaboutlink"><a href="#gamedev">ggggg</a></div>
            <div class="link picaboutlink"><a href="#gamedev">https://github.com/ci0cc0lat0</a></div>
        </div>
    </div>
    <!--Projects section-->
    <div id="projects" class="section">
        <div class="headerbox">
            <h1 class="heading">Projects</h1>
        </div>
        <div class="small-about">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                impedit ipsa omnis aperiam fugiat eius sint, ad unde praesentium
                beatae amet tempora! Magnam mollitia, rerum eum voluptatum error
                voluptatem. Accusantium.
            </p>
        </div>

        <div class="link-box">
            <div class="linkhead">
                <h2 class="heading">Datascience Geolocation</h2>
            </div>
            <div class=" link">Itch</div>

            <div class="linkhead">
                <h2 class="heading">Full Stack App</h2>
            </div>
            <div class=" link"><p>Github</p></div>

            <div class="linkhead">
                <h2 class="heading">Dotabase</h2>
            </div>
            <div class=" link">My assets</div>

            <div class="linkhead">
                <h2 class="heading">Antpond</h2>
            </div>
            <div class=" link">My assets</div>
        </div>
    </div>
    <!--Datascience-->
    <div id="datascience" class="section">
        <div class="headerbox">
            <h1 class="heading">Data Science</h1>
        </div>
        <div class="small-about">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                impedit ipsa omnis aperiam fugiat eius sint, ad unde praesentium
                beatae amet tempora! Magnam mollitia, rerum eum voluptatum error
                voluptatem. Accusantium.
            </p>
        </div>
        <div class="link-box">
            <div class="linkhead">
                <h2 class="heading">Python</h2>
            </div>
            <div class=" link">kaggle</div>
            <div class=" link">kaggle</div>
            <div class=" link">kaggle</div>
            <div class=" link">kaggle GROUP</div>
            <div class="linkhead">
                <h2 class="heading">R</h2>
            </div>
            <div class=" link">kaggle</div>
        </div>
    </div>
    <!--Gamedev-->
    <div id="gamedev" class="section">
        <div class="headerbox">
            <h1 class="heading">Gamedev</h1>
        </div>
        <div class="small-about">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                impedit ipsa omnis aperiam fugiat eius sint, ad unde praesentium
                beatae amet tempora! Magnam mollitia, rerum eum voluptatum error
                voluptatem. Accusantium.
            </p>
        </div>
        <div class="link-box">
            <div class="linkhead">
                <h2 class="heading">Shroomp</h2>
            </div>
            <div class=" link">Itch</div>
            <div class=" link">Github</div>
            <div class=" link">My assets</div>
        </div>
    </div>
</div>
</Defaultpage>