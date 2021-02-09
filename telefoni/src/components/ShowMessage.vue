<template>
  <b-container fluid>
    <b-row>
      <b-col sm="2">
        <label for="markaTelefona">Marka telefona:</label>
      </b-col>
      <b-col sm="10">
        <p id="markaTelefona" style="text-align: left; background-color: aqua ; ">{{ message.markaTelefona }}</p>
      </b-col>
    </b-row>

    <b-row class="mt-2">
      <b-col sm="2">
        <label for="modelTelefona">Model telefona:</label>
      </b-col>
      <b-col sm="10">
        <p id="modelTelefona" style="text-align: left ; background-color: aqua ; ">{{ message.modelTelefona }}</p>
      </b-col>
    </b-row>

    <b-row class="mt-2">
      <b-col sm="2">
        <label for="opisTelefona">Opis telefona:</label>
      </b-col>
      <b-col sm="10">
        <p id="opisTelefona" style="text-align: left ; background-color: aqua">{{ message.opisModela }}</p>
      </b-col>
    </b-row>
  </b-container>
</template>


<script>
export default {
name: "ShowMessage",

  props:{
    message: Object
  }
}




</script>

<style scoped>

</style>