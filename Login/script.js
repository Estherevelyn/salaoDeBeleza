function submitForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var date = document.getElementById('date').value;
  var time = document.getElementById('time').value;
  var type = document.getElementById('type').value;

  // Verificar se algum campo está vazio
  if (name === '' || email === '' || date === '' || time === '' || type === '') {
    alert('Por favor, preencha todos os campos.');
  } else {
    // Verificar se já há dados salvos no localStorage
    var savedData = JSON.parse(localStorage.getItem('consultationData')) || [];

    // Adicionar os novos dados aos dados salvos
    savedData.push({ name: name, email: email, date: date, time: time, type: type });

    // Salvar os dados no localStorage
    localStorage.setItem('consultationData', JSON.stringify(savedData));

    // Limpar os campos do formulário
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('date').value = '';
    document.getElementById('time').value = '';
    document.getElementById('type').value = '';

    // Exibe um alerta informando que a consulta foi marcada e salva
    alert('Consulta de tipo ' + type + ' marcada para ' + date + ' às ' + time + '. Confira seu e-mail (' + email + ') para mais detalhes.');

    // Pode adicionar aqui lógica adicional, se necessário
  }
}