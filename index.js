// TODO: Polyfill fetch

var url = "https://sheets.googleapis.com/v4/spreadsheets/1YgppTK_-AKbUv2rn_QFa6gqvF0qG3OFB15OeMULM4Tw/values/2%20Col?key=AIzaSyCem77u6PE4zsEvs87PJIe7Wj2xERXP6Mk"

fetch(url)
  .then(function(response) { return response.json() })
  .then(renderResponse);

function renderResponse(json) {
  console.log(json.values);
  var data = []

  //Massage data
  var trs = json.values.map(function(row) {
    var data = {"display": row[0], "email": row[1], "state": row[2]};

    return '\
<tr>\
  <td>' + data.display + '</td>\
  <td><a href="mailto:' + data.email + '">' + data.email + '</a></td>\
</tr>\
';
  })

  document.getElementById("tablebody").innerHTML = (trs.join("\n"));

}
