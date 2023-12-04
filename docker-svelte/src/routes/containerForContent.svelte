<script>
    import Nav from "./nav.svelte";
</script>

<style>
    .container-fluid{
        background-color: #e8e8e840;
        box-shadow: 0 0 22px -15px rgba(66, 68, 90, 1);
    }
    @media only screen and (max-width: 1024px) {
        .container-fluid {
            width: 100%!important;
        }
    }
</style>

<div class="container-fluid w-75 vh-100 overflow-hidden">
    <div class="d-flex flex-column justify-content-between vh-100">
        <section class="overflow-auto">
            <slot></slot>
        </section>
        <nav>
            <Nav/>
        </nav>
    </div>
</div>