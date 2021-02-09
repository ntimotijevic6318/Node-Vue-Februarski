<template>
  <div v-if="messages.length" >
    <b-table :items="messages" :fields="fields"  hover  striped responsive="sm"  @row-clicked="editMessage">
      <template #cell(show_details)="row">
        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
          {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
        </b-button>

        <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
        <b-form-checkbox v-model="row.detailsShowing" @change="row.toggleDetails">
          Details via check
        </b-form-checkbox>
      </template>

      <template v-slot:cell(Akcija)="row">
        <b-button variant="danger"  @click="delete_message(row.item.idTelefona)">Obrisi telefon sa spiska</b-button>
      </template>

      <template #row-details="row">
        <b-card>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Id telefona:</b></b-col>
            <b-col>{{ row.item.idTelefona }}</b-col>
          </b-row>

          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Marka telefona:</b></b-col>
            <b-col>{{ row.item.markaTelefona }}</b-col>
          </b-row>

          <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
        </b-card>
      </template>
    </b-table>
  </div>

  <div v-else>
    <b-jumbotron >

      <hr class="my-4">

      <p>
        It uses utility classes for typography and spacing to space content out within the larger
        container.
      </p>

      <b-button variant="primary" href="#">Do Something</b-button>
      <b-button variant="success" href="#">Do Something Else</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
import router from '@/router';
import {mapState , mapActions } from 'vuex';
export default {
  name: "MessageList" ,

  computed: {
    ...mapState(['messages'])
  },

  data() {
    return{
      fields: ['idTelefona', 'markaTelefona', 'modelTelefona' , 'slikaTelefona', 'show_details' , 'Akcija']
    }
  },

  methods: {
    ...mapActions(['delete_message']),

    editMessage: function (item , index, event){
     router.push({path : `/telefon/${item.idTelefona}`});
    }
  }


}
</script>

<style >
tr:hover td{
background: aquamarine;
}

</style>