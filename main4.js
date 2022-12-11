
function createForm() {
  fetch('questions.json')
    .then(res => res.json())
    .then(data => {
      var form = document.createElement('form');
      var p = document.createElement('p');
      p.textContent = data.question;
      form.appendChild(p);
      var select = document.createElement('select');
      var yesOption = document.createElement('option');
      yesOption.value = 'yes';
      yesOption.text = 'Yes';
      select.appendChild(yesOption);
      var noOption = document.createElement('option');
      noOption.value = 'no';
      noOption.text = 'No';
      select.appendChild(noOption);
      form.appendChild(select);
      document.body.appendChild(form);
    })
}

createForm ()