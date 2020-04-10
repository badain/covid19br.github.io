# Graph Rendering
library(widgetframe)
library(plotly)

# Functions
makeNamedList <- function(...) {
  structure(list(...), names = as.list(substitute(list(...)))[-1L])
}

# Graphs
plots <- makeNamedList(plot.tempo.dupl) # Graficos a serem atualizados
n <- length(plots)
filenames <- names(plots)

for (i in 1:n){
    graph <- ggplotly(plots[[i]])
    filepath <- paste("../graphs/",filenames[i],sep="")
    orca(graph, paste(filepath,".svg",sep="")) # Static Graph
    saveWidget(graph, file = paste(filepath,".html",sep=""), libdir="../libs") # Interative Graph
#    comand <- paste('rm -r ',filepath,sep="")
#    system(paste(comand,'_files',sep=""))
}