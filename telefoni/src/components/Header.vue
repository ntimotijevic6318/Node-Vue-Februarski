<template>
<div>
  <b-jumbotron header="Tabla sa porukama"  :lead="'Broj poruka: '  + messages.length"/>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
name: "Header",

  computed: {
  ...mapState(['messages'])
  }
}
</script>

<style scoped>

</style>