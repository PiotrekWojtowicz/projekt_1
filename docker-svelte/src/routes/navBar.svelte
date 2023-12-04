<script>
    import TextBar from "./textBar.svelte";
</script>

<style>
    a {
        color: black !important;
        align-items: center !important;
    }
</style>
<ul class="nav justify-content-center ">
    <li class="nav-item d-flex ">
        <a class="nav-link fs-5 d-flex justify-content-center" href="./about">O mnie</a>
    </li>
    <li class="nav-item flex-fill">
        <TextBar/>
    </li>
    <li class="nav-item d-flex justify-content-center">
        <a class="nav-link fs-5 d-flex justify-content-center" href="./contact">Kontankt</a>
    </li>
</ul>
