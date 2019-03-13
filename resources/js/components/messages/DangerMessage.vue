<template>
    <div v-if="trueCondition" class="alert alert-danger">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name : 'DangerMessage',
    props : ['trueCondition']
}
</script>
