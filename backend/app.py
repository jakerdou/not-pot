import cv2
import os
from flask import Flask
from flask import request
from tensorflow import keras
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

model = keras.models.load_model("model.h5")
uploads_dir = os.path.join(app.root_path, 'uploaded-images')


@app.route('/')
def hello_world():
    return 'Not Pot'


@app.route('/api/model', methods=['GET', 'POST'])
def get_model():
    if request.method == 'POST':

        my_img_file = request.files['img']
        file_name = my_img_file.filename
        file_path = os.path.join(uploads_dir, file_name)

        # will probably want to use secure_filename for this in the future
        my_img_file.save(file_path)

        img = cv2.imread(file_path)
        percent_pot = str(eval_image(img, model))
        return percent_pot


def eval_image(img, model):
    IMG_SIZE = 125
    RGB_MAX_VAL = 255.0
    img = cv2.resize(img, (IMG_SIZE, IMG_SIZE))
    img = img / RGB_MAX_VAL
    result = model.predict([[img]])
    return result[0][0]
