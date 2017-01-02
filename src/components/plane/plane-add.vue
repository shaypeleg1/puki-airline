<template lang="html">


  <section class="plane-add">
    <div class="new-plane-form">
     <label class="subtitle is-5">Plane Model</label>
        <p class="control">
          <input class="input" type="text" placeholder="Airbus 737" v-model="plane.model">
        </p>
        <label class="subtitle is-5">Number of seats</label>
        <p class="control has-icon has-icon-right">
          <input class="input" type="number" placeholder="100" v-model.number="plane.seat_count">
        </p>
        <p class="control">
          <button class="button is-primary" @click="addPlane(plane)">Submit</button>
          <button class="button is-link" @click="isAddShow = !isAddShow">Cancel</button>
        </p>
    </div>
  </section>
</template>

<script lang="js">
  export default  {
    name: 'plane-add',
    props: [],
    mounted() {

    },
    data() {
      return {
        plane: {model: '', seat_count: 0},
      }
    },
    methods: {
      addPlane(newPlane) {
        console.log('newPlae: ', newPlane);
        
        eventBus.$emit('addPlane', newPlane);
      }
    },
    created() {
    },
    computed: {

    },
    components: {
    }
}
</script>

<style scoped lang="scss">
  .new-plane-form {
    width: 30%;
  }
  .plane-add {

    

  }
</style>
