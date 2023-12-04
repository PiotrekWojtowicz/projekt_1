<script>
    export const prerender = true;
    import ContainerForChat from "./containerForChat.svelte";
    import Bubble from './bubble.svelte';
    import { onMount } from 'svelte';
    import anime from 'animejs';
    onMount(() => {
        var tl = anime.timeline({
        });

        anime({
            targets: 'b',
            duration: 600,
            direction: 'alternate',
            color: 'rgba(0,0,0, 0.2)',
            loop: true,
            easing: 'easeInOutSine'
        });

        // Add a scaling animation to the timeline
        tl.add({
            targets: '.bubble',
            scale: [0, 1],
            duration: 1400,
            translateX: 140,
        }).add({
            targets: '.bubble',
            scale: [0, 1],
            duration: 300,
            opacity:1
        },-150).add({
            targets: '.bubble',
            width:'14em',
            height:80,
            duration: 800,
            opacity:1
        }).add({
            targets: ['.bubble .bob1', '.bubble .bob2', '.bubble .bob3'],
            duration:100,
            opacity:0,
            easing: 'easeInOutQuad'
        }).add({
            targets: '.hejka',
            duration: 500,
            easing: 'easeInOutQuad',
            opacity:1,
            begin: function() {
                document.querySelector('.bob1').style.display = 'none';
                document.querySelector('.bob2').style.display = 'none';
                document.querySelector('.bob3').style.display = 'none';
                document.querySelector('.hejka').style.display = 'block';
            },
        });

        // Add a scaling animation to the timeline
        tl.add({
            targets: '.bubble1',
            scale: [0, 1],
            duration: 1400,
            translateX: 140,
        }).add({
            targets: '.bubble1',
            scale: [0, 1],
            duration: 300,
            opacity:1
        },-150).add({
            targets: '.bubble1',
            width:'32em',
            height:80,
            duration: 800,
            opacity:1
        }).add({
            targets: ['.bubble1 .bob1', '.bubble1 .bob2', '.bubble1 .bob3'],
            duration:100,
            opacity:0,
            easing: 'easeInOutQuad'
        }).add({
            targets: '.witajka',
            easing: 'easeInOutQuad',
            duration: 500,
            opacity:1,
            begin: function() {
                document.querySelector('.bubble1 .bob1').style.display = 'none';
                document.querySelector('.bubble1 .bob2').style.display = 'none';
                document.querySelector('.bubble1 .bob3').style.display = 'none';
                document.querySelector('.witajka').style.display = 'block';
            },
        });

        // Add a scaling animation to the timeline
        tl.add({
            targets: '.bubble2',
            scale: [0, 1],
            duration: 1400,
            translateX: 140,
        }).add({
            targets: '.bubble2',
            scale: [0, 1],
            duration: 300,
            opacity:1
        },-150).add({
            targets: '.bubble2',
            width:'37em',
            height:180,
            duration: 800,
            opacity:1
        }).add({
            targets: ['.bubble2 .bob1', '.bubble2 .bob2', '.bubble2 .bob3'],
            duration:100,
            opacity:0,
            easing: 'easeInOutQuad'
        }).add({
            targets: '.opisarka',
            easing: 'easeInOutQuad',
            duration: 500,
            opacity:1,
            begin: function() {
                document.querySelector('.bubble2 .bob1').style.display = 'none';
                document.querySelector('.bubble2 .bob2').style.display = 'none';
                document.querySelector('.bubble2 .bob3').style.display = 'none';
                document.querySelector('.opisarka').style.display = 'block';
            },
        });

        // Add a scaling animation to the timeline
        tl.add({
            targets: '.bubble3',
            scale: [0, 1],
            duration: 1400,
            translateX: 140,
        }).add({
            targets: '.bubble3',
            scale: [0, 1],
            duration: 300,
            opacity:1
        },-150).add({
            targets: '.bubble3',
            width:'46.5em',
            height:80,
            duration: 600,
            opacity:1
        }).add({
            targets: ['.bubble3 .bob1', '.bubble3 .bob2', '.bubble3 .bob3'],
            duration:100,
            opacity:0,
            easing: 'easeInOutQuad'
        }).add({
            targets: '.kontaktarka',
            easing: 'easeInOutQuad',
            duration: 500,
            opacity:1,
            begin: function() {
                document.querySelector('.bubble3 .bob1').style.display = 'none';
                document.querySelector('.bubble3 .bob2').style.display = 'none';
                document.querySelector('.bubble3 .bob3').style.display = 'none';
                document.querySelector('.kontaktarka').style.display = 'block';
            },
        });

        // Add a scaling animation to the timeline
        tl.add({
            targets: '.bubble4',
            scale: [0, 1],
            duration: 1400,
            translateX: 140,
        }).add({
            targets: '.bubble4',
            scale: [0, 1],
            duration: 300,
            opacity:1
        },-150).add({
            targets: '.bubble4',
            width:'38em',
            height:180,
            duration: 600,
            opacity:1
        }).add({
            targets: ['.bubble4 .bob1', '.bubble4 .bob2', '.bubble4 .bob3'],
            duration:100,
            opacity:0,
            easing: 'easeInOutQuad'
        }).add({
            targets: '.wprowadzarka',
            easing: 'easeInOutQuad',
            duration: 500,
            opacity:1,
            begin: function() {
                document.querySelector('.bubble4 .bob1').style.display = 'none';
                document.querySelector('.bubble4 .bob2').style.display = 'none';
                document.querySelector('.bubble4 .bob3').style.display = 'none';
                document.querySelector('.wprowadzarka').style.display = 'block';
            },
        });
    });
</script>

<main>
        <ContainerForChat>
                <Bubble messageText="Hej 👋👋" textName="hejka" className="bubble"/>
                <Bubble messageText="Witaj na moim portfolio 😁🥳❗️" textName="witajka" className="bubble1"/>
                <Bubble messageText="Nazwym się Piotr jestem studentem informatyki stosowanej na uniwersytecje jagielońskim 🤓👨🏻‍💻" textName="opisarka" className="bubble2"/>
                <Bubble messageText="<a href='mailto:example@email.com'>Skontaktuj się ze mną!</a> lub użyj poniższej powłoki 🖥️" textName="kontaktarka" className="bubble3"/>
                <Bubble messageText="Wprowadź [Kim jesteś] żebym Ci się lepiej przedstawił lub [Chce napisać] żeby się ze mną skontaktować 📨" textName="wprowadzarka" className="bubble4"/>
        </ContainerForChat>
</main>