(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{284:function(t,s,e){"use strict";e.r(s);var a=e(0),r=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("Directus Command-Line Interface (CLI) provides commands that allow you to perform various tasks such as installation, resetting a user's email, or upgrading the database to the most recent Directus schema.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),e("p",[t._v('To get more information on an specific command you can type "help" followed by the command:')]),t._v(" "),t._m(3),t._m(4),t._v(" "),e("p",[t._v("Includes commands to install and configure Directus.")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),e("p",[t._v("Example: http://example.local")]),t._v(" "),t._m(10),e("p",[t._v("Example: http://example.local/directus")]),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),e("p",[t._v("Create the default admin user and the site's default settings.")]),t._v(" "),t._m(16),t._m(17),t._v(" "),e("p",[t._v("Example:")]),t._v(" "),t._m(18),t._m(19),t._v(" "),e("p",[t._v("Includes commands to manage Directus users")]),t._v(" "),t._m(20),t._v(" "),t._m(21),t._m(22),t._v(" "),e("p",[t._v("Example:")]),t._v(" "),t._m(23),t._m(24),t._v(" "),e("p",[t._v("Includes commands to manage Directus database schema")]),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._m(29),t._v(" "),t._m(30),t._m(31),t._v(" "),t._m(32),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._m(36),t._v(" "),e("p",[t._v("Removes all the logs that were last modified "),e("code",[t._v("<days>")]),t._v(" ago. it uses "),e("a",{attrs:{href:"http://php.net/manual/en/function.filemtime.php",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("filemtime")]),e("OutboundLink")],1),t._v(" function to determine the last modified time.")]),t._v(" "),t._m(37)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"directus-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#directus-cli","aria-hidden":"true"}},[this._v("#")]),this._v(" Directus CLI")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("You can use the "),s("code",[this._v("help")]),this._v(" command at any time to learn about available CLI actions:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token comment"}},[this._v("# this will provide information about the current modules")]),this._v("\nphp bin/directus "),s("span",{attrs:{class:"token function"}},[this._v("help")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token comment"}},[this._v("# this provide information about the **install** module")]),this._v("\nphp bin/directus "),s("span",{attrs:{class:"token function"}},[this._v("help")]),this._v(" "),s("span",{attrs:{class:"token function"}},[this._v("install")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"install-module"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-module","aria-hidden":"true"}},[this._v("#")]),this._v(" Install Module")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"configure-directus"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configure-directus","aria-hidden":"true"}},[this._v("#")]),this._v(" Configure Directus:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Creates the "),s("code",[this._v("config.api.php")]),this._v(" file.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),s("p",[this._v("This command will overwrite the default "),s("code",[this._v("config.api.php")]),this._v(" configuration file.")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("php bin/directus install:config -h "),e("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("db_host"),e("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" -n "),e("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("db_name"),e("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" -u "),e("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("db_user"),e("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" -p "),e("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("db_pass"),e("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" -e "),e("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("directus_email"),e("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("code",[t._v("db_host")]),t._v(" - The database host")]),t._v(" "),e("li",[e("code",[t._v("db_name")]),t._v(" - The database name (it must already exist)")]),t._v(" "),e("li",[e("code",[t._v("db_user")]),t._v(" - The database user's name")]),t._v(" "),e("li",[e("code",[t._v("db_pass")]),t._v(" - The database user's password")]),t._v(" "),e("li",[e("code",[t._v("directus_email")]),t._v(" - (Optional) The Directus email that will be used as sender in the mailing process")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("php bin/directus install:config -h localhost -n directus -u root -p pass\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("php bin/directus install:config -h localhost -n directus -u root -p pass -d directus\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"populate-the-database-schema"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#populate-the-database-schema","aria-hidden":"true"}},[this._v("#")]),this._v(" Populate the Database Schema:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Creates all of the Directus Core tables based on the configuration files: "),s("code",[this._v("/config/api.php")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("php bin/directus install:database\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"install-initial-configurations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-initial-configurations","aria-hidden":"true"}},[this._v("#")]),this._v(" Install Initial Configurations:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("php bin/directus install:install -e "),e("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("admin_email"),e("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" -p "),e("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("admin_password"),e("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" -t "),e("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("site_name"),e("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("code",[t._v("admin_email")]),t._v(" - The admin email")]),t._v(" "),e("li",[e("code",[t._v("admin_password")]),t._v(" - The admin password")]),t._v(" "),e("li",[e("code",[t._v("site_name")]),t._v(" - The project title")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("php bin/directus install:install -e admin@directus.local -p password -t "),s("span",{attrs:{class:"token string"}},[this._v('"Directus Example"')]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"user-module"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#user-module","aria-hidden":"true"}},[this._v("#")]),this._v(" User Module")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"change-user-password"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#change-user-password","aria-hidden":"true"}},[this._v("#")]),this._v(" Change User Password:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("php bin/directus user:password -e "),e("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("user_email"),e("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" -p "),e("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("new_password"),e("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("user_email")]),this._v(" - The user's email")]),this._v(" "),s("li",[s("code",[this._v("new_password")]),this._v(" - The user's new password")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("php bin/directus user:password -e admin@directus.local -p newpassword\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"database-module"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#database-module","aria-hidden":"true"}},[this._v("#")]),this._v(" Database Module")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("This requires that Directus has a valid connection configured in "),s("code",[this._v("config/api.php")]),this._v(".")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),s("p",[this._v("Always backup your database before running the database module to prevent data loss.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"install-directus-schema"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-directus-schema","aria-hidden":"true"}},[this._v("#")]),this._v(" Install Directus Schema:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("php bin/directus db:install\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"upgrade-directus-schema"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-directus-schema","aria-hidden":"true"}},[this._v("#")]),this._v(" Upgrade Directus Schema")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("$ bin/directus db:upgrade\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The command above will upgrade the default project database, to update an specific project the option "),s("code",[this._v("N")]),this._v(" can be used.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("$ bin/directus db:upgrade -N <project-name>\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"log-module"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#log-module","aria-hidden":"true"}},[this._v("#")]),this._v(" Log Module")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"prune-old-log-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prune-old-log-files","aria-hidden":"true"}},[this._v("#")]),this._v(" Prune Old Log Files")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("php bin/directus log:prune "),s("span",{attrs:{class:"token operator"}},[this._v("<")]),this._v("days"),s("span",{attrs:{class:"token operator"}},[this._v(">")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("<days>")]),this._v(" is optional. The default value is "),s("code",[this._v("30")]),this._v(" days.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("You can setup a cronjob to clean old files at a set frequency")])])}],!1,null,null,null);r.options.__file="cli.md";s.default=r.exports}}]);