<script>
    export let firstProject = 'Shell';
    export let firstProjectContent = 'Shell built upon linux system calls.'
    export let secondProject = 'QuizApp';
    export let secondProjectContent = 'Simple yet powerful and secure web quiz app.'
    export let thirdProject = 'Allocator';
    export let thirdProjectContent = 'Custom allocator for C.'
    export let fourthProject = 'LRU';
    export let fourthProjectContent = 'LRU algorithm breakdown.'
</script>

<style>
    @media only screen and (max-width: 576px) {
        #projectSection{
            height: auto!important;
        }
    }

    p.card-text{
        min-height: 72px;
    }

    a{
        border: none;
        border-radius: 0!important;
        width: 100%;
        background-color: #8d8f90;
        transition: .3s;
    }

    a:hover{
        background-color: #686868;
        transform: scale(1.04);
        transition: .3s;
    }

    a:active{
        background-color: black!important;
    }
</style>

<section id="projectSection" class="d-flex justify-content-center align-items-center vh-100">
    <div>
        <h1 class="w-100 d-flex justify-content-center py-3">Moje projekty</h1>
        <div class="container text-center">
            <div class="row g-2">
                <div class="col-sm-6">
                    <div class="p-3 my-5 d-flex justify-content-center align-items-center">
                        <div class="card" style="width: 18rem;">
                            <img src="./shell.png" class="card-img-top" alt="computer shell">
                            <div class="card-body">
                                <h5 class="card-title">{firstProject}</h5>
                                <p class="card-text">{firstProjectContent}</p>
                                <a href="https://github.com/PiotrekWojtowicz/Shel" class="btn btn-primary">Zobacz na GitHub!</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="p-3 my-5 d-flex justify-content-center align-items-center">
                        <div class="card" style="width: 18rem;">
                            <img src="./quizz.png" class="card-img-top" alt="quiz web application">
                            <div class="card-body">
                                <h5 class="card-title">{secondProject}</h5>
                                <p class="card-text">{secondProjectContent}</p>
                                <a href="https://github.com/PiotrekWojtowicz/QuizApp" class="btn btn-primary">Zobacz na GitHub!</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="p-3 my-5 d-flex justify-content-center align-items-center">
                        <div class="card" style="width: 18rem;">
                            <img src="./aloc.jpeg" class="card-img-top" alt="memory allocator">
                            <div class="card-body">
                                <h5 class="card-title">{thirdProject}</h5>
                                <p class="card-text">{thirdProjectContent}</p>
                                <a href="https://github.com/PiotrekWojtowicz/Allocator" class="btn btn-primary">Zobacz na GitHub!</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="p-3 my-5 d-flex justify-content-center align-items-center">
                        <div class="card" style="width: 18rem;">
                            <img src="./algo.jpg" class="card-img-top" alt="algorithm jpg">
                            <div class="card-body">
                                <h5 class="card-title">{fourthProject}</h5>
                                <p class="card-text">{fourthProjectContent}</p>
                                <a href="https://github.com/PiotrekWojtowicz/LRU" class="btn btn-primary">Zobacz na GitHub!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>