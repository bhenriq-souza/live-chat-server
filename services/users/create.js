
module.exports = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Testandoum dois tres',
      input: { event, context },
    }),
  };
  callback(null, response);
}