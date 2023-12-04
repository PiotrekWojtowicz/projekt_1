<script>
    import Toast from "./toast.svelte";
    import {goto} from "$app/navigation";

    export let command = ['kim jestes','chce napisac'];
    export let inputValue = '';

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            submitFunction();
        }
    }

    function submitFunction() {
        if(command[0] === normalizeString(inputValue)){
            setTimeout(() => goto('/about'), 0)
        }
        else if(command[1] === normalizeString(inputValue)){
            setTimeout(() => goto('/contact'), 0)
        }
        else{
            const toastLiveExample = document.getElementById('liveToast');
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
            toastBootstrap.show();
        }
    }
    const normalizeString = (input) => {
        return input
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '');
    };
</script>

<style>
    input{
        border: none!important;
        border-bottom: 2px solid rgba(129, 129, 129, 0.58)!important;
        border-radius: 0!important;
    }
</style>

<form class="d-flex" role="search">
    <input class="form-control me-2 p-3 shadow-lg" bind:value={inputValue} on:keydown={handleKeyPress} type="search" placeholder="Zatwierdź enterem" aria-label="Search">
</form>

<Toast/>