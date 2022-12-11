async function fetchList() {
    var response = await fetch('/v3_list/list3.json');
    console.log (response);
    var data = await response.json();
    var br = document.createElement("br")
    var form = document.createElement("form");
    var txt = document.createElement("p");
        form.setAttribute("method", "post");
        form.setAttribute("action", "submit.php");
    for (var key = 0; key < data.length; key++) 
    {
        value = data[key];
        var ID = document.createElement("input")
        var label = form.appendChild(document.createTextNode(value.subtext));
        ID.setAttribute("type", value.type);
        ID.setAttribute("title", value.title);
        ID.setAttribute("placeholder", value.placeholder);
            console.log("Immanuel");
            console.log(data[key].options);
            for (var opt = 0; opt < data[key].length; opt++);
            {
                if IsEmpty(data[i]);
                    console.log(data[key].options);
                }
                else
                {
                    console.log(data[key]);
                    break
                }
                
            }
        form.appendChild(label);
        form.appendChild(br.cloneNode());
        form.appendChild(ID);
        form.appendChild(br.cloneNode());
    }

fetchList()
