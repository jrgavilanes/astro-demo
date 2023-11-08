exports.handler = async (event, context) => {
    return {
      statusCode: 200, // Código de estado HTTP 200 (éxito)
      body: JSON.stringify({ message: "Hola desde mi función serverless" }),
    };
  };
  