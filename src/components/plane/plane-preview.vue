<template lang="html">

  <section class="plane-preview thumbnail">
    <img class="img-responsive" :src="'/static/img/plane/' + plane.model + '.png'" alt="">
    <div class="caption">
      <h4>{{plane.model}}</h4>
    </div>
  </section>
</template>

<script lang="js">
  export default  {
    name: 'plane-preview',
    props: ['plane'],
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
  .plane-preview:hover {
    background-color: #e2feff;
  }
</style>
