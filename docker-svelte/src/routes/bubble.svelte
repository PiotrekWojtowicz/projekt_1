<script>
    export let messageText = "Nothing to see here";
    export let className = ".bubble";
    export let textName = ".hejka";
</script>

<style>
    @media only screen and (max-width: 768px) {
        .hejka,
        .opisarka,
        .witajka,
        .kontaktarka,
        .wprowadzarka {
            font-size: 1.2em!important;
        }

        .bubble {
            max-height: 4em !important;
            max-width: 10em !important;
        }
        .bubble1{
            max-height: 5em!important;
            max-width: 14em!important;
        }
        .bubble2{
            max-height: 8em!important;
            max-width: 24em!important;
        }
        .bubble3{
            max-height: 5em!important;
            max-width: 20em!important;
        }
        .bubble4{
            max-height: 10em!important;
            max-width: 24em!important;
        }
    }
    body {
        background-color: rgba(214, 214, 214, 0.79);
    }

    .bubble,
    .bubble2,
    .bubble3,
    .bubble4,
    .bubble1 {
        position: relative;
        left: -140px;
        top: 10px;
        width: 120px;
        background-color: rgb(218, 218, 218);
        border-radius: 50px 50px 50px 0;
    }

    .bubble1 {
        top: 20px
    }

    .bubble2 {
        top: 30px;
    }

    .bubble3 {
        top: 40px;
    }

    .bubble4 {
        top: 50px;
    }

    .hejka,
    .opisarka,
    .witajka,
    .kontaktarka,
    .wprowadzarka {
        font-size: 30px;
        opacity: 0;
        margin-top: 10px;
        display: none;
    }

    span {
        padding-left: 20px;
        padding-right: 20px;
        margin-top: -10px;
    }

    b {
        font-size: 3rem;
        color: rgb(0, 0, 0, 0.6)
    }

    .bubble,
    .bubble1,
    .bubble2,
    .bubble3,
    .bubble4{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>

<div class="{className}">
    <span class="loading">
        <b class="bob1">•</b>
        <b class="bob2">•</b>
        <b class="bob3">•</b>
		<span class="{textName}">{@html messageText}</span>
    </span>
</div>