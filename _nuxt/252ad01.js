(window.webpackJsonp=window.webpackJsonp||[]).push([[11,4],{383:function(t,e,o){var content=o(386);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(89).default)("7b0e93be",content,!0,{sourceMap:!1})},385:function(t,e,o){"use strict";o(383)},386:function(t,e,o){var r=o(88)((function(i){return i[1]}));r.push([t.i,'article[data-v-41092c54]{margin:1rem 0}article header[data-v-41092c54]{margin:0 0 1rem}article h3[data-v-41092c54],article h4[data-v-41092c54]{font-size:1em;font-weight:400}article ul[data-v-41092c54]{margin-left:2rem}article li[data-v-41092c54]{list-style-type:square;margin:.5em 0}li.projects span[data-v-41092c54]:not(:last-child):after{content:", "}',""]),r.locals={},t.exports=r},392:function(t,e,o){var content=o(656);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(89).default)("72788059",content,!0,{sourceMap:!1})},396:function(t,e,o){"use strict";o.r(e);var r=o(375),n={setup:function(){return{store:Object(r.a)()}},props:{job:Object},computed:{projects:function(){return this.store.getProjectsForJob(this.job.slug).reverse()}}},c=(o(385),o(70)),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("article",{class:t.job.slug},[e("header",[e("h3",[e("strong",[t._v(t._s(t.job.position))]),t._v(" for "),e("strong",[t._v(t._s(t.job.company))]),t._v(" of "+t._s(t.job.location))]),t._v(" "),e("h4",[t._v(t._s(t.job.timespan))])]),t._v(" "),e("ul",[t._l(t.job.tasks,(function(o){return e("li",{key:o},[t._v(t._s(o))])})),t._v(" "),t.projects.length?e("li",{staticClass:"projects"},[t._v("\n      Projects: \n      "),t._l(t.projects,(function(o){return e("span",{key:o.slug},[e("NuxtLink",{attrs:{to:"/projects/".concat(o.slug,"/")}},[t._v(t._s(o.title))])],1)}))],2):t._e()],2)])}),[],!1,null,"41092c54",null);e.default=component.exports},655:function(t,e,o){"use strict";o(392)},656:function(t,e,o){var r=o(88)((function(i){return i[1]}));r.push([t.i,".contact[data-v-6ada2f31]{display:flex;justify-content:space-between}.contact div[data-v-6ada2f31]{display:inline-block}.contact .info[data-v-6ada2f31]{text-align:right}section>h2[data-v-6ada2f31]{border-bottom:1px solid;color:#777;font-size:1.5em;margin:1em 0 .5em;padding-bottom:.5em}dl[data-v-6ada2f31]{grid-column-gap:1rem;grid-row-gap:.5rem;-moz-column-gap:1rem;column-gap:1rem;display:grid;grid-template-columns:min-content 1fr;row-gap:.5rem}dt[data-v-6ada2f31]{font-weight:600}footer[data-v-6ada2f31]{color:#aaa;font-style:italic;margin:3em 0 0;text-align:center}@media print{footer[data-v-6ada2f31]{display:none}}",""]),r.locals={},t.exports=r},665:function(t,e,o){"use strict";o.r(e);var r=o(375),n={setup:function(){return{jobs:Object(r.a)().jobs}},head:function(){var title="Derek Brooks's Resume";return{title:title,meta:this.$getMetaTags({title:title})}}},c=(o(655),o(70)),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",[t._m(0),t._v(" "),e("section",{staticClass:"experience"},[e("h2",[t._v("Experience")]),t._v(" "),t._l(t.jobs,(function(t){return e("Job",{key:t.slug,attrs:{job:t}})}))],2),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("footer",[t._v("\n    References available upon request\n  ")])])}),[function(){var t=this,e=t._self._c;return e("header",{staticClass:"title"},[e("h1",[t._v("Derek R. Brooks")]),t._v(" "),e("div",{staticClass:"contact"},[e("div",{staticClass:"address"},[t._v("\n        Des Moines, Iowa"),e("br"),t._v(" "),e("a",{attrs:{href:"https://www.broox.com",title:"Derek Brooks"}},[t._v("www.broox.com")])]),t._v(" "),e("div",{staticClass:"info"},[e("a",{attrs:{href:"mailto:derek@broox.com",title:"E-mail Derek Brooks"}},[t._v("derek@broox.com")]),e("br"),t._v("\n        1-951-282-7669\n      ")])])])},function(){var t=this,e=t._self._c;return e("section",{staticClass:"skills"},[e("h2",[t._v("Skills")]),t._v(" "),e("dl",[e("dt",[t._v("Development:")]),t._v(" "),e("dd",[t._v("Python, Javascript, Ruby on Rails, PHP, Objective-C, Java, C#, ActionScript, ASP, ASP.NET, PowerScript, SQL, VBScript")]),t._v(" "),e("dt",[t._v("Platforms:")]),t._v(" "),e("dd",[t._v("MacOS, Linux, Windows")]),t._v(" "),e("dt",[t._v("Databases:")]),t._v(" "),e("dd",[t._v("MySQL, Mongo, Oracle, Sybase")]),t._v(" "),e("dt",[t._v("Markup:")]),t._v(" "),e("dd",[t._v("HTML, XML, CSS")])])])},function(){var t=this,e=t._self._c;return e("section",{staticClass:"education"},[e("h2",[t._v("Education")]),t._v(" "),e("p",[t._v("\n      Bachelor of Arts, "),e("strong",[t._v("Computer Science")]),e("br"),t._v("\n      Cornell College, Mount Vernon, Iowa"),e("br"),t._v("\n      May 2003\n    ")])])}],!1,null,"6ada2f31",null);e.default=component.exports;installComponents(component,{Job:o(396).default})}}]);