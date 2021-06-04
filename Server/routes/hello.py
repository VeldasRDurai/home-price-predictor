import pickle
import json
import numpy as np
import sklearn
import sys


def get_data_columns():
    with open("./artifacts/columns.json", "r") as f:
        data_columns = json.load(f)['data_columns']
        return data_columns


with open('./artifacts/banglore_home_prices_model.pickle', 'rb') as f:
    data_columns = get_data_columns()
    location, sqft, bhk, bath = sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4]
    model = pickle.load(f)

    try:
        loc_index = data_columns.index(location.lower())
    except:
        loc_index = -1

    x = np.zeros(len(data_columns))
    x[0] = int(sqft)
    x[1] = int(bath)
    x[2] = int(bhk)    
    if loc_index>=0:
        x[loc_index] = 1

    print( round(model.predict([x])[0],2) )
    
# print("loading saved artifacts...")
# print('Your Name is ', sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4])
# print(type(sys.argv[2]))
