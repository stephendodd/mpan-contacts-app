// TODO: Polyfill fetch

var url = "https://sheets.googleapis.com/v4/spreadsheets/1YgppTK_-AKbUv2rn_QFa6gqvF0qG3OFB15OeMULM4Tw/values/2%20Col?key=AIzaSyCem77u6PE4zsEvs87PJIe7Wj2xERXP6Mk"

fetch(url)
  .then(parseResponse)
  .then(renderResponse);

function parseResponse(response) {
  return response.json()
}

function renderResponse(json) {

  //Massage data
  var headers = json.values.shift()
  console.log(headers);
  var trs = json.values.map(function(row) {
var data = {}
data[headers[0].toLowerCase()] = row[0]
data[headers[1].toLowerCase()] = row[1]
data[headers[2].toLowerCase()] = row[2]

    return '\
<tr>\
  <td>' + data.display + '</td>\
  <td><a href="mailto:' + data.email + '">' + data.email + '</a></td>\
</tr>\
';
  })

  document.getElementById("tablebody").innerHTML = (trs.join("\n"));

}
