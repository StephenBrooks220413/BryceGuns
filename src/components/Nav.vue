<template>
    <div>
    <div class="top jumbotron img-fluid">
        <p class="title-number text-center">555-555-5555</p>
        <h1 class="text-center">Sharpen Your Aim</h1>
         <br>
        <h5 class="text-center">
            Our inventory of ammo will help with your aiming
        </h5>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">BryceGuns</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Follow Us
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">FaceBook</a>
                        <a class="dropdown-item" href="#">LinkedIn</a>
                        <a class="dropdown-item" href="#">Email</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
    </div>
</template>

<script>
    export default {
        name: 'Nav',
        props: {
            msg: String
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .top{
        background: url(https://images.unsplash.com/photo-1602901248692-06c8935adac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80) no-repeat center center fixed; 
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        height:40vh!important;
        width: 100%;
    }
    .top h1, .top h5 {
        color:white;
    }
    .title-number {
        color:white;
        font-size:24px;
    }
</style>

