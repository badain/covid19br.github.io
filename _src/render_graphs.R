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
    orca(graph, paste(filenames[i],".svg",sep="")) # Static Graph
    saveWidget(frameableWidget(graph), file = paste(filenames[i],".html",sep="")) # Interative Graph 
}