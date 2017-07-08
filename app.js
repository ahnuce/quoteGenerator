$("button").click(function(){
    $.ajax({
    url: "http://api.icndb.com/jokes/random",
    type: 'GET',
    datatype: 'json',
    success: function(result){
        $("#div1").html(result.value.joke);
    }});
});
