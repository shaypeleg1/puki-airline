<template lang="html">

  <section class="passenger-center">
    <h1>Passenger Center</h1>
    <passenger-list :passengers="passengers"></passenger-list>
    <passenger-details></passenger-details>
  </section>

</template>

<script lang="js">

  import PassengerList from 'src/components/passenger/passenger-list'
  import PassengerDetails from 'src/components/passenger/passenger-details'


  export default {
    name: 'passenger-center',

    created() {
      this.reloadPassengers();
      eventBus.$on('deletePassenger', (id) => { 
        this.deletePassenger(id);
        this.reloadPassengers();
      });
    },
    props: [],
    mounted() {

    },
    data() {
      return {
        passengers: []

      }
    },
    methods: {
      reloadPassengers() {
        this.axios.get('http://localhost:80/server/api/passengerAPI.php')
          .then(res => {
            this.passengers = res.data;
          });
      },
      deletePassenger(id) {
        this.axios.delete(`http://localhost:80/server/api/passengerAPI.php?id=5`)
      },
    },
    computed: {

    },
    components: {
      PassengerList,
      PassengerDetails
    }
  }
</script>

<style scoped lang="scss">
  .passenger-center {

  }
</style>