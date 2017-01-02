<template lang="html">


  <section class="plane-list">
    <h2>Plane Model List</h2>
    <div class="row">
      <div class="col-xs-18 col-sm-4" v-for="plane of planes">
          <plane-preview :plane="plane"></plane-preview>
      </div>
    </div>
    
  </section>
</template>

<script lang="js">
  import PlanePreview from '../plane/plane-preview';
  export default  {
    name: 'plane-list',
    props: [],
    mounted() {

    },
    data() {
      return {
        planes: []
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
      }
    },
    created() {
       this.fetchPlanes();
    },
    computed: {

    },
    components: {
      PlanePreview
    }
}
</script>

<style scoped lang="scss">
  .plane-list {

    

  }
</style>
