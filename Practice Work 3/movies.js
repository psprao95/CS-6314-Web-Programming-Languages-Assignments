function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "movies.xml", true);
  xmlhttp.send();
}
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Title</th><th>Genre</th><th>MPAA rating</th><th>Director</th><th>Cast</th><th>Short Description</th><th>IMDB Rating</th></tr>";
  var x = xmlDoc.getElementsByTagName("movie");

  for (i = 0; i <x.length; i++)
  {
    table += "<tr><td>" + x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +"</td><td>";

    var res=x[i].getElementsByTagName("genre");
    for(j=0;j<res.length;j++)
    {
      table+=res[j].childNodes[0].nodeValue + ", ";
    }
    table+="</td>";

    table+= "<td>" + x[i].getElementsByTagName("mpaa-rating")[0].childNodes[0].nodeValue+"</td>";
    table+= "<td>" + x[i].getElementsByTagName("director")[0].childNodes[0].nodeValue+"</td><td>";

    var set=x[i].getElementsByTagName("person");
    for(j=0;j<set.length;j++)
    {
      table += set[j].getAttribute("name") + ", ";
    
    }
    table+="</td>";

    table+= "<td>" + x[i].getElementsByTagName("synopsis")[0].childNodes[0].nodeValue+"</td>";
    table+= "<td>" + x[i].getElementsByTagName("score")[0].childNodes[0].nodeValue+"</td>";
    table+="</tr>";


  }
  document.getElementById("demo").innerHTML = table;
}
