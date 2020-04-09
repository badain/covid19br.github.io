# covid19br.github.io
Repositório do site [Observatório Covid-19 BR](https://covid19br.github.io/). 

Aqui você encontra os códigos para calcular as projeções e gerar os gráficos, assim como os dados usados.

Para executar o programa, simplesmente rode o `update.R`. Mas primeiro, instale:
  - A versão 3.6.9 (atual) do R
  - Bibliotecas de R
  - Anaconda
  - Orca (biblioteca de R)

A instalação da maioria das bibliotecas se resolve com `install.packages("package_name")`, em R. No entanto, para usar a Orca, é necessário anaconda. Veja [aqui](https://docs.anaconda.com/anaconda/install/) como instalar Anaconda, e [aqui] como instalar Orca.

bibliotecas necessárias:
```r
# Copie no console. Se precisar de outra biblioteca, adicione aqui
install.packages("widgetframe")
```