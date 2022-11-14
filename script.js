// Waits for DOM load
$(() => {
    if ($(document).width() <= 753) {
        // Changes hero image to mobile version when viewport is below medium sizing
        $('#hero').attr('src', './images/image-hero-mobile.png')
    }

    else {
        // Changes hero image to desktop version when not below medium sizing
        $('#hero').attr('src', './images/image-hero-desktop.png')
    }
    // Listens for window resizing
    window.addEventListener('resize', () => {
        /* 
        Collapses navbar on resize if visible when below medium sizing on resize 
        and sets hero image to mobile version
        */
        if ($(document).width() <= 753) {

            $('#hero').attr('src', './images/image-hero-mobile.png')

            $('#nav_container').hide();

            $('#veil').hide();

            $('#menu_icn').show();

        }
        /* 
        When rezising above medium veiwport, hides veil, 
        switches to desktop hero image and makes navbar visible 
        */
        else {
            $('#hero').attr('src', './images/image-hero-desktop.png')

            $('#close').hide();

            $('#veil').hide();

            if ($('#nav_container').css('display') == 'none') {
                $('#nav_container').css({
                    'display' : 'flex'
                });
            }

        }
    });

    // Listens for click events
    document.addEventListener('click', (event) => {
        // Array for storing the currently clicked element
        let element = []
        element.push(event.target);

        if ($('#feat_menu').css('display') == 'block') {
            if (element.includes($('#features')[0]) ||
                element.includes($('#feat_menu')[0]) ||
                element.includes($('#feat_arrow')[0]) ||
                element.includes($('#company')[0]) ||
                element.includes($('#comp_menu')[0]) ||
                element.includes($('#comp_arrow')[0])) {
                return
            }
            // Otherwise, #feat_menu hides and the arrow icon switches to it's closed version
            else {
                $('#feat_menu').hide();
                $('#feat_arrow').attr('src','./images/icon-arrow-down.svg') 
            }
            
        }

        if ($('#comp_menu').css('display') == 'block') {
            /*
            On medium or smaller screens if clicks include these elements, 
            the #comp_menu element doesnt hide
            */
            if (element.includes($('#company')[0]) ||
                element.includes($('#comp_menu')[0]) ||
                element.includes($('#comp_arrow')[0]) ||
                element.includes($('#features')[0]) ||
                element.includes($('#feat_menu')[0]) ||
                element.includes($('#feat_arrow')[0])) {
                return
            }
            // Otherwise, #comp_menu hides and the arrow icon switches to it's closed version
            else {
                $('#comp_menu').hide();
                $('#comp_arrow').attr('src','./images/icon-arrow-down.svg') 
            }
            
        }

        // Allows the learnmore button to have a click effect
        if (element.includes($('#learn_more')[0])) {
            // Changes color to inverted color
            $('#learn_more').css({
                'color' : 'hsl(0, 0%, 8%)',
                'background-color' : 'hsl(0, 0%, 98%)'
            });
            // Changes back after 150ms
            setTimeout(() => {
                $('#learn_more').css({
                    'color' : 'hsl(0, 0%, 98%)',
                    'background-color' : 'hsl(0, 0%, 8%)'
                });
            }, 150)
        }

    });

    // Listens for scrolling
    window.addEventListener("scroll", () => {
        // Hides #feat_menu and #comp_menu on scroll, changes arrows to closed version
        if ($(document).width() > 753) {
            if ($('#feat_menu').css('display') != 'none' ||
                $('#comp_menu').css('display') != 'none') {
                    $('#feat_menu').hide();
                    $('#comp_menu').hide();
                    $('#feat_arrow').attr('src','./images/icon-arrow-down.svg')
                    $('#comp_arrow').attr('src','./images/icon-arrow-down.svg')

            }
        }
    });
});

function features() {
    // When #feat_menu is clicked, if hidden, it is shown, otherwise it hides
    if ($('#feat_menu').css('display') == 'none') {
        $('#feat_menu').show();
        $('#feat_arrow').attr('src','./images/icon-arrow-up.svg') 
    }

    else {
        $('#feat_menu').hide();
        $('#feat_arrow').attr('src','./images/icon-arrow-down.svg') 
    }
}

function company() {
    // When #comp_menu is clicked, if hidden, it is shown, otherwise it hides
    if ($('#comp_menu').css('display') == 'none') {
        $('#comp_menu').show();
        $('#comp_arrow').attr('src','./images/icon-arrow-up.svg') 
    }

    else {
        $('#comp_menu').hide();
        $('#comp_arrow').attr('src', './images/icon-arrow-down.svg')
    }
}

function menu() {
    // shows nav menu when menu icon is clicked on small screens if hidden, otherwise it hides
    if ($('#nav_container').css('display') == 'none') {
        $('#nav_container').css({
            'display' : 'flex',
        });

        $('#menu_icn').hide();

        $('#close').show();

        $('#veil').show();
    }

    else {
        $('#nav_container').css({
            'display' : 'none'
        });

        $('#menu_icn').show();

        $('#close').hide();

        $('#veil').hide();
    }


}