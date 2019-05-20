import os
from datetime import datetime as dt
from random import randrange

from bottle import route, run, static_file, view


# @route("/")
# def index():
#     return "<h1>Success!</h1>"


@route("/api/roll/<some_id:int>")
def example_api_response(some_id):
    return {
        "requested_id": some_id,
        "random_number": randrange(some_id)
    }


@route("/")
@view("home")
def example_template_render():
    return {"now": dt.now().isoformat()}


@route('/static/css/<filename>')
def send_css(filename):
    return static_file(filename, root='static/css')

@route('/static/<filename>')
def send_js(filename):
    return static_file(filename, root='static')



if os.environ.get('APP_LOCATION') == 'heroku':
    run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))
else:
    run(host='localhost', port=8080, debug=True)
