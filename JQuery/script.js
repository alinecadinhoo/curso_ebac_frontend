$(document).ready(function() {
    // Manipula o formulário quando for enviado
    $('#task-form').submit(function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Obtém o valor do campo de entrada
        var taskName = $('#task-input').val();

        if (taskName.trim() !== "") {
            // Adiciona a tarefa como um novo item de lista
            $('#task-list').append('<li>' + taskName + '</li>');
            $('#task-input').val(''); // Limpa o campo de entrada

            // Adiciona um ouvinte de evento de clique ao novo item da lista
            $('#task-list li:last-child').click(function() {
                $(this).toggleClass('completed');
            });
        }
    });
});
