<template>
    <div class="row">
        <div class="col-md-3">
            <SideBar></SideBar>
        </div>
        <div class="col-md-9">
            <router-view></router-view>
        </div>
        <Loader></Loader>
    </div>
    
</template>
<script>

import SideBar from '../components/SideBar';
import Loader from '../components/Loader'

export default {
    name : 'App',
    components : {
        SideBar,
        Loader
    }
}
</script>

<style>
.alert{
    text-align: center;
}
</style>
