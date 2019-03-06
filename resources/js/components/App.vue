<template>
    <div>
        <div class="col-md-3">
            <SideBar></SideBar>
        </div>
        <div class="col-md-9">
            <router-view></router-view>
        </div>
    </div>
    
</template>
<script>

import SideBar from '../components/SideBar';

export default {
    name : 'App',
    components : {
        SideBar
    }
}
</script>
