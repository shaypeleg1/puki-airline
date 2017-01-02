<template lang="html">


  <section class="passenger-list">
    <h3>Passenger List</h3>
    <div class="row">
      <div class="col-xs-18 col-sm-4" v-for="passenger of passengers">
          <passenger-preview class="card"  :passenger="passenger" @click.native="displayPassenger(passenger)"></passenger-preview>
      </div>

    </div>
    
  </section>
</template>

<script lang="js">
  import PassengerPreview from './passenger-preview';
  
  export default  {
    name: 'passenger-list',
    props: ['passengers'],

    mounted() {

    },
    data() {
      return {
      }
    },
    methods: {
      displayPassenger(passenger) {
        eventBus.$emit('displayPassenger', passenger);
      }
    },
    computed: {

    },
    components: {
      PassengerPreview
    }
}
</script>

<style scoped lang="scss">
  .passenger-list {

    

  }
</style>
