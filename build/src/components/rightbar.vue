<template>
    <div class="Rightbar">

        <div class="rightbar-container">

            <div class="news">
                <div class="news-heading">
                   <h3><strong>{{heading}}</strong></h3>
                </div>
                <div class="news-items">
                    <ul>
                        <li v-for="item in news"><a v-bind:href="item.url" target="_blank">{{item.title}}</a></li>
                    </ul>
                </div>

            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: "rightbar",
        data(){
            return{
                count:6,
                heading:"",
                news:""
            }
        },
        created(){
            this.$http.get(`https://api.guindytimes.com//hackernews?count=`+this.count).then(function(data){
               // console.log("hacker",data.body);
                this.heading=data.body.message;
                this.news = data.body.data;
            }).catch(e => {
                console.log(e);
            });
        }
    }
</script>

<style scoped>

    @import '../assets/css/rightbar.css';

</style>