<template>
  <div id="app">
    <router-view/>
    <el-alert :title="alertMsg" :type="alertType" center v-if="showAlertFlag"></el-alert>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'App',
  computed: mapState(['alertMsg','alertType','showAlertFlag'])
}
</script>

<style>
  #app{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom:0;
  }
</style>
