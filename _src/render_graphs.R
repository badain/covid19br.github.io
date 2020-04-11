# Graph Rendering
library(widgetframe)
library(tidyverse)
library(plotly)
library(lubridate)

source("plots.R")

# Date and time
file<-file("../graphs/dataehora.txt")
writeLines(c(paste(now())), file)
close(file)

# Functions
makeNamedList <- function(...) {
  structure(list(...), names = as.list(substitute(list(...)))[-1L])
}

# Graphs
plots <- makeNamedList(plot.tempo.dupl) # Graficos a serem atualizados
filenames <- names(plots)
n <- length(plots)

for (i in 1:n){
    graph <- ggplotly(plots[[i]])
    filepath <- paste("../graphs/",filenames[i],sep="")
    orca(graph, paste(filepath,".svg",sep="")) # Static Graph
    saveWidget(frameableWidget(graph), file = paste(filepath,".html",sep=""), libdir="./libs") # Interative Graph
#   comand <- paste('rm -r ',filepath,sep="") ## por algum motivo o saveWidget ignora o parametro selfContained
#   system(paste(comand,'_files',sep=""))
}