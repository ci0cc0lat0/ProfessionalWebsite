<script>
    import Defaultpage from "../comps/Defaultpage.svelte";
    import { onMount } from "svelte";

    onMount(()=>{
        let toenable = document.getElementsByClassName("link")
        for(let i = 0; i < toenable.length; i++){
            toenable[i].style.transition = " 0.2s"
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
        text-align: center;
        padding: 15px 15px 0px 15px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        gap: 10px;
    }
    .picabout > div {
        background: #636172;
        width: 32vmin;
        height: 32vmin;
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

    .linkhead{
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
        background: #636172;
        border: #E8E9ED 1px solid;
        height: 55px;
        border-radius: 5px 25px 5px 25px;
        padding: 10px;
    }
    .link > p{
        margin: 0;
        padding: 0;
        position: relative;
        top: 50%;
        transform: translate(0, -50%);
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
    a > h2 {
        display: inline-block;
    }
    a{
        text-decoration: none;
        color: #E8E9ED;
    }
    p{
        font-size: 1.1em;
    }
    #about{
        display: flex;
        flex-direction: column;
        vertical-align: middle;
        justify-content: center;
        
        overflow: scroll;
    }
    #about p{
        font-size: 1.6vh;
        font-weight: 600;
        margin: 10px;
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
                <p>I'm Anthony, a soon to be graduate from University of Houston with a major in Computer Science and a minor in Mathematics.</p>

                <p>My focus while at UH was split between data science, game development, and web development, both front and back end.</p>

                <p>Some of mine hobbies include, drawing, honing my programming skills and self studying Statistics and Math for data science projects.</p>
                



            </div>
            <div id="imgdiv" class="">
                <img src="newpfp.png" alt="" />
            </div>
        </div>

        <div class="link-box">
            <a class="link picaboutlink" target="_blank" href="anthonycioccoresume.pdf">
                <h2 class="heading">Resume
                </h2>
                
            </a>
            
            
            <a class="link picaboutlink" target="_blank" href="https://github.com/ci0cc0lat0"><h2 class="heading">Github</h2>
                
            </a>
            
            <a class="link picaboutlink" target="_blank" href="https://www.kaggle.com/anthonyciocco/code"><h2 class="heading">Kaggle</h2>
                
            </a>
            <a class="link picaboutlink" target="_blank" href="https://ci0cc0lat0.itch.io/"><h2 class="heading">Itch.io</h2>
                
            </a>
            
        </div>
    </div>

    <!--Projects section-->
    <div id="projects" class="section">
        <div class="headerbox">
            <h1 class="heading">Projects</h1>
        </div>
        <div class="small-about">
            <p>
                These projects showcase my interest and how I applied my skillset to projects which range from data science and visualization to front and backend development. 
            </p>
        </div>

        <div class="link-box">
            <div class="linkhead">
                <h2 class="heading">Off Record Blog</h2>
            </div>
            <a class=" link" target="_blank" href="https://offrecord.blog/"><p>A wordpress website I managed and developed</p></a>

            <div class="linkhead">
                <h2 class="heading">Datascience Geolocation</h2>
            </div>
            <a class=" link" target="_blank" href="https://github.com/ci0cc0lat0/Data-Science-Group-Work/blob/main/Final%20POIMAGIC.ipynb"><p>A notebook visualizing earthquakes globally</p></a>

            <div class="linkhead">
                <h2 class="heading">Full Stack App</h2>
            </div>
            <a class=" link" target="_blank" href="https://github.com/ci0cc0lat0/NodeDatabaseDemo"><p>RESTful application connected to an SQL Database</p></a>

            <div class="linkhead">
                <h2 class="heading">Dotabase</h2>
            </div>
            <a class=" link" target="_blank" href="https://github.com/ci0cc0lat0/Dotabase"><p>Scraping Opendota API for match data</p></a>

            <div class="linkhead">
                <h2 class="heading"><p>Antpond</p></h2>
            </div>
            <a class=" link" target="_blank" href="https://www.theantpond.com/"><p>A website-project made in ReactJS</p></a>

        </div>
    </div>
    <!--Datascience-->
    <div id="datascience" class="section">
        <div class="headerbox">
            <h1 class="heading">Data Science</h1>
        </div>
        <div class="small-about">
            <p>
                These notebooks are a collection of some of the work I preformed at university and show my use of Numpy, Pandas, and R along with R studio.
            </p>
        </div>
        <div class="link-box">
            <div class="linkhead">
                <h2 class="heading">Python</h2>
            </div>
            
            <a target="_blank" href="https://www.kaggle.com/code/anthonyciocco/task-2-cosc3337" class=" link"><p>Visualizing data with python</p></a>
            <a target="_blank" href="https://github.com/ci0cc0lat0/Dotabase/blob/main/notebook.ipynb" class=" link"><p>Analyzing data from Dota 2 stats</p></a>
            <div class="linkhead">
                

                <h2 class="heading">R</h2>
            </div>
            <a href="https://www.kaggle.com/code/anthonyciocco/marriage-divorce-3337/notebook" target="_blank" class=" link"><p>Notebook analyzing marriage data</p></a>
        </div>
    </div>
    <!--Gamedev-->
    <div id="gamedev" class="section">
        <div class="headerbox">
            <h1 class="heading">Gamedev</h1>
        </div>
        <div class="small-about">
            <p>
                This game was part of my senior project and was the effort of 6 individuals, myself included. 
            </p>
        </div>
        <div class="link-box">
            <div class="linkhead">
                <h2 class="heading">Shroomp</h2>
            </div>
            <a target="_blank" href="https://ci0cc0lat0.itch.io/shroomp" class=" link"><p>Itch </p></a>
            <a target="_blank" href="https://github.com/ShaEithan/Shroomp" class=" link"><p>Github</p></a>
            <a target="_blank" class=" link"><p>My assets: (coming soon)</p></a>
        </div>
    </div>
</div>
</Defaultpage>