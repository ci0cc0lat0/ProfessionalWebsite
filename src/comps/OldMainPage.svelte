<script>
    import { onMount } from 'svelte';
    import Defaultpage from '../comps/Defaultpage.svelte';
    let w;
    let gw;
    let gridcon;

    onMount(()=>{
        
        
    })
    $:{

    }
</script>

<style lang="scss">
    #grid_container{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
    }

    .grid_squares{
        width: calc(50vh - 80px);
        height: calc(50vh - 80px);
        background:#ff66b3;
        text-align: center;
        padding: 20px;
    }
    img{
        max-width: 100%;
        height: 100%;
        object-fit: contain;
    }



</style>

<Defaultpage bind:w={w} >
    <div id=grid_par>
        <div id="grid_container" bind:this={gridcon} bind:clientWidth={gw}>
            <div class="grid_squares ">
                <img src="Billy.jpg" />
            </div>

            <div id="glanceinfo" class="grid_squares">
                <h1>Anthony Ciocco</h1>
            </div>

            <div id="about" class="grid_squares">
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar ante nec libero mollis ultricies. Aliquam in viverra augue. Duis dapibus auctor volutpat. Aenean ut massa eros. Donec tincidunt id ipsum ut laoreet. Phasellus auctor neque non urna varius rutrum vitae non tortor. </p>
            </div>

            <div id="funnysquare" class="grid_squares"></div>
        </div>
    </div>
</Defaultpage>


<Defaultpage>
    <h1 id="ds">Data Science</h1>
    <div class="python">
        <div> </div>
    </div>

    <div class="R"></div>
</Defaultpage>
