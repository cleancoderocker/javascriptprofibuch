var EventFacade = {
        addEvent: function(element, event, callback) {
            if(window.addEventListener) {
                element.addEventListener(event, callback, false);
            } else if(document.attachEvent) {
                element.attachEvent('on' + event, callback );
            } else {
                element['on' + event] = callback;
            }
        }
    }
var button = document.getElementById('button');
EventFacade.addEvent(button, 'click', function() {
    console.log('Button gedrückt');
});