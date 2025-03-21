accessToken = localStorage.getItem('access');

function addstudent(){
   
   
    const firstname = document.getElementById("Vorname").value;
    const name = document.getElementById("Nachname").value;
    const age = document.getElementById("Alter").value;

    newStudent= {
        vorname: firstname,
        nachname: name,
        alter: age
    };

    fetch('http://127.0.0.1:8000/api/students/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify(newStudent),
        })
        .then((response) => {response.json(), response.status})
        .then((data) => {
            alert(`der Student ${newStudent.vorname} wurde erfolgreich hinzugefügt`);
            window.location.href = '/DashBoard/main.html';

    })
}