$(document).ready(function () { 

  exports.corsEnabledFunction = (req, res) => {
    // Set CORS headers
    // e.g. allow GETs from any origin with the Content-Type header
    // and cache preflight response for an 3600s
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "GET");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.set("Access-Control-Max-Age", "3600");
    // Send response to OPTIONS requests and terminate the function execution
    if (req.method == 'OPTIONS') {
      res.status(204).send('');
    }
    // Continue with function code
    
  }

})