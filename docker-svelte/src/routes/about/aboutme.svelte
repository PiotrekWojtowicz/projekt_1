<script>
    export let content = '';
</script>

<style>
    h1{
        font-size: 5em;
    }
    span{
        display: inline-block;
        text-align: center;
        width: 100%;
    }
</style>

<section id="aboutMeSection" class="d-flex justify-content-center align-items-center vh-100">
    <div class="w-75">
        <h1 class="w-100 d-flex justify-content-center py-2 animate__animated animate__headShake">O mnie</h1>
        <span>{content}</span>
    </div>
</section>