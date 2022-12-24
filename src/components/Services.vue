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
    <div>
        <section class="section_services">
            <div class="div_services">
                <h1 class="h1_services">Services</h1>
                <div class="design">
                    <h1 class="h1_design">WebSite Design</h1>
                    <p>We have a bunch of very talented Web desigers, who will 
                        give you the most modern and beautiful design.</p>
                    <p>Pricing: $1,000 - $3,000</p>
                </div>
                <div class="maintenance">
                    <h1 class="h1_maintenance">WebSite Maintenance</h1>
                    <p>We will maintain and upgrate your website to the latest 
                        software and will provide you a down-time less than 1 mins</p>
                    <p>Pricing: $250 per month</p>
                </div>
                <div class="hosting">
                    <h1 class="h1_hosting">WebSite Hosting</h1>
                    <p>We have our own farm, which comprises of the latest 
                        xeron blades. We have a down-time of less then 30 mins.</p>
                    <p>Pricing: $25 per month</p>
                </div>
            </div>
            <div class="div_getAQuote">
                <h1 class="h1_getAQuote">Get A Quote</h1>
                <form class="form_getAQuote">
                    <label>Name</label>
                    <input type="text" placeholder="Name">

                    <label>Email</label>
                    <input type="email" placeholder="Email Address">

                    <label>Message</label>
                    <textarea placeholder="Message"></textarea>

                    <button class="button_getAQuote" type="submit">Send</button>
                </form>
            </div>
        </section>
    </div>
</template>

<style>
body{
    font-family: Arial, Helvetica, sans-serif;
}
.section_services{
    display: flex;
    width: 80%;
    margin: 0 auto;
    justify-content: space-evenly;
    align-items: flex-start;
    padding-top: 20px;
    padding-bottom: 20px;
}
.div_services{
    display: flex;
    width: 55%;
    flex-direction: column;
    gap: 5px;
}
.div_services div{
    background-color: #e6e6e6;
    border: 1px solid #cccccc;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    gap: 20px;
    padding: 50px 50px 50px 20px;
}
.div_services p{
    font-size: 15px;
}
.h1_design, .h1_maintenance, .h1_hosting{
    font-size: 18px;
    font-weight: bold;
}
.div_getAQuote{
    align-items:flex-start;
    width: 30%;
    display: flex;
    flex-direction: column;
    background-color: #35424a;
    color: white;
    padding: 35px 0px 15px 15px;
    gap: 15px;
}
.form_getAQuote{
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 7px;
}
.form_getAQuote input, textarea{
    padding: 5px;
}
.h1_getAQuote{
    font-weight: bold;
}
.button_getAQuote{
    width: 70px;
    padding: 10px;
    border: none;
    background-color: #e8491d;
    color: white;
}
.h1_services{
    font-weight: bold;
    font-size: 18px;
}
@media (max-width: 770px){
    .section_services{
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
    .div_services{
        width: 100%;
    }
    .div_getAQuote{
        width: 97%;
    }
    .button_getAQuote{
        width: 100%;
    }
}
</style>