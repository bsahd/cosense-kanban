[日本語版](README.ja.md)
# functions
* functions is in one PageMenu button
* It contains the following menu
  	* open Roadmap
	* mkinbox
	* chstate inbox
	* chstate todo
	* chstate doing
	* chstate done
	* chstate close
* mkinbox
  * make blank page with page text `#inbox`
* chstate
 	* remove `#inbox`, `#todo`, `#doing`, `#done`, `#close` from page
  * insert new state tag to head of page

# preparation
1. Make sure there are no `inbox`, `todo`, `doing`, `done`, `close` pages and backlinks
	* If it already exists, delete the page and unlink the inbound link.
2. make roadmap page
	1. name is `Roadmap`
	2. link to `#inbox`, `#todo`, `#doing`, `#done`, `#close`
	3. append `script.js` in repository to codeblock `script.js` of my page using copy-and-paste
3. enables UserScript from user settings
