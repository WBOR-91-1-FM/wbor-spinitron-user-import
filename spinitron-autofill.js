data = {YOUR DATA HERE}

const tbody = document.querySelector('.personas tbody');

data.forEach((person, index) => {
    const row = document.createElement('tr');

    // Add `email`
    const emailInput = document.createElement('input');
        emailInput.type = 'email';
        emailInput.id = `personacreateform-${index}-email`;
        emailInput.name = `PersonaCreateForm[${index}][email]`;
        emailInput.value = person.email;
    const emailCell = document.createElement('td');
        emailCell.appendChild(emailInput);
    row.appendChild(emailCell);

    // Add `name`
    const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.id = `personacreateform-${index}-name`;
        nameInput.name = `PersonaCreateForm[${index}][name]`;
        nameInput.value = person.name;
    const nameCell = document.createElement('td');
        nameCell.appendChild(nameInput);
    row.appendChild(nameCell);

    // Add `djName`
    const djNameInput = document.createElement('input');
        djNameInput.type = 'text';
        djNameInput.id = `personacreateform-${index}-djname`;
        djNameInput.name = `PersonaCreateForm[${index}][djName]`;
        djNameInput.value = person.djName;
    const djNameCell = document.createElement('td');
        djNameCell.appendChild(djNameInput);
    row.appendChild(djNameCell);

    // Append the row to the table body
    tbody.appendChild(row);
});