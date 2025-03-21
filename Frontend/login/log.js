function login(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert("Bitte alle Felder ausfüllen!");
        return;
    }
    console.log("Formular erfolgreich gesendet!");
    

    fetch('http://127.0.0.1:8000/api/token/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username: username, password: password})
    })
    .then((response) => response.json()) 
    .then(data => {
        localStorage.setItem('access', data.access);
        localStorage.setItem('refresh', data.refresh);
        if (data.access){
            window.location.href = '/DashBoard/main.html';
        } else {
            console.log('Kein Zugriff')
        }

    })
    return false;  /* anstatt event.preventDefault() */
    }
    
