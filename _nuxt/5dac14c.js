(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{383:function(t,e,o){var content=o(386);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(89).default)("7b0e93be",content,!0,{sourceMap:!1})},385:function(t,e,o){"use strict";o(383)},386:function(t,e,o){var r=o(88)((function(i){return i[1]}));r.push([t.i,'article[data-v-41092c54]{margin:1rem 0}article header[data-v-41092c54]{margin:0 0 1rem}article h3[data-v-41092c54],article h4[data-v-41092c54]{font-size:1em;font-weight:400}article ul[data-v-41092c54]{margin-left:2rem}article li[data-v-41092c54]{list-style-type:square;margin:.5em 0}li.projects span[data-v-41092c54]:not(:last-child):after{content:", "}',""]),r.locals={},t.exports=r},396:function(t,e,o){"use strict";o.r(e);var r=o(375),n={setup:function(){return{store:Object(r.a)()}},props:{job:Object},computed:{projects:function(){return this.store.getProjectsForJob(this.job.slug).reverse()}}},c=(o(385),o(70)),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("article",{class:t.job.slug},[e("header",[e("h3",[e("strong",[t._v(t._s(t.job.position))]),t._v(" for "),e("strong",[t._v(t._s(t.job.company))]),t._v(" of "+t._s(t.job.location))]),t._v(" "),e("h4",[t._v(t._s(t.job.timespan))])]),t._v(" "),e("ul",[t._l(t.job.tasks,(function(o){return e("li",{key:o},[t._v(t._s(o))])})),t._v(" "),t.projects.length?e("li",{staticClass:"projects"},[t._v("\n      Projects: \n      "),t._l(t.projects,(function(o){return e("span",{key:o.slug},[e("NuxtLink",{attrs:{to:"/projects/".concat(o.slug,"/")}},[t._v(t._s(o.title))])],1)}))],2):t._e()],2)])}),[],!1,null,"41092c54",null);e.default=component.exports}}]);