
<script>
    import Aboutme from "./aboutme.svelte";
    import Projects from './projects.svelte';

    export const prerender = true;
    import Container from '../containerForContent.svelte';
</script>

<main>
    <Container>
        <Aboutme content="Jestem pasjonatem programowania o niezwykłej precyzji i kreatywności. Mój entuzjazm do tworzenia oprogramowania przejawia się nie tylko w umiejętnościach technicznych, ale również w zdolności do rozwiązywania problemów i myślenia krytycznego. Posiadam szeroki zakres doświadczenia w różnych językach programowania, co umożliwia mi elastyczne podejście do projektów. Moją siłą jest zdolność do efektywnej współpracy zespołowej, co przekłada się na tworzenie innowacyjnych i solidnych rozwiązań. Jako programista, nieustannie dążę do doskonalenia moich umiejętności i poszukiwania nowych wyzwań, aby stale rozwijać się w dynamicznym środowisku technologicznym."/>
        <Projects />
    </Container>
</main>

<style>
</style>