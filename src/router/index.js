import Vue from 'vue'
import Router from 'vue-router'
import Page1 from "../View/page1/Page1";
import Page2 from "../View/page2/Page2"
import Page3 from "../View/page3/Page3";
import Page4 from "../View/page4/Page4";
import Page5 from "../View/page5/Page5";
import Page6 from "../View/page6/Page6";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/page1'
    },
    {
      name: 'page1',
      path: '/page1',
      component: Page1
    },
    {
      name: 'page2',
      path: '/page2',
      component: Page2
    },
    {
      name: 'page3',
      path: '/page3',
      component: Page3
    },
    {
      name: 'page4',
      path: '/page4',
      component: Page4
    },
    {
      name: 'page5',
      path: '/page5',
      component: Page5
    },
    {
      name: 'page6',
      path: '/page6',
      component: Page6
    }
  ]
})
