<template lang="html">

  <section class="plane-center">
    <h1>Plane Center</h1>
    <plane-list></plane-list>
    <button class="btn btn-primary" @click="isAddShow = !isAddShow">Add New Plane </button>
    <plane-add v-if="isAddShow"></plane-add>
  </section>

</template>

<script lang="js">

  import PlaneList from 'src/components/plane/plane-list'
  import PlaneAdd from 'src/components/plane/plane-add'


  export default  {
    name: 'plane-center',
    props: [],
    mounted() {

    },
    data() {
      return {
      isAddShow : false
      }
    },
    methods: {

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
