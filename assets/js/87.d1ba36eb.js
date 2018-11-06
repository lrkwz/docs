(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{249:function(t,e,a){"use strict";a.r(e);var s=a(0),i=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("Directus is a platform created and used by developers all over the world. Therefore it's quite important to make it accessible in as many languages as possible. Below we outline the breadth of multilingual support within Directus.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("Custom Interfaces")]),t._v(" "),a("p",[t._v("Our interface system is modular and extensible you can easily "),a("router-link",{attrs:{to:"/extensions/interfaces.html"}},[t._v("create custom interfaces")]),t._v(" with the "),a("code",[t._v("translation")]),t._v(" field type.")],1)]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("Managing multilingual content usually means having multilingual staff, so it's important that they can find their way around the Directus Application too. The app uses "),a("a",{attrs:{href:"https://github.com/directus/app/tree/master/src/lang/locales",target:"_blank",rel:"noopener noreferrer"}},[t._v("translation files"),a("OutboundLink")],1),t._v(" for all text in the core codebase. Additionally, we've built our extension system in the same way so that they each interface, page, and layout has self-contained translation files.")]),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("One of the key concpets of Directus is "),a("router-link",{attrs:{to:"/what-is-directus.html#database-mirroring"}},[t._v("database mirroring")]),t._v(". Since your database schema (and therefore the Directus schema) are dynamic, we can't include those in our translation files. Instead, we've created a JSON translation options at the Collection and Field level. This allows admins to translate their database architecture for App users.")],1),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("Once you have your multilingual content in the database, you can then fetch it using the "),a("router-link",{attrs:{to:"/api/reference.html#language"}},[t._v("API's "),a("code",[t._v("lang")]),t._v(" parameter")]),t._v(".")],1),t._v(" "),t._m(6)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"internationalization"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#internationalization","aria-hidden":"true"}},[this._v("#")]),this._v(" Internationalization")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"content-translations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#content-translations","aria-hidden":"true"}},[this._v("#")]),this._v(" Content Translations")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The ability to author and manage content in many languages is paramount. Directus uses a "),e("code",[this._v("translations")]),this._v(" interface to allow for manaing content in as many languages as needed. Instead of simply creating new fields for each language, this interface stores translations relationally so your forms are not muddled with duplicate fields for each language. This also means that language-agnostic data such as dates or toggles can remain on the parent item.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"multilingual-app"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#multilingual-app","aria-hidden":"true"}},[this._v("#")]),this._v(" Multilingual App")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"schema-translations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#schema-translations","aria-hidden":"true"}},[this._v("#")]),this._v(" Schema Translations")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"multilingual-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#multilingual-api","aria-hidden":"true"}},[this._v("#")]),this._v(" Multilingual API")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("API")]),this._v(" "),e("p",[this._v("For consistency, the API does not use schema translations. All data is returned with the database collection/field names as keys.")])])}],!1,null,null,null);i.options.__file="i18n.md";e.default=i.exports}}]);