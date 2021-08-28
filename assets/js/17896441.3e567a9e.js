"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[918],{4721:function(e,t,a){a.r(t),a.d(t,{default:function(){return J}});var n=a(7294),l=a(6010),r=a(907),i=a(3783),s=a(6742),o=a(4973);var c=function(e){var t=e.metadata;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t.previous&&n.createElement(s.Z,{className:"pagination-nav__link",to:t.previous.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&n.createElement(s.Z,{className:"pagination-nav__link",to:t.next.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},d=a(2263),m=a(1773);var u={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=u[e.versionMetadata.banner];return n.createElement(t,e)}function p(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(s.Z,{to:a,onClick:l},n.createElement(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function f(e){var t,a=e.versionMetadata,l=(0,d.Z)().siteConfig.title,i=(0,r.gA)({failfast:!0}).pluginId,s=(0,m.J)(i).savePreferredVersionName,o=(0,r.Jo)(i),c=o.latestDocSuggestion,u=o.latestVersionSuggestion,f=null!=c?c:(t=u).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:l,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(p,{versionLabel:u.label,to:f.path,onClick:function(){return s(u.name)}})))}var E=function(e){var t=e.versionMetadata;return"none"===t.banner?n.createElement(n.Fragment,null):n.createElement(f,{versionMetadata:t})},h=a(1217);function g(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(o.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function b(e){var t=e.lastUpdatedBy;return n.createElement(o.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function _(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement(n.Fragment,null,n.createElement(o.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(g,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(b,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var N=a(7462),U=a(3366),L="iconEdit_2_ui",k=["className"],Z=function(e){var t=e.className,a=(0,U.Z)(e,k);return n.createElement("svg",(0,N.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(L,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function T(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},n.createElement(Z,null),n.createElement(o.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var y=a(7211),C="tags_2ga9",w="tag_11ep";function A(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(o.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(C,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:w},n.createElement(y.Z,{name:t,permalink:a}))}))))}var B="lastUpdated_13-_";function M(e){return n.createElement("div",{className:"row margin-bottom--sm"},n.createElement("div",{className:"col"},n.createElement(A,e)))}function O(e){var t=e.editUrl,a=e.lastUpdatedAt,r=e.lastUpdatedBy,i=e.formattedLastUpdatedAt;return n.createElement("div",{className:"row"},n.createElement("div",{className:"col"},t&&n.createElement(T,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",B)},(a||r)&&n.createElement(_,{lastUpdatedAt:a,formattedLastUpdatedAt:i,lastUpdatedBy:r})))}function x(e){var t=e.content.metadata,a=t.editUrl,l=t.lastUpdatedAt,r=t.formattedLastUpdatedAt,i=t.lastUpdatedBy,s=t.tags,o=s.length>0,c=!!(a||l||i);return o||c?n.createElement("footer",{className:"docusaurus-mt-lg"},o&&n.createElement(M,{tags:s}),c&&n.createElement(O,{editUrl:a,lastUpdatedAt:l,lastUpdatedBy:i,formattedLastUpdatedAt:r})):n.createElement(n.Fragment,null)}var S=a(571),I="tocCollapsible_1PrD",F="tocCollapsibleButton_2O1e",V="tocCollapsibleContent_2Ydz",D="tocCollapsibleExpanded_3GYr";function z(e){var t,a=e.toc,r=e.className,i=(0,m.uR)({initialState:!0}),s=i.collapsed,c=i.toggleCollapsed;return n.createElement("div",{className:(0,l.Z)(I,(t={},t[D]=!s,t),r)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",F),onClick:c},n.createElement(o.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(m.zF,{lazy:!0,className:V,collapsed:s},n.createElement(S.r,{toc:a})))}var R=a(6159),H="docItemContainer_33ec",q="docItemCol_3FnS",P="tocMobile_3Hoh";function J(e){var t,a=e.content,s=e.versionMetadata,o=a.metadata,d=a.frontMatter,m=d.image,u=d.keywords,v=d.hide_title,p=d.hide_table_of_contents,f=o.description,g=o.title,b=(0,r.gA)({failfast:!0}).pluginId,_=(0,r.gB)(b).length>1,N=!v&&void 0===a.contentTitle,U=(0,i.Z)(),L=!p&&a.toc&&a.toc.length>0,k=L&&("desktop"===U||"ssr"===U);return n.createElement(n.Fragment,null,n.createElement(h.Z,{title:g,description:f,keywords:u,image:m}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",(t={},t[q]=!p,t))},n.createElement(E,{versionMetadata:s}),n.createElement("div",{className:H},n.createElement("article",null,_&&n.createElement("span",{className:"badge badge--secondary"},"Version: ",s.label),L&&n.createElement(z,{toc:a.toc,className:P}),n.createElement("div",{className:"markdown"},N&&n.createElement(R.N,null,g),n.createElement(a,null)),n.createElement(x,e)),n.createElement(c,{metadata:o}))),k&&n.createElement("div",{className:"col col--3"},n.createElement(S.Z,{toc:a.toc}))))}},571:function(e,t,a){a.d(t,{r:function(){return v},Z:function(){return p}});var n=a(7294),l=a(6010),r=a(1773);function i(e){var t=e.getBoundingClientRect();return t.top===t.bottom?i(e.parentNode):t}function s(e){var t,a=e.anchorTopOffset,n=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),l=n.find((function(e){return i(e).top>=a}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(l))?l:null!=(t=n[n.indexOf(l)-1])?t:null:n[n.length-1]}function o(){var e=(0,n.useRef)(0),t=(0,r.LU)().navbar.hideOnScroll;return(0,n.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var c=function(e){var t=(0,n.useRef)(void 0),a=o();(0,n.useEffect)((function(){var n=e.linkClassName,l=e.linkActiveClassName;function r(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),r=s({anchorTopOffset:a.current}),i=e.find((function(e){return r&&r.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){if(a){var n;t.current&&t.current!==e&&(null==(n=t.current)||n.classList.remove(l)),e.classList.add(l),t.current=e}else e.classList.remove(l)}(e,e===i)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),function(){document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,a])},d="tableOfContents_35-E",m="table-of-contents__link",u={linkClassName:m,linkActiveClassName:"table-of-contents__link--active"};function v(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:m,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(v,{isChild:!0,toc:e.children}))}))):null}var p=function(e){var t=e.toc;return c(u),n.createElement("div",{className:(0,l.Z)(d,"thin-scrollbar")},n.createElement(v,{toc:t}))}},7211:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),l=a(6010),r=a(6742),i="tag_1Okp",s="tagRegular_3MiF",o="tagWithCount_1HU1";var c=function(e){var t,a=e.permalink,c=e.name,d=e.count;return n.createElement(r.Z,{href:a,className:(0,l.Z)(i,(t={},t[s]=!d,t[o]=d,t))},c,d&&n.createElement("span",null,d))}}}]);