(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{221:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("Directus provides a list of events hooks that are triggered when an actions occurs. For example: before an item is updated.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("For example: an Action might send an email to a user when an new article is created, on the other hand a Filter might set a UUID for a new article before it's stored in the database.")]),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("To create a hook a "),s("a",{attrs:{href:"http://php.net/manual/en/language.types.callable.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("callable"),s("OutboundLink")],1),t._v(" (function, class-method combination, or class that implements that "),s("code",[t._v("__invoke")]),t._v(" method) must be added to a hook name.")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._m(10),t._v(" "),t._m(11),t._m(12),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),s("p",[t._v("@TODO Doesn't this mean you can't have a collection named the same as an HTTP method?")])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"hooks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hooks","aria-hidden":"true"}},[this._v("#")]),this._v(" Hooks")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("There are two type of hooks: "),a("code",[this._v("actions")]),this._v(" and "),a("code",[this._v("filters")]),this._v(".")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[s("strong",[t._v("Actions")]),t._v(" execute a piece of code "),s("em",[t._v("without")]),t._v(" altering the data being passed through it")]),t._v(" "),s("li",[s("strong",[t._v("Filters")]),t._v(" are the same as Actions but "),s("em",[t._v("can")]),t._v(" change the data passed through it")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"create-a-hook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-hook","aria-hidden":"true"}},[this._v("#")]),this._v(" Create a Hook")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"using-a-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-a-function","aria-hidden":"true"}},[this._v("#")]),this._v(" Using a function")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'hooks'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'actions'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'item.create'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token variable"}},[t._v("$collectionName")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("array")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$data")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("// execute any code")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("You can also you any class that implement the "),a("code",[this._v("__invoke")]),this._v(" method instead of a function.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"using-a-class-implementing-invoke"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-a-class-implementing-invoke","aria-hidden":"true"}},[this._v("#")]),this._v(" Using a class implementing "),a("code",[this._v("__invoke")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token php language-php"}},[s("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{attrs:{class:"token package"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("App"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Events")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("CreateItemEvent")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("__invoke")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token variable"}},[t._v("$collectionName")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("array")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$data")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("// execute any code")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'hooks'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'actions'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'item.create'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'\\App\\Events\\CreateItemEvent'")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"using-a-class-implementing-hookinterface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-a-class-implementing-hookinterface","aria-hidden":"true"}},[this._v("#")]),this._v(" Using a class implementing HookInterface")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token php language-php"}},[s("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// Improvised namespace, not required")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{attrs:{class:"token package"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("App"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Events")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("CreateItemEvent")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Directus"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Hook"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("HookInterface")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("handle")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token variable"}},[t._v("$collectionName")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("array")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$data")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// execute any code")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'hooks'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'actions'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'item.create'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'\\App\\Events\\CreateItemEvent'")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"create-an-action-hook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-an-action-hook","aria-hidden":"true"}},[this._v("#")]),this._v(" Create an Action Hook")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'hooks'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'actions'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'item.create.articles'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token variable"}},[t._v("$data")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$collectionName")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token variable"}},[t._v("$content")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'New article was created with the title: '")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$data")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{attrs:{class:"token comment"}},[t._v("// pesudo function")]),t._v("\n      "),s("span",{attrs:{class:"token function"}},[t._v("notify")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'admin@example.com'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'New Article'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$content")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"create-a-filter-hook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-filter-hook","aria-hidden":"true"}},[this._v("#")]),this._v(" Create a Filter Hook")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'hooks'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'filters'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'item.create.articles:before'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\\"),s("span",{attrs:{class:"token package"}},[t._v("Directus"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Hook"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Payload")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$payload")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token variable"}},[t._v("$payload")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("set")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'uuid'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \\"),s("span",{attrs:{class:"token package"}},[t._v("Directus"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("generate_uuid4")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$payload")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("The filter passes a "),a("code",[this._v("Payload")]),this._v(" object which contain the data and attribute information related to the filter hook, such as the collection name the item belong to.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"payload-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#payload-object","aria-hidden":"true"}},[this._v("#")]),this._v(" Payload Object")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("All filter hooks pass a "),a("code",[this._v("Payload")]),this._v(" object as a parameter to made it easier to pass the data over multiple filters. Each filter function must return the "),a("code",[this._v("Payload")]),this._v(" so other filters can interact with the updated data.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"useful-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#useful-methods","aria-hidden":"true"}},[this._v("#")]),this._v(" Useful Methods")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("getData()")])]),t._v(" "),s("td",[t._v("Get the payload data")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("attribute($key)")])]),t._v(" "),s("td",[t._v("Get an attribute key. Ex "),s("code",[t._v("$payload->attribute('collection_name')")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("get($key)")])]),t._v(" "),s("td",[t._v("Get an element by its key")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("set($key, $value)")])]),t._v(" "),s("td",[t._v("Set or update new value into the given key")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("has($key)")])]),t._v(" "),s("td",[t._v("Check whether or not the payload data has the given key set")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("remove($key)")])]),t._v(" "),s("td",[t._v("Remove an element with the given key")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("isEmpty()")])]),t._v(" "),s("td",[t._v("Check whether the payload data is empty")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("replace($newDataArray)")])]),t._v(" "),s("td",[t._v("Replace the payload data with a new data array")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("clear()")])]),t._v(" "),s("td",[t._v("Remove all data from the payload")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),s("p",[s("code",[t._v("get()")]),t._v(" and "),s("code",[t._v("has()")]),t._v(" method can use dot-notation to access child elements. eg: "),s("code",[t._v("get('data.email')")]),t._v(".")]),t._v(" "),s("p",[s("code",[t._v("Payload")]),t._v(" object is "),s("code",[t._v("Arrayable")]),t._v(" which means you can interact with the data as an array "),s("code",[t._v("$payload['data']['email]")]),t._v(", but you can't do "),s("code",[t._v("\\Directus\\Util\\ArrayUtils::get($payload, 'data.email')")]),t._v(".")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("IMPORTANT")]),t._v(" "),s("p",[t._v("Filters are also triggered by Directus "),s("em",[t._v("system")]),t._v(" collections as well, so make sure if you don't want to interact with Directus collections omit them by checking for them first. All Directus system collections can be accesed from "),s("code",[t._v("\\Directus\\Database\\Schema\\SchemaManager::getSystemCollections()")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{attrs:{class:"token package"}},[t._v("Directus"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Database"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Schema"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("SchemaManager")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token variable"}},[t._v("$collectionName")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$payload")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("attribute")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'collection_name'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token function"}},[t._v("in_array")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token variable"}},[t._v("$collectionName")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SchemaManager"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token function"}},[t._v("getSystemCollections")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$payload")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"action-hooks-list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#action-hooks-list","aria-hidden":"true"}},[this._v("#")]),this._v(" Action Hooks List")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("application.boot")])]),t._v(" "),s("td",[t._v("Before all endpoints are set. The app object is passed.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("application.error")])]),t._v(" "),s("td",[t._v("An app exception has been thrown. The exception object is passed.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("auth.request:credentials")])]),t._v(" "),s("td",[t._v("User requested token via credentials. The user object is passed.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("auth.success")])]),t._v(" "),s("td",[t._v("User authenticated successfully. The user object is passed.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("auth.fail")])]),t._v(" "),s("td",[t._v("User authentication failed. @TODO is passed.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("collection.create")])]),t._v(" "),s("td",[t._v("Collection is created. Collection's name passed. Supports "),s("code",[t._v(":before")]),t._v(" and "),s("code",[t._v(":after")]),t._v(" (default)")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("collection.update")])]),t._v(" "),s("td",[t._v("Collection is updated. Collection's name passed. Supports "),s("code",[t._v(":before")]),t._v(" and "),s("code",[t._v(":after")]),t._v(" (default)")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("collection.delete")])]),t._v(" "),s("td",[t._v("Collection is deleted. Collection's name passed. Supports "),s("code",[t._v(":before")]),t._v(" and "),s("code",[t._v(":after")]),t._v(" (default)")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("field.create")])]),t._v(" "),s("td",[t._v("Field is created. You can also limit to a specific collection with "),s("code",[t._v("field.create.[collection-name]")]),t._v(". Collection's name ("),s("em",[t._v("When not specific to a collection")]),t._v("), Field's name and new data passed. Supports "),s("code",[t._v(":before")]),t._v(" and "),s("code",[t._v(":after")]),t._v(" (default)")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("field.update")])]),t._v(" "),s("td",[t._v("Field is updated. You can also limit to a specific collection with "),s("code",[t._v("field.update.[collection-name]")]),t._v(". Collection's name ("),s("em",[t._v("When not specific to a collection")]),t._v("), Field's name and data passed. Supports "),s("code",[t._v(":before")]),t._v(" and "),s("code",[t._v(":after")]),t._v(" (default)")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("field.delete")])]),t._v(" "),s("td",[t._v("Field is deleted. You can also limit to a specific collection with "),s("code",[t._v("field.delete.[collection-name]")]),t._v(". Collection's name ("),s("em",[t._v("When not specific to a collection")]),t._v("), Field's name passed. Supports "),s("code",[t._v(":before")]),t._v(" and "),s("code",[t._v(":after")]),t._v(" (default)")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("item.create")])]),t._v(" "),s("td",[t._v("Item is created. You can also limit to a specific collection using "),s("code",[t._v("item.create.[collection-name]")]),t._v(". Item data passed. Supports "),s("code",[t._v(":before")]),t._v(" and "),s("code",[t._v(":after")]),t._v(" (default)")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("item.read")])]),t._v(" "),s("td",[t._v("Item is read. You can also limit to a specific collection using "),s("code",[t._v("item.read.[collection-name]")]),t._v(". Item data passed. Supports "),s("code",[t._v(":before")]),t._v(" and "),s("code",[t._v(":after")]),t._v(" (default)")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("item.update")])]),t._v(" "),s("td",[t._v("Item is updated. You can also limit to a specific collection using "),s("code",[t._v("item.update.[collection-name]")]),t._v(". Item data passed. Supports "),s("code",[t._v(":before")]),t._v(" and "),s("code",[t._v(":after")]),t._v(" (default)")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("item.delete")])]),t._v(" "),s("td",[t._v("Item is deleted. You can also limit to a specific collection using "),s("code",[t._v("item.delete.[collection-name]")]),t._v(". Item data passed. Supports "),s("code",[t._v(":before")]),t._v(" and "),s("code",[t._v(":after")]),t._v(" (default)")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("file.save")])]),t._v(" "),s("td",[t._v("File is saved. File data passed. Supports "),s("code",[t._v(":before")]),t._v(" and "),s("code",[t._v(":after")]),t._v(" (default)")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("file.delete")])]),t._v(" "),s("td",[t._v("File is deleted. File data passed. Supports "),s("code",[t._v(":before")]),t._v(" and "),s("code",[t._v(":after")]),t._v(" (default)")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("Before or After Event")]),t._v(" "),s("p",[t._v("By default, the hooks above occur "),s("em",[t._v("after")]),t._v(" an event has happened. You can append "),s("code",[t._v(":before")]),t._v(" and "),s("code",[t._v(":after")]),t._v(" to the end to explicitely specify when the hook should fire.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"filter-hooks-list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#filter-hooks-list","aria-hidden":"true"}},[this._v("#")]),this._v(" Filter Hooks List")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("item.create")])]),t._v(" "),s("td",[t._v("Item is created. You can also limit to a specific collection using "),s("code",[t._v("item.create.[collection-name]")]),t._v(". Supports "),s("code",[t._v(":before")]),t._v(" and "),s("code",[t._v(":after")]),t._v(" (default)")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("item.read")])]),t._v(" "),s("td",[t._v("Item is read. You can also limit to a specific collection using "),s("code",[t._v("item.read.[collection-name]")]),t._v(". Supports "),s("code",[t._v(":before")]),t._v(" and "),s("code",[t._v(":after")]),t._v(" (default)")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("item.update")])]),t._v(" "),s("td",[t._v("Item is updated. You can also limit to a specific collection using "),s("code",[t._v("item.update.[collection-name]")]),t._v(". Supports "),s("code",[t._v(":before")]),t._v(" and "),s("code",[t._v(":after")]),t._v(" (default)")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("response")])]),t._v(" "),s("td",[t._v("Before adding the content into the HTTP response body.  You can also limit to a specific collection using "),s("code",[t._v("response.[collection-name]")]),t._v(".")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("response.[method]")])]),t._v(" "),s("td",[t._v("Same as "),s("code",[t._v("response")]),t._v(" but only executes for a specific http method, such as "),s("code",[t._v("GET, POST, DELETE, PATCH, PUT, OPTIONS")]),t._v(". You can also limit to a specific collection using "),s("code",[t._v("response.[method].[collection-name]")]),t._v(".")])])])])}],!1,null,null,null);n.options.__file="hooks.md";a.default=n.exports}}]);