(window.webpackJsonp=window.webpackJsonp||[]).push([[21,6,17],{374:function(t,e,r){"use strict";r.r(e);r(23);var n={methods:{onImageLoadError:function(){this.imageLoadError=!0}},computed:{imageURL:function(){var t="https://ui-avatars.com/api/?uppercase=false&background=212324&color=4f46e5&rounded=true&name=".concat(this.name);return!this.photoURL||this.imageLoadError?t:this.photoURL}},data:function(){return{imageLoadError:!1}},props:{name:{type:String},photoURL:{type:String,required:!1}}},o=r(9),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{attrs:{src:t.imageURL,alt:"user photo"},on:{error:t.onImageLoadError}})}),[],!1,null,null,null);e.default=component.exports},375:function(t,e,r){var n=r(13);t.exports=function(t){return n(Set.prototype.values,t)}},382:function(t,e,r){"use strict";r.r(e);var n={props:{post:{type:Object}}},o=r(9),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nuxt-link",{staticClass:"flex transition duration-700 ease-in-out transform hover:translate-y-0.5 hover:scale-105 flex-col rounded-xl shadow-lg overflow-hidden",attrs:{to:t.localePath("/projects/"+t.post.slug)}},[(t.post.image,t._e()),t._v(" "),r("div",{staticClass:"flex-1 bg-gray-900 p-5 flex flex-col justify-between"},[r("div",{staticClass:"flex-1"},[r("p",{staticClass:"text-xs font-medium text-hot-pink hover:text-hot-pink"},[t._l(t.post.category,(function(e,n){return[r("span",{key:e.name,staticClass:"hover:text-pink-600"},[t._v("\n              "+t._s(e.name)),n<t.post.category.length-1?r("span",[t._v(",")]):t._e()])]}))],2),t._v(" "),r("div",[r("h3",{staticClass:"mt-0.5 text-md leading-7 font-semibold text-gray-200"},[t._v("\n            "+t._s(t.post.title)+"\n          ")]),t._v(" "),r("p",{staticClass:"mt-2 text-xs text-gray-400"},[t._v("\n            "+t._s(t.post.description)+"\n          ")])])]),t._v(" "),r("div",{staticClass:"mt-2 flex items-center"},[r("div",{staticClass:"flex-shrink-0"},[r("a",{attrs:{target:"_blank",rel:"noreferrer",href:"https://twitter.com/"+t.post.author.twitter}},[r("UserAvatar",{staticClass:"h-9 w-9 rounded-full",attrs:{name:t.post.author.name,"photo-u-r-l":t.post.author.image}})],1)]),t._v(" "),r("div",{staticClass:"ml-3"},[r("p",{staticClass:"text-xs font-medium text-gray-200"},[r("a",{staticClass:"hover:text-indigo-600",attrs:{target:"_blank",rel:"noreferrer",href:"https://twitter.com/"+t.post.author.twitter}},[t._v("\n              "+t._s(t.post.author.name)+"\n            ")])]),t._v(" "),r("div",{staticClass:"flex text-xs text-gray-300"},[r("time",{attrs:{datetime:t.post.createdAt}},[t._v("\n              "+t._s(new Date(t.post.createdAt).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}))+"\n            ")]),t._v(" "),r("span",{staticClass:"mx-1"},[t._v("\n              ·\n            ")]),t._v(" "),r("span",[t._v("\n              "+t._s(t.post.readingTime)+"\n            ")])])])])])])}),[],!1,null,"683c6cf7",null);e.default=component.exports;installComponents(component,{UserAvatar:r(374).default})},388:function(t,e,r){"use strict";r(253)("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r(254))},389:function(t,e,r){"use strict";r(4)({target:"Set",proto:!0,real:!0,forced:r(14)},{addAll:r(390)})},390:function(t,e,r){"use strict";var n=r(13),o=r(34),c=r(8);t.exports=function(){for(var t=c(this),e=o(t.add),r=0,l=arguments.length;r<l;r++)n(e,t,arguments[r]);return t}},391:function(t,e,r){"use strict";r(4)({target:"Set",proto:!0,real:!0,forced:r(14)},{deleteAll:r(255)})},392:function(t,e,r){"use strict";var n=r(14),o=r(4),c=r(35),l=r(13),f=r(34),d=r(8),v=r(68),h=r(30);o({target:"Set",proto:!0,real:!0,forced:n},{difference:function(t){var e=d(this),r=new(v(e,c("Set")))(e),n=f(r.delete);return h(t,(function(t){l(n,r,t)})),r}})},393:function(t,e,r){"use strict";var n=r(4),o=r(14),c=r(8),l=r(31),f=r(375),d=r(30);n({target:"Set",proto:!0,real:!0,forced:o},{every:function(t){var e=c(this),r=f(e),n=l(t,arguments.length>1?arguments[1]:void 0);return!d(r,(function(t,r){if(!n(t,t,e))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},394:function(t,e,r){"use strict";var n=r(14),o=r(4),c=r(35),l=r(13),f=r(34),d=r(8),v=r(31),h=r(68),m=r(375),x=r(30);o({target:"Set",proto:!0,real:!0,forced:n},{filter:function(t){var e=d(this),r=m(e),n=v(t,arguments.length>1?arguments[1]:void 0),o=new(h(e,c("Set"))),_=f(o.add);return x(r,(function(t){n(t,t,e)&&l(_,o,t)}),{IS_ITERATOR:!0}),o}})},395:function(t,e,r){"use strict";var n=r(4),o=r(14),c=r(8),l=r(31),f=r(375),d=r(30);n({target:"Set",proto:!0,real:!0,forced:o},{find:function(t){var e=c(this),r=f(e),n=l(t,arguments.length>1?arguments[1]:void 0);return d(r,(function(t,r){if(n(t,t,e))return r(t)}),{IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},396:function(t,e,r){"use strict";var n=r(14),o=r(4),c=r(35),l=r(13),f=r(34),d=r(8),v=r(68),h=r(30);o({target:"Set",proto:!0,real:!0,forced:n},{intersection:function(t){var e=d(this),r=new(v(e,c("Set"))),n=f(e.has),o=f(r.add);return h(t,(function(t){l(n,e,t)&&l(o,r,t)})),r}})},397:function(t,e,r){"use strict";var n=r(14),o=r(4),c=r(13),l=r(34),f=r(8),d=r(30);o({target:"Set",proto:!0,real:!0,forced:n},{isDisjointFrom:function(t){var e=f(this),r=l(e.has);return!d(t,(function(t,n){if(!0===c(r,e,t))return n()}),{INTERRUPTED:!0}).stopped}})},398:function(t,e,r){"use strict";var n=r(14),o=r(4),c=r(35),l=r(13),f=r(34),d=r(12),v=r(8),h=r(127),m=r(30);o({target:"Set",proto:!0,real:!0,forced:n},{isSubsetOf:function(t){var e=h(this),r=v(t),n=r.has;return d(n)||(r=new(c("Set"))(t),n=f(r.has)),!m(e,(function(t,e){if(!1===l(n,r,t))return e()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},399:function(t,e,r){"use strict";var n=r(14),o=r(4),c=r(13),l=r(34),f=r(8),d=r(30);o({target:"Set",proto:!0,real:!0,forced:n},{isSupersetOf:function(t){var e=f(this),r=l(e.has);return!d(t,(function(t,n){if(!1===c(r,e,t))return n()}),{INTERRUPTED:!0}).stopped}})},400:function(t,e,r){"use strict";var n=r(14),o=r(4),c=r(5),l=r(8),f=r(21),d=r(375),v=r(30),h=c([].join),m=[].push;o({target:"Set",proto:!0,real:!0,forced:n},{join:function(t){var e=l(this),r=d(e),n=void 0===t?",":f(t),o=[];return v(r,m,{that:o,IS_ITERATOR:!0}),h(o,n)}})},401:function(t,e,r){"use strict";var n=r(14),o=r(4),c=r(35),l=r(31),f=r(13),d=r(34),v=r(8),h=r(68),m=r(375),x=r(30);o({target:"Set",proto:!0,real:!0,forced:n},{map:function(t){var e=v(this),r=m(e),n=l(t,arguments.length>1?arguments[1]:void 0),o=new(h(e,c("Set"))),_=d(o.add);return x(r,(function(t){f(_,o,n(t,t,e))}),{IS_ITERATOR:!0}),o}})},402:function(t,e,r){"use strict";var n=r(4),o=r(1),c=r(14),l=r(34),f=r(8),d=r(375),v=r(30),h=o.TypeError;n({target:"Set",proto:!0,real:!0,forced:c},{reduce:function(t){var e=f(this),r=d(e),n=arguments.length<2,o=n?void 0:arguments[1];if(l(t),v(r,(function(r){n?(n=!1,o=r):o=t(o,r,r,e)}),{IS_ITERATOR:!0}),n)throw h("Reduce of empty set with no initial value");return o}})},403:function(t,e,r){"use strict";var n=r(4),o=r(14),c=r(8),l=r(31),f=r(375),d=r(30);n({target:"Set",proto:!0,real:!0,forced:o},{some:function(t){var e=c(this),r=f(e),n=l(t,arguments.length>1?arguments[1]:void 0);return d(r,(function(t,r){if(n(t,t,e))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},404:function(t,e,r){"use strict";var n=r(14),o=r(4),c=r(35),l=r(13),f=r(34),d=r(8),v=r(68),h=r(30);o({target:"Set",proto:!0,real:!0,forced:n},{symmetricDifference:function(t){var e=d(this),r=new(v(e,c("Set")))(e),n=f(r.delete),o=f(r.add);return h(t,(function(t){l(n,r,t)||l(o,r,t)})),r}})},405:function(t,e,r){"use strict";var n=r(4),o=r(14),c=r(35),l=r(34),f=r(8),d=r(68),v=r(30);n({target:"Set",proto:!0,real:!0,forced:o},{union:function(t){var e=f(this),r=new(d(e,c("Set")))(e);return v(t,l(r.add),{that:r}),r}})},497:function(t,e,r){"use strict";r.r(e);var n=r(3),o=r(70),c=(r(18),r(52),r(6),r(388),r(16),r(389),r(391),r(392),r(393),r(394),r(395),r(396),r(397),r(398),r(399),r(400),r(401),r(402),r(403),r(404),r(405),r(17),r(50),r(38),r(23),"all"),l={computed:{categories:function(){return[c].concat(Object(o.a)(new Set(this.posts.map((function(t){return t.category})))))},postsByCategories:function(){var t=this;return this.currentCategory===c?this.posts:this.posts.filter((function(e){return e.category===t.currentCategory}))}},data:function(){return{currentCategory:c,ALL:c}},head:function(){return{title:"blog -- ".concat(this.$config.name)}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n="fetchAllPosts",console.time(n),e.next=5,r("posts").without(["body","toc","dir","extension","path","tags"]).sortBy("createdAt","desc").fetch();case 5:return o=e.sent,console.timeEnd(n),e.abrupt("return",{posts:o});case 8:case"end":return e.stop()}}),e)})))()}},f=r(9),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative max-w-7xl border-r border-l border-dashed border-gray-700 py-6 mx-auto"},[r("div",{staticClass:"text-center",attrs:{"data-aos":"fade-up"}},[r("h2",{staticClass:"text-2xl tracking-tight font-extrabold text-gray-200"},[t._v("\n      "+t._s(t.$t("blog.header"))+"\n    ")]),t._v(" "),r("p",{staticClass:"mt-2 px-2 max-w-2xl mx-auto text-sm leading-7 text-gray-400"},[t._v("\n      "+t._s(t.$t("blog.subtext"))+"\n    ")])]),t._v(" "),r("div",{staticClass:"select-none px-4 items-center justify-center sm:justify-start overflow-hidden flex pt-4",attrs:{"data-aos":"zoom-in"}},[r("nav",{staticClass:"flex flex-wrap items-center justify-center flex-row space-x-2 sm:space-x-4",attrs:{"aria-label":"Tabs"}},t._l(t.categories,(function(e){return r("button",{key:e,staticClass:"flex text-gray-300 focus:outline-none focus:ring-transparent focus:ring-offset-transparent hover:text-hot-pink px-3 py-2 font-medium text-sm rounded-xl",class:{"bg-gray-900 text-gray-300":e===t.currentCategory},on:{click:function(r){t.currentCategory=e}}},[t._v("\n        "+t._s(e)+"\n      ")])})),0)]),t._v(" "),r("div",{staticClass:"mt-5 gap-4 mx-4 grid max-w-none lg:grid-cols-3",attrs:{"data-aos":"zoom-in"}},t._l(t.postsByCategories,(function(t){return r("BlogCard",{key:t.slug,attrs:{post:t}})})),1)])}),[],!1,null,"27b96d73",null);e.default=component.exports;installComponents(component,{BlogCard:r(382).default})}}]);