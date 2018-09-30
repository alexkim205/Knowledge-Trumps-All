library(tidyverse)
library(ggplot2)
install.packages('plotly')
library(plotly)
install.packages('ggthemes')
library('ggthemes')

#install.packages('boot')
library(boot)
options(repos = c(CRAN = "http://cran.rstudio.com"))
install.packages('shiny')


data1 <- read.csv('/Users/PatrickApple/Documents/GitHub/cdss-hackathon-2018/src/BothSiteData.csv',header = TRUE)
data1
colnames(data1)[5]<-'GZero'
colnames(data1)[2]<-'Trump'
data2=aggregate(data1[,4:5],list(data1$Publisher),mean)
data2
x=ggplot(data2,aes(x=Magnitude,y=Score,fill=factor(Group.1)))+geom_point(size=3.8)+geom_hline(yintercept = 0)+ylab("Positivity Score")+scale_fill_discrete(name = "")+ggtitle('Sentiment Analysis of News Sites')
#z <- ggplot(createData,aes(x=A))+geom_histogram(breaks = seq(-10.01,160.01,10),closed='left')+scale_x_continuous(breaks = seq(-10,160,10))+scale_y_continuous(breaks=seq(0,12,2))
ggplotly(x)

y=ggplot(data1,aes(x=Magnitude,y=Score,fill=factor(GZero)))+geom_point(alpha=0.4,aes(colour=factor(GZero)))+geom_hline(yintercept = 0)+ylab("Positivity Score")+ggtitle('Sentiment Analysis of News Sites')+facet_wrap(Publisher ~.)
y
ggplotly(y)

data1

dataTrump=data1[data1$Trump == 1,]
dataTrump
z=ggplot(dataTrump,aes(x=Magnitude,y=Score,fill=factor(GZero)))+geom_point(alpha=1,size=2.3,aes(colour=factor(GZero)))+geom_hline(yintercept = 0)+ylab("Positivity Score")+ggtitle('Sentiment Analysis of News Sites')
z=z+ylim(-1,1)+theme_minimal()
ggplotly(z)

par(new=TRUE)
dataNotTrump=data1[data1$Trump == 0,]
dataNotTrump
p=ggplot(dataNotTrump,aes(x=Magnitude,y=Score,fill=factor(GZero)))+geom_point(alpha=1,size=2.3,aes(colour=factor(GZero)))+geom_hline(yintercept = 0)+ylab("Positivity Score")+ggtitle('Sentiment Analysis of News Sites')#geom_point(alpha=0.02,size=10,aes(x=Magnitude,y=Scorecolour=factor(GZero)))
p=p+ylim(-1,1)+theme_minimal()
ggplotly(p)

