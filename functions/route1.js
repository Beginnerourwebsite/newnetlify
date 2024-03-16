// route1.js
exports.handler = async (event, context) => {
    // Your Express route logic here
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Hello from route1' })
    };
  };
  