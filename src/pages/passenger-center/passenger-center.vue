<template lang="html">

  <section class="passenger-center">
    <h1>Passenger Center</h1>
    <passenger-list :passengers="passengers"></passenger-list>
  </section>

</template>

<script lang="js">

  import PassengerList from 'src/components/passenger/passenger-list'


  export default {
    name: 'passenger-center',

    created() {
      this.reloadPassengers();
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
    },
    computed: {

    },
    components: {
      PassengerList
    }
  }
</script>

<style scoped lang="scss">
  .passenger-center {

  }
</style>