$(document).ready(function() {
    $.ajax({
        url: "data.json",
        dataType: "json"
    }).done(function(response) {
        console.log(response)
        var x = "";
        response.forEach(element => {
            console.log(element.name);
            x+="<tr>"+
            "<td>"+element.name+"</td>"+
            "<td>"+element.symbol+"</td>"+
            "<td>"+element.slogan+"</td>"+
            "<td>"+element.place+"</td>"+
            "<td>"+element.lord+"</td>"+
            "<td>"+element.alias+"</td>"+
            "<td>"+element.maincharacter+"</td>"+
                "</tr>";
            $('#table-item').html(x);
        });
    });
});

$('#submit-btn').click(function(){
    var y = $('#input-text').val().toLowerCase();
    var x ="";
    $.ajax({
        url: "data.json",
        dataType: "json"
    }).done(function(response) {
        response.forEach(element =>{ 
            if($("#name").prop("checked")==true){
                if(element.name.toLowerCase().includes(y)){   
                x+= "<tr>"+
                    "<td>"+element.name+"</td>"+
                    "<td>"+element.symbol+"</td>"+
                    "<td>"+element.slogan+"</td>"+
                    "<td>"+element.place+"</td>"+
                    "<td>"+element.lord+"</td>"+
                    "<td>"+element.alias+"</td>"+
                    "<td>"+element.maincharacter+"</td></tr>";
                    $('#table-item').html(x);
                }
            }
            else if($("#slogan").prop("checked")==true){
                if(element.slogan.toLowerCase().includes(y)){   
                x+= "<tr>"+
                    "<td>"+element.name+"</td>"+
                    "<td>"+element.symbol+"</td>"+
                    "<td>"+element.slogan+"</td>"+
                    "<td>"+element.place+"</td>"+
                    "<td>"+element.lord+"</td>"+
                    "<td>"+element.alias+"</td>"+
                    "<td>"+element.maincharacter+"</td></tr>";
                    $('#table-item').html(x);
                    }
                
            }
            else if($("#maincharacter").prop("checked")==true){
                if(element.maincharacter.toLowerCase().includes(y)){   
                x+= "<tr>"+
                    "<td>"+element.name+"</td>"+
                    "<td>"+element.symbol+"</td>"+
                    "<td>"+element.slogan+"</td>"+
                    "<td>"+element.place+"</td>"+
                    "<td>"+element.lord+"</td>"+
                    "<td>"+element.alias+"</td>"+
                    "<td>"+element.maincharacter+"</td></tr>";
                    $('#table-item').html(x);
                }
            }
            else if($("#alias").prop("checked")==true){
                if(element.alias.toLowerCase().includes(y)){   
                x+= "<tr>"+
                    "<td>"+element.name+"</td>"+
                    "<td>"+element.symbol+"</td>"+
                    "<td>"+element.slogan+"</td>"+
                    "<td>"+element.place+"</td>"+
                    "<td>"+element.lord+"</td>"+
                    "<td>"+element.alias+"</td>"+
                    "<td>"+element.maincharacter+"</td></tr>";
                    $('#table-item').html(x);
                }
            }
            else if($("#name").prop("checked")==true){
                if(element.name.toLowerCase().includes(y) && element.slogan.toLowerCase().includes(y)){   
                x+= "<tr>"+
                    "<td>"+element.name+"</td>"+
                    "<td>"+element.symbol+"</td>"+
                    "<td>"+element.slogan+"</td>"+
                    "<td>"+element.place+"</td>"+
                    "<td>"+element.lord+"</td>"+
                    "<td>"+element.alias+"</td>"+
                    "<td>"+element.maincharacter+"</td></tr>";
                    $('#table-item').html(x);
                }
            }
            else if($("#name").prop("checked")==true){
                if(element.name.toLowerCase().includes(y) && element.alias.toLowerCase().includes(y)){   
                x+= "<tr>"+
                    "<td>"+element.name+"</td>"+
                    "<td>"+element.symbol+"</td>"+
                    "<td>"+element.slogan+"</td>"+
                    "<td>"+element.place+"</td>"+
                    "<td>"+element.lord+"</td>"+
                    "<td>"+element.alias+"</td>"+
                    "<td>"+element.maincharacter+"</td></tr>";
                    $('#table-item').html(x);
                }
            }
            else if($("#name").prop("checked")==true){
                if(element.name.toLowerCase().includes(y) && element.maincharacter.toLowerCase().includes(y)){   
                x+= "<tr>"+
                    "<td>"+element.name+"</td>"+
                    "<td>"+element.symbol+"</td>"+
                    "<td>"+element.slogan+"</td>"+
                    "<td>"+element.place+"</td>"+
                    "<td>"+element.lord+"</td>"+
                    "<td>"+element.alias+"</td>"+
                    "<td>"+element.maincharacter+"</td></tr>";
                    $('#table-item').html(x);
                }
            }
            else if($("#name").prop("checked")==true){
                if(element.slogan.toLowerCase().includes(y) && element.alias.toLowerCase().includes(y) ){   
                x+= "<tr>"+
                    "<td>"+element.name+"</td>"+
                    "<td>"+element.symbol+"</td>"+
                    "<td>"+element.slogan+"</td>"+
                    "<td>"+element.place+"</td>"+
                    "<td>"+element.lord+"</td>"+
                    "<td>"+element.alias+"</td>"+
                    "<td>"+element.maincharacter+"</td></tr>";
                    $('#table-item').html(x);
                }
            }
            else if($("#name").prop("checked")==true){
                if(element.slogan.toLowerCase().includes(y) && element.maincharacter.toLowerCase().includes(y)){   
                x+= "<tr>"+
                    "<td>"+element.name+"</td>"+
                    "<td>"+element.symbol+"</td>"+
                    "<td>"+element.slogan+"</td>"+
                    "<td>"+element.place+"</td>"+
                    "<td>"+element.lord+"</td>"+
                    "<td>"+element.alias+"</td>"+
                    "<td>"+element.maincharacter+"</td></tr>";
                    $('#table-item').html(x);
                }
            }
            else if($("#name").prop("checked")==true){
                if(element.alias.toLowerCase().includes(y) && element.maincharacter.toLowerCase().includes(y)){   
                x+= "<tr>"+
                    "<td>"+element.name+"</td>"+
                    "<td>"+element.symbol+"</td>"+
                    "<td>"+element.slogan+"</td>"+
                    "<td>"+element.place+"</td>"+
                    "<td>"+element.lord+"</td>"+
                    "<td>"+element.alias+"</td>"+
                    "<td>"+element.maincharacter+"</td></tr>";
                    $('#table-item').html(x);
                }
            }
            else{
                
                x+= "<tr>"+
                "<td>"+element.name+"</td>"+
                "<td>"+element.symbol+"</td>"+
                "<td>"+element.slogan+"</td>"+
                "<td>"+element.place+"</td>"+
                "<td>"+element.lord+"</td>"+
                "<td>"+element.alias+"</td>"+
                "<td>"+element.maincharacter+"</td></tr>";
                $('#table-item').html(x);
            }
           
        })
    })
});
