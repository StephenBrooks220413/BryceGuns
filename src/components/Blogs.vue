<template>

<div>
    <!-- code here -->
</div>

</template>

<script>
    export default {
        name: 'Blogs',
        props: {
            msg: String
        }
    };
</script>

<style>

input{
    width: 70%;
    height: 50px;
    margin-bottom: 20px;
}

textarea {
    width: 70%;
    height: 230px;
}

@media(max-width:600px) {
    input{
        width: 50%;
        height: 30px;
    }
    textarea {
    width: 50%;
    height: 100px;
}
}

</style>