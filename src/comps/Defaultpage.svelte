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
        //changeMargin()
        console.log($sidebarOpen)
    }
</script>
<style>
    *{
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    
    #maincontainer{
        /*margin-left: 250px;*/
        margin-top:60px;
        transition: margin-left .5s;

        

    }
    #open_sec{
        margin: auto auto;
        width: 66%;
        max-width: 1050px;
        padding: 2rem;

    }

</style> 

<div  id="maincontainer" bind:this={maincontainer}>
    <div id="open_sec" bind:clientWidth={w}>
        <slot />
    </div>
</div>