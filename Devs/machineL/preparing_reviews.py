import pandas as pd
import numpy as np
import text_processor as tp
import pickle


# read data
reviews = pd.read_csv("reviews.csv")
reviews

## Filtering the data set and creating a data set with Three coloumns 
## Catagarizing the reviews 
## below 3 -- Negative
## Above 3 -- Positive
def process_df(reviews):
    reviews1 = reviews[['Text','Score']]
    reviews1_filter = reviews1[reviews1['Score'] != 3]
    sentiment_dict = {1:0, 2:0, 4:1, 5:1} 
    reviews1_filter['sentiment Analysis'] = reviews1_filter['Score'].map(sentiment_dict)
    return reviews1_filter
  
 reviews1 = process_df(reviews)
 reviews1.head() 
    
## Counting the reviews in each sentiment Catagory
reviews1.groupby(reviews1['sentiment Analysis']).count()

reviews1.shape

# save the dataset
with open('pickles/reviews1.pickle', 'wb') as data:
    pickle.dump(reviews1, data)
