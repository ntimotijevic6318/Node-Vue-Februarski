<template>
  <b-container fluid>
    <b-form>
      <b-row class="mt-2">
        <b-col sm="1" offset="2">
          <b-input v-model="newMarka" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Unesi marku telefona"></b-input>
        </b-col>
        <b-col sm="3">
          <b-form-textarea v-model="newModel" placeholder="Unesi model telefona"></b-form-textarea>
        </b-col>

        <b-col sm="3">
          <b-form-textarea v-model="newOpis" placeholder="Unesi opis modela"></b-form-textarea>
        </b-col>


        <b-col sm="1">
          <b-button variant="primary" size="lg" @click="addNew">Save</b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "EditMessage",
  props: {
    MT: {
      type: String,
      default: ''
    },
    MOT: {
      type: String,
      default: ''
    },
    OM: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      newMarka: '',
      newModel: '',
      newOpis: ''
    }
  },
  mounted: function () {
    this.newMarka = this.markaTelefona;
    this.newModel = this.modelTelefona;
    this.newOpis = this.opisModela;
  },
  methods: {
    ...mapActions(['new_message', 'change_message']),

    addNew: function() {
      const msg = JSON.stringify({markaTelefona: this.newMarka, modelTelefona: this.newModel, opisModela: this.newOpis});

      if (!this.$route.params.id)
        this.new_message(msg);
      else
        this.change_message({id: this.$route.params.id, msg: msg});

      this.newMarka = '';
      this.newModel = '';
      this.newOpis = '';
    }
  }
}
</script>

<style scoped>

</style>