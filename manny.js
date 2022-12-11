var doc=document, log=console.log;
function hydrateForm( form, data )
{
        var ID, br, d, i;
        for ( i=0; i<data.length; i++)
        {
                d = data[i];
                log( i, d );
                br = doc.createElement( "br" );
                ID = doc.createElement( "input" )
                ID.setAttribute( "type", d.type );
                ID.setAttribute( "title", d.title );
                ID.setAttribute( "placeholder", d.placeholder );
                form.appendChild( ID );
                form.appendChild( br );
        }
}
async function loadJSON( url )
{
        var resp = await fetch( url );
        var json = await resp.json();
        return json;
}
async function fetchList()
{
        var data = await loadJSON( "/v2_list/list2.json" );
        var form = doc.createElement( "form" );
        form.setAttribute( "method", "post" );
        form.setAttribute( "action", "submit.php" );
        hydrateForm( form, data );
        doc.querySelector( "body" ).appendChild( form );
}
fetchList()