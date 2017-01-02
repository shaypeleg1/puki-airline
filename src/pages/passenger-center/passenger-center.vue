<template lang="html">

  <section class="passenger-center">
    <h1>Passenger Center</h1>
    <passenger-list :passengers="passengers"></passenger-list>
    <passenger-details></passenger-details>
    <button class="btn btn-primary" @click="isAddShow = !isAddShow">Add New Passenger </button>
    <passenger-add v-if="isAddShow" @addNewPassenger="addNewPassenger($event)"></passenger-add>
  </section>

</template>

<script lang="js">

  import PassengerList from 'src/components/passenger/passenger-list';
  import PassengerDetails from 'src/components/passenger/passenger-details';
  import PassengerAdd from 'src/components/passenger/passenger-add';


  export default {
    name: 'passenger-center',

    created() {
      this.reloadPassengers();
      eventBus.$on('deletePassenger', (id) => {
        this.deletePassenger(id);
    });
  },
  props: [],
    mounted() {

  },
  data() {
    return {
      passengers: [],
      isAddShow: false
    }
  },
    methods: {
      reloadPassengers() {
        this.axios.get('http://localhost:80/airlines/api/passengerAPI.php')
          .then(res => {
            this.passengers = res.data;
          });
      },
    deletePassenger(id) {
      this.axios.delete(`http://localhost:80/airlines/api/passengerAPI.php?id=${id}`)
       .then((response) => {
          this.reloadPassengers();
        })
      },
    addNewPassenger(passenger) {
      this.axios.post('http://localhost:80/airlines/api/passengerAPI.php', {
        name: passenger.name,
      })
        .then((response) => {
          this.reloadPassengers();
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  computed: {

  },
  components: {
    PassengerList,
      PassengerDetails,
      PassengerAdd
  }
  }
</script>

<style scoped lang="scss">
  .passenger-center {

  }
</style>