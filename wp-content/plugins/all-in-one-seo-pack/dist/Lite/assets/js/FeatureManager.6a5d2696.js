import{C as l}from"./WpTable.078239fd.js";import{n as r}from"./vueComponentNormalizer.58b0a173.js";import{e as c,a as u,m as d}from"./index.f16c040b.js";import{c as h}from"./news-sitemap.36087ff1.js";import{C as m,S as p}from"./index.c9bc1c73.js";import{C as _,S as g,a as f,b as v}from"./SitemapsPro.a311a6ea.js";import{C as y}from"./Index.28b23aca.js";import{G as $,a as b}from"./Row.89c6bb85.js";import{a as A,S as k}from"./ImageSeo.8572f954.js";import"./constants.71b051da.js";import"./isArrayLikeObject.5268a676.js";import"./default-i18n.0e73c33c.js";import"./attachments.0f69322e.js";import"./cleanForSlug.41bbbaec.js";import"./client.b661b356.js";import"./_commonjsHelpers.10c44588.js";import"./translations.3bc9d58c.js";import"./portal-vue.esm.272b3133.js";import"./params.bea1a08d.js";import"./Url.781a1d48.js";import"./Tooltip.a36a3967.js";const w={computed:{yourLicenseIsText(){let e=this.$t.__("You have not yet added a license key.",this.$td);return this.$aioseo.license.isExpired&&(e=this.$t.__("Your license has expired.",this.$td)),this.$aioseo.license.isDisabled&&(e=this.$t.__("Your license has been disabled.",this.$td)),this.$aioseo.license.isInvalid&&(e=this.$t.__("Your license key is invalid.",this.$td)),e}}};var S=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("svg",{staticClass:"aioseo-code",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z",fill:"currentColor"}})])},C=[];const x={},i={};var F=r(x,S,C,!1,L,null,null,null);function L(e){for(let s in i)this[s]=i[s]}const M=function(){return F.exports}();var N=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"aioseo-feature-manager"},[t("div",{staticClass:"aioseo-feature-manager-header"},[e.getAddons.filter(function(a){return a.canActivate===!0}).length>0?t("div",{staticClass:"buttons"},[t("div",{staticClass:"button-content"},[t("base-button",{attrs:{size:"medium",type:"blue",loading:e.loading.activateAll},on:{click:e.activateAllFeatures}},[e._v(e._s(e.strings.activateAllFeatures))]),e.isUnlicensed?e._e():t("base-button",{attrs:{size:"medium",type:"gray",loading:e.loading.deactivateAll},on:{click:e.deactivateAllFeatures}},[e._v(e._s(e.strings.deactivateAllFeatures))])],1)]):e._e(),t("div",{staticClass:"search"},[t("base-input",{attrs:{size:"medium",placeholder:e.strings.searchForFeatures,"prepend-icon":"search"},model:{value:e.search,callback:function(a){e.search=a},expression:"search"}})],1)]),t("div",{staticClass:"aioseo-feature-manager-addons"},[e.$isPro&&e.isUnlicensed?t("core-alert",{attrs:{type:"red"}},[t("strong",[e._v(e._s(e.yourLicenseIsText))]),e._v(" "+e._s(e.strings.aValidLicenseIsRequired)+" "),t("div",{staticClass:"buttons"},[t("base-button",{attrs:{type:"blue",size:"small",tag:"a",href:e.$aioseo.data.isNetworkAdmin?e.$aioseo.urls.aio.networkSettings:e.$aioseo.urls.aio.settings}},[e._v(" "+e._s(e.strings.enterLicenseKey)+" ")]),t("base-button",{attrs:{type:"green",size:"small",tag:"a",target:"_blank",href:e.$links.getUpsellUrl("feature-manager-upgrade","no-license-key","pricing")}},[e._v(" "+e._s(e.strings.purchaseLicense)+" ")])],1)]):e._e(),t("grid-row",e._l(e.getAddons,function(a,n){return t("grid-column",{key:n,attrs:{sm:"6",lg:"4"}},[t("core-feature-card",{ref:"addons",refInFor:!0,attrs:{"can-activate":a.canActivate,"can-manage":e.$allowed(a.capability),feature:a},scopedSlots:e._u([{key:"title",fn:function(){return[t(e.getIconComponent(a.icon),{tag:"component",attrs:{src:e.getIconSrc(a.icon,a.image)}}),e._v(" "+e._s(a.name)+" ")]},proxy:!0},{key:"description",fn:function(){return[t("div",{domProps:{innerHTML:e._s(e.getAddonDescription(a))}})]},proxy:!0}],null,!0)})],1)}),1)],1),e.isUnlicensed?t("cta",{staticClass:"feature-manager-upsell",attrs:{type:2,"button-text":e.strings.ctaButtonText,floating:!1,"cta-link":e.$links.utmUrl("feature-manager","main-cta"),"learn-more-link":e.$links.getUpsellUrl("feature-manager","main-cta","home"),"feature-list":[e.strings.videoNewsSitemaps,e.strings.imageSeoOptimization,e.strings.localBusinessSeo,e.strings.advancedWooCommerce,e.strings.customTaxonomies,e.strings.andMore]},scopedSlots:e._u([{key:"header-text",fn:function(){return[t("span",{staticClass:"large"},[e._v(e._s(e.strings.ctaHeaderText))])]},proxy:!0},{key:"description",fn:function(){return[e._v(" "+e._s(e.upgradeToday)+" ")]},proxy:!0},{key:"featured-image",fn:function(){return[t("img",{attrs:{alt:"Purchase AIOSEO Today!",src:e.$getAssetUrl(e.ctaImg)}})]},proxy:!0}],null,!1,1960250908)}):e._e(),e.showNetworkModal?t("core-modal",{attrs:{"no-header":""},scopedSlots:e._u([{key:"body",fn:function(){return[t("div",{staticClass:"aioseo-modal-body"},[t("button",{staticClass:"close",on:{click:function(a){return a.stopPropagation(),e.closeNetworkModal(!1)}}},[t("svg-close",{on:{click:function(a){return a.stopPropagation(),e.closeNetworkModal(!1)}}})],1),t("h3",[e._v(e._s(e.strings.areYouSureNetworkChange))]),t("div",{staticClass:"reset-description",domProps:{innerHTML:e._s(e.networkChangeMessage)}}),t("base-button",{attrs:{type:"blue",size:"medium"},on:{click:function(a){return e.closeNetworkModal(!0)}}},[e._v(" "+e._s(e.strings.yesProcessNetworkChange)+" ")]),t("base-button",{attrs:{type:"gray",size:"medium"},on:{click:function(a){return e.closeNetworkModal(!1)}}},[e._v(" "+e._s(e.strings.noChangedMind)+" ")])],1)]},proxy:!0}],null,!1,3584506124)}):e._e()],1)},I=[];const P={components:{CoreAlert:m,CoreFeatureCard:_,CoreModal:l,Cta:y,GridColumn:$,GridRow:b,SvgClose:p,SvgCode:M,SvgImageSeo:A,SvgLinkAssistant:g,SvgLocalBusiness:k,SvgRedirect:f,SvgSitemapsPro:v},mixins:[w],data(){return{ctaImg:h,showNetworkModal:!1,maybeActivate:!1,maybeDeactivate:!1,search:null,loading:{activateAll:!1,deactivateAll:!1},strings:{videoNewsSitemaps:this.$t.__("Video and News Sitemaps",this.$td),imageSeoOptimization:this.$t.__("Image SEO Optimization",this.$td),localBusinessSeo:this.$t.__("Local Business SEO",this.$td),advancedWooCommerce:this.$t.__("Advanced WooCommerce",this.$td),customTaxonomies:this.$t.__("SEO for Categories, Tags and Custom Taxonomies",this.$td),andMore:this.$t.__("And many more...",this.$td),activateAllFeatures:this.$t.__("Activate All Features",this.$td),deactivateAllFeatures:this.$t.__("Deactivate All Features",this.$td),searchForFeatures:this.$t.__("Search for Features...",this.$td),ctaHeaderText:this.$t.sprintf(this.$t.__("Upgrade %1$s to Pro and Unlock all Features!",this.$td),"AIOSEO"),ctaButtonText:this.$t.__("Upgrade to Pro and Unlock All Features",this.$td),aValidLicenseIsRequired:this.$t.__("A valid license key is required in order to use our addons.",this.$td),enterLicenseKey:this.$t.__("Enter License Key",this.$td),purchaseLicense:this.$t.__("Purchase License",this.$td),areYouSureNetworkChange:this.$t.__("This is a network-wide change.",this.$td),yesProcessNetworkChange:this.$t.__("Yes, process this network change",this.$td),noChangedMind:this.$t.__("No, I changed my mind",this.$td)},descriptions:{aioseoImageSeo:{description:"<p>"+this.$t.__("Globally control the Title attribute and Alt text for images in your content. These attributes are essential for both accessibility and SEO.",this.$td)+"</p>",version:0},aioseoVideoSitemap:{description:"<p>"+this.$t.__("The Video Sitemap works in much the same way as the XML Sitemap module, it generates an XML Sitemap specifically for video content on your site. Search engines use this information to display rich snippet information in search results.",this.$td)+"</p>",version:0},aioseoNewsSitemap:{description:"<p>"+this.$t.__("Our Google News Sitemap lets you control which content you submit to Google News and only contains articles that were published in the last 48 hours. In order to submit a News Sitemap to Google, you must have added your site to Google\u2019s Publisher Center and had it approved.",this.$td)+"</p>",version:0},aioseoLocalBusiness:{description:"<p>"+this.$t.__("Local Business schema markup enables you to tell Google about your business, including your business name, address and phone number, opening hours and price range. This information may be displayed as a Knowledge Graph card or business carousel.",this.$td)+"</p>",version:0}}}},computed:{...c(["isUnlicensed"]),...u(["addons"]),upgradeToday(){return this.$t.sprintf(this.$t.__("%1$s %2$s comes with many additional features to help take your site's SEO to the next level!",this.$td),"AIOSEO","Pro")},getAddons(){return this.addons.filter(e=>!this.search||e.name.toLowerCase().includes(this.search.toLowerCase()))},networkChangeMessage(){return this.activated?this.$t.__("Are you sure you want to deactivate these addons across the network?",this.$td):this.$t.__("Are you sure you want to activate these addons across the network?",this.$td)}},methods:{...d(["installPlugins","deactivatePlugins"]),closeNetworkModal(e=!1){if(this.showNetworkModal=!1,e){const s=this.maybeActivate?"actuallyActivateAllFeatures":"actuallyDeactivateAllFeatures";this.maybeActivate=!1,this.maybeDeactivate=!1,this[s]()}},getIconComponent(e){return e.startsWith("svg-")?e:"img"},getIconSrc(e,s){return typeof e=="string"&&e.startsWith("svg-")?null:typeof e=="string"?`data:image/svg+xml;base64,${e}`:s},getAddonDescription(e){const s=e.sku.replace(/-./g,t=>t.toUpperCase()[1]);return this.descriptions[s]&&this.descriptions[s].description&&e.descriptionVersion<=this.descriptions[s].version?this.descriptions[s].description:e.description},activateAllFeatures(){if(this.$aioseo.data.isNetworkAdmin){this.showNetworkModal=!0,this.maybeActivate=!0;return}this.actuallyActivateAllFeatures()},actuallyActivateAllFeatures(){if(!this.$isPro||!this.$aioseo.license.isActive)return window.open(this.$links.utmUrl("activate-all-features"));this.loading.activateAll=!0;const e=this.addons.filter(s=>!s.requiresUpgrade).map(s=>({plugin:s.basename}));this.installPlugins(e).then(s=>{const t=Object.keys(s.body.completed).map(a=>s.body.completed[a]);this.$refs.addons.forEach(a=>{t.includes(a.feature.basename)&&(a.activated=!0)}),this.loading.activateAll=!1})},deactivateAllFeatures(){if(this.$aioseo.data.isNetworkAdmin){this.showNetworkModal=!0,this.maybeDeactivate=!0;return}this.actuallyDeactivateAllFeatures()},actuallyDeactivateAllFeatures(){this.loading.deactivateAll=!0;const e=this.addons.filter(s=>!s.requiresUpgrade).filter(s=>s.installed).map(s=>({plugin:s.basename}));this.deactivatePlugins(e).then(s=>{const t=Object.keys(s.body.completed).map(a=>s.body.completed[a]);this.$refs.addons.forEach(a=>{t.includes(a.feature.basename)&&(a.activated=!1)}),this.loading.deactivateAll=!1})}}},o={};var T=r(P,N,I,!1,U,null,null,null);function U(e){for(let s in o)this[s]=o[s]}const ae=function(){return T.exports}();export{ae as default};
