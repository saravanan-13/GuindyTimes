import home from '../components/home'
import app from '../App'
import about from '../components/about'
import single_article from '../components/single_article'

export default[
    {path:'/',component:home},
    {path:'/about',component:about},
    {path:'/category/:category',component:home},
    {path:'/author/:author',component:home},
    {path:'/tag/:tag',component:home},
    {path:'/articles/:slug',component:single_article},
]
