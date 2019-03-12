<template>
    <div id="divLoading" v-if="getShowLoader()">
        <p id="loading">
            <img src="images/805.svg">
        </p>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
    name : 'Loader',
    methods : {
        ...mapGetters(['getShowLoader'])
    }    
}
</script>

<style>
#divLoading {
  margin: 0px;
  padding: 0px;
  position: absolute;
  right: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
  z-index: 30001;
  opacity: 0.8;}

#loading {
   position: absolute;
   color: White;
  top: 50%;
  left: 45%;
}
</style>
