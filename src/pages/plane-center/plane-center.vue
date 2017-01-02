<template lang="html">

  <section class="plane-center">
    <h1>Plane Center</h1>
    <plane-list></plane-list>
  
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
