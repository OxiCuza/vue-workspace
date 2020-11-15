<template>
    <div class="dropper"> 
        <input type="file">
        <span>
            Drop image here !
        </span>
    </div>
</template>

<script>
export default {
    name: 'UploadForm'
}
</script>

<style scoped>
    .dropper {
        height: 40vh;
        width: 80vw;
        margin: 10vh auto;
        border: 2px dashed grey;
        border-radius: 20px;
        overflow: hidden;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all .4s;
    }

    .dropper:hover {
        background-color: rgba(155, 155, 155, 0.1);
    }

    .dropper:hover input {
        cursor: pointer;
    }

    .dropper:hover span {
        font-size: 20px;
    }

    input {
        height: 100%;
        width: 100%;
        position: absolute;
        opacity: 0;
    }

    span {
        transition: all .4s;
    }
</style>