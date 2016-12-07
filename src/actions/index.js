function requestData () {
  return {
    type: 'REQUEST_DATA'
  }
}
function receiveData (json) {
  return {
    type: 'RECEIVE_DATA',
    data: json
  }
}
function receiveError (json) {
  return {
    type: 'RECEIVE_ERROR',
    data: json
  }
}