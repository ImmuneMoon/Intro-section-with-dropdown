// Waits for DOM load
$(() => {        
    let heading = $('#heading')
    if ($(document).width() <= 753) {
        $('#hero').attr('src', './images/image-hero-mobile.png')
    }

    else {
        $('#hero').attr('src', './images/image-hero-desktop.png')
    }

    window.addEventListener('resize', () => {
        if ($(document).width() <= 753) {

            $('#hero').attr('src', './images/image-hero-mobile.png')

            $('#nav_container').hide();

            $('#veil').hide();

            $('#menu_icn').show();

        }

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
        let element = []
        element.push(event.target);

        if ($('#feat_menu').css('display') == 'block') {
            // On medium or smaller screens
            if (element.includes($('#features')[0]) ||
                element.includes($('#feat_menu')[0]) ||
                element.includes($('#feat_arrow')[0]) ||
                element.includes($('#company')[0]) ||
                element.includes($('#comp_menu')[0]) ||
                element.includes($('#comp_arrow')[0])) {
                return
            }
            else {
                $('#feat_menu').hide();
                $('#feat_arrow').attr('src','./images/icon-arrow-down.svg') 
            }
            
        }

        if ($('#comp_menu').css('display') == 'block') {
            // On medium or smaller screens
            if (element.includes($('#company')[0]) ||
                element.includes($('#comp_menu')[0]) ||
                element.includes($('#comp_arrow')[0]) ||
                element.includes($('#features')[0]) ||
                element.includes($('#feat_menu')[0]) ||
                element.includes($('#feat_arrow')[0])) {
                return
            }
            else {
                $('#comp_menu').hide();
                $('#comp_arrow').attr('src','./images/icon-arrow-down.svg') 
            }
            
        }

    });

    // Listens for scrolling
    window.addEventListener("scroll", () => {
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