<template>
 <div class="home">
   <Header/>
   <b-container>
     <b-row>
       <b-col cm="6">
         <EditMessage/>
       </b-col>
     </b-row>
   </b-container>
 </div>
</template>

<script>
import Header from "@/components/Header";
import EditMessage from "@/components/EditMessage";
export default {
  name: "NewMessage" ,
  components: {
    Header,
    EditMessage
  }
}
</script>

<style scoped>

</style>