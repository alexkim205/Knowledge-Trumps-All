library(data.table)
library(dplyr)

data <- "data/west_wing_reads.csv"
t <- fread(data, header = TRUE)

t.filtered <- stack(table(t$publisher))

