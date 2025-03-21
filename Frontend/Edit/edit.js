accessToken = localStorage.getItem('access');

let idFeld = document.getElementById('ID');
let vornameFeld = document.getElementById('Vorname');
let nachnameFeld = document.getElementById('Nachname');
let alterFeld = document.getElementById('Alter');

document.addEventListener('DOMContentLoaded', () =>{
    const studentUrlparam = new URLSearchParams(window.location.search);
    const studentID = studentUrlparam.get('id');

    fetch(`http://127.0.0.1:8000/api/students/${studentID}/`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
        },
 })
    .then((response) => response.json() )
    .then((data) =>{
        idFeld.value = data.id
        vornameFeld.value = data.vorname
        nachnameFeld.value = data.nachname
        alterFeld.value = data.alter
    }
);
});
    

function editStudent(){
        let newData = {
            id : idFeld.value,
            vorname : vornameFeld.value, 
            nachname : nachnameFeld.value,
            alter : alterFeld.value,
        };
        fetch(`http://127.0.0.1:8000/api/students/${newData.id}/`, 
            {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${accessToken}`,  
            }, 
            body: JSON.stringify(newData),
            })
        .then((response) => {response.json(),response.status})
        .then((data) => {
            alert(`der Student ${newData.vorname} wurde erfolgreich bearbeitet`);
            window.location.href = '/DashBoard/main.html';
        });
    return false;
}
