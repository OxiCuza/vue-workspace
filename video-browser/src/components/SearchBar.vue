<template>
    <div class="search-bar">
        <input @input='onInput' type="text">
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    methods: {
        onInput(event) {
            this.$emit('termChange', event.target.value);
        }
    }

}
</script>

<style>

</style>