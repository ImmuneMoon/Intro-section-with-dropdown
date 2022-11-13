// Waits for DOM load
$(() => {        
    let heading = $('#heading')
    if ($(document).width() <= 753) {
        heading.text("Make remote work");
        $('#hero').attr('src', './images/image-hero-mobile.png')
    }

    else {
        heading.innerText = `Make \nremote work`;
        $('#hero').attr('src', './images/image-hero-desktop.png')
    }

    window.addEventListener('resize', () => {
        if ($(document).width() <= 753) {
            heading.text("Make remote work");
            $('#hero').attr('src', './images/image-hero-mobile.png')

        }

        else {
            heading.text('Make \nremote work');
            $('#hero').attr('src', './images/image-hero-desktop.png')

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
            if ($(document).width() > 753) {
                    if (element.includes($('#feat_btn')[0]) ||
                        element.includes($('#features')[0]) ||
                        element.includes($('.arrow')[0]) ||
                        element.includes($('h3')[0]) ||
                        element.includes($('li')[0])) {

                    return
                }
                else {
                    $('#feat_menu').hide()
                }
            }
        }

        if ($('#comp_menu').css('display') == 'block') {
            // On medium or smaller screens
            if ($(document).width() > 753) {
                if (element.includes($('#comp_btn')[0]) ||
                    element.includes($('#company')[0]) ||
                    element.includes($('.arrow')[0]) ||
                    element.includes($('h3')[0]) ||
                    element.includes($('li')[0])) {

                    return
                }
                else {
                    $('#comp_menu').hide()
                }
            }
        }

    });
});

function features() {
    if ($('#feat_menu').css('display') == 'none') {
        $('#feat_menu').show();
    }

    else {
        $('#feat_menu').hide();
    }
}

function company() {
    if ($('#comp_menu').css('display') == 'none') {
        $('#comp_menu').show();
    }

    else {
        $('#comp_menu').hide();
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