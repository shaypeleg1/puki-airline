<template lang="html">

  <section class="plane-center">
    <h1>Plane Center</h1>
    <plane-list :planes="planes"></plane-list>
    <button class="btn btn-primary" @click="isAddShow = !isAddShow">Add New Plane </button>
    <plane-add v-if="isAddShow"></plane-add>
  </section>

</template>

<script lang="js">

  import PlaneList from 'src/components/plane/plane-list'
  import PlaneAdd from 'src/components/plane/plane-add'
  import PlaneDetails from 'src/components/plane/plane-details'

  export default  {
    name: 'plane-center',
    created() {
      this.fetchPlanes();
      eventBus.$on('deletePlane', (id) => { 
        this.deletePlane(id);
        
      });
      eventBus.$on('addPlane', (newPlane) => { 
        this.addNewPlane(newPlane);
        this.fetchPlanes();
      });
    },
    props: [],
    mounted() {

    },
    data() {
      return {
      planes : [],
      isAddShow : false
      }
    },
    methods: {
      fetchPlanes() {
        console.log('start fetch planes!');
        this.axios.get('http://localhost:80/airlines/api/planeAPI.php')
          .then(response => {
            this.planes = response.data
            console.log(response.data);
        })
          .catch(error => {
            console.log(error);
        });
      },
      addNewPlane(newPlane) {
        this.axios.post('http://localhost:80/airlines/api/planeAPI.php', {
        model: newPlane.model,
        seat_count: newPlane.seat_count
      })
        .then(response => {
          this.fetchPlanes();
        })
        .catch(function (error) {
          console.log(error);
        });
      },
      deletePlane(id) {
        console.log('delete plane');
        this.axios.delete(`http://localhost:80/airlines/api/planeAPI.php?id=${id}`)
          .then(response => {
          this.fetchPlanes();
        })
      },
    },
    computed: {

    },
    components: {
       PlaneList, PlaneAdd
    }
}
</script>

<style scoped lang="scss">
  .plane-center {

  }
</style>
