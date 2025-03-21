let tableBody = document.getElementById("table-body");

let accessToken = localStorage.getItem('access');
let refreshToken = localStorage.getItem('refresh');

    if (accessToken) {

        fetch('http://127.0.0.1:8000/api/students/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${accessToken}`
            },
        })
            /*Jedes Mal, wenn Benutzer eine API aufruft,
             wird der access Token in den Header gesetzt*/         
            .then ((response) => response.json()) 
            .then((data) =>  
                data.forEach((student) => {
                    let tableRow = document.createElement('tr');
                    let tableDataID = document.createElement('td');
                    let tableDataVorname = document.createElement('td');        
                    let tableDataNachname = document.createElement('td');
                    let tableDataAlter = document.createElement('td');
                    let tableDataEdit = document.createElement('td');
                    let tableDataDelete = document.createElement('td');


                    tableDataID.innerHTML = `${student.id}`
                    tableDataVorname.innerHTML = `${student.vorname}`
                    tableDataNachname.innerHTML = `${student.nachname}`
                    tableDataAlter.innerHTML = `${student.alter} `
                    tableDataEdit.innerHTML = `<button class = 'btn btn-secondary'onclick="editStudent(${student.id})"> Bearbeiten </button>`
                    tableDataDelete.innerHTML = `<button class = 'btn btn-danger'onclick="deleteStudent(${student.id})"> Löschen </button>`
                    

                    tableBody.appendChild(tableRow);
                    tableRow.appendChild(tableDataID);
                    tableRow.appendChild(tableDataVorname);
                    tableRow.appendChild(tableDataNachname);
                    tableRow.appendChild(tableDataAlter);
                    tableRow.appendChild(tableDataEdit);
                    tableRow.appendChild(tableDataDelete);
                   
                })
            );   
    }
function logOut() {
    localStorage.clear();
    window.location.href = '/login/log.html';
}

function editStudent(id) {
    window.location.href = `/Edit/edit.html?id=${id}`;
    
}
  
  function deleteStudent(id) {
    if (confirm(`Student mit ID ${id} wirklich löschen?`)) {
        fetch(`http://127.0.0.1:8000/api/students/${id}/`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
            .then(response => {
                if (response.ok) {
                    alert(`Student ${id} wurde gelöscht.`);
                    window.location.href = '/DashBoard/main.html';
                } else {
                    alert(`Fehler beim Löschen von Student ${id}`);
                }
            })
            .catch(error => console.error('Fehler:', error));
        
        
        }
}
  

  function addStudent() {
    window.location.href = '/Add/add.html';
  }

  
/*    
    .then((response) => response.json())
    .then((data) => data.forEach(student => {
        let listGroupItem = document.createElement('li');
        listGroupItem.setAttribute('class', 'list-group-item');
        listGroupItem.innerHTML = `ID: ${student.id}.
                                    Vorname : ${student.vorname},
                                    Nachname : ${student.nachname},
                                    Alter : ${student.alter}`;
        listGroup.appendChild(listGroupItem);
    }))
    .catch((error) => console.error('Error:', error)); */


