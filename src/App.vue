<template>
<div id="app">
  <Header />
  <CurrentQuote />
</div>
</template>

<script>
import './styles/globals.css'
// import CurrentQuote from '../current-quote/src/components/CurrentQuote.vue'
import Header from './components/Header.vue'
import CurrentQuote from './components/CurrentQuote.vue'

export default {
  name: 'App',
  components: {
    Header,
    CurrentQuote
  }
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: 0;
}
</style>
