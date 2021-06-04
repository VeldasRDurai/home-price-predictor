const formHandler = () => {
    console.log('Clicked');
    let location =  document.getElementById('location').value;
    let sqFeet =  document.getElementById('sqFeet').value;
    let room = document.getElementById('room').value;
    let bath = document.getElementById('bath').value;
    
    if( isNaN(sqFeet) || isNaN(room) || isNaN(bath)){
        window.alert('Enter a valid number as input');
        document.getElementById('sqFeet').value = '';
        document.getElementById('room').value = '';
        document.getElementById('bath').value = '';
    } else if( sqFeet==='' || room==='' || bath==='' ) {
        window.alert('Enter all inputs (No text area need to be empty)');
    } else {
        document.getElementById('est').innerText = 'Loading ...'
        console.log( location, sqFeet, room, bath );
        fetch( "http://localhost:3000/" , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify( {location, sqFeet, room, bath} ),
        })
        .then( res => res.json() )
        .then(data => {
            console.log('Success:', data );
            console.log( (/\d+.\d{2}/).exec(data.estimations)[0] );
            document.getElementById('est').innerText = (/[0-9]+.[0-9]{2}/).exec(data.estimations)[0]
        })
        .catch((error) => {
            console.error('Error:'+ error);
            console.log(error.data);
        });
    }
}