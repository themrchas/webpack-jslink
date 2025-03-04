(()=>{"use strict";var n={788:(n,r,t)=>{t.d(r,{A:()=>l});var e=t(601),o=t.n(e),i=t(314),a=t.n(i)()(o());a.push([n.id,':root {\n    --low: 255, 255, 255;\n    --low-selected: 25, 180, 25;\n    --normal: 225, 225, 0;\n    --normal-selected: 175, 145, 0;\n    --high: 250, 175, 0;\n    --high-selected: 225, 150, 0;\n    --table-color: #336699;\n    --blue-1-light: #CCD9E633;\n    --orange-1-light: #FFB39933;\n\n    --clear: transparent;\n    /* --white: #FFFFFF;\n    --black: #000000;\n    --grey-1: #E6E6E6;\n    --grey-2: #CCCCCC;\n    --grey-3: #B3B3B3;\n    --grey-4: #999999;\n    --grey-5: #808080;\n    --grey-6: #666666;\n    --grey-7: #4D4D4D;\n    --grey-8: #333333;\n    --blue-1: #CCD9E6;\n    --blue-2: #99B3CC;\n    --blue-3: #668DB3;\n    --blue-4: #336699;\n    --blue-5: #1A4D80;\n    --blue-6: #003366;\n    --blue-7: #00274D;\n    --blue-8: #001A33;\n    --orange-1: #FFB399;\n    --orange-2: #FF8D66;\n    --orange-3: #FF7A4D;\n    --orange-4: #FF6633;\n    --orange-5: #E66633;\n    --orange-6: #CC6633;\n    --orange-7: #994D27;\n    --orange-8: #66331A; */\n}\n\n.ms-fullscreenmode #contentRow {padding: 0;}\n.ms-fullscreenmode #contentBox {margin: 0;}\n.ms-fullscreenmode .ms-webpartzone-cell {padding: 0;}\n[id^="Hero-"] {\n    width: 100%;\n}\n\n/* Control Styles */\n.ms-csrlistview-controldiv {\n    align-items: center;\n    background: var(--grey-4);\n    border: 1px solid var(--grey-6);\n    border-bottom-color: var(--blue-6);\n    display: flex;\n    padding: .2em .2em 0;\n    position: relative;\n}\n:root .ms-csrlistview-controldiv,\n:root .ms-csrlistview-controldiv .ms-pivotControl-container {\n    padding-bottom: 0;\n}\n/* .ms-csrlistview-controldiv .ms-pivotControl-container {\n    flex: auto;\n} */\n.ms-csrlistview-controldiv .ms-InlineSearch-DivBaseline[id*="inplace"] {\n    justify-content: right;\n    flex: auto;\n    display: flex;\n    margin-top: 3px;\n    margin-bottom: 3px;\n}\n/* .ms-InlineSearch-DivBaseline-NoView {\n    margin-top: 3px;\n    margin-bottom: 3px;\n} */\n.ms-InlineSearch-Outline-Baseline {\n    background: var(--white);\n    border: 1px solid var(--grey-6);\n    float: none;\n    display: inline-block;\n}\n.ms-pivotControl-overflowSpan {\n    margin-left: 15px;\n}\n.ms-csrlistview-controldiv .ms-pivotControl-container > a {\n    background: var(--grey-2);\n    color: var(--grey-7);\n    padding: .5em 1em;\n    border: 1px solid var(--grey-6);\n    border-bottom: 0;\n    margin: 1px .2em 0 0;\n}\n.ms-csrlistview-controldiv .ms-pivotControl-container > a:not(.ms-pivotControl-surfacedOpt-selected):hover {\n    background: var(--grey-1);\n    border-color: var(--orange-4);\n}\n.ms-csrlistview-controldiv .ms-pivotControl-container > a.ms-pivotControl-surfacedOpt-selected {\n    background: var(--blue-4);\n    color: var(--white);\n    border-color: var(--blue-6);\n    border-bottom: 1px solid var(--blue-4);\n    margin-bottom: -1px;\n}\n[id^="scriptPaging"] {\n    background: var(--blue-4);\n}\n\n/*Admin tabs*/\n.ms-csrlistview-controldiv .ms-pivotControl-container > a.ms-pivotControl-surfacedOpt.nshq-admin {\n    background: var(--orange-2);\n}\n.ms-csrlistview-controldiv .ms-pivotControl-container > a.ms-pivotControl-surfacedOpt-selected.nshq-admin {\n    background: var(--orange-4);\n    border-color: var(--orange-6);\n    border-bottom-color: var(--orange-4);\n}\n.nshq-admin .ms-listviewtable:not(.ms-listviewgrid) > thead {\n    background: var(--orange-4);\n}\n.nshq-admin .ms-csrlistview-controldiv,\n.nshq-admin .ms-listviewtable:not(.ms-listviewgrid),\n.nshq-admin .ms-listviewtable:not(.ms-listviewgrid) > thead th {\n    border-color: var(--orange-6);\n}\n\n.ms-list-addnew {\n    background-color: var(--clear);\n    border: 1px solid var(--clear);\n    border-bottom: 0;\n    padding: 5px;\n}\n.ms-list-addnew .ms-core-form-heading:not(.ms-disabled) {\n    color: var(--orange-6);\n}\n.nshq-admin [id^="scriptPaging"] {\n    background: var(--orange-4);\n}\n\n/* Table Styles*/\n.ms-listviewtable:not(.ms-listviewgrid) {\n    border: 1px solid var(--blue-6);\n    min-width: 100%;\n}\n.ms-csrlistview-controldiv ~ .ms-listviewtable:not(.ms-listviewgrid) {\n    border-top: 0;\n}\n.ms-listviewtable:not(.ms-listviewgrid) > thead th.ms-vh-icon:last-child {\n    display: none;\n}\n.ms-listviewtable:not(.ms-listviewgrid) > thead {\n    background: var(--blue-4);\n}\n.ms-listviewtable:not(.ms-listviewgrid) > thead th {\n    border-bottom: 1px solid var(--blue-6);\n}\n.ms-listviewtable:not(.ms-listviewgrid) > thead th .ms-cui-img-16by16 {\n    filter: contrast(400%) invert(100%);\n}\n.ms-listviewtable:not(.ms-listviewgrid) .ms-dragDropAttract {\n    border: 1px solid var(--blue-6);\n    border-top: 0;\n    background: var(--grey-4);\n}\n.ms-listviewtable .ms-dragDropAttract .ms-dragDropAttract-subtle {\n    color: var(--black);\n}\n.ms-listviewtable tr {\n    line-height: 1.4em;\n}\n.ms-listviewtable a.ms-headerSortTitleLink,\n.ms-listviewtable .ms-vh-div,\n.ms-InlineSearch-SearchStatus,\n.ms-listviewgrid th > *:not([role="menu"]) * {\n    color: var(--white) !important;\n}\n.ms-InlineSearch-SearchStatus a {\n    color: var(--grey-4);\n}\n.ms-listviewtable :where(.ms-selectall-icon, .ms-headerSortArrowLink, .ms-sortarrowup-icon, .ms-sortarrowdown-icon, img[alt="Attachments"]),\n.ms-listviewgrid :where(.ms-chkmark-marktaskcomplete, .ms-addcolumn-icon) {\n    filter: brightness(3);\n}\ntd.ms-vb-imgFirstCell.ms-vb-imgFirstCell.ms-vb-imgFirstCell {\n    border-width: 1px 10px 1px 1px;\n}\n.ms-listviewtable > tbody > tr > td:not(:first-child) {\n    border-left: 0;\n}\n.ms-listviewtable > tbody > tr > td:not(:last-child) {\n    border-right: 0;\n}\n.ms-bottompaging {\n    width: 100%;\n}\n.ms-bottompaging .ms-vb.ms-bottompagingline {\n    color: var(--white);\n    border: 1px solid var(--blue-6);\n    border-top: 0;\n    padding: 5px;\n}\n.ms-list-emptyText-compact {\n    color: var(--white);\n}\n.ms-gb {\n    border-color: var(--grey-4);\n}\n.ms-gb2 {\n    border-top: 1px solid var(--grey-2);\n    border-bottom: 1px solid var(--grey-2);\n    background: var(--grey-1);\n    color: var(--grey-6)\n}\ntbody[groupstring] ~ tbody[groupstring] .ms-gb {\n    border-top-width: 1px;\n    border-top-style: solid;\n}\n[id^="tbod"][style^="display"] + tbody[groupstring] .ms-gb,\n[id^="tbod"][style^="display"] + tbody[groupstring] .ms-gb2,\ntbody[groupstring] + tbody[groupstring] .ms-gb2 {\n    border-top-width: 0\n}\n[id^="titl"]:not([style^="display"]) + [id^="tbod"][style^="display"] + tbody[groupstring] .ms-gb {\n    border-top-width: 1px;\n}\n.ms-listviewtable > tbody[id^="aggr"] > tr {\n    background-color: var(--grey-3);\n}\n.ms-listviewtable > tbody[id^="aggr"] td {\n    color: white;\n    text-align: right;\n    border-bottom: 1px solid var(--grey-4);\n}\n\n/* alternate row color */\n.ms-listviewtable > tbody:not([id]) > tr:nth-child(odd),\n.ms-listviewtable > tbody[id^="tbod"] > tr:nth-child(odd) {\n    background-color: var(--blue-1-light);\n}\n.ms-listviewtable > tbody[groupstring] > tr {\n    background-color: var(--grey-2);\n}\n.ms-listviewtable > tbody[id^="titl"][style] > tr {\n    background-color: var(--grey-1);\n}\n\n.ms-listviewtable > tbody:not([groupstring])[id$="_page"] > tr {\n    background-color: var(--grey-1);\n}\n.ms-listviewtable > tbody:not([groupstring])[id$="_page"] > tr > td {\n    border-top: 1px solid var(--grey-3);\n}\n\n/* unselected row color */\n.ms-listviewtable > tbody > tr[data-priority="Low"] > td {\n    background-color: rgba(var(--low), 0.4);\n}\n.ms-listviewtable > tbody > tr[data-priority="Medium"] > td {\n    background-color: rgba(var(--normal), 0.4);\n}\n.ms-listviewtable > tbody > tr[data-priority="High"] > td {\n    background-color: rgba(var(--high), 0.4);\n}\n\n/* unselected row hover color */\n.ms-listviewtable > tbody > tr[data-priority="Low"]:hover > td {\n    background-color: rgba(var(--low), .6);\n    border-color: rgba(var(--low), .8);\n}\n.ms-listviewtable > tbody > tr[data-priority="Medium"]:hover > td {\n    background-color: rgba(var(--normal), .6);\n    border-color: rgba(var(--normal), .8);\n}\n.ms-listviewtable > tbody > tr[data-priority="High"]:hover > td {\n    background-color: rgba(var(--high), .6);\n    border-color: rgba(var(--high), .8);\n}\n\n/* selected row color */\n.ms-listviewtable > tbody > tr[data-priority="Low"].s4-itm-selected > td {\n    background-color: rgba(var(--low), .8);\n    border-color: rgba(var(--low-selected), .8);\n}\n.ms-listviewtable > tbody > tr[data-priority="Low"].s4-itm-selected > td.ms-vb-imgFirstCell.ms-vb-imgFirstCell {\n    background-color: rgba(var(--low-selected), .8);\n    border-color: rgba(var(--low-selected), .8);\n}\n.ms-listviewtable > tbody > tr[data-priority="Medium"].s4-itm-selected > td {\n    background-color: rgba(var(--normal), .8);\n    border-color: rgba(var(--normal-selected), .8);\n}\n.ms-listviewtable > tbody > tr[data-priority="Medium"].s4-itm-selected > td.ms-vb-imgFirstCell.ms-vb-imgFirstCell {\n    background-color: rgba(var(--normal-selected), .8);\n    border-color: rgba(var(--normal-selected), .8);\n}\n.ms-listviewtable > tbody > tr[data-priority="High"].s4-itm-selected > td {\n    background-color: rgba(var(--high), .8);\n    border-color: rgba(var(--high-selected), .8);\n}\n.ms-listviewtable > tbody > tr[data-priority="High"].s4-itm-selected > td.ms-vb-imgFirstCell.ms-vb-imgFirstCell {\n    background-color: rgba(var(--high-selected), .8);\n    border-color: rgba(var(--high-selected), .8);\n}\n\n/* selected row hover color */\n.ms-listviewtable > tbody > tr[data-priority="Low"].s4-itm-selected:hover > td {\n    background-color: rgba(var(--low), 1);\n    border-color: rgba(var(--low-selected), 1);\n}\n.ms-listviewtable > tbody > tr[data-priority="Low"].s4-itm-selected:hover > td.ms-vb-imgFirstCell.ms-vb-imgFirstCell {\n    background-color: rgba(var(--low-selected), 1);\n    border-color: rgba(var(--low-selected), 1);\n}\n.ms-listviewtable > tbody > tr[data-priority="Medium"].s4-itm-selected:hover > td {\n    background-color: rgba(var(--normal), 1);\n    border-color: rgba(var(--normal-selected), 1);\n}\n.ms-listviewtable:not(.ms-listviewgrid) > tbody > tr[data-priority="Medium"].s4-itm-selected:hover > td.ms-vb-imgFirstCell.ms-vb-imgFirstCell {\n    background-color: rgba(var(--normal-selected), 1);\n    border-color: rgba(var(--normal-selected), 1);\n}\n.ms-listviewtable > tbody > tr[data-priority="High"].s4-itm-selected:hover > td {\n    background-color: rgba(var(--high), 1);\n    border-color: rgba(var(--high-selected), 1);\n}\n.ms-listviewtable > tbody > tr[data-priority="High"].s4-itm-selected:hover > td.ms-vb-imgFirstCell.ms-vb-imgFirstCell {\n    background-color: rgba(var(--high-selected), 1);\n    border-color: rgba(var(--high-selected), 1);\n}\n\n.ms-listviewtable.ms-listviewgrid > tbody:not([id]) > tr.ms-viewheadertr {\n    background: var(--orange-4);\n}\n.ms-listviewtable.ms-listviewgrid > tbody:not([id]) > tr:not(.ms-viewheadertr):nth-child(odd) {\n    background-color: var(--orange-1-light);\n}\n.ms-listviewtable .ms-lstItmLinkAnchor {\n    margin: 0;\n}\n.ms-listviewtable .ms-newdocument-iconouter {\n    top: 0;\n    height: 14px;\n    width: 14px;\n}\n\n\n.ms-listviewtable:not(.ms-listviewgrid) > tbody:not([id]) > tr:not([id]) > td {padding: 0;}\n\n/* Spinners in List */\n.ms-listviewtable .lds-spinner {\n    scale: .25;\n    width: 20px;\n    height: 20px;\n    transform-origin: top;\n}\n\n/* Gantt Chart/timeline */\n[istimelineparent="1"] {\n    display: block;\n    padding: 5px 0;\n    position: relative;\n    z-index: 1;\n}\n.tabsContainer [istimelineparent="1"] {\n    background-color: var(--blue-4);\n    border: 1px solid var(--blue-6);\n    border-top: 0px;\n    margin-bottom: 0 !important;\n}\n[istimelineparent="1"] > div {\n    width: unset !important;\n}\n[istimelineparent="1"] .ms-tl-mainArea {\n    left: 5px !important;\n    right: 5px;\n    width: unset !important;\n}\n/* [istimelineparent="1"] .ms-tl-mainArea .ms-tl-today {\n    border-color: var(--orange-6) !important\n} */\n.tabsContainer [istimelineparent="1"] .ms-tl-timescale * {\n    color: var(--white) !important;\n}\n/* [istimelineparent="1"] .ms-tl-todayLabel, */\n[istimelineparent="1"] .ms-tl-milestoneLabel,\n[istimelineparent="1"] .ms-tl-calloutLabel {\n    background-color: var(--orange-4) !important;\n    border: 1px solid var(--orange-6) !important;\n}\n/* [istimelineparent="1"] .ms-tl-todayLabel, */\n[istimelineparent="1"] .ms-tl-milestoneLabel,\n[istimelineparent="1"] .ms-tl-milestoneLabel *,\n[istimelineparent="1"] .ms-tl-calloutLabel * {\n    color: var(--white) !important;\n}\n[istimelineparent="1"] .ms-tl-bar[style*="rgb(100, 131, 205)"] {\n    background-color: var(--blue-6) !important;\n}\n[istimelineparent="1"] .ms-tl-bar[style*="rgb(100, 131, 205)"] * {\n    color: var(--white) !important;\n}\n\n[id$="_ListViewWebPartJSGrid"] > label + div {\n    border-top: 0 !important;\n    border-color: var(--blue-6) !important;\n}\n\n#AsynchronousViewDefault_CalendarView {\n    border: 1px solid var(--blue-6);\n    border-top: 0;\n}\ntable.ms-acal-month {\n    border-top: 0;\n}\n.ms-acal-header {\n    background-color: var(--blue-4);\n    border-bottom: 1px solid var(--blue-6);\n    margin: 0;\n    padding: 10px;\n}\n.ms-acal-display {\n    color: var(--white);\n}\n.ms-acal-rootdiv {\n    margin: 0;\n}\n/* Checkbox control styles*/\n.fa.checkbox {\n    border: 1px solid var(--grey-4);\n    border-radius: 3px;\n    padding: 3px;\n    width: 13px;\n    cursor: pointer;\n}\n.fa.checkbox:hover {\n    border-color: var(--orange-6);\n    background: var(--grey-1);\n}\n.fa.fa-check {\n    color: #07ac07;\n}\n.fa.fa-times {\n    color: rgb(182, 15, 15);\n    /* width: 1em; */ /* removed for PRF */\n    text-align: center;\n}\n.fa.checkbox.fa-check::before {\n    visibility: hidden;\n}\n.fa.checkbox.fa-check[data-value="1"]::before,\n.fa.checkbox.fa-check[data-value="Yes"]::before {\n    visibility: visible;\n}\n\n\n[id^="spgridcontainer_"][id$="_leftpane"] > div {\n    margin: 0px !important;\n}\n\n[id$="ListViewWebPartJSGrid"] rect[fill="#42AEB3"] {\n    fill: var(--blue-4) !important;\n    stroke: var(--blue-6) !important;\n}\n[id$="ListViewWebPartJSGrid_leftpane"] th,\n[id$="ListViewWebPartJSGrid_rightpane"] > div:first-child {\n    background-color: var(--blue-4) !important;\n}\n[id$="ListViewWebPartJSGrid_leftpane"] th *,\n[id$="ListViewWebPartJSGrid_rightpane"] > div:first-child * {\n    color: var(--white) !important;\n}\n\n.jsgrid-control-editbox {\n    background-color: white !important;\n}',""]);const l=a},314:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var t="",e=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),e&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=n(r),e&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(n,t,e,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(e)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var c=[].concat(n[d]);e&&a[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),r.push(c))}},r}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var r=[];function t(n){for(var t=-1,e=0;e<r.length;e++)if(r[e].identifier===n){t=e;break}return t}function e(n,e){for(var i={},a=[],l=0;l<n.length;l++){var s=n[l],d=e.base?s[0]+e.base:s[0],c=i[d]||0,b="".concat(d," ").concat(c);i[d]=c+1;var m=t(b),v={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)r[m].references++,r[m].updater(v);else{var g=o(v,e);e.byIndex=l,r.splice(l,0,{identifier:b,updater:g,references:1})}a.push(b)}return a}function o(n,r){var t=r.domAPI(r);return t.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;t.update(n=r)}else t.remove()}}n.exports=function(n,o){var i=e(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var l=t(i[a]);r[l].references--}for(var s=e(n,o),d=0;d<i.length;d++){var c=t(i[d]);0===r[c].references&&(r[c].updater(),r.splice(c,1))}i=s}}},659:n=>{var r={};n.exports=function(n,t){var e=function(n){if(void 0===r[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}r[n]=t}return r[n]}(n);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(t)}},540:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},56:(n,r,t)=>{n.exports=function(n){var r=t.nc;r&&n.setAttribute("nonce",r)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(t){!function(n,r,t){var e="";t.supports&&(e+="@supports (".concat(t.supports,") {")),t.media&&(e+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(e+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),e+=t.css,o&&(e+="}"),t.media&&(e+="}"),t.supports&&(e+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(e,n,r.options)}(r,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},113:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function t(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={id:e,exports:{}};return n[e](i,i.exports,t),i.exports}t.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return t.d(r,{a:r}),r},t.d=(n,r)=>{for(var e in r)t.o(r,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},t.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),t.nc=void 0;var e,o=t(72),i=t.n(o),a=t(825),l=t.n(a),s=t(659),d=t.n(s),c=t(56),b=t.n(c),m=t(540),v=t.n(m),g=t(113),p=t.n(g),u=t(788),h={};h.styleTagTransform=p(),h.setAttributes=b(),h.insert=d().bind(null,"head"),h.domAPI=l(),h.insertStyleElement=v(),i()(u.A,h),u.A&&u.A.locals&&u.A.locals,e={OnPostRender:n=>{console.log("executing OnPostRender in viewTabs.js");const r=n.view.replace(/[{}]/g,"").toLowerCase();n.viewTitle.startsWith("Ω")&&document.querySelector('[webpartid="'+r+'"]').classList.add("nshq-admin"),document.querySelectorAll('[class*="ms-pivotControl-surfacedOpt-selected"').forEach((n=>{n.innerHTML.startsWith("Ω")&&n.classList.add("nshq-admin")}))}},SPClientTemplates.TemplateManager.RegisterTemplateOverrides(e)})();