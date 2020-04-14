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

function getUFCode(current) {
    for (i = 0; i < estados.length; i++) {
        if(estados[i].verbose == current) return(estados[i].uf);
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

function setActive() {

}

function updateGraphs() {
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
    $(".codegena_iframe").attr("data-src", new_src);
    $(".placeholder_svg").attr("src", new_svg);
}

// Main
setActive();
updateGraphs();

$(".dropdown-item").click(function () {
    // se nao eh o item atual
    if(!$(this).hasClass("active")) {
        // troca o titulo
        $("#page-title").text($(this).text());
        // troca o estado ativo
        $(".dropdown-item").removeClass("active");
        $(this).addClass("active");
        // troca os gráficos
        updateGraphs();
    }
})