document.addEventListener("DOMContentLoaded", function () {
    const dados = {
        nome: "Ada Lovelace",
        email: "ada@email.com",
        telefones: [
            {
                numero: "(11) 99123-4567",
                tipo: "casa",
            },
        ],
        endereco: {
            logradouro: "Rua das programadoras",
            cidade: "Vale do silício",
            estado: "Codefornia",
            cep: "10100-100",
            pais: "Programaland",
        },
    };

    const form = document.getElementById("dados-form");

    form.nome.value = dados.nome;
    form.email.value = dados.email;
    form.telefone.value = dados.telefones[0].numero;
    form.querySelector("#tipo-telefone").value = dados.telefones[0].tipo;
    form.logradouro.value = dados.endereco.logradouro;
    form.cidade.value = dados.endereco.cidade;
    form.estado.value = dados.endereco.estado;
    form.cep.value = dados.endereco.cep;
    form.pais.value = dados.endereco.pais;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        dados.nome = form.nome.value;
        dados.email = form.email.value;
        dados.telefones.telefone = form.telefone.value;
        dados.telefones.tipo = form.querySelector("#tipo-telefone").value;
        dados.endereco.logradouro = form.logradouro.value;
        dados.endereco.cidade = form.cidade.value;
        dados.endereco.estado = form.estado.value;
        dados.endereco.cep = form.cep.value;
        dados.endereco.pais = form.pais.value;

        console.log(dados);
    });
});