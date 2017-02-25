// TODO: Polyfill fetch

var url = "https://sheets.googleapis.com/v4/spreadsheets/1YgppTK_-AKbUv2rn_QFa6gqvF0qG3OFB15OeMULM4Tw/values/2%20Col?key=AIzaSyCem77u6PE4zsEvs87PJIe7Wj2xERXP6Mk"

fetch(url)
  .then(function(response) { return response.json() })
  .then(function(json) { console.log(json.values) });
