import cv2
from flask import Flask
from flask import request
from tensorflow import keras
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

pics = ["C:/Users/james/Documents/Code/not-pot/data/test/probablyWeed.jpg"]
model = keras.models.load_model("model.h5")


@app.route('/')
def hello_world():
    return 'Not Pot'


@app.route('/api/model', methods=['GET', 'POST'])
def get_model():
    if request.method == 'GET':
        index = len(pics) - 1
        pic = pics[index]
        pic = cv2.imread(pic)

        return str(eval_image(pic, model))
    if request.method == 'POST':
        # TODO: get it to actually pass in a file
        # img = request.form["new_img"]
        #
        # return str(request.form)

        # jsonData = request.get_json()
        return str(request.form.values)


def eval_image(img, model):
    IMG_SIZE = 125
    RGB_MAX_VAL = 255.0
    img = cv2.resize(img, (IMG_SIZE, IMG_SIZE))
    img = img / RGB_MAX_VAL
    result = model.predict([[img]])
    return result[0][0]