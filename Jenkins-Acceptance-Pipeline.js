// ==UserScript==
// @name       Jenkins-Acceptance-Pipeline
// @namespace  http://daniel-simpson/
// @version    0.1
// @description  Allows the user to toggle an overview of the acceptance views (wiiiiiiiiiiiiide load otherwise)
// @match      http://<host>:<port>/view/<viewName>/
// @copyright  2014+, Daniel Simpson
// ==/UserScript==

isTinyStyle=false;
toggleTinyStyle = function() {
    if(isTinyStyle) {
        jQuery(".tinyStyle").remove();
    }
    else {
        jQuery("head").append("<style class=\"tinyStyle\" type=\"text/css\">\
			td.revision-cell>table{display:none}tr.build-pipeline>td[id]>table.build-card.rounded{height:10px!important;width:120px!important;margin-left:0!important;margin-right:0!important}tr.build-pipeline>td[id]{width:70px}tr.build-pipeline>td[id]>table.build-card>tbody>tr>td>div{max-width:100px;overflow-x:hidden;word-wrap:break-word}tr.build-pipeline>td:not([id]){max-width:2px;width:2px;height:2px}tr.build-pipeline>td.next>span.status.next>img{display:none} \
			</style>");
        
        //Get build number
        //jQuery("tbody.pipelineGroup").each(function(elem) { var buildNumber = jQuery(elem).find("td.revision-cell div.build-number-pipeline > span").Text(); jQuery(elem).find("td.revision-cell").append("<h1 class=tinyStyle>"+buildNumber+"</h1>") });
    }
    isTinyStyle = !isTinyStyle;
};

jQuery("form:last").before("<button onclick='toggleTinyStyle()'>Overview / Mini-style</button>");
