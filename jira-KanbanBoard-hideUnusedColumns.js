// ==UserScript==
// @name       jira-KanbanBoard-hideunusedColumns
// @namespace  http://jira-KanbanBoard-hideunusedColumns/
// @version    0.1
// @description  enter something useful
// @match      http://*.atlassian.net/*
// @match      https://*.atlassian.net/*
// @copyright  2012+, You
// ==/UserScript==

var removeEmptyColumns = function() {
    $(".ghx-column[data-id]").each( function() {
        var id = $(this).attr("data-id");
        
        var count = 0;
        $("li[data-column-id="+id+"]".each(function() {
            count = count + $(this).children.length;
        })
        
        if(count == 0){
            $(this).hide(); $("li[data-column-id="+id+"]").hide();
        }
    })
};

var container = document.getElementById("ghx-rabid");
container.addEventListener("DOMSubtreeModified", removeEmptyColumns, true);