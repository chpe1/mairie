import Vue from 'vue'
import VueRouter from 'vue-router'

import Home1 from '@/pages/Home1.vue'
import Home2 from '@/pages/Home2.vue'
import About from '@/pages/About.vue'
import Pricing from '@/pages/Pricing.vue'
import Portfolio from '@/pages/Portfolio.vue'
import PortfolioDetails from '@/pages/Portfolio_Details.vue'
import Faq from '@/pages/Faq.vue'
import Career from '@/pages/Career.vue'
import Contact from '@/pages/Contact.vue'
import Blog from '@/pages/Blog.vue'
import BlogDetails from '@/pages/BlogDetails.vue'

Vue.use(VueRouter)

const router = new VueRouter ({
    routes : [
        {
            component: Home1,
            path: '/',
            name: 'Home1'
        },
        {
            component: Home2,
            path: '/home2',
            name: 'Home2'
        },
        {
            component: About,
            path: '/about',
            name: 'About'
        },
        {
            component: Pricing,
            path: '/pricing',
            name: 'Pricing'
        },
        {
            component: Portfolio,
            path: '/portfolio',
            name: 'Portfolio'
        },
        {
            component: PortfolioDetails,
            path: '/portfolio_details',
            name: 'Portfolio Details'
        },
        {
            component: Faq,
            path: '/faq',
            name: 'FAQ'
        },
        {
            component: Career,
            path: '/career',
            name: 'Career'
        },
        {
            component: Contact,
            path: '/contact-us',
            name: 'Contact Us'
        },
        {
            component: Blog,
            path: '/blog',
            name: 'Blog'
        },
        {
            component: BlogDetails,
            path: '/blog-details',
            name: 'Blog Details'
        }
    ],
    mode: "history",
    linkExactActiveClass: "current-menu-item"
})

export default router