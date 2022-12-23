<script>
import Pesquisa from '../components/Pesquisa.vue'
export default{
    components:{
        'my-pesquisa': Pesquisa

    }
}
</script>

<template>
    <section class="section_home">
        <div class="titulos_home">
            <h1 class="h1_home">Affordable Professional Web Sites</h1>
            <p class="p_home">We provide affordable and highly professional Web Sites services. If you get anything better for less, 
                we will give the website for free.</p>
        </div>
    </section>
    <section>
        <my-pesquisa/>
    </section>
    <section class="section_HTML_CSS_design">
        <div class="div__HTML_CSS_design">
            <div class="html html_css_design">
                <img src="../assets/img/logo_html.png" class="img_html" alt="Logo HTML 5">
                <h2 class="h2_html">HTML Markup</h2>
                <p>Hypertext Markup Language is the standard markup language for creating 
                    web pages and web applications. It is used with CSS.</p>
            </div>
            <div class="css html_css_design">
                <img src="../assets/img/logo_css.png" class="img_css" alt="Logo CSS3">
                <h2 class="css_html">CSS3 Styling</h2>
                <p>CSS stands for Cascading Style Sheets. CSS describes how HTML 
                    elements are to be displayed on screen, paper, or in other media.</p>
            </div>
            <div class="design html_css_design">
                <img src="../assets/img/logo_brush.png" class="img_design" alt="Logo de um computador com pincel">
                <h2 class="design_html">Graphics Design</h2>
                <p>Graphic design is the process of visual communication and problem-solving 
                    through the use of typography, photography and illustration.</p>
            </div>
        </div>
    </section>
</template>

<style scoped>

section{
    font-family: Arial, Helvetica, sans-serif;
}

/*------ Sessão de HTML_CSS_Design ------*/
.section_HTML_CSS_design{
    padding: 25px;
}
.div__HTML_CSS_design{
    display: flex;
    width: 85%;
    margin: 0 auto;
}
.html_css_design{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 20px;

}
.html_css_design h2{
    color: black;
    font-weight: bold;
    font-size: 25px;
}
.html_css_design p{
    text-align: center;
    font-size: 15px;
    line-height: 20px;
    width: 88%;
}
.html_css_design img{
    width: 90px;
}
@media (max-width: 780px){
    .div__HTML_CSS_design{
        flex-direction: column;
        gap:30px;

    }
}

/*------ Imagem e Títulos ------ */
.section_home{
    height: 400px;
    background: url(../assets/img/showcase.jpg) no-repeat 0 -400px;
}
.titulos_home{
    display: flex;
    padding-top: 10%;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
}
.h1_home{
    font-weight: bold;
    font-size: 55px;
}
.p_home{
    font-size: 20px;
}

@media (max-width:700px){
    .h1_home{
        font-size: 45px;
    }
    .p_home{
        padding: 10px;
    }
}
@media (max-width:300px){
    .h1_home{
        font-size: 30px;
    }
    .p_home{
        font-size: 16px;
        line-height: 20px;
    }
}
@media (max-width:200px){
    .h1_home{
        font-size: 24px;
        padding-left: 10px;
        padding-right: 10px;
    }
    .p_home{
        font-size: 13px;
        line-height: 20px;
    }
}


</style>