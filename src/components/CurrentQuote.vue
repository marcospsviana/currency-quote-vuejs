<template>
<div id="content">
  <div id="quote">
    <h3>Cotação</h3>
  </div>
  <div class="cotacoes">
    <label id="title"> Dollar </label>
    <input id="usdBrl" v-model="inputValue" /><br />

    <div v-if="isNaN(inputValue)">
      <br />
      <label id="money" class="money">
        {{
          parseFloat(quote_value.USDBRL).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })
        }}
      </label>
    </div>
    <div v-else>
      <br />
      <label class="money"
        >{{
          (quote_value.USDBRL * inputValue || 0).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })
        }}
      </label>
    </div>
  </div>
  <div class="cotacoes">
    <label id="title"> Euro </label>
    <input id="eurBrl" v-model="inputEUR" /><br />

    <div v-if="isNaN(inputEUR)">
      <br />
      <label class="money">{{
        parseFloat(quote_value.EURBRL).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })
      }}</label>
    </div>
    <div v-else>
      <br />
      <label id="money" class="money">
        {{
          (quote_value.EURBRL * inputEUR || 0).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })
        }}</label
      >
    </div>
  </div>
  
    
  </div>
</template>
<script>
import api from "@/api/api.js";

export default {
  name: "CurrentQuote",
  mounted() {
    api.get().then((response) => {
      this.quote_value = response.data;
    });
  },
  data() {
    return {
      quote_value: 0,
      inputValue: 1,
      inputEUR: 1,
      inputBTC: 1
    };
  },
 
};
</script>
<style scoped>
#quote {
  
  margin-top: 2rem;
}
#title {
  text-align: left;
  font-weight: bolder;
  font-size: 1.7em;
}
.cotacoes {
  text-align: left;
  margin-top: 4rem;
  margin-left: 5em;
  width: 25em;
  justify-content: center;
  align-items: center;
}
label {
  font-size: 1.7em;
  text-align: left;
}
p {
  font-size: 1.6em;
}
input {
  
  float: right;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: solid 0.01em;
  height: 1.8em;
  padding: 1em;
  margin-left: 3em;
  margin-right: 2em;
  width: 8em;
  text-align: start;
  font-size: 1.4em;
}
.money {
  color: rgb(102, 61, 61);
  
}

#content{
  margin: 0 auto;
  padding: 0;
  width: 50%;
  
  display: block;

  justify-content: center;
}
</style>

