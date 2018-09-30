
# coding: utf-8

# In[7]:


import pandas as pd
from newspaper import Article
import newspaper

csv = "../data/west_wing_reads.csv"
df = pd.read_csv(csv)


# In[22]:


top_10 = """
washingtonexaminer.com/politics
thehill.com
wsj.com/news/politics
washingtontimes.com/news/politics/
foxnews.com/politics.html
usatoday.com/washington/
washingtonpost.com/politics/?noredirect=on
nytimes.com/section/politics
cnn.com/politics
nbcnews.com/politics
"""

top_10_l = top_10.split()
num_of_articles = 50
publishers = []


# In[29]:


for i, publish_link in enumerate(top_10_l):
    url = "http://" + publish_link
    paper = newspaper.build(url, memoize_articles=False)
    name = publish_link[:publish_link.rindex('.')]
    
    publisher = {}
    
    articles = paper.articles[:15]
    articlesToDict = []
    
    for content in articles:
        
        try:
            content.download()
            content.parse()
        except Exception as e:
            print(e)
            print("continuing")
            continue
            
        # Again, for consistency, if there is no found publish date the article will be skipped.
        # After 10 downloaded articles from the same newspaper without publish date, the company will be skipped.
        if content.publish_date is None:
            continue

        
        article = {}
        article['title'] = content.title
        article['link'] = content.url
        article['date_published'] = content.publish_date.isoformat()
        articlesToDict.append(article)
        print(name + ": " + content.title)
    
    publisher['name'] = name
    publisher['articles'] = articlesToDict
    publishers.append(publisher)
    
    


# In[34]:


data = []
for i, publisher in enumerate(publishers):
    for a_i, article in enumerate(publisher['articles']):
        data.append(dict(zip(['name','title','link'],[publisher['name'],article['title'],article['link']])))


# In[41]:


write_data = pd.DataFrame(data)
new_order = [1, 0, 2]
write_data = write_data[write_data.columns[new_order]]
write_data.to_csv("../data/articles.csv")

