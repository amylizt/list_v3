async function fetchlist (file) {
    var response = await fetch(file);
    var data = await response.json();
    return data
}
  
  function makeform (data) {
    var br = document.createElement("br")
    var form = document.createElement("form");
    //var txt = document.createElement("p");
    //console.table(data);
    for (var i = 0; i < data.length; i++) {
        value = data[i];
        var ID = document.createElement("input")
        var label = form.appendChild(document.createTextNode(value.subtext));
        ID.setAttribute("type", value.type);
        console.log(data[i].options);
          for(var j = 0; j < data[i].length ; j++) {
                console.table(data[i]);
            for(var k = 0; k < 2 ; k++) {
               // console.log(data[i]);
            }
            
         var yes = document.createElement("input")
         yes.setAttribute("type", "radio");
         yes.setAttribute("name", "yesno");
         yes.setAttribute("value", "Yes");
        form.appendChild(label);
        form.appendChild(br.cloneNode());
        form.appendChild(ID);
        form.appendChild(br.cloneNode());
    }
    document.getElementsByTagName("body")[0]
    .appendChild(form);
};
}
  

  async function main () {
    var get =  await fetchlist('list3.json');
    var build = makeform ( get );
  }

main()
