(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{400:function(t,e,n){"use strict";n.r(e);n(176),n(49);var r={data:function(){return{companies:[]}},methods:{sortCompanies:function(){var t=this.$config.workedAt.meta.sort((function(a,b){var t=b.positions[b.positions.length-1].startAt,e=a.positions[a.positions.length-1].startAt;return new Date(t)-new Date(e)}));this.companies=t},getDateFormat:function(t){var e=this.$moment();return null!=t&&(e=this.$moment(t,"DD-MM-YYYY")),e},showStringDiffTotal:function(t){var a=this.getDateFormat(t[t.length-1].endAt),b=this.getDateFormat(t[0].startAt),e=a.diff(b,"year");b.add(e,"years");var n=a.diff(b,"months");return b.add(n,"months"),0==e?"".concat(n," ").concat(this.$t("monthsShort")):0==n?"".concat(e," ").concat(this.$t("yearsShort")):"".concat(e," ").concat(this.$t("yearsShort")," ").concat(n," ").concat(this.$t("monthsShort"))},showStringDiff:function(t){var a=this.getDateFormat(t.endAt),b=this.getDateFormat(t.startAt),e=a.diff(b,"year");b.add(e,"years");var n=a.diff(b,"months");return b.add(n,"months"),0==e?"".concat(n," ").concat(this.$t("monthsShort")):0==n?"".concat(e," ").concat(this.$t("yearsShort")):"".concat(e," ").concat(this.$t("yearsShort")," ").concat(n," ").concat(this.$t("monthsShort")," ")}},created:function(){this.sortCompanies()}},o=n(7),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"max-w-7xl mx-auto border-l border-r border-dashed border-gray-700 pt-4 pb-6 px-4"},[n("div",{staticClass:"max-w-prose text-center mx-auto pb-4"},[n("p",{staticClass:"text-xs leading-6 text-indigo-600 font-semibold tracking-wide lowercase"},[t._v(t._s(t.$t("workedAt.subtext")))]),t._v(" "),n("a",{staticClass:"mt-2 text-3xl hover:text-hot-pink leading-8 font-extrabold tracking-tight text-gray-500",attrs:{href:"https://linkedin.com/in/",target:"_blank",rel:"noreferrer"}},[t._v(t._s(t.$t("workedAt.header")))])]),t._v(" "),n("div",{staticClass:"grid grid-cols-1 gap-4 sm:grid-cols-2"},t._l(t.companies,(function(e,r){return n("div",{key:"rec-"+r,staticClass:"relative h-full bg-gray-900 rounded-lg shadow-lg text-base w-full"},[n("blockquote",{staticClass:"relative"},[n("div",{staticClass:"rounded-t-lg px-5 py-5 sm:px-8 sm:py-8y"},[e.profession?t._e():n("div",{staticClass:"relative"},[t._m(0,!0)]),t._v(" "),n("div",{staticClass:"flex flex-row"},[n("a",{attrs:{href:e.url,target:"_blank",rel:"noreferrer"}},[n("cite",{staticClass:"flex items-center rounded-b-lg not-italic"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.src,expression:"company.src"}],staticClass:"flex-shrink-0 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mr-4"},[n("img",{staticClass:" h-8",attrs:{src:e.src,alt:"Varun"}})]),t._v(" "),n("span",{staticClass:"text-gray-400 font-semibold py-2"},[n("strong",{directives:[{name:"show",rawName:"v-show",value:!e.src,expression:"!company.src"}],staticClass:"text-gray-200 font-semibold"},[t._v(t._s(e.name))]),t._v("\n                    "+t._s(t.getDateFormat(e.positions[e.positions.length-1].startAt).format("MMM YYYY"))+" - "+t._s(t.showStringDiffTotal(e.positions))+"\n                  ")])])])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.description,expression:"company.description"}],staticClass:"relative text-sm text-gray-300 font-medium mt-4"},[n("svg",{staticClass:"absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-800",attrs:{fill:"currentColor",viewBox:"0 0 32 32"}},[n("path",{attrs:{d:"M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"}})]),t._v(" "),n("p",{staticClass:"relative"},[t._v("\n                "+t._s(t.$t("descriptions."+e.description))+"\n              ")])]),t._v(" "),n("div",{staticClass:"relative text-sm text-gray-300 font-medium mt-4"},[t._l(e.positions,(function(e,r){return[n("div",{staticClass:"content my-3"},[n("div",{staticClass:"text-white font-bold"},[t._v("\n                    "+t._s(e.title)+"\n                  ")]),t._v(" "),n("div",{staticClass:"text-white  text-xs"},[t._v("\n                    "+t._s(t.$t("workTypes."+e.type))+"\n                  ")]),t._v(" "),n("div",{staticClass:"text-gray-200 "},[t._v("\n                    "+t._s(t.getDateFormat(e.startAt).format("MMMM YYYY"))+" -\n                    "),[null==e.endAt?n("span",[t._v("\n                                "+t._s(t.$t("present"))+"\n                              ")]):n("span",[t._v("\n                                "+t._s(t.getDateFormat(e.endAt).format("MMMM YYYY"))+"\n                              ")])],t._v("\n                    |\n                    "),n("span",[t._v("\n                              "+t._s(t.showStringDiff(e))+"\n                            ")])],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.description,expression:"position.description"}],staticClass:"text-sm text-gray-300 font-medium mt-2"},[t._v("\n                    "+t._s(t.$t("descriptions."+e.description))+"\n                  ")])])]}))],2)]),t._v(" "),e.profession?t._e():n("div",{staticClass:"flex justify-end m-3"},[n("span",{staticClass:"inline-flex items-center justify-end px-2 py-1 mr-2 text-xs font-bold leading-none text-red-200 bg-red-800 rounded-full show md:hidden"},[t._v("non prof")])])])])})),0)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"absolute top-0 right-0"},[n("span",{staticClass:"inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-200 bg-red-800 rounded-full hidden md:block"},[t._v("non prof")])])}],!1,null,"86a99e1e",null);e.default=component.exports}}]);