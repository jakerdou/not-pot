import cv2
# import os
# import urllib
import numpy as np
from flask import Flask
from flask import request
# from tensorflow import keras
from flask_cors import CORS
# from flask_pymongo import PyMongo
# from config import mongo_pswd


# TODO: need to verify type of file, it will fail and the server app will crash if the wrong file is put in
# TODO: add tensorflow to requirements.txt

app = Flask(__name__)
CORS(app)

# app.config["MONGO_URI"] = 'mongodb+srv://not-pot:' + urllib.parse.quote_plus(mongo_pswd) + '@cluster0-inwzh.mongodb.net/test?retryWrites=true&w=majority'
# mongo = PyMongo(app)
#
# db = mongo.db

# model = keras.models.load_model("model.h5")


@app.route('/')
def hello_world():
    return 'Not Pot'


@app.route('/api/model', methods=['GET', 'POST'])
def get_model():
    if request.method == 'POST':

        img_file = request.files['img']
        filestr = img_file.read()
        npimg = np.fromstring(filestr, np.uint8)
        img = cv2.imdecode(npimg, cv2.IMREAD_COLOR)

        # percent_pot = str(eval_image(img, model))
        percent_pot = "0.984"

        # we kinda don't need the database, just to read the file taht's passed in
        # mongo.save_file(file_name, my_img_file)
        return percent_pot


# def eval_image(img, model):
#     IMG_SIZE = 125
#     RGB_MAX_VAL = 255.0
#     img = cv2.resize(img, (IMG_SIZE, IMG_SIZE))
#     img = img / RGB_MAX_VAL
#     result = model.predict([[img]])
#     return result[0][0]
