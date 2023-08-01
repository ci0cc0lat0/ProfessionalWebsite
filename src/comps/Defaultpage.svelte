<script>
    import "@fontsource/rubik";
    import {sidebarOpen} from '../routes/store'
    let maincontainer;
    export let w;

    function changeMargin(){
        try {
            if($sidebarOpen){
                maincontainer.style.marginLeft = "250px"
            } else {
                maincontainer.style.marginLeft = "0px"
            }
        } catch (error) {
            //console.log("Failed")
        }
    }
    $: {
        changeMargin()
        console.log($sidebarOpen)
    }
</script>
<style>
    *{
        font-family:'consolas' ;
    }
    
    #maincontainer{
        margin-left: 250px;
        top: 60px;
        transition: margin-left .5s;
        position: relative;
        

    }
    #open_sec{
        margin: auto auto;
        width: 65%;
        max-width: 1100px;

        
        
    }
</style> 

<div  id="maincontainer" bind:this={maincontainer}>
    <div id="open_sec" bind:clientWidth={w}>
        <slot />
    </div>
</div>