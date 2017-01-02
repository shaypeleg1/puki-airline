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
        planes: [{id: 1, model: 'Boing 777', seats: 352}, {id: 2, model: 'Airbus 380', seats: 280}, {id: 3, model: 'Boing 747', seats: 320}, {id: 4, model: 'Airbus a320', seats: 180}]
      }
    },
    methods: {

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
