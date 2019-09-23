chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('main_page.html', {
        'outerBounds': {
            'width': 320,
            'height': 520
        }
    })
});







