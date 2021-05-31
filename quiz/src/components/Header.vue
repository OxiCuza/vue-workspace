<template>
    <div>
        <b-nav tabs>
            <b-nav-item disabled><b>Fancy Quiz App</b></b-nav-item>
            <b-nav-item disabled>Counter : {{numCorrect}} / {{numTotal}}</b-nav-item>
        </b-nav>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        numCorrect: Number,
        numTotal: Number
    }

}
</script>

<style>

</style>