<template lang="html">

  <section class="passenger-preview ">
    <img class="img-responsive" :src="'/static/img/passenger/' + passenger.id + '.png'" alt="">
    <div class="caption">
      <h4 class="title is-5">{{passenger.name}}</h4>

      <div class="btns">
        <a class="button is-primary">More details</a>
        <a class="button is-success">Edit</a>
        <a class="button is-danger" @click.stop="deletePassenger(passenger.id)">Delete</a>
      </div>

    </div>
  </section>

</template>

<script lang="js">
  export default {
    name: 'passenger-preview',
    props: ['passenger'],
    mounted() {

    },
    data() {
      return {
        isInEditMode : false ,

      }
    },
    methods: {
      deletePassenger(id) {
        eventBus.$emit('deletePassenger', id);
      }
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