<template>
  <div>
    <h1>Welcome to TowerDefense</h1>
    
    <button v-on:click="startSinglePlayer()">Start a new singleplayer game</button>
    
    <br />
    <br />
    
    <button>Start a new multiplayer game</button>
  </div>
</template>

<script>
export default {
  name: 'MainMenu',
  props: {
    msg: String
  },
  methods: {
    startSinglePlayer: function() {
      this.$router.push('/game');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
