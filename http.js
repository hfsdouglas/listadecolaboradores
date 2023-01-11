function fetchJson(url, options) {
    return fetch(url, options).then((r) => {
        if(r.ok) {
            return r.json();
        } else {
            throw new Error(r.statusText);
        }
    }).catch(error => {
        showError("Não foi possível de carregar os dados...");
        throw error;
    });
}

const baseUrl = "http://localhost:3000";

function listEmployees(){
    return fetchJson(`${baseUrl}/employees`);
}

function listRoles() {
    return fetchJson(`${baseUrl}/roles`);
}

function updateEmployee(id, employee) {
    return fetchJson(`${baseUrl}/employees/employees/${id}`, {
        method: 'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(employee)
    });
}

function createEmployee(employee) {
    return fetchJson(`${baseUrl}/employees/`, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(employee)
    });
}

function deleteEmployee(id) {
    return fetchJson(`${baseUrl}/employees/${id}`, {
        method: 'DELETE'
    });
}

/* 
fetch('http://localhost:3000/employees', {
    method: 'POST', 
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(employee) 
});

fetch(`http://localhost:3000/employees/${id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(employee)
});

fetch(`http://localhost:3000/employees/${id}`, {
    method: 'DELETE'
});
*/
