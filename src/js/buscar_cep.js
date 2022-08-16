function limpa_formulário_cep() {
    // Limpa valores do formulário de cep.
    $("#rua").val("");
    $("#bairro").val("");
    $("#cidade").val("");
    $("#uf").val("");
    $("#ibge").val("");
}

//Quando o campo cep perde o foco.
$("#cep").blur(function () {

    //Nova variável "cep" somente com dígitos.
    var cep = $(this).val().replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if (validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            $("#rua").val("...");
            $("#bairro").val("...");
            $("#cidade").val("...");
            $("#uf").val("...");
            $("#ibge").val("...");

            //Consulta o webservice viacep.com.br/
            $.getJSON("https://viacep.com.br/ws/" + cep + "/json/?callback=?", function (
                dados) {

                if (!("erro" in dados)) {
                    //Atualiza os campos com os valores da consulta.
                    $("#rua").val(dados.logradouro);
                    $("#bairro").val(dados.bairro);
                    $("#cidade").val(dados.localidade);
                    $("#uf").val(dados.uf);
                    $("#ibge").val(dados.ibge);
                    
                    // bairros de uberaba taxa de entrega
                    const info_bairros = [
                        {
                            bairros_por_taxa: ['Residencial Estados Unidos', 'Centro'],
                            valor_taxa: '8'
                        },
                        {
                            bairros_por_taxa: ['Boa Vista'],
                            valor_taxa: '10'
                        },
                        {
                            bairros_por_taxa: ['Conjunto Alfredo Freire'],
                            valor_taxa: '12'
                        }
                    ]
                    
                    // verifica o bairro e coloca a taxa 
                    $(info_bairros).each(function(index, e) {
                        $(e.bairros_por_taxa).each(function(i, d) { 
                            if(dados.bairro == e.bairros_por_taxa[i]) {  
                                var taxa_entrega = e.valor_taxa
                                $('#taxa_entrega').val('R$ ' + taxa_entrega + ',00');
                            }
                        })
                    });
                } //end if.
                else {
                    //CEP pesquisado não foi encontrado.
                    limpa_formulário_cep();
                    alert("CEP não encontrado.");
                }
            });
        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
});