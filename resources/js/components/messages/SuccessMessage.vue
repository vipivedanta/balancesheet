<template>
    <div v-if="trueCondition" class="alert alert-success">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name : 'SuccessMessage',
    props : ['trueCondition']
}
</script>
