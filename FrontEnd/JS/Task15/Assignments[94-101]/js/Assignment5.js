let elements = document.querySelectorAll('div, span, p, article, section');
        elements.forEach(element => {
            element.addEventListener('click', function() {
                console.log(`This Is ${element.tagName}`);
            });
        });