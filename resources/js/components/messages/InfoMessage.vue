<template>
    <div v-if="trueCondition" class="alert alert-info">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name : 'InfoMessage',
    props : ['trueCondition']
}
</script>
