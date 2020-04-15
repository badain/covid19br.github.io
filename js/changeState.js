// Declaration
// "Nome do Estado" <-> "UF"
var estados =
    [
        {
            uf: "sp",
            verbose: "São Paulo"
        },
        {
            uf: "rj",
            verbose: "Rio de Janeiro"
        },
        {
            uf: "br",
            verbose: "Brasil",
        },
        {
            uf: "ac",
            verbose: "Acre"
        },
        {
            uf: "al",
            verbose: "Alagoas"
        },
        {
            uf: "ap",
            verbose: "Amapá"
        },
        {
            uf: "am",
            verbose: "Amazonas"
        },
        {
            uf: "ba",
            verbose: "Bahia"
        },
        {
            uf: "ce",
            verbose: "Ceará"
        },
        {
            uf: "df",
            verbose: "Distrito Federal"
        },
        {
            uf: "es",
            verbose: "Espírito Santo"
        },
        {
            uf: "go",
            verbose: "Goiás"
        },
        {
            uf: "ma",
            verbose: "Maranhão"
        },
        {
            uf: "mt",
            verbose: "Mato Grosso"
        },
        {
            uf: "ms",
            verbose: "Mato Grosso do Sul"
        },
        {
            uf: "mg",
            verbose: "Minas Gerais"
        },
        {
            uf: "pa",
            verbose: "Pará"
        },
        {
            uf: "pb",
            verbose: "Paraíba"
        },
        {
            uf: "pr",
            verbose: "Paraná"
        },
        {
            uf: "pe",
            verbose: "Pernambuco"
        },
        {
            uf: "pi",
            verbose: "Piauí"
        },
        {
            uf: "rn",
            verbose: "Rio Grande do Norte"
        },
        {
            uf: "rs",
            verbose: "Rio Grande do Sul"
        },
        {
            uf: "ro",
            verbose: "Rondônia"
        },
        {
            uf: "rr",
            verbose: "Roraima"
        },
        {
            uf: "sc",
            verbose: "Santa Catarina"
        },
        {
            uf: "se",
            verbose: "Sergipe"
        },
        {
            uf: "to",
            verbose: "Tocantins"
        }
    ];

function getUFCode(verbose) {
    for (i = 0; i < estados.length; i++) {
        if(estados[i].verbose == verbose) return(estados[i].uf);
    }

    // UF not found: returns to SP
    return("sp");
}

function getVerbose(uf) {
    for (i = 0; i < estados.length; i++) {
        if(estados[i].uf == uf) return(estados[i].verbose);
    }

    // UF not found: returns to SP
    return("sp");
}

function getCurrentUF() {
    var current = $("#page-title").text()
    return(getUFCode(current));
}

function hasUF(split_src) {
    // verifica se existe codigo uf no penultimo index
    for (i = 0; i < estados.length; i++) {
        if(estados[i].uf == split_src[(split_src.length - 2)]) return(true);
    }
    
    return(false);
}

function setActive(active) {
    // cleans
    $(".dropdown-item").removeClass("active");
    
    // updates
    var selector = ".dropdown-item:contains(" + active + ")";
    $(selector).addClass("active");
}

function setRequest(uf) {
    state = getVerbose(uf);
    $("#page-title").text(state);
    setActive(state);
}

function loadIframe(iframeName, url) {
    var $iframe = $('#' + iframeName);
    if ( $iframe.length ) {
        $iframe.attr('src',url);   
        return false;
    }
    return true;
}
function updateWidget() {
    // Get Current State
    const current_uf = getCurrentUF();

    // Get Widget's SRCs
    var widget_src = $("iframe").attr("src");

    // Process Current Graph's SRC
    var split_src = widget_src.split('.');

    // remove UF
    var new_src = "";

    // change UF
    for(i=0; i<split_src.length; i++) {
        if(i == (split_src.length - 2)) {
            new_src = new_src + "." + current_uf;
        }
        else {
            if(i==0) {
                new_src = new_src + split_src[i];
            }
            else {
                new_src = new_src + "." + split_src[i];
            }
        }
    }

    // Update SRCs
    $("iframe").attr("src", new_src);
}

function updateStatic() {
    // Get Current State
    const current_uf = getCurrentUF();

    // Get Graph's SRCs
    var graph_src = $(".codegena_iframe").attr("data-src");
    var graph_svg = $(".placeholder_svg").attr("src");

    // Process Current Graph's SRC
    var split_src = graph_src.split('.');
    var split_svg = graph_svg.split('.');

    // remove UF
    var new_src = "";
    var new_svg = "";

    // change UF
    if(hasUF(split_src)) {
        for(i=0; i<split_src.length; i++) {
            if(i == (split_src.length - 2)) {
                new_src = new_src + "." + current_uf;
                new_svg = new_svg + "." + current_uf;
            }
            else {
                if(i==0) {
                    new_src = new_src + split_src[i];
                    new_svg = new_svg + split_svg[i];
                }
                else {
                    new_src = new_src + "." + split_src[i];
                    new_svg = new_svg + "." + split_svg[i];
                }
            }
        }
    }
    else {
        for(i=0; i<split_src.length; i++) {
            if(i == (split_src.length - 2)) {
                new_src = new_src + "." + split_src[i] + "." + current_uf;
                new_svg = new_svg + "." + split_svg[i] + "." + current_uf;
            }
            else {
                if(i==0) {
                    new_src = new_src + split_src[i];
                    new_svg = new_svg + split_svg[i];
                }
                else {
                    new_src = new_src + "." + split_src[i];
                    new_svg = new_svg + "." + split_svg[i];
            }
            }
        }
    }
    
    // Update SRCs
    // HTML Widget
    $(".codegena_iframe").attr("data-src", new_src);
    // SVG Placeholder
    $(".placeholder_svg").attr("src", new_svg);
}

/* Main */

// First Load
// Sets requested state on #page-title via hash URL
var requested = $(location).attr('hash').substring(1);
if(requested.length == 2) setRequest(requested);

// Updates states based on #page-title
updateStatic();

// JQuery OnClick Update
$(".dropdown-item").click(function () {
    // se nao eh o item atual
    if(!$(this).hasClass("active")) {
        // troca o titulo
        $("#page-title").text($(this).text());

        // troca o estado ativo
        setActive($(this).text());

        // troca os gráficos
        if($(".placeholder_svg").length) updateStatic();

        // atualiza o iframe
        else updateWidget();
    }
})