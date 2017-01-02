<template lang="html">
  <!--{{passenger.name}}-->
  <div class="modal" :class="{ 'is-active': shouldDisplay }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{passenger.name}}</p>
        <button @click.stop="shouldDisplay = false" class="delete"></button>
      </header>
      <section class="modal-card-body thumbnail">
        <img class="img-responsive" :src="'/static/img/passenger/' + passenger.id + '.png'" alt="">
        <div class="caption">

          <div class="btns">
            <a class="button is-success">Edit</a>
            <a class="button is-danger" @click.stop="deletePassenger(passenger.id)">Delete</a>
          </div>

        </div>
      </section>
      s </div>
  </div>

</template>

<script lang="js">
  export default {
    name: 'passenger-details',
    created() {
      eventBus.$on('displayPassenger', (passenger) => { this.passenger = passenger; this.shouldDisplay = true });
    },
    mounted() {

    },
    data() {
      return {
        passenger: {},
        shouldDisplay: false
      }
    },
    methods: {
      deletePassenger(id) {
        eventBus.$emit('deletePassenger', id);
        this.shouldDisplay = false;
      }
    },
    computed: {

    }
  }
</script>

<style scoped lang="scss">
  .car-preview {
  }
  img {
    max-height: 300px;
  }
</style>