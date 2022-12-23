<script>
export default{
    name: 'Header',
    data(){
        return{
            isActiveHome: true
        }
    },
    methods:{
        alteraCorCabecalho(pagina){
            var path = this.$route.path
            console.log(path)
            if(pagina == "/about" || path == "/about"){
                this.isActiveHome = false;
            }
        },

    }
}

</script>

<template>
    <header class="header">
        <div class="titulo_header">
            <h1 class="h1_header">
                <span class="span_header">Corps</span>
               <p class="p_header">Web Design</p> 
            </h1>
                     
        </div>
        <ul class="ul_header">
            <RouterLink to="/"><li class="home" :class="{isActiveHome: isActiveHome}" >Home</li> </RouterLink>
            <RouterLink @click="alteraCorCabecalho('/about')" to="/about"><li class="about">About</li></RouterLink>
            <a href="/"><li class="services">Services</li></a>
        </ul>
    </header>
</template>

<style scoped>
.header{
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 30px;
    border-bottom: #e8491d 3px solid;
    background-color: #35424a;
    font-family: Arial, Helvetica, sans-serif;
    top: 0;
}
.titulo_header{
    font-weight: bold;
    font-size: 30px;
}
.span_header{
    color: #e8491d;
}
    
.h1_header{
    color: white;
    display: flex;
    gap: 5px;
}
.ul_header{
    display: flex;
    gap: 40px;
    text-transform: uppercase;
}
.ul_header a{
    text-decoration: none;
    color: white;
}
.isActiveHome{
    color:#e8491d;
    font-weight: bold;
}
.isActive:hover{
    color: rgb(161, 161, 161);
}
.ul_header a:hover{
    color: rgb(161, 161, 161);
    font-weight: bold;
}

@media (min-width: 300px) {
    .header{
        flex-flow: row wrap;
        white-space: nowrap;
        gap: 20px;
    }

}
@media (max-width: 300px){
    .header{
        display: flex;
        white-space: nowrap;
        flex-direction: column;
        gap: 20px;
    }
}
@media(max-width:260px){
    .ul_header{
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }
    .h1_header{
        flex-wrap: wrap;
        justify-content: center;
    }
}
@media (max-width:180px) {
    .p_header{
        white-space: break-spaces;
        text-align: center;
    }
}
</style>