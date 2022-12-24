<script>
import Pesquisa from '../components/Pesquisa.vue'
export default{
    components:{
        'my-pesquisa': Pesquisa

    }
}
</script>

<template>
    <div>
        <my-pesquisa/>
    </div>
    <div class="div_aboutUs_whatWeDo">
        <div class="div_aboutUs">
            <h2 class="h2_aboutUs">About Us</h2>
            <p class="p_aboutUs">corps.com began in 2005. After years in the web hosting industry, we realized that it was 
                near impossible for the average Jane or Joe to create their own website. Traditional web 
                hosting services were simply too complicated, time consuming, and expensive to manage.</p>
            <p class="p_aboutUs">We created the corps.com Site Builder with the user's perspective in mind. We wanted to 
                offer a platform that would require no coding skills or design experience. We keep it simple, 
                so users can focus on creating an amazing website that reflects their brand.</p>
        </div>
        <div class="div_whatWeDo">
            <h2 class="h2_whatWeDo">What We Do</h2>
            <p class="p_whatWeDo">We develop creative, comprehensive and sustainable website solutions for a future where society can thrive.</p>
        </div>
    </div>
</template>

<style>
body{
    font-family: Arial, Helvetica, sans-serif;
}
.h2_aboutUs, .h2_whatWeDo{
    font-weight: bold;
    font-size: 18px;
    width: 100%;
}
.p_aboutUs{
    font-size: 15px;
    line-height: 20px;
}

.div_aboutUs_whatWeDo{
    display: flex;
    width: 70%;
    margin: 0 auto;
    align-items: center;
    gap: 30px;
    height: 200px;
    padding: 15px 0px 15px;
}

.div_aboutUs{
    display: flex;
    flex-flow: column wrap;
    gap: 20px;
    width: 65%;
}

.div_whatWeDo{
    display: flex;
    width: 35%;
    flex-flow: column wrap;
    gap: 20px;
    padding-top: 20px;
    padding: 30px 0px 30px 15px;
    background-color: #35424a;
}
.h2_whatWeDo{
    color: white;
}
.p_whatWeDo{
    color:white;
    font-size: 14px;
    line-height: 20px;
    width: 100%;
}

@media (max-width: 1322px) {
    .div_aboutUs_whatWeDo{
        width: 74%;
    }
    .div_aboutUs{
        gap: 10px;
    }
    .h2_aboutUs{
        font-size: 16px;
    }
    .p_aboutUs{
        font-size: 15px;
    }

}

@media (max-width: 1300px){
    .div_aboutUs_whatWeDo{
        width: 72%;
    }
}
@media (max-width: 1175px){
    .div_aboutUs_whatWeDo{
        width: 75%;
    }
}
@media (max-width: 1037px) {
    .div_aboutUs_whatWeDo{
        width: 80%;
    }
    .div_aboutUs{
        gap: 8px;
    }
    .h2_aboutUs{
        padding-top: 10px;
        font-size: 16px;
    }
    .p_aboutUs{
        font-size: 14px;
    }
}
@media (max-width: 875px){
    .div_aboutUs_whatWeDo{
        width: 90%;
    }
}
@media (max-width: 772px){
    .div_aboutUs_whatWeDo{
        width: 91%;
    }
    .h2_aboutUs{
        padding-top: 8px;
        font-size: 16px;
    }
    .p_aboutUs{
        font-size: 13px;
    }
}
@media (max-width: 700px){
    .div_aboutUs_whatWeDo{
        width: 100%;
        display: flex;
        flex-direction: column;
        height: fit-content;
    }
    .div_aboutUs, .div_whatWeDo{
        width: 80%;
        text-align: center;
    }
    .div_aboutUs{
        gap: 20px;
    }
    .div_whatWeDo{
        padding: 30px;
    }
    .p_aboutUs{
        font-size: 14px;
    }
}

</style>