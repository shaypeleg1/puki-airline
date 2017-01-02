<template lang="html">


  <section class="passenger-add">
    <h2>Add New Passenger</h2>
    <div class="new-passenger-form">
     <label class="subtitle is-5">Passenger Name</label>
        <p class="control">
          <input class="input" type="text" v-model="passenger.name">
        </p>
        <p class="control">
          <button class="button is-primary" @click="$emit('addNewPassenger', passenger)">Submit</button>
          <button class="button is-link" @click="isAddShow = !isAddShow">Cancel</button>
        </p>
    </div>
  </section>
</template>

<script lang="js">
  export default  {
    name: 'passenger-add',
    props: [],
    mounted() {

    },
    data() {
      return {
        passenger: {name: ''},
      }
    },
    methods: {

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
  .new-passenger-form {
    width: 30%;
  }
  .passenger-add {

    

  }
</style>
