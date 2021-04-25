#
# import numpy as np
#
# from pandas import read_csv
# path=r"Data.csv"
# headernames=['App Name','App Id','Category','Rating','Rating Count','Installs','Minimum Installs','Maximum Installs','Free','Price','Currency','Size','Minimum Android','Developer Id','Developer Website','Developer Email','Released','Last Updated','Content Rating','Privacy Policy','Ad Supported','In App Purchases','Editors Choice'
# ,'Outcome']
# data=read_csv(path,names=headernames)
# print(data.head(50))
from collections import Counter

import numpy as np
import pandas as pd

playstore_data = pd.read_csv("detailsFinal.csv")
np.random.seed(0)
playstore_reviewData= pd.read_csv("reviews.csv")
np.random.seed(0)

selectiveTitle=['app Title','Downloads','Rating','appDeveloper','1 star','2 star','3 star','4 star','5 star','price']
playstore_data.drop(selectiveTitle, axis=1, inplace=True)
print(playstore_data.head())

missing_vales=playstore_data.isnull().sum()
print(missing_vales[0:10])

print(playstore_data.head(5))
print(playstore_data.sort_values(by=['Actual Downloads']))

playstore_data['android Version'] = np.where(playstore_data['android Version'] == 'VARY', 1, 0)
print(playstore_data['android Version'])

playstore_data['Rounded Rating'] = np.where(playstore_data['Rounded Rating'] > 3.0, 1, 0)
print(playstore_data['Rounded Rating'])

playstore_data['Summative Rating'] = np.where(playstore_data['Summation of 4star+5star'] > playstore_data['Summation of 1star+2star+3star'], 1, 0)
print(playstore_data['Summative Rating'])


playstore_data['Summation of 1star+2star+3star'] = np.where(playstore_data['Summation of 1star+2star+3star'].isnull(), 0, 1)
playstore_data['Summation of 4star+5star'] = np.where(playstore_data['Summation of 4star+5star'].isnull(), 0, 1)

print(playstore_data.head(5))

df = pd.DataFrame(playstore_data,
                columns=pd.Index(['appId', 'Actual Downloads', 'Rounded Rating', 'No. of ratings',
                                  'Summation of 1star+2star+3star', 'Summation of 4star+5star', 'size',
                                  'android Version', 'Summary', 'Description','Marks'], name='attributes'))
print(df.dtypes)
target=playstore_data['Marks']
df['Summary'] = df['Summary'].str.split(n=1).str[1]
print(df['Summary'])
df['Summary'] = df['Summary'].replace("is", "")
print(df['Summary'])


# selected_words = ['awesome', 'great', 'fantastic', 'amazing', 'love', 'horrible', 'bad', 'terrible', 'awful', 'wow', 'hate']
# def count_words(df, selected_words):
#     words_count = Counter()
#
#     df.sentences = df.sentences.replace(r"[{}]".format(string.punctuation.replace("'","")),"")
#     df.sentences = df.sentences.str.strip().str.lower().str.split()
#     for sentence in df.sentences:
#
#         words_count.update(x for x in sentence if x in selected_words)
#         words = df.sentences.str.split(expand=True).stack()
#         words = words[words.isin(selected_words)]
#         return words.value_counts()

Raters = np.array([playstore_data['No. of ratings']])


playstore_data['No. of ratings'] = np.where(playstore_data['No. of ratings'] >= 1000000, 5, playstore_data['No. of ratings'])
playstore_data['No. of ratings'] = np.where(playstore_data['No. of ratings'] >= 100000, 4, playstore_data['No. of ratings'])
playstore_data['No. of ratings'] = np.where(playstore_data['No. of ratings'] >= 10000, 3, playstore_data['No. of ratings'])
playstore_data['No. of ratings'] = np.where(playstore_data['No. of ratings'] >= 1000, 2, playstore_data['No. of ratings'])
playstore_data['No. of ratings'] = np.where(playstore_data['No. of ratings'] >= 100, 1,playstore_data['No. of ratings'])

print(playstore_data['No. of ratings'])

playstore_data['Actual Downloads'] = np.where(playstore_data['Actual Downloads'] >= 10000000, 5, playstore_data['Actual Downloads'])
playstore_data['Actual Downloads'] = np.where(playstore_data['Actual Downloads'] >= 1000000, 4, playstore_data['Actual Downloads'])
playstore_data['Actual Downloads'] = np.where(playstore_data['Actual Downloads'] >= 100000, 3, playstore_data['Actual Downloads'])
playstore_data['Actual Downloads'] = np.where(playstore_data['Actual Downloads'] >= 10000, 2, playstore_data['Actual Downloads'])
playstore_data['Actual Downloads'] = np.where(playstore_data['Actual Downloads'] >= 10, 1,playstore_data['Actual Downloads'])

print(playstore_data['Actual Downloads'])
playstore_data['size'] = playstore_data['size'].replace("Varies with device", 7)
playstore_data['size'] = playstore_data['size'].astype(np.float64)

print(playstore_data['size'])
print(type(playstore_data['size']))
playstore_data['size'] = np.where(playstore_data['size'] >= 100, 1, playstore_data['size'])
playstore_data['size'] = np.where(playstore_data['size'] >= 80, 2, playstore_data['size'])
playstore_data['size'] = np.where(playstore_data['size'] >= 60, 3, playstore_data['size'])
playstore_data['size'] = np.where(playstore_data['size'] >= 40, 4, playstore_data['size'])
playstore_data['size'] = np.where(playstore_data['size'] >= 10, 5, playstore_data['size'])

print(playstore_data['size'])

from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(playstore_data,target,test_size=0.3)
print(len(playstore_data))
print(len(X_train))
print(len(X_test))


# from sklearn.feature_extraction.text import CountVectorizer
# v = CountVectorizer()
# X_train_count = v.fit_transform(X_train.values)
# X_train_count.toarray()[:3]

# from sklearn.naive_bayes import MultinomialNB
# model = MultinomialNB()
# model.fit(X_train_count,y_train)

# selected_words_count=v.transform(selected_words)
# model.predict(selected_words_count)
#
# X_test_count = v.transform(X_test)
# print(model.score(X_test_count, y_test))
# print(len(X_train))
# print(len(X_test))

# print(playstore_data.head(4))
# for
# if playstore_data["size"] == :
#     if playstore_data["Actual Downloads"] == 1:
#         playstore_data['Marks']= '30%'
#
#     else:
#         print("0")


# Value= [3.99, 4.99]
# App_price = {0: 0, 3.99: 1}
# playstore_data['price']= playstore_data['price'].map(App_price)















