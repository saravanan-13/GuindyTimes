<template>
    <div class="home">
        <div class="loader">
        <pacman-loader :loading="loading" :color="color" :size="size" ></pacman-loader>
        </div>
            <div class="Single_Article" v-show =!loading>
                <navbar class="navbar"></navbar>
                <sidebar class="sidebar"></sidebar>

                <div class="single_article-container v-cloak--hidden">
                    <div class="single-article" >

                        <div class="article-heading">
                            <h2><strong>{{heading}}</strong></h2>
                            <hr>
                        </div>

                        <div class="article-item">
                    <div class="heading">
                        <h1>
                            {{articles.title}}
                        </h1>
                    </div>
                    <div class="authors">
                        <ul>
                            <a v-bind:href="'/#/category/'+articles.genre"><li><strong>{{articles.genre}}</strong></li></a>
                            <li v-for="item in articles.author_list"><a v-bind:href="'/#/author/'+item"><strong>{{item}}</strong></a></li>
                           <li> {{articles.updated_at}}</li>
                        </ul>
                    </div>

                    <!--<div class="image">-->
                        <!--<img v-bind:src="'https://api.guindytimes.com/'+articles.image" alt="">-->
                    <!--</div>-->
                    <div class="content">

                        <div v-html=articles.content class="article-content"></div>

                    </div>
                    <div class="tags">
                       <div class="tagged">
                        <p><strong>Tagged in :</strong></p>
                        <ul class="tag-list">
                            <li v-for="item in articles.tags"><a v-bind:href="'/#/tag/'+item">{{item}}</a></li>
                        </ul>
                       </div>

                        <div class="share">
                            <div class="fb">
                                <div class="fb-share-button mov-right" v-bind:data-href="'http://tech.guindytimes.com/articles/'+slug " data-layout="button" data-size="large" data-mobile-iframe="true"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fguindytimes.com%2Farticles%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>

                            </div>
                        </div>

                    </div>
                            <div class="fb-com">
                                <div class="fb-comments" v-bind:data-href="'http://tech.guindytimes.com/articles/' + slug " data-numposts="7"></div>
                            </div>

                            <hr>
                </div>
                        <!--<center>-->
                        <!--<div class="fb-comments" v-bind:data-href="'http://tech.guindytimes.com/articles/' + slug " data-numposts="7"></div>-->
                        <!--</center>-->

                        <div class="article-item-mob">
                            <div class="heading">
                                <h1>
                                    {{articles.title}}
                                </h1>
                            </div>
                            <div class="authors">
                                <ul>
                                    <a v-bind:href="'/#/category/'+articles.genre"><li><strong>{{articles.genre}}</strong></li></a>
                                    <li v-for="item in articles.author_list"><a v-bind:href="'/#/author/'+item"><strong>{{item}}</strong></a></li>
                                    <li> {{articles.updated_at}}</li>
                                </ul>
                            </div>

                            <!--<div class="image">-->
                            <!--<img v-bind:src="'https://api.guindytimes.com/'+articles.image" alt="">-->
                            <!--</div>-->
                            <div class="content">

                                <div v-html=articles.content class="article-content"></div>

                            </div>
                            <div class="tags-mob">
                                <div class="tagged">
                                    <p><strong>Tagged in :</strong></p>
                                    <ul class="tag-list-mob">
                                        <li v-for="item in articles.tags"><a v-bind:href="'/#/tag/'+item">{{item}}</a></li>
                                    </ul>
                                </div>

                                <div class="share-mob">
                                    <div class="fb">
                                        <div class="fb-share-button mov-right" v-bind:data-href="'http://tech.guindytimes.com/articles/'+slug " data-layout="button" data-size="large" data-mobile-iframe="true"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fguindytimes.com%2Farticles%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
                                    </div>
                                <div class="fb-com-mob">
                                    <div class="fb-comments" v-bind:data-href="'http://tech.guindytimes.com/articles/' + slug " data-numposts="7"></div>
                                </div>

                            </div>

                            <hr>
                        </div>

                        <div class="related-articles">
                    <div class="article-heading">
                        <h2><strong>Similar Articles</strong></h2>
                        <hr>
                    </div>

                    <div class="article-item" v-for="item in similar">
                        <a v-bind:href="'/#/articles/'+item.slug">
                            <div class="row">
                                <div class="col-md-1"></div>
                                <div class="col-md-3 heading">

                                    <h3>
                                        {{item.title}}
                                    </h3>
                                    <div class="authors">
                                        <ul>
                                            <li>{{item.updated_at}}</li>
                                            <li v-for="items in item.author_list"><a v-bind:href="'/#/author/'+items"><strong>{{items}}</strong></a></li>
                                        </ul>
                                    </div>

                                </div>
                                <div class="col-md-4 content">

                                    <p>
                                        {{item.preview}}
                                    </p>

                                </div>
                                <div class="col-md-3 image">
                                    <img v-bind:src="'https://api.guindytimes.com/'+item.image" alt="">
                                </div>
                                <div class="col-md-1"></div>
                            </div>
                        </a>

                        <hr>

                    </div>

                </div>
                        <div class="related-articles-mob">
                            <div class="article-heading">
                                <h2><strong>Similar Articles</strong></h2>
                                <hr>
                            </div>
                            <div class="article-item-mob" v-for="item in similar">
                                <a v-bind:href="'/#/articles/'+item.slug">
                                    <div class="row">
                                        <div class="col-md-6 heading">
                                            <h3>
                                                {{item.title}}
                                            </h3>
                                            <div class="authors">
                                                <ul>
                                                    <!--<li>{{item.updated_at}}</li>-->
                                                    <li v-for="items in item.author_list"><a v-bind:href="'/#/author/'+items"><strong>{{items}}</strong></a></li>
                                                </ul>
                                            </div>

                                        </div>
                                        <div class="col-md-6 image">
                                            <img v-bind:src="'https://api.guindytimes.com/'+item.image" alt="">
                                        </div>
                                    </div>
                                </a>

                                <hr>

                            </div>

                            <!--<div class="article-item" v-for="item in similar">-->
                            <!--<a v-bind:href="'/articles/'+item.slug">-->
                            <!--<div class="row">-->
                            <!--<div class="col-md-1"></div>-->
                            <!--<div class="col-md-3 heading">-->

                            <!--<h3>-->
                            <!--{{item.title}}-->
                            <!--</h3>-->
                            <!--<div class="authors">-->
                            <!--<ul>-->
                            <!--<li>{{item.updated_at}}</li>-->
                            <!--<li v-for="items in item.author_list"><a v-bind:href="'/author/'+items"><strong>{{items}}</strong></a></li>-->
                            <!--</ul>-->
                            <!--</div>-->

                            <!--</div>-->
                            <!--<div class="col-md-4 content">-->

                            <!--<p>-->
                            <!--{{item.preview}}-->
                            <!--</p>-->

                            <!--</div>-->
                            <!--<div class="col-md-3 image">-->
                            <!--<img v-bind:src="'https://api.guindytimes.com/'+item.image" alt="">-->
                            <!--</div>-->
                            <!--<div class="col-md-1"></div>-->
                            <!--</div>-->
                            <!--</a>-->

                            <!--<hr>-->

                            <!--</div>-->

                        </div>

                    </div>
                </div>



        <br><br><br>
        <foot></foot>

    </div>
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
        name: "single_article",
        components:{
            navbar:navbar,
            sidebar:sidebar,
            foot:foot,
            PacmanLoader
        },
        data(){
            return{
                count:5,
                heading:"",
                articles:"",
                similar:"",
                slug:this.$route.params.slug,
                genre:this.$route.params.genre,
                scount:4,
                loading:true,
                size:"30px",
                color:"#C92627"
            }
        },
        created(){
          //  console.log(this.genre);
            this.$http.get(`https://api.guindytimes.com/singlearticle?slug=`+this.slug+`&scount=`+this.scount).then(function(data){
            //    console.log(data.body);
                this.heading=data.body.message;
                this.articles = data.body.data.article;
                this.similar = data.body.data.similar_articles;
                this.loading = false;
              //  console.log("this.similar",this.similar);
            }).catch(e => {
                console.log(e);
            });
        },
        updated(){

        },
        methods:{
            load_more:function () {

                // this.count=this.count+5;
                // this.$http.get(`https://api.guindytimes.com/latestarticles?count=`+this.count).then(function(data){
                //     console.log(data.body);
                //     this.heading=data.body.message;
                //     this.articles = data.body.data;
                // }).catch(e => {
                //     console.log(e);
                // });

            }
        }
    }
</script>

<style scoped>

    .loader{
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 50%;
        top: 50%;
    }
    @media screen and (max-width: 700px){
        .loader{
            display: flex;
            justify-content:center;
            align-items: center;
            top:0;
            bottom:0;
            left:0;
            right:0;
        }
    }
    @import '../assets/css/single_article.css';

</style>
