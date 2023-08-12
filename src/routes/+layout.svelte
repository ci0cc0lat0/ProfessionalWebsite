<script>
    
    import {sidebarOpen} from './store'
    import { onMount } from "svelte";


    let sbclose;
    let nbopen;
    let sidebar;
    let navbar;
    let baropen = false

    function setBar(){
        if (baropen){
            sidebar.style.width = "0"
            sidebar.style.borderRight = "0"
            navbar.style.marginLeft = "0"
            nbopen.style.visibility = "visible"
            sidebarOpen.update((val) => val = !baropen)

        }else{
            sidebar.style.width = "250px"
            sidebar.style.borderRight = "#E8E9ED solid 4px"
            navbar.style.marginLeft = "250px"
            nbopen.style.visibility = "hidden"
            sidebarOpen.update((val) => val = !baropen)

        }
        baropen = !baropen
    }
    
    function toTop(){
        window.scrollTo(0,0)
    }
    onMount(()=>{
        /*
        let barhide = document.getElementById('sidebar')
        barhide.style.transition = "0.5s"
        */
  
        let toenable = document.getElementsByClassName("flexchild")
        for(let i = 0; i < toenable.length; i++){
            toenable[i].style.transition = " 0.15s"
        }

    })
</script>
<style>


    :global(html){
        min-height: 100%;
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
    }
    :global(body){
        margin: 0;
        padding: 0;
        min-height: 100%;
        background-color: #181a1b;
        background-image: linear-gradient(-45deg,#ff66bb,#0496FF);
    }
    @keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

    :global(p){
        color: #E8E9ED;
        position: relative;
    }
    :global(h1){
        color: #2b2a33;
        font-size: 2.5rem;
        /*
        background: linear-gradient(90deg,#ff66bb,#0496FF);
        background-clip: text;
        -webkit-text-fill-color: transparent;
        width: fit-content;
        */
    }
    :global(h2){
        color: #E8E9ED;
    }
    :global(div){
        color: #E8E9ED;
    }


#sidebar{
    position: fixed;
    top: 0;
    left: 0;
    background-color: #2b2a33;
    width: 250px;
    height:100vh ;
    overflow-x: hidden;
    z-index: 1;
    white-space: nowrap;
    border-right: #171612 solid 4px;
    box-sizing: content-box;

}
#sidebar a{
    display: block;
    text-decoration: none;
    color: #E8E9ED;
    font-family: 'Courier New', Courier, monospace;
}
h3{
    margin: 10px 5px;
    padding: 5px;
    font-family: consolas;
}
#sbclose_btn{
    cursor:pointer;
    position: relative;
    top: 0;
    left: 0;
    width: 60px;
    height: 60px;
    background-color: #fb742d;
    visibility: visible;
}
#navbar{
    /*margin-left: 250px;*/
    background-color: #2b2a33;
    width: 100%;
    height: 60px;
    transition: margin-left .5s;
    position: fixed;
    top: 0;
    z-index: 2;
    border-bottom: #171612 solid 4px;
    box-sizing: border-box;

}
#navbar div{

}

.navflex{
    width: 50%;
    max-width: 1100px;
    height: 100%;
    margin: auto auto;

    gap: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items: center;

}
.flexchild{
    background: #636172 ;
    width: 20%;
    max-width: 120px;
    min-width: fit-content;
    height: auto;
    max-height: 100%;
    padding: 0 10px 0 10px;
    border-radius: 5px;
}
.flexchild:hover{
    background: #83819f;
}
.flexlink{
    text-align: center;
    font-family: consolas;
    
}
a{
    text-decoration: none;
    text-decoration-line: none;
}
</style>

<div id="navbar" bind:this={navbar} >
    <!--<div id="nbopen" bind:this={nbopen} ></div>-->
    <div class="navflex" >
        <a href="#" class="flexchild" on:click={toTop} >
            <div >
                <p class="flexlink">Home</p>
            </div>
        </a>

        <a href="#projects" class="flexchild">
            <div>
                <p class="flexlink">Projects</p>
            </div>
        </a>

        <a href="#datascience" class="flexchild">
            <div>
                <p class="flexlink">Data science</p>
            </div>
        </a>

        <a href="#gamedev" class="flexchild">
            <div>
                <p class="flexlink">Game Dev</p>
            </div>
        </a>
    </div>
</div>
<!--
    <div id="sidebar" bind:this={sidebar} >
        <div id="sbclose_btn" href="" bind:this={sbclose}></div>
        <a href="/"><h3>Home</h3></a>
        <a href="#datascience"><h3>datascience</h3></a>
        <a href="#gamedev"><h3>Game dev</h3></a>
        <a href=""><h3>Projects</h3></a>

    </div>
-->
<slot />