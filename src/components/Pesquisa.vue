<script>

</script>
<template>
    <section class="section_pesquisa">
        <div class="div_pesquisa">
            <h1 class="h1_pesquisa">Subscribe to our Newsletter</h1>
            <div class="div_pesquisa_subscribe">
                <input class="input_pesquisa_subscribe" type="email" placeholder="Enter Email..." name="email"/>
                <button class="button_pesquisa_subscribe" type='submit'>Subscribe</button>
            </div>
        </div>
    </section>
</template>
<style>
/*------ Barra de Pesquisa ------*/
.section_pesquisa{
    background-color: #35424a;
    padding: 10px;

}
.div_pesquisa{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100px;
    font-family: Arial, Helvetica, sans-serif;
    gap:180px;
}
.h1_pesquisa{
    color: white;
    font-weight: bold;
    font-size: 22px;
    text-align: center;
}
.div_pesquisa_subscribe{
    display: flex;
    align-items: center;
    gap:5px
}
.button_pesquisa_subscribe{
    background-color: #e8491d;
    border: none;
    height: 36px;
    width: 90px;
    color: white;
}
.input_pesquisa_subscribe{
    border: none;
    height: 26px;
    width: 230px;
    padding: 5px;

}
@media (max-width:1349px){
    .div_pesquisa{
        gap: 50px;
    }
}
@media (max-width:350px){
    .h1_pesquisa{
        font-size: 19px;
        padding: 5px;
    }
}
@media (max-width: 700px){
    .div_pesquisa{
        height: 130px;
        flex-direction: column;
        width: 90%;
        margin: 0 auto;
        gap: 0;
    }
    .div_pesquisa_subscribe{
        flex-direction: column;
        width: 100%;
    }
    .button_pesquisa_subscribe{
        width: 100%;
    }
    .input_pesquisa_subscribe{
        width: 100%;
        padding: 1px;
    }
}
</style>