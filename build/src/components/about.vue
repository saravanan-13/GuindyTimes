<template>

    <div v-cloak>
        <div class="loader">
            <pacman-loader :loading="loading" :color="color" :size="size" ></pacman-loader>
        </div>
        <div class="Main_content" v-show=!loading>
            <navbar class="navbar"></navbar>
            <sidebar class="sidebar"></sidebar>
            <div class="about-container">
                <div class="tech">
                    <h2>Tech.GT</h2>
                    <p>{{this.tech}}</p>

                </div>
            </div>
            <rightbar class="rightbar"></rightbar>
            <br><br><br>
            <foot></foot>
        </div>
    </div>

</template>

<script>
    import navbar from './navbar';
    import sidebar from './sidebar';
    import rightbar from './rightbar';
    import foot from './foot';
    import PacmanLoader from 'vue-spinner/src/PacmanLoader.vue'
    export default {
        name: "about",
        components:{
            navbar:navbar,
            rightbar:rightbar,
            sidebar:sidebar,
            foot:foot,
            PacmanLoader
        },
        data(){
            return{
                tamil:"",
                tech:"",
                english:"",
                loading:true,
                size:"30px",
                color:"#C92627"
            }
        },
        created(){

            this.$http.get(`https://api.guindytimes.com/about`).then(function (data) {
                 console.log(data);
                 this.loading=false;
                 this.tech=data.body.data.tech;
                 console.log(this.tech);

            }).catch(e => {
                console.log(e);
            });

        }
    }
</script>

<style scoped>
    .loader{
        position:fixed;
        top: 50%;
        left: 50%;
    }
    @import '../assets/css/about.css';

</style>