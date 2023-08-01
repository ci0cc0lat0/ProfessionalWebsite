<script>
    
    import {sidebarOpen} from './store'

    let sbclose;
    let nbopen;
    let sidebar;
    let navbar;
    let baropen = true

    function setBar(){
        if (baropen){
            sidebar.style.width = "0"
            navbar.style.marginLeft = "0"
            nbopen.style.visibility = "visible"
            sidebarOpen.update((val) => val = !baropen)

        }else{
            sidebar.style.width = "250px"
            navbar.style.marginLeft = "250px"
            nbopen.style.visibility = "hidden"
            sidebarOpen.update((val) => val = !baropen)

        }
        baropen = !baropen
    }
    

</script>
<style>
    :global(html){
        min-height: 100%;
        margin: 0;
        padding: 0;
    }
    :global(body){
        margin: 0;
        padding: 0;
        min-height: 100%;
        background-color: #E8E9ED;

    }

    :global(p){
        color: #191919;
    }
    :global(h1){
        color: #191919;
    }
    :global(h2){
        color: #191919;
    }
    :global(div){
        color: #191919;
    }


#sidebar{
    position: fixed;
    top: 0;
    left: 0;
    background-color: #191919;
    width: 250px;
    height:100vh ;
    overflow-x: hidden;
    z-index: 1;
    transition: 0.5s;
    white-space: nowrap;
}
#sidebar a{
    display: block;
    text-decoration: none;
    color: #cce6f4;
    font-family: 'Courier New', Courier, monospace;
}
h3{
    
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
    margin-left: 250px;
    background-color: #191919;
    width: 100%;
    height: 60px;
    transition: margin-left .5s;
    position: fixed;
    top: 0;
    z-index: 1;
}
#navbar div{
    cursor:pointer;
    display: block;
    width: 60px;
    height: 60px;
    background-color: #fb742d;
    visibility: hidden;
    transition: .25s;
}
</style>

<div id="navbar" bind:this={navbar} >
    <div id="nbopen" bind:this={nbopen} on:click={setBar}></div>
</div>

<div id="sidebar" bind:this={sidebar} >
    <div id="sbclose_btn" href="" bind:this={sbclose} on:click={setBar}></div>
    <a href="/"><h3>Home</h3></a>
    <a href="#about"><h3>About</h3></a>
    <a href="#ds"><h3>datascience</h3></a>
    <a href=""><h3>Game dev</h3></a>
    <a href=""><h3>Projects</h3></a>

</div>
<slot />