class mess {
  constructor(status, message){
    this.status = status;
    this.message = message;
  }
}

const error = {

}

const success = {
  GET_QUIZ_SUCCESS: new mess(200, 'Get quiz success.'),
  ADD_QUIZ: new mess(201, 'Add quiz success'),
  DELETE_QUIZ: new mess(202, 'Delete quiz success'),
}

module.exports = {success, error}; 

