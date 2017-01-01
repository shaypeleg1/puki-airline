<template lang="html">

  <section class="car-center">
    <h1>Cars Center</h1>
    <car-list></car-list>
  </section>

</template>

<script lang="js">

  import CarList from 'src/components/car-list/car-list'


  export default  {
    name: 'car-center',
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
      CarList
    }
}
</script>

<style scoped lang="scss">
  .car-center {

  }
</style>
