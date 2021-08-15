<template>

    <header>
        <nav class="container">
        <img src="../assets/cambio.svg" alt="logo"  height="2em" width="2em" id="logo"> 
       
        <h4> <a href="#">Cotação Dólar </a>| <a href="#"> Euro </a> </h4>
        </nav>
    </header>

</template>

<script>
export default {
    name: 'Header'
}
</script>


<style scoped>

header{
    margin: 0 auto;
    min-width: 40em;
    background-color: #272121;
    height: 6em;
    width: 100%;
    align-items: left;
    color: #1092c5;
    /* position: relative; */
    }
img{
    align-self: start;
    height: 5em;
    width: 5em;
    margin-top: 0.5em;
    margin-bottom: .5em;
    margin-left: 2em;
}
nav{
   

    padding-right: 1em;
    display: flex;
    justify-content: space-between;
    width: 100%;
   
}
h4{
   margin-right: 2em;
   margin-bottom: 2em;
   margin-top: 2em;
   letter-spacing: .1em;
   
}
a{
    text-decoration: none;
    color: #40b1dd;
    }
a:visited{
    text-decoration: none;
    color: #40b1dd;
    }
a:hover{
    color: #dfe9ec;
}
</style>