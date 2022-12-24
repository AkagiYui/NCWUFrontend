from flask import Flask, render_template, request, redirect

app = Flask(__name__)
app.template_folder = './'
app.static_folder = './'

@app.route('/')
def index():
  return render_template('index.html')

@app.route('/<path:path>')
def static_file(path):
  return app.send_static_file(path)

@app.route('/submit', methods=['POST'])
def submit():
  name = request.form['name']
  location = request.form['location']
  email = request.form['email']
  print('name: {}, location: {}, email: {}'.format(name, location, email))
  return ''

@app.route('/submit', methods=['GET'])
def submit_get():
  return redirect('/')

if __name__ == '__main__':
  app.run()
