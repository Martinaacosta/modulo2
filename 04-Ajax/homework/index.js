let amix = function(){
    $('#lista').empty(); //hace que no se imprima muchas veces
    $.get('http://localhost:5000/amigos/' , function (amigo) {
        amigo.forEach(a => {
            $('#lista').append(`<li> ${a.name}</li>`)
        })
    })
}
$('#boton').click(amix);

$('#search').click(function(){
    let id = $('#input').val();
if(id){
    let rta = $.get('http://localhost:5000/amigos/' + id, function(amigo){
    if(amigo){
        $('#amigo').text(`${amigo.name} ${amigo.age} ${amigo.email}`)
        $('#input').val('')
    }
    //}else{
        //$('#amigo').text('No hay un amigo con dicho id');

    
    });
}else{
    $('#amigo').text('Tenes que ingresar obligatoriamente un ID')
    //alert('Tenes que ingresar obligatoriamente un ID')
}
})


let deleteFriend = function (){
    let id;
    id = $('#inputDelete').val();
    if(id){
        $.ajax({
            url:'http://localhost:5000/amigos/' + id,
            type: 'DELETE',
            success: function(){
                $('#inputDelete').val('');
                amix();
            }

        })
    }else{
        $('#sucess').text('Tenes que ingresar obligatoriamente un ID')
    }
};

$('#delete').click(deleteFriend);