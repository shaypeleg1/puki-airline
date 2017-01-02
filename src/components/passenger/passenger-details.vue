<template lang="html">

  <section class="car-preview thumbnail">
    <img class="img-responsive" :src="'/static/img/car/' + car.id + '.png'" alt="">
    <div class="caption">
      <h4>{{car.name}}</h4>
    </div>  
  </section>

</template>

<script lang="js">
  export default  {
    name: 'car-preview',
    props: ['car'],
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
  .car-preview {
  }
</style>
