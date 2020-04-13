// Declaration
// "Nome do Estado" <-> "UF"
var estados =
    [
        {
            uf: "SP",
            verbose: "São Paulo"
        },
        {
            uf: "RJ",
            verbose: "Rio de Janeiro"
        },
        {
            uf: "AC",
            verbose: "Acre"
        },
        {
            uf: "AL",
            verbose: "Alagoas"
        },
        {
            uf: "AP",
            verbose: "Amapá"
        },
        {
            uf: "AM",
            verbose: "Amazonas"
        },
        {
            uf: "BA",
            verbose: "Bahia"
        },
        {
            uf: "CE",
            verbose: "Ceará"
        },
        {
            uf: "DF",
            verbose: "Distrito Federal"
        },
        {
            uf: "ES",
            verbose: "Espírito Santo"
        },
        {
            uf: "GO",
            verbose: "Goiás"
        },
        {
            uf: "MA",
            verbose: "Maranhão"
        },
        {
            uf: "MT",
            verbose: "Mato Grosso"
        },
        {
            uf: "MS",
            verbose: "Mato Grosso do Sul"
        },
        {
            uf: "MG",
            verbose: "Minas Gerais"
        },
        {
            uf: "PA",
            verbose: "Pará"
        },
        {
            uf: "PB",
            verbose: "Paraíba"
        },
        {
            uf: "PR",
            verbose: "Paraná"
        },
        {
            uf: "PE",
            verbose: "Pernambuco"
        },
        {
            uf: "PI",
            verbose: "Piauí"
        },
        {
            uf: "RN",
            verbose: "Rio Grande do Norte"
        },
        {
            uf: "RS",
            verbose: "Rio Grande do Sul"
        },
        {
            uf: "RO",
            verbose: "Rondônia"
        },
        {
            uf: "RR",
            verbose: "Roraima"
        },
        {
            uf: "SC",
            verbose: "Santa Catarina"
        },
        {
            uf: "SE",
            verbose: "Sergipe"
        },
        {
            uf: "TO",
            verbose: "Tocantins"
        }
    ];

function getUF(current) {
    for (i = 0; i < estados.length; i++) {
        if(estados[i].verbose == current) return(estados[i].uf);
    }

    // UF not found: returns to SP
    return("SP");
}

var current = $("#page-title").text()
