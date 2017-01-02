<template lang="html">
  <div class="modal" :class="{ 'is-active': shouldDisplay }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{plane.model}}</p>
        <button @click.stop="shouldDisplay = false" class="delete"></button>
      </header>
      <section class="modal-card-body thumbnail">
        <img class="img-responsive" :src="'/static/img/plane/' + plane.model + '.png'" alt="">
        <div class="caption">

          <div class="btns">
            <a class="button is-success">Edit</a>
          </div>

        </div>
      </section>
    </div>
  </div>

</template>

<script lang="js">
  export default {
    name: 'plane-details',
    created() {
      eventBus.$on('displayPlane', (plane) => { this.plane = plane; this.shouldDisplay = true });
    },
    mounted() {

    },
    data() {
      return {
        plane: {},
        shouldDisplay: false
      }
    },
    methods: {

    },
    computed: {

    }
  }
</script>

<style scoped lang="scss">
  .plane-preview {
  }
  img {
    max-height: 300px;
  }
</style>