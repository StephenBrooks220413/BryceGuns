<template>
    <div id="app">
        <Nav />
        <HelloWorld />
        <Blogs/>
        <Contact/>
        <br /><br /><br /><br />
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue';
    import Nav from './components/Nav.vue';
    import Contact from './components/Contact';
    import Blogs from './components/Blogs';

    export default {
        name: 'app',
        components: {
            HelloWorld,
            Nav,
            Contact, 
            Blogs
        }
    };
</script>

<style>
    @import './assets/bootstrap.min.css';
    i {
        font-size: 2em;
        color:deepskyblue;
    }
</style>

