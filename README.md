# covid19br.github.io
Repositório do site [Observatório Covid-19 BR](https://covid19br.github.io/). 

Aqui você encontra os códigos para calcular as projeções e gerar os gráficos, assim como os dados usados.
  
## Como baixar e executar

Primeiro, clone o repositório em seu computador com `git clone`

Para executar o programa, rode o `update.R` da linha de comando, mas antes, verifique a instalação das dependências necessárias.

```bash
$ Rscript update.R
```

Provavelmente você vai precisar instalar:

  - A versão 3.6.3 (atual) do R
  - Rstudio
  - Bibliotecas de R
  
Veja a seção a seguir de instalação.

## Instalação do R 3.6.3 e RStudio

Instruções de instalação do R podem ser encontradas [aqui](https://cran.r-project.org/). É necessária a versão mais recente do R para executar o código. Se ja possui o R, verifique a versão com o comando
```bash
$ R --version
```
E atualize o R.

Para instalar o Rstudio, primeiro, entre [aqui](https://rstudio.com/products/rstudio/download/) e baixe o Rstudio Desktop

[Outras instruções] (https://uvastatlab.github.io/phdplus/installR.html) caso a instalação não funcione

## Instalação das bibliotecas em R

A instalação da maioria das bibliotecas se resolve com `install.packages("package_name")`, em R. No entanto, a Orca, usada para renderizar os plots interativos, não pode ser instalada assim. Para usar a Orca, é necessário anaconda. Veja [aqui](https://docs.anaconda.com/anaconda/install/) sobre como instalar Anaconda, e [aqui](https://github.com/plotly/orca) sobre como instalar Orca.

Ao instalar o conda e ativá-lo, seu prompt aparecerá assim:

```bash
(base) user@user: 
```

Quando rodamos o comando `$ orca`, o output esperado é

```bash
Plotly`s image-exporting utilities

  Usage: orca [--version] [--help] <command> [<args>]

  Available commands:
  - graph [or plotly-graph, plotly_graph]
    Generates an image of plotly graph from inputted plotly.js JSON attributes.
    For more info, run `orca graph --help`.
  - serve [or server]
    Boots up a server with one route per available export component
    For more info, run `orca serve --help`.
```

Se houver erros na instalação do orca por conda, tente executar os seguintes comandos, em `bash`:

```bash
$ conda install -c conda-forge nodejs
$ npm install -g electron@1.8.4 orca
```

Para instalar o restante das bibliotecas necessárias, execute no console do R ou adicione antes de tudo no arquivo `update.R`:
```r
# Copie no console. Se precisar de outra biblioteca, adicione aqui
install.packages("ggplot2")
install.packages("plotly")
install.packages("tidyr")
install.packages("dplyr")´
install.packages("widgetframe")
install.packages("rmarkdown")
install.packages("zoo")
install.packages("EpiEstim")
```

## Output do `update.R`

Alguns avisos aparecem após a execução, e ela demora um pouco. Espere terminar, e se não houver erros, os arquivos `.html` estarão atualizados.

## Adicionando novos blocos em uma página

## Adicionando novas páginas

## Alterando o título da página
Busque por ```<!-- PAGE.TITLE -->``` e substitua o título desejado.

## Adicionando itens no menu dos estados
Inclua os dados do estado no código a seguir e use-o para substituir ```<!-- ESTADOS.ITEM -->``` no arquivo .html:
```
<a class="dropdown-item" href="./siglaAqui.html">Nome do Estado</a>
<!-- ESTADOS.ITEM -->
```

## Adicionando itens no menu principal
Inclua os dados da página no código a seguir e use-o para substituir ```<!-- MENU.ITEM -->``` no arquivo .html: 
```
<li class="nav-item">
  <a class="nav-link" href="./ITEM.html">ITEM</a>
</li>
<!-- MENU.ITEM -->
```
No arquivo .hmtl do próprio item, o código deve ser o seguinte para correta indicação da página ativa:
```
<li class="nav-item active">
  <a class="nav-link" href="./ITEM.html">ITEM</a>
</li>
<!-- MENU.ITEM -->
```

## Alterando o logo do observatório
Busque por ```<!-- OBSERV.LOGO.IMAGEM -->``` e substitua o conteúdo de src="" pelo arquivo .svg desejado.

## Barra inferior
### Adicionando texto
Substitua ```<!-- FOOTER.TEXT -->``` pelo texto desejado usando as tags ```<div>```
```
<div>Seu texto aqui</div>
<!-- FOOTER.TEXT -->
```
