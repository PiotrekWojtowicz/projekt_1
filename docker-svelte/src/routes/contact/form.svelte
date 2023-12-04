<style>
    #formSection{
        height: 90vh;
    }

    button{
        border: none;
        border-radius: 0!important;
        width: 100%;
        background-color: #8d8f90;
        transition: .3s;
    }

    button:hover{
        background-color: #686868;
        transform: scale(1.04);
        transition: .3s;
    }

    button:active{
        background-color: black!important;
    }

    textarea, input{
        border-radius: 0!important;
    }
</style>

<section id="formSection" class="flex-fill d-flex justify-content-center align-items-center">
    <div class="w-75">
        <h2 class="w-100 d-flex justify-content-center py-2">Napisz do mnie!</h2>
        <form>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Adres email</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Treść</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</section>