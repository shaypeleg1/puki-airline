<template lang="html">


  <section class="plane-list">
    <h2>Plane Model List</h2>
    <div class="row">
      <div class="col-xs-18 col-sm-4" v-for="plane of planes">
          <plane-preview :plane="plane" @click.native="displayPlane(plane)"></plane-preview>
      </div>
    </div>
    
  </section>
</template>

<script lang="js">
  import PlanePreview from '../plane/plane-preview';
  export default  {
    name: 'plane-list',
    props: ['planes'],
    mounted() {

    },
    data() {
      return {
        
      }
    },
    methods: {
        displayPlane(plane) {
          eventBus.$emit('displayPlane', plane);
        },

      },
    created() {

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
