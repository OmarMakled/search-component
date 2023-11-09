var http = require('http');
http.createServer(function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.writeHead(200,{'Content-Type': 'application/json'});
  res.end(JSON.stringify({ 
    image: {
      list: [
        {text: 'Kitchen', value: 'kitchen'},
        {text: 'Kitchen niche', value: 'kitchen_niche'}
      ],
      operators: [
        {text: '', 'value': ''},
        {text: 'AND', 'value': 'and'},
        {text: 'OR', 'value': 'or'}
      ],
      options: {
        multiple: true,
        type: 'dropdown'
      }
    },
    color: {
      list: [
        {text: 'Red', value: 'red'},
        {text: 'Green', value: 'green'},
        {text: 'Black', value: 'black'},
        {text: 'White', value: 'white'},
        {text: 'Grey', value: 'grey'},
      ],
      operators: [
        {text: '', 'value': ''},
        {text: 'AND', 'value': 'and'},
        {text: 'OR', 'value': 'or'},
      ],
      options: {
        multiple: true,
        type: 'dropdown'
      }
    },
   }));
  
  res.end();
}).listen(5000);