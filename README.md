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

## Atualizando e criando novas páginas
O arquivo `template.html` é um bom ponto de partida para criação de novas páginas. Ele inclui as barras de navegação superiores e inferiores pré-fabricadas, bem como a estrutura principal do corpo.
A estrutura do site é composta por quatro principais grupos:

### 1. Barra Superior
A barra superior é o elemento flutuante que inclui o logo, o menu de estados e o menu de paginas do site.

#### Adicionando itens no menu dos estados
Inclua os dados do estado no código a seguir e use-o para substituir `<!-- ESTADOS.ITEM -->` no arquivo .html:
```
<a class="dropdown-item" href="./siglaAqui.html">Nome do Estado</a>
<!-- ESTADOS.ITEM -->
```

#### Adicionando itens no menu principal
Inclua os dados da página no código a seguir e use-o para substituir `<!-- MENU.ITEM -->` no arquivo .html: 
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

#### Alterando o logo do observatório
Busque por `<!-- OBSERV.LOGO.IMAGEM -->` e substitua o conteúdo de `src=""` pelo arquivo .svg desejado.

### 2. Título Principal
Este grupo inclui o título principal da página e a data de atualização.
#### Alterando o título da página
Busque por `<!-- PAGE.TITLE -->` e substitua o conteúdo após `<h1 class="display">` pelo título desejado.

### 3. Cards de conteúdo
Os cards armazenam todas as informações importantes do corpo da página. Conforme mais cards de conteúdo são adicionados sua disposição é atualizada atuomáticamente.
#### Adicionando novos cards em uma página

### 4. Barra inferior
A barra inferior é o elemento fixo no final da página.
#### Adicionando texto
Substitua `<!-- FOOTER.TEXT -->` pelo texto desejado usando as tags `<div>`
```
<div class="footer-content">Seu texto aqui</div>
<!-- FOOTER.TEXT -->
```
#### Adicionando texto com ícones
Como o site inclui a [biblioteca Ionicons](https://ionicons.com) é possível adicionar ícones seguidos de texto na barra inferior.

Substitua `<!-- FOOTER.TEXT -->` pelo seguinte código, personalizando o texto e o ícone:
```
<div class="footer-content"> 
  <ion-icon name="logo-github"></ion-icon>
  <p class="mb-0 ml-1"><a href="Seu link aqui" target="_blank" class="text-reset">Seu texto aqui</a></p>
</div>
<!-- FOOTER.TEXT -->
```
Para trocar o ícone basta substituir `<ion-icon name="logo-github"></ion-icon>` pelo código do ícone desejado, obtido em [Ionicons](https://ionicons.com)

### Lembre-se
Alterações nas barras superior e inferior devem ser incluidas em todos os arquivos .html para garantir consistência na navegação.