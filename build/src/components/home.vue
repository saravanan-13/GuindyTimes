<template>
    <div class="Home">

        <div class="home-container">
            <main_content></main_content>
        </div>

    </div>
</template>

<script>
    import sidebar from './sidebar';
    import rightbar from './rightbar';
    import main_content from './main_content';
    import foot from './foot';
    export default {
        name: "home",
        components:{
            sidebar:sidebar,
            rightbar:rightbar,
            main_content:main_content,
            foot:foot
        }

    }
</script>

<style scoped>

    .home-container{
        min-height: 100%;
        position: relative;
    }
    [v-cloak] .v-cloak--hidden{
        display: none;
    }


    @media (max-width:600px) {
        .rightbar{
            display: none;
        }
    }
</style>