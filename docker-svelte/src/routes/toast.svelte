<script>
    import {goto} from "$app/navigation";
    export let message = 'Przepraszam ale nie zrozumiałem o co Ci chodzi. Wpisz polecenie jeszcze raz lub użyj nawigacji 😄.';
    export let title = 'Nie znam tego polecenia.';
</script>

<div class="toast-container position-fixed top-0 end-0 p-3">
    <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
            <strong class="me-auto">{title}</strong>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
            {message}
        </div>
    </div>
</div>