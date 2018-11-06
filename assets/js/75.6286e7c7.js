(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{227:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"deploying-versions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploying-versions","aria-hidden":"true"}},[t._v("#")]),t._v(" Deploying Versions")]),t._v(" "),a("p",[t._v("Deploying (/building) new versions of Directus is a multifaceted process. The application and api should be treated as two separate entities, only to be bundled together for a final build.")]),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("These steps need to be followed precisely. Any deviation will cause breaking changes.")])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("Automated")]),t._v(" "),a("p",[t._v("Eventually, we want to automate these steps in some sort of deploy script to make sure the build is the same each time.")])]),t._v(" "),a("h2",{attrs:{id:"deploying-the-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploying-the-application","aria-hidden":"true"}},[t._v("#")]),t._v(" Deploying the application")]),t._v(" "),a("ol",[a("li",[t._v("Clone the app repo")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" clone git@github.com:directus/app.git\n$ "),a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" app\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[t._v("Bump the version in "),a("code",[t._v("package.json")])])]),t._v(" "),a("li",[a("p",[t._v("Install npm dependencies")])])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("Build the app")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[t._v("Clone the build branch of the app")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/\n$ "),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" clone -b build git@github.com:directus/app.git app-build\n")])])]),a("ol",{attrs:{start:"6"}},[a("li",[a("p",[t._v("Delete everything in "),a("code",[t._v("app-build")]),t._v(" except the "),a("code",[t._v(".git")]),t._v(" folder")])]),t._v(" "),a("li",[a("p",[t._v("Copy everything from "),a("code",[t._v("app/dist")]),t._v(" to "),a("code",[t._v("app-build")])])])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{attrs:{class:"token function"}},[t._v("cp")]),t._v(" -r app/dist/. app-build\n")])])]),a("ol",{attrs:{start:"8"}},[a("li",[t._v("Delete all .DS_Store files")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" app-build\n$ "),a("span",{attrs:{class:"token function"}},[t._v("find")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v(".")]),t._v(" -name "),a("span",{attrs:{class:"token string"}},[t._v("'.DS_Store'")]),t._v(" -type f -delete\n")])])]),a("ol",{attrs:{start:"9"}},[a("li",[t._v("Add-commit-push")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" add "),a("span",{attrs:{class:"token keyword"}},[t._v(".")]),t._v("\n$ "),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{attrs:{class:"token string"}},[t._v('"<VERSION NUMBER>"')]),t._v("\n$ "),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin build\n")])])]),a("ol",{attrs:{start:"10"}},[a("li",[a("p",[t._v("Create release on GH")])]),t._v(" "),a("li",[a("p",[t._v("Delete local repos")])])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n$ "),a("span",{attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf app\n$ "),a("span",{attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf app-build\n")])])]),a("h2",{attrs:{id:"deploying-the-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploying-the-api","aria-hidden":"true"}},[t._v("#")]),t._v(" Deploying the API")]),t._v(" "),a("ol",[a("li",[t._v("Clone the api repo")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" clone git@github.com:directus/api.git\n$ "),a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" api\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[t._v("Bump the version in "),a("code",[t._v("package.json")]),t._v(" and "),a("code",[t._v("src/core/Directus/Application/Application.php")])])]),t._v(" "),a("li",[a("p",[t._v("Install the composer dependencies")])])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ composer "),a("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" -a\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("Install and build the system extensions")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" extensions\n$ "),a("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("install")]),t._v("\n$ "),a("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build\n$ "),a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[t._v("Clone the build branch of the api")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n$ "),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" clone -b build git@github.com:directus/api.git api-build\n")])])]),a("ol",{attrs:{start:"6"}},[a("li",[a("p",[t._v("Delete everything in "),a("code",[t._v("api-build")]),t._v(" except the "),a("code",[t._v(".git")]),t._v(" folder")])]),t._v(" "),a("li",[a("p",[t._v("Delete all nested .git folders (prevent submodules)")])])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" api\n$ "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("find")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v(".")]),t._v(" -type d -name "),a("span",{attrs:{class:"token string"}},[t._v('".git"')]),t._v(" \\\n  "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("find")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v(".")]),t._v(" -name "),a("span",{attrs:{class:"token string"}},[t._v('".gitignore"')]),t._v(" \\\n  "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("find")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v(".")]),t._v(" -name "),a("span",{attrs:{class:"token string"}},[t._v('".gitmodules"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("xargs")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf\n")])])]),a("ol",{attrs:{start:"8"}},[a("li",[t._v("Move these files into "),a("code",[t._v("api-build")]),t._v(":")])]),t._v(" "),a("ul",[a("li",[t._v("bin/")]),t._v(" "),a("li",[t._v("config/")]),t._v(" "),a("li",[t._v("docker/")]),t._v(" "),a("li",[t._v("logs/")]),t._v(" "),a("li",[t._v("migrations/")]),t._v(" "),a("li",[t._v("public/")]),t._v(" "),a("li",[t._v("src/")]),t._v(" "),a("li",[t._v("vendor/")]),t._v(" "),a("li",[t._v("LICENSE.md")]),t._v(" "),a("li",[t._v("README.md")]),t._v(" "),a("li",[t._v("docker-compose.yml")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{attrs:{class:"token function"}},[t._v("cp")]),t._v(" -r ./"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("bin,config,docker,logs,migrations,public,src,vendor,LICENSE.md,README.md,docker-compose.yml"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/api-build\n$ "),a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n")])])]),a("ol",{attrs:{start:"9"}},[a("li",[t._v("Delete all .DS_Store files")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" api-build\n$ "),a("span",{attrs:{class:"token function"}},[t._v("find")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v(".")]),t._v(" -name "),a("span",{attrs:{class:"token string"}},[t._v("'.DS_Store'")]),t._v(" -type f -delete\n")])])]),a("ol",{attrs:{start:"10"}},[a("li",[t._v("Add-commit-push")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" add "),a("span",{attrs:{class:"token keyword"}},[t._v(".")]),t._v("\n$ "),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{attrs:{class:"token string"}},[t._v('"<VERSION NUMBER>"')]),t._v("\n$ "),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin build\n")])])]),a("ol",{attrs:{start:"11"}},[a("li",[a("p",[t._v("Create release on GH")])]),t._v(" "),a("li",[a("p",[t._v("Delete local repos")])])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n$ "),a("span",{attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf api\n$ "),a("span",{attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf api-build\n")])])]),a("h2",{attrs:{id:"deploying-the-combined-build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploying-the-combined-build","aria-hidden":"true"}},[t._v("#")]),t._v(" Deploying the combined build")]),t._v(" "),a("ol",[a("li",[t._v("Clone the directus/directus repo")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" clone git@github.com:directus/directus.git\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[t._v("Delete everything in it except the "),a("code",[t._v(".git")]),t._v(" folder")])]),t._v(" "),a("li",[a("p",[t._v("Clone the api build")])])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" clone -b build git@github.com:directus/api.git api-build\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("Remove the "),a("code",[t._v(".git")]),t._v(" folder from the "),a("code",[t._v("api-build")]),t._v(" folder")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf api-build/.git\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[t._v("Copy everything in the api-build folder to the main directus/directus repo")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{attrs:{class:"token function"}},[t._v("cp")]),t._v(" -r api-build/* directus\n")])])]),a("ol",{attrs:{start:"6"}},[a("li",[t._v("Clone the app build")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" clone -b build git@github.com:directus/app.git app-build\n")])])]),a("ol",{attrs:{start:"7"}},[a("li",[t._v("Make the public/admin directory in directus/directus")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" directus/public/admin\n")])])]),a("ol",{attrs:{start:"8"}},[a("li",[t._v("Delete the "),a("code",[t._v(".git")]),t._v(" folder from the app-build")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf app-build/.git\n")])])]),a("ol",{attrs:{start:"9"}},[a("li",[t._v("Copy everything from app-build to directus/public/admin")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{attrs:{class:"token function"}},[t._v("cp")]),t._v(" -r app-build/* directus/public/admin\n")])])]),a("ol",{attrs:{start:"10"}},[a("li",[t._v("Duplicate the "),a("code",[t._v("directus/public/admin/config_example.js")]),t._v(" file to "),a("code",[t._v("directus/public/admin/config.js")])])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{attrs:{class:"token function"}},[t._v("cp")]),t._v(" directus/public/admin/config_example.js directus/public/admin/config.js\n")])])]),a("ol",{attrs:{start:"11"}},[a("li",[t._v("Change the "),a("code",[t._v("directus/public/admin/config.js")]),t._v(" file to point to the relative API")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("api"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token string"}},[t._v('"../_/"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Directus API"')]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",{attrs:{start:"12"}},[a("li",[t._v("Delete all .DS_Store files")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" directus\n$ "),a("span",{attrs:{class:"token function"}},[t._v("find")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v(".")]),t._v(" -name "),a("span",{attrs:{class:"token string"}},[t._v("'.DS_Store'")]),t._v(" -type f -delete\n")])])]),a("ol",{attrs:{start:"13"}},[a("li",[t._v("Add-commit-push")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" add "),a("span",{attrs:{class:"token keyword"}},[t._v(".")]),t._v("\n$ "),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{attrs:{class:"token string"}},[t._v('"<VERSION NUMBER>"')]),t._v("\n$ "),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin master\n")])])]),a("ol",{attrs:{start:"14"}},[a("li",[a("p",[t._v("Create release on GH")])]),t._v(" "),a("li",[a("p",[t._v("Delete local repos")])])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n$ "),a("span",{attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf directus\n$ "),a("span",{attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf api-build\n$ "),a("span",{attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf app-build\n")])])]),a("h2",{attrs:{id:"tagging-docs-releases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tagging-docs-releases","aria-hidden":"true"}},[t._v("#")]),t._v(" Tagging Docs Releases")]),t._v(" "),a("p",[t._v("When releasing a new major or minor version (not a patch) we should also create a git release tag on "),a("code",[t._v("directus/docs")]),t._v(". This will ensure that users of previous versions can go back and look at the specific docs from that version.")]),t._v(" "),a("p",[t._v("It's also important to "),a("em",[t._v("flag")]),t._v(" each new feature in the Docs with a version number (eg: "),a("code",[t._v("7.1+")]),t._v(") so that users can tell when a new feature was made available.")])])}],!1,null,null,null);n.options.__file="deploying-versions.md";s.default=n.exports}}]);