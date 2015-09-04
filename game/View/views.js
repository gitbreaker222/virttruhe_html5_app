/**
 * Created by lexon222 on 04.09.15.
 */
function View(html_element){
    this.element = html_element;
}

var views ={}; //container for view objects
views.info_bar = new View($("#info_bar"));

