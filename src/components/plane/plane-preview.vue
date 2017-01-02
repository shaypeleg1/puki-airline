<template lang="html">

  <section class="plane-preview thumbnail">
    <img class="img-responsive img-rounded" :src="'/static/img/plane/' + plane.model + '.png'" alt="">
    <div class="caption">
      <h4>{{plane.model}}</h4>
    </div>
    <div class="btns">
        <a class="button is-primary">More details</a>
        <a class="button is-success">Edit</a>
        <a class="button is-danger" @click.stop="deletePlane(plane.id)">Delete</a>
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
      deletePlane(id) {
        eventBus.$emit('deletePlane', id);
      }
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
