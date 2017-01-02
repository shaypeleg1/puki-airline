<template lang="html">

  <section class="passenger-preview thumbnail">
    <img class="img-responsive" :src="'/static/img/passenger/' + passenger.id + '.png'" alt="">
    <div class="caption">
      <h4>{{passenger.name}}</h4>
    </div>  
  </section>

</template>

<script lang="js">
  export default  {
    name: 'passenger-preview',
    props: ['passenger'],
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
  .passenger-preview {
  }

  img {
    max-height: 200px;
  }
</style>
