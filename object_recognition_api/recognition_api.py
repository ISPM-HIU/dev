from flask import Flask, request, jsonify
import cv2
import numpy as np
from werkzeug.utils import secure_filename
import os

app = Flask(__name__)
UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    if file:
        filename = secure_filename(file.filename)
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(file_path)
        
        # After saving, perform template matching
        result = perform_template_matching(file_path)

        return jsonify({'message': 'File uploaded successfully.', 'result': result}), 200

def perform_template_matching(main_image_path):
    # Load the main image
    img = cv2.imread(main_image_path)
    gray_img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # list of template images
    template_paths = ['models/fako.jpg','models/fako1.jpg','models/fako2.jpg','models/fako3.jpg','models/fako4.jpg']  
    threshold = 0.8

    matches_found = []

    for template_path in template_paths:
        # Load the current template
        template = cv2.imread(template_path)
        template_gray = cv2.cvtColor(template, cv2.COLOR_BGR2GRAY)
        w, h = template_gray.shape[::-1]

        # Perform template matching with the current template
        res = cv2.matchTemplate(gray_img, template_gray, cv2.TM_CCOEFF_NORMED)

        # Find locations where the matching score is above the threshold
        loc = np.where(res >= threshold)

        # Draw rectangles around the found locations
        for pt in zip(*loc[::-1]):  # Iterate over all points above the threshold
            cv2.rectangle(img, pt, (pt[0] + w, pt[1] + h), (0, 255, 0), 2)
            matches_found.append(template_path)

    return matches_found


if __name__ == '__main__':
    app.run(debug=True, port=5000)
