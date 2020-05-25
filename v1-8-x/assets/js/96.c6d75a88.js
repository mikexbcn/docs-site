(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{340:function(t,e,a){"use strict";a.r(e);var n=a(3),l=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"installing-zowe-cli-plug-ins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-zowe-cli-plug-ins"}},[t._v("#")]),t._v(" Installing Zowe CLI plug-ins")]),t._v(" "),a("p",[t._v("Use commands in the "),a("code",[t._v("plugins")]),t._v(" command group to install and manage Zowe™ CLI plug-ins.")]),t._v(" "),a("p",[a("strong",[t._v("Important!")]),t._v(" Plug-ins can gain control of your CLI application legitimately during the execution of commands. Install third-party plug-ins at your own risk. We make no warranties regarding the use of third-party plug-ins.")]),t._v(" "),a("p",[t._v("You can install the following Zowe plug-ins:")]),t._v(" "),a("ul",[a("li",[t._v("IBM® CICS® Plug-in for Zowe CLI")]),t._v(" "),a("li",[t._v("IBM® Db2® Plug-in for Zowe CLI")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.openmainframeproject.org/projects/zowe/conformance",target:"_blank",rel:"noopener noreferrer"}},[t._v("Third-party Zowe Conformant Plug-ins"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("Use either of the following methods to install plug-ins:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Install from an online NPM registry. Use this method when your computer "),a("em",[a("strong",[t._v("can")])]),t._v(" access the Internet.")]),t._v(" "),a("p",[t._v("For more information, see "),a("a",{attrs:{href:"#installing-plug-ins-from-an-online-registry"}},[t._v("Installing plug-ins from an online registry")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Install from a local package. With this method, you download and install the plug-ins from a bundled set of "),a("code",[t._v(".tgz")]),t._v(" files. Use this method when your computer "),a("em",[a("strong",[t._v("cannot")])]),t._v(" access the Internet.")]),t._v(" "),a("p",[t._v("For more information, see "),a("a",{attrs:{href:"#installing-plug-ins-from-a-local-package"}},[t._v("Installing plug-ins from a local package")]),t._v(".")])])]),t._v(" "),a("h2",{attrs:{id:"installing-plug-ins-from-an-online-registry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-plug-ins-from-an-online-registry"}},[t._v("#")]),t._v(" Installing plug-ins from an online registry")]),t._v(" "),a("p",[t._v("Install Zowe CLI plug-ins using npm commands on Windows, Mac, and Linux. The procedures in this article assume that you previously installed the core CLI.")]),t._v(" "),a("p",[a("strong",[t._v("Follow these steps:")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Meet the "),a("router-link",{attrs:{to:"/user-guide/cli-swreqplugins.html"}},[t._v("software requirements for each plug-in")]),t._v(" that you install.")],1)]),t._v(" "),a("li",[a("p",[t._v("Set the proper target registry by issuing the following command:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm config set @brightside:registry https://api.bintray.com/npm/ca/brightside\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Issue the following command to install a plug-in:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("zowe plugins install <my-plugin>\n")])])]),a("p",[a("strong",[t._v("Note:")]),t._v(" Replace "),a("code",[t._v("<my-plugin>")]),t._v(" with the installation command syntax in the following table:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Plug-in")]),t._v(" "),a("th",[t._v("Installation Command Syntax")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("IBM CICS Plug-in for Zowe CLI")]),t._v(" "),a("td",[a("code",[t._v("@brightside/cics@lts-incremental")])])]),t._v(" "),a("tr",[a("td",[t._v("IBM Db2 Plug-in for Zowe CLI")]),t._v(" "),a("td",[a("code",[t._v("@brightside/db2@lts-incremental")])])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td")])])])]),t._v(" "),a("li",[a("p",[t._v("(Optional) Issue the following command to install two or more plug-ins using one command. Separate the "),a("code",[t._v("<my-plugin>")]),t._v(" names with one space.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("zowe plugins install <@brightside/my-plugin1> <@brightside/my-plugin2> <@brightside/my-plugin3> ...\n")])])]),a("p",[a("strong",[t._v("Note:")]),t._v(" The IBM Db2 Plug-in for Zowe CLI requires additional licensing and ODBC driver configurations. If you installed the DB2 plug-in, see "),a("router-link",{attrs:{to:"/user-guide/cli-db2plugin.html"}},[t._v("IBM Db2 Plug-in for Zowe CLI")]),t._v(".")],1)])]),t._v(" "),a("p",[t._v("You installed Zowe CLI plug-ins.")]),t._v(" "),a("h2",{attrs:{id:"installing-plug-ins-from-a-local-package"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-plug-ins-from-a-local-package"}},[t._v("#")]),t._v(" Installing plug-ins from a local package")]),t._v(" "),a("p",[t._v("Install plug-ins from a local package on any computer that has limited or no access to the Internet. The procedure assumes that you previously installed the core CLI.")]),t._v(" "),a("p",[a("strong",[t._v("Follow these steps:")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Meet the "),a("router-link",{attrs:{to:"/user-guide/cli-swreqplugins.html"}},[t._v("software requirements for each plug-in")]),t._v(" that you want to install.")],1)]),t._v(" "),a("li",[a("p",[t._v("Obtain the installation files.")]),t._v(" "),a("p",[t._v("From the Zowe "),a("a",{attrs:{href:"https://zowe.org/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download"),a("OutboundLink")],1),t._v(" website, click "),a("strong",[t._v("Download Zowe CLI")]),t._v(" to download the Zowe CLI installation package named "),a("code",[t._v("zowe-cli-package-*v*.*r*.*m*.zip")]),t._v(" to your computer.")]),t._v(" "),a("p",[a("strong",[t._v("Note:")]),t._v(" "),a("code",[t._v("v")]),t._v(" indicates the version, "),a("code",[t._v("r")]),t._v(" indicates the release number, and "),a("code",[t._v("m")]),t._v(" indicates the modification number")])]),t._v(" "),a("li",[a("p",[t._v("Open a command-line window such as Windows Command Prompt. Browse to the directory where you downloaded the Zowe CLI installation package. Issue the following command to unzip the files:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("unzip zowe-cli-package-v.r.m.zip\n")])])]),a("p",[a("strong",[t._v("Example:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("unzip zowe-cli-package-1.0.1.zip\n")])])]),a("p",[t._v("By default, the unzip command extracts the contents of the zip file to the directory where you downloaded the file. Optionally, extract the contents of the .zip file to your preferred location.")])]),t._v(" "),a("li",[a("p",[t._v("Open a command-line window and change to the local directory where you extracted the zip file.")]),t._v(" "),a("p",[a("strong",[t._v("Example:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cd C:\\Users\\userID\\my_downloads\\<file_name>.zip\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Issue the following command to install the plug-in:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("zowe plugins install <my-plugin>\n")])])]),a("p",[t._v("Replace "),a("code",[t._v("<my-plugin>")]),t._v(" with the .tgz file name listed in the following table:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Plug-in")]),t._v(" "),a("th",[a("code",[t._v(".tgz")]),t._v(" File Name")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("IBM CICS Plug-in for Zowe CLI")]),t._v(" "),a("td",[a("code",[t._v("cics.tgz")])])]),t._v(" "),a("tr",[a("td",[t._v("IBM Db2 Plug-in for Zowe CLI")]),t._v(" "),a("td",[a("code",[t._v("db2.tgz")])])])])])])]),t._v(" "),a("p",[t._v("You installed Zowe CLI plug-ins.")]),t._v(" "),a("h2",{attrs:{id:"validating-plug-ins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validating-plug-ins"}},[t._v("#")]),t._v(" Validating plug-ins")]),t._v(" "),a("p",[t._v("Issue the plug-in validation command to run tests against all plug-ins (or against a plug-in that you specify) to verify that the plug-ins integrate properly with Zowe CLI. The tests confirm that the plug-in does not conflict with existing command groups in the base application. The command response provides you with details or error messages about how the plug-ins integrate with Zowe CLI.")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("validate")]),t._v(" command has the following syntax:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("zowe plugins validate [plugin]\n")])])]),a("ul",[a("li",[a("p",[a("strong",[a("code",[t._v("[plugin]")])]),a("br"),t._v("\n(Optional) Specifies the name of the plug-in that you want to\nvalidate. If you do not specify a plug-in name, the command\nvalidates all installed plug-ins. The name of the plug-in is not always the same as the name of the NPM package.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Plug-in")]),t._v(" "),a("th",[t._v("Syntax")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("IBM CICS Plug-in for Zowe CLI")]),t._v(" "),a("td",[a("code",[t._v("@brightside/cics")])])]),t._v(" "),a("tr",[a("td",[t._v("IBM Db2 Plug-in for Zowe CLI")]),t._v(" "),a("td",[a("code",[t._v("@brightside/db2")])])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td")])])])])]),t._v(" "),a("p",[a("strong",[t._v("Examples: Validate plug-ins")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("The following example illustrates the syntax to use to validate the IBM CICS Plug-in for Zowe CLI:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("zowe plugins validate @brightside/cics\n")])])])]),t._v(" "),a("li",[a("p",[t._v("The following example illustrates the syntax to use to validate all installed plug-ins:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("zowe plugins validate\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"updating-plug-ins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updating-plug-ins"}},[t._v("#")]),t._v(" Updating plug-ins")]),t._v(" "),a("p",[t._v("You can update Zowe CLI plug-ins from an online registry or from a local package.")]),t._v(" "),a("h3",{attrs:{id:"update-plug-ins-from-an-online-registry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-plug-ins-from-an-online-registry"}},[t._v("#")]),t._v(" Update plug-ins from an online registry")]),t._v(" "),a("p",[t._v("Issue the "),a("code",[t._v("update")]),t._v(" command to install the latest stable version or a specific version of a plug-in that you installed previously. The "),a("code",[t._v("update")]),t._v(" command has the following syntax:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("zowe plugins update [plugin...] [--registry <registry>]\n")])])]),a("ul",[a("li",[a("p",[t._v("[plugin...]")]),t._v(" "),a("p",[t._v("Specifies the name of an installed plug-in that you want to update. The name of the plug-in is not always the same as the name of the NPM package. You can use npm semantic versioning to specify a plug-in version to which to update. For more information, see npm semver.")])]),t._v(" "),a("li",[a("p",[t._v("[--registry <registry>]")]),t._v(" "),a("p",[t._v("(Optional) Specifies a registry URL that is different from the registry URL of the original installation.")])])]),t._v(" "),a("p",[a("strong",[t._v("Examples: Update plug-ins")])]),t._v(" "),a("p",[t._v("The following example illustrates the syntax to use to update an installed plug-in to the latest version:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("zowe plugins update @brightside/my-plugin@lts-incremental\n")])])]),a("p",[t._v("The following example illustrates the syntax to use to update a plug-in to a specific version:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('zowe plugins update @brightside/my-plugin@"^1.2.3"\n')])])]),a("h3",{attrs:{id:"update-plug-ins-from-a-local-package"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-plug-ins-from-a-local-package"}},[t._v("#")]),t._v(" Update plug-ins from a local package")]),t._v(" "),a("p",[t._v("You can update plug-ins from a local package. You acquire the media from the "),a("a",{attrs:{href:"https://zowe.org/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zowe Download"),a("OutboundLink")],1),t._v(" website and update the plug-ins using the "),a("code",[t._v("zowe plugins install")]),t._v(" command.")]),t._v(" "),a("p",[t._v("To update plug-ins from a local package, follow the steps described in "),a("a",{attrs:{href:"#installing-plug-ins-from-a-local-package"}},[t._v("Installing plug-ins from a local package")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"uninstall-plug-ins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uninstall-plug-ins"}},[t._v("#")]),t._v(" Uninstall Plug-ins")]),t._v(" "),a("p",[t._v("Issue the "),a("code",[t._v("uninstall")]),t._v(" command to uninstall plug-ins from Zowe CLI. After the uninstall process completes successfully, the product no longer contains the plug-in configuration.")]),t._v(" "),a("p",[t._v("The uninstall command contains the following syntax:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("zowe plugins uninstall [plugin]\n")])])]),a("ul",[a("li",[a("p",[a("code",[t._v("[plugin]")])]),t._v(" "),a("p",[t._v("Specifies the name of the plug-in that you want to uninstall.")])])]),t._v(" "),a("p",[t._v("The following table describes the uninstallation command synstax for each plug-in:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Plug-in")]),t._v(" "),a("th",[t._v("Uninstallation Command Syntax")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("IBM CICS Plug-in for Zowe CLI")]),t._v(" "),a("td",[a("code",[t._v("@brightside/cics")])])]),t._v(" "),a("tr",[a("td",[t._v("IBM Db2 Plug-in for Zowe CLI")]),t._v(" "),a("td",[a("code",[t._v("@brightside/db2")])])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td")])])]),t._v(" "),a("p",[a("strong",[t._v("Example:")])]),t._v(" "),a("p",[t._v("The following example illustrates the command to uninstall the CICS plug-in:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("zowe plugins uninstall @brightside/cics\n")])])])])}),[],!1,null,null,null);e.default=l.exports}}]);