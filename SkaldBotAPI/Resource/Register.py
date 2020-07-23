from flask_restful import Resource
from Classes.SQL import SQL
from SkaldBotAPI import app
from flask import json, request
from Models.Models import *


class Register(Resource):
    def post(self):
        if SQL.test_connect_to_dbo():
            #print('Registering user...')
            req_data = request.get_json()

            #print(req_data);
            
            user = User(req_data['username'], req_data['password'])
    
            isAuth = SQL.register(user)

            if isAuth:
                response = app.response_class(
                        response = json.dumps({"Message": "LoginSuccess"}),
                        status = 200,
                        mimetype='application/json'
                    )
                return response
            else:
                response = app.response_class(
                    status=424,
                    mimetype='application/json'
                )
                return response

