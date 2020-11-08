<template>

<div class="container">
            <h1>Contact Us</h1>
            <form name="contact" netlify>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="email">Email</label>
                        <input type="email" name="email" required class="form-control" id="inputEmail4">
                    </div>
                    <div class="form-group col-md-6">
                        <label for="Name">Name</label>
                        <input type="text" name="name" required class="form-control" id="inputName">
                    </div>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Your Message</label>
                    <textarea class="form-control" required spellcheck="true" maxlength="255" name="message" id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>
                <br>
                <button type="submit" class="btn btn-primary">Send</button>
            </form>
</div>

</template>

<script>
    export default {
        name: 'Contact',
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