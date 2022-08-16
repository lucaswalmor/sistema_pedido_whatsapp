$(document).ready(function () {
    // mascara de input para telefone e cep 
    $('.telefone').mask('(00) 0 0000-0000');
    $('#cep').mask('00000-000');

    // na troca troca do lanche altera a imagem do mesmo
    $('#lanche').change(function () {
        var ingredientes = $(this).val();
        if (ingredientes == 'PARRILLA BERRY') {
            $('.berry').css('display', 'flex');
            $('.candy').css('display', 'none');
            $('.berry_combo').css('display', 'none');
            $('.parrilla_grilled_herbs').css('display', 'none');
            $('.parrilla_grilled_herbs_combo').css('display', 'none');
            $('.burguer').css('display', 'none');
            $('.burguer_combo').css('display', 'none');
            $('.catupiry_angus').css('display', 'none');
            $('.catupiry_angus_combo').css('display', 'none');
            $('.classic').css('display', 'none');
            $('.classic_combo').css('display', 'none');
            $('.special').css('display', 'none');
            $('.special_combo').css('display', 'none');
            $('.chicken').css('display', 'none');
            $('.chicken_combo').css('display', 'none');
        } else if (ingredientes == 'PARRILLA CANDY') {
            $('.berry').css('display', 'none');
            $('.candy').css('display', 'flex');
            $('.berry_combo').css('display', 'none');
            $('.parrilla_grilled_herbs').css('display', 'none');
            $('.parrilla_grilled_herbs_combo').css('display', 'none');
            $('.burguer').css('display', 'none');
            $('.burguer_combo').css('display', 'none');
            $('.catupiry_angus').css('display', 'none');
            $('.catupiry_angus_combo').css('display', 'none');
            $('.classic').css('display', 'none');
            $('.classic_combo').css('display', 'none');
            $('.special').css('display', 'none');
            $('.special_combo').css('display', 'none');
            $('.chicken').css('display', 'none');
            $('.chicken_combo').css('display', 'none');
        } else if (ingredientes == 'PARRILLA BERRY COMBO') {
            $('.berry').css('display', 'none');
            $('.candy').css('display', 'none');
            $('.berry_combo').css('display', 'flex');
            $('.parrilla_grilled_herbs').css('display', 'none');
            $('.parrilla_grilled_herbs_combo').css('display', 'none');
            $('.burguer').css('display', 'none');
            $('.burguer_combo').css('display', 'none');
            $('.catupiry_angus').css('display', 'none');
            $('.catupiry_angus_combo').css('display', 'none');
            $('.classic').css('display', 'none');
            $('.classic_combo').css('display', 'none');
            $('.special').css('display', 'none');
            $('.special_combo').css('display', 'none');
            $('.chicken').css('display', 'none');
            $('.chicken_combo').css('display', 'none');
        } else if (ingredientes == 'PARRILLA GRILLED HERBS') {
            $('.berry').css('display', 'none');
            $('.candy').css('display', 'none');
            $('.berry_combo').css('display', 'none');
            $('.parrilla_grilled_herbs').css('display', 'flex');
            $('.parrilla_grilled_herbs_combo').css('display', 'none');
            $('.burguer').css('display', 'none');
            $('.burguer_combo').css('display', 'none');
            $('.catupiry_angus').css('display', 'none');
            $('.catupiry_angus_combo').css('display', 'none');
            $('.classic').css('display', 'none');
            $('.classic_combo').css('display', 'none');
            $('.special').css('display', 'none');
            $('.special_combo').css('display', 'none');
            $('.chicken').css('display', 'none');
            $('.chicken_combo').css('display', 'none');
        } else if (ingredientes == 'PARRILLA GRILLED HERBS COMBO') {
            $('.berry').css('display', 'none');
            $('.candy').css('display', 'none');
            $('.berry_combo').css('display', 'none');
            $('.parrilla_grilled_herbs').css('display', 'none');
            $('.parrilla_grilled_herbs_combo').css('display', 'flex');
            $('.burguer').css('display', 'none');
            $('.burguer_combo').css('display', 'none');
            $('.catupiry_angus').css('display', 'none');
            $('.catupiry_angus_combo').css('display', 'none');
            $('.classic').css('display', 'none');
            $('.classic_combo').css('display', 'none');
            $('.special').css('display', 'none');
            $('.special_combo').css('display', 'none');
            $('.chicken').css('display', 'none');
            $('.chicken_combo').css('display', 'none');
        } else if (ingredientes == 'PARRILLA BURGER') {
            $('.berry').css('display', 'none');
            $('.candy').css('display', 'none');
            $('.berry_combo').css('display', 'none');
            $('.parrilla_grilled_herbs').css('display', 'none');
            $('.parrilla_grilled_herbs_combo').css('display', 'none');
            $('.burguer').css('display', 'flex');
            $('.burguer_combo').css('display', 'none');
            $('.catupiry_angus').css('display', 'none');
            $('.catupiry_angus_combo').css('display', 'none');
            $('.classic').css('display', 'none');
            $('.classic_combo').css('display', 'none');
            $('.special').css('display', 'none');
            $('.special_combo').css('display', 'none');
            $('.chicken').css('display', 'none');
            $('.chicken_combo').css('display', 'none');
        } else if (ingredientes == 'PARRILLA BURGER COMBO') {
            $('.berry').css('display', 'none');
            $('.candy').css('display', 'none');
            $('.berry_combo').css('display', 'none');
            $('.parrilla_grilled_herbs').css('display', 'none');
            $('.parrilla_grilled_herbs_combo').css('display', 'none');
            $('.burguer').css('display', 'none');
            $('.burguer_combo').css('display', 'flex');
            $('.catupiry_angus').css('display', 'none');
            $('.catupiry_angus_combo').css('display', 'none');
            $('.classic').css('display', 'none');
            $('.classic_combo').css('display', 'none');
            $('.special').css('display', 'none');
            $('.special_combo').css('display', 'none');
            $('.chicken').css('display', 'none');
            $('.chicken_combo').css('display', 'none');
        } else if (ingredientes == 'PARRILLA CATUPIRY ANGUS') {
            $('.berry').css('display', 'none');
            $('.candy').css('display', 'none');
            $('.berry_combo').css('display', 'none');
            $('.parrilla_grilled_herbs').css('display', 'none');
            $('.parrilla_grilled_herbs_combo').css('display', 'none');
            $('.burguer').css('display', 'none');
            $('.burguer_combo').css('display', 'none');
            $('.catupiry_angus').css('display', 'flex');
            $('.catupiry_angus_combo').css('display', 'none');
            $('.classic').css('display', 'none');
            $('.classic_combo').css('display', 'none');
            $('.special').css('display', 'none');
            $('.special_combo').css('display', 'none');
            $('.chicken').css('display', 'none');
            $('.chicken_combo').css('display', 'none');
        } else if (ingredientes == 'PARRILLA CATUPIRY ANGUS COMBO') {
            $('.berry').css('display', 'none');
            $('.candy').css('display', 'none');
            $('.berry_combo').css('display', 'none');
            $('.parrilla_grilled_herbs').css('display', 'none');
            $('.parrilla_grilled_herbs_combo').css('display', 'none');
            $('.burguer').css('display', 'none');
            $('.burguer_combo').css('display', 'none');
            $('.catupiry_angus').css('display', 'none');
            $('.catupiry_angus_combo').css('display', 'flex');
            $('.classic').css('display', 'none');
            $('.classic_combo').css('display', 'none');
            $('.special').css('display', 'none');
            $('.special_combo').css('display', 'none');
            $('.chicken').css('display', 'none');
            $('.chicken_combo').css('display', 'none');
        } else if (ingredientes == 'PARRILLA CLÁSSIC') {
            $('.berry').css('display', 'none');
            $('.candy').css('display', 'none');
            $('.berry_combo').css('display', 'none');
            $('.parrilla_grilled_herbs').css('display', 'none');
            $('.parrilla_grilled_herbs_combo').css('display', 'none');
            $('.burguer').css('display', 'none');
            $('.burguer_combo').css('display', 'none');
            $('.catupiry_angus').css('display', 'none');
            $('.catupiry_angus_combo').css('display', 'none');
            $('.classic').css('display', 'flex');
            $('.classic_combo').css('display', 'none');
            $('.special').css('display', 'none');
            $('.special_combo').css('display', 'none');
            $('.chicken').css('display', 'none');
            $('.chicken_combo').css('display', 'none');
        } else if (ingredientes == 'PARRILLA CLÁSSIC COMBO') {
            $('.berry').css('display', 'none');
            $('.candy').css('display', 'none');
            $('.berry_combo').css('display', 'none');
            $('.parrilla_grilled_herbs').css('display', 'none');
            $('.parrilla_grilled_herbs_combo').css('display', 'none');
            $('.burguer').css('display', 'none');
            $('.burguer_combo').css('display', 'none');
            $('.catupiry_angus').css('display', 'none');
            $('.catupiry_angus_combo').css('display', 'none');
            $('.classic').css('display', 'none');
            $('.classic_combo').css('display', 'flex');
            $('.special').css('display', 'none');
            $('.special_combo').css('display', 'none');
            $('.chicken').css('display', 'none');
            $('.chicken_combo').css('display', 'none');
        } else if (ingredientes == 'PARRILLA SPECIAL DUPLO') {
            $('.berry').css('display', 'none');
            $('.candy').css('display', 'none');
            $('.berry_combo').css('display', 'none');
            $('.parrilla_grilled_herbs').css('display', 'none');
            $('.parrilla_grilled_herbs_combo').css('display', 'none');
            $('.burguer').css('display', 'none');
            $('.burguer_combo').css('display', 'none');
            $('.catupiry_angus').css('display', 'none');
            $('.catupiry_angus_combo').css('display', 'none');
            $('.classic').css('display', 'none');
            $('.classic_combo').css('display', 'none');
            $('.special').css('display', 'flex');
            $('.special_combo').css('display', 'none');
            $('.chicken').css('display', 'none');
            $('.chicken_combo').css('display', 'none');
        } else if (ingredientes == 'PARRILLA SPECIAL DUPLO COMBO') {
            $('.berry').css('display', 'none');
            $('.candy').css('display', 'none');
            $('.berry_combo').css('display', 'none');
            $('.parrilla_grilled_herbs').css('display', 'none');
            $('.parrilla_grilled_herbs_combo').css('display', 'none');
            $('.burguer').css('display', 'none');
            $('.burguer_combo').css('display', 'none');
            $('.catupiry_angus').css('display', 'none');
            $('.catupiry_angus_combo').css('display', 'none');
            $('.classic').css('display', 'none');
            $('.classic_combo').css('display', 'none');
            $('.special').css('display', 'none');
            $('.special_combo').css('display', 'flex');
            $('.chicken').css('display', 'none');
            $('.chicken_combo').css('display', 'none');
        } else if (ingredientes == 'PARRILLA CHICKEN') {
            $('.berry').css('display', 'none');
            $('.candy').css('display', 'none');
            $('.berry_combo').css('display', 'none');
            $('.parrilla_grilled_herbs').css('display', 'none');
            $('.parrilla_grilled_herbs_combo').css('display', 'none');
            $('.burguer').css('display', 'none');
            $('.burguer_combo').css('display', 'none');
            $('.catupiry_angus').css('display', 'none');
            $('.catupiry_angus_combo').css('display', 'none');
            $('.classic').css('display', 'none');
            $('.classic_combo').css('display', 'none');
            $('.special').css('display', 'none');
            $('.special_combo').css('display', 'none');
            $('.chicken').css('display', 'flex');
            $('.chicken_combo').css('display', 'none');
        } else if (ingredientes == 'PARRILLA CHICKEN COMBO') {
            $('.berry').css('display', 'none');
            $('.candy').css('display', 'none');
            $('.berry_combo').css('display', 'none');
            $('.parrilla_grilled_herbs').css('display', 'none');
            $('.parrilla_grilled_herbs_combo').css('display', 'none');
            $('.burguer').css('display', 'none');
            $('.burguer_combo').css('display', 'none');
            $('.catupiry_angus').css('display', 'none');
            $('.catupiry_angus_combo').css('display', 'none');
            $('.classic').css('display', 'none');
            $('.classic_combo').css('display', 'none');
            $('.special').css('display', 'none');
            $('.special_combo').css('display', 'none');
            $('.chicken').css('display', 'none');
            $('.chicken_combo').css('display', 'flex');
        } else {
            $('.berry').css('display', 'none');
            $('.candy').css('display', 'none');
            $('.berry_combo').css('display', 'none');
            $('.parrilla_grilled_herbs').css('display', 'none');
            $('.parrilla_grilled_herbs_combo').css('display', 'none');
            $('.burguer').css('display', 'none');
            $('.burguer_combo').css('display', 'none');
            $('.catupiry_angus').css('display', 'none');
            $('.catupiry_angus_combo').css('display', 'none');
            $('.classic').css('display', 'none');
            $('.classic_combo').css('display', 'none');
            $('.special').css('display', 'none');
            $('.special_combo').css('display', 'none');
            $('.chicken').css('display', 'none');
            $('.chicken_combo').css('display', 'none');
        }
    });

    // mostra div caso usuario more em apartamento
    $("#residencia").change(function () {
        var residencia = $("#residencia option:selected").val();
        if (residencia === 'Apartamento') {
            $('.res_ap').css('display', 'block');
        } else {
            $('.res_ap').css('display', 'none');
        }
    });

    // alterna divs de forma de pagamento pix ou dinheiro
    $("#forma_pagamento").change(function () {
        var pix = $("#forma_pagamento option:selected").val();
        if (pix === 'Pix') {
            $('.chave_pix').css('display', 'block');
            $('.dinheiro').css('display', 'none');
        } else if (pix === 'Dinheiro') {
            $('.dinheiro').css('display', 'block');
            $('.valor_pedido').css('display', 'block');
            $('.chave_pix').css('display', 'none');
        } else {
            $('.chave_pix').css('display', 'none');
            $('.dinheiro').css('display', 'none');
        }
    });

    // Ao selecionar o lanche preenche o campo de preço
    $('#lanche').change(function () {
        var preco_lanche = $(this).val();
        switch (preco_lanche) {
            case preco_lanche == 'PARRILLA BERRY' ? $('#preco_lanche').val('R$ 29.00'):
                '' :
                break;
            case preco_lanche == 'PARRILLA BERRY COMBO' ? $('#preco_lanche').val('R$ 37.00'):
                '' :
                break;
            case preco_lanche == 'PARRILLA CANDY' ? $('#preco_lanche').val('R$ 14,00'):
                '' :
                break;
            case preco_lanche == 'PARRILLA GRILLED HERBS' ? $('#preco_lanche').val('R$ 27,00'):
                '' :
                break;
            case preco_lanche == 'PARRILLA GRILLED HERBS COMBO' ? $('#preco_lanche').val('R$ 35,00'):
                '' :
                break;
            case preco_lanche == 'PARRILLA BURGER' ? $('#preco_lanche').val('R$ 22,00'):
                '' :
                break;
            case preco_lanche == 'PARRILLA BURGER COMBO' ? $('#preco_lanche').val('R$ 30,00'):
                '' :
                break;
            case preco_lanche == 'PARRILLA CATUPIRY ANGUS' ? $('#preco_lanche').val('R$ 29,00'):
                '' :
                break;
            case preco_lanche == 'PARRILLA CATUPIRY ANGUS COMBO' ? $('#preco_lanche').val('R$ 37,00'):
                '' :
                break;
            case preco_lanche == 'PARRILLA CLÁSSIC' ? $('#preco_lanche').val('R$ 25,00'):
                '' :
                break;
            case preco_lanche == 'PARRILLA CLÁSSIC COMBO' ? $('#preco_lanche').val('R$ 33,00'):
                '' :
                break;
            case preco_lanche == 'PARRILLA SPECIAL DUPLO' ? $('#preco_lanche').val('R$ 29,00'):
                '' :
                break;
            case preco_lanche == 'PARRILLA SPECIAL DUPLO COMBO' ? $('#preco_lanche').val('R$ 37,00'):
                '' :
                break;
            case preco_lanche == 'PARRILLA CHICKEN' ? $('#preco_lanche').val('R$ 27,00'):
                '' :
                break;
            case preco_lanche == 'PARRILLA CHICKEN COMBO' ? $('#preco_lanche').val('R$ 35,00'):
                '' :
                break;
        }
    });

    // Ao selecionar a bebida preenche o campo de preço
    $('#bebida').change(function () {
        var preco_bebida = $(this).val();
        switch (preco_bebida) {
            case preco_bebida == 'Coca-Cola' ? $('#preco_bebida').val('10.50'):
                '' :
                break;
            case preco_bebida == 'Pepsi' ? $('#preco_bebida').val('20.00'):
                '' :
                break;
            case preco_bebida == 'Água' ? $('#preco_bebida').val('30.00'):
                '' :
                break;
        }
    });

    // Aqui iniciam as etapas do usuario
    $(".etapa_1").click(function () {
        // 1º etapa do processo, pega os dados do usuário
        event.preventDefault();
        var nome = $('#nome').val();
        var cep = $('#cep').val();
        var rua = $('#rua').val();
        var bairro = $('#bairro').val();
        var taxa_entrega = $('#taxa_entrega').val().replace('R$ ', '').replace(',', '').replace('00', '');
        var numero = $('#numero').val();
        var telefone = $('#telefone').val();
        var residencia = $('#residencia').val();
        var apartamento = $('#apartamento').val();
        var bloco = $('#bloco').val();
        var array = [];

        // Faz um push nos dados o usuário para verificar se os valores foram preenchidos antes de passar para a próxima fase
        array.push(nome, cep, numero, telefone, residencia);

        switch (array === '') {
            case array[0] === '' ? $('#validacao-nome').css('display', 'block'):
                $('#validacao-nome').css('display', 'none'):
                    break;
            case array[1] === '' ? $('#validacao-cep').css('display', 'block'):
                $('#validacao-cep').css('display', 'none'):
                    break;
            case array[2] === '' ? $('#validacao-numero').css('display', 'block'):
                $('#validacao-numero').css('display', 'none'):
                    break;
            case array[3] === '' ? $('#validacao-telefone').css('display', 'block'):
                $('#validacao-telefone').css('display', 'none'):
                    break;
            case array[4] === '' ? $('#validacao-residencia').css('display', 'block'):
                $('#validacao-residencia').css('display', 'none'):
                    break;
        }

        // Verifica se não há nenhum campo vazio, então passa para o pedido do lanche
        if (array[0] !== '' && array[1] !== '' && array[2] !== '' && array[3] !== '') {
            $('#dados_usuario').css('display', 'none');
            $('#pedido_lanche').fadeIn().css('display', 'block');

            $(".etapa_2").click(function () {
                event.preventDefault();
                var observacoes = $('#observacoes').val();
                var lanche = $('#lanche').val();
                var preco_lanche = $('#preco_lanche').val().replace('R$ ', '');

                // Verifica se os campos estão devidamente preenchidos e então passa para a parte de pedido de bebidas
                if (lanche !== null) {
                    $('#pedido_lanche').css('display', 'none');
                    $('#pedido_bebida').fadeIn().css('display', 'block');

                    $(".etapa_3").click(function () {
                        event.preventDefault();

                        var bebida = $('#bebida').val().replace('R$ ', '');
                        var preco_bebida = $('#preco_bebida').val();
                        var preco_total = parseFloat(preco_lanche) + parseFloat(preco_bebida) + parseFloat(taxa_entrega);

                        $('#valor_pedido').html('R$ ' + preco_total);

                        // se o cliente nao selecionar a bebida será travado
                        if (bebida !== null) {
                            $('#pedido_bebida').css('display', 'none');
                            $('#pagamento').fadeIn().css('display', 'block');

                            // ao clicar no botao para confirmar o pedido entrará neste bloco 
                            $(".confirmar_pedido").click(function () {
                                event.preventDefault();

                                var forma_pagamento = $('#forma_pagamento').val();
                                var troco = $('#troco').val();
                                if(troco != '' && troco < preco_total) {
                                    alert('O valor do pagamento deve ser maior que o valor do pedido, para validar o troco');
                                } else {
                                    // se o cliente nao selecionar a forma de pagamento será travado
                                    if (forma_pagamento !== null) {
                                        $('#pagamento').css('display', 'none');
                                        $('#pedido').fadeIn().css('display', 'block');

                                        var telefone_replace = telefone.replace("(", "")
                                            .replace(")", "").replace(" ", "").replace(" ",
                                                "").replace("-", "");

                                        if (troco != '' && apartamento != '' && bloco != '') {
                                            // se tiver troco, ap e bloco no pedido, entrara neste bloco 
                                            var pedido = '*Agradecemos pela preferência, seu pedido está sendo preparado!*%0A*Nome:* ' + nome +
                                                '%0A*Rua:* ' + rua + ' Nº ' + numero +
                                                '%0A*Bairro:* ' + bairro +
                                                '%0A*Apartamento:* ' + apartamento +
                                                '%0A*Bloco:* ' + bloco +
                                                '%0A*Telefone:* ' + telefone +
                                                '%0A*Lanche:* ' + lanche +
                                                '%0A*Bebida:* ' + bebida +
                                                '%0A*Observações:* ' + observacoes +
                                                '%0A*Preço Total:* R$ ' + preco_total +
                                                '%0A*Troco para:* R$ ' + troco +
                                                '%0A*Forma de pagamento:* ' + forma_pagamento;

                                            // aqui monta o html de pedido na página
                                            $('#pedido').html(
                                                '<div class="row col-12"><h4>Agradecemos pela preferência, agora só resta enviar o pedido &#x1F60A;</h4></div> <div class="row col-12"><div><strong>Nome: </strong>' +
                                                nome + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Rua: </strong>' + rua +
                                                ' Nº ' + numero + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Bairro: </strong>' + bairro + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Apartamento: </strong> ' + apartamento + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Bloco: </strong> ' + bloco + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Telefone: </strong>' +
                                                telefone + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Lanche: </strong>' + lanche + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Observações: </strong>' + observacoes + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Bebida: </strong>' + bebida + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Valor Total: </strong>R$ ' + parseFloat(preco_total) + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Troco para : </strong> R$ ' + troco + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Forma de pagamento: </strong> ' + forma_pagamento + '</div></div>');
                                        } else if (troco === '' && apartamento != '' && bloco != '') {
                                            // se tiver ap e bloco no pedido, entrara neste bloco 
                                            
                                            // variavel pedido monta o pedido que será enviado no html 
                                            var pedido = '*Agradecemos pela preferência, seu pedido está sendo preparado!*%0A*Nome:* ' + nome +
                                                '%0A*Rua:* ' + rua + ' Nº ' + numero +
                                                '%0A*Bairro:* ' + bairro +
                                                '%0A*Apartamento:* ' + apartamento +
                                                '%0A*Bloco:* ' + bloco +
                                                '%0A*Telefone:* ' + telefone +
                                                '%0A*Lanche:* ' + lanche +
                                                '%0A*Bebida:* ' + bebida +
                                                '%0A*Observações:* ' + observacoes +
                                                '%0A*Preço Total:* R$ ' + preco_total +
                                                '%0A*Forma de pagamento:* ' + forma_pagamento;

                                            // aqui monta o html de pedido na página
                                            $('#pedido').html(
                                                '<div class="row col-12"><h4>Agradecemos pela preferência, agora só resta enviar o pedido &#x1F60A;</h4></div> <div class="row col-12"><div><strong>Nome: </strong>' +
                                                nome + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Rua: </strong>' + rua +
                                                ' Nº ' + numero + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Bairro: </strong>' + bairro + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Apartamento: </strong> ' + apartamento + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Bloco: </strong> ' + bloco + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Telefone: </strong>' +
                                                telefone + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Lanche: </strong>' + lanche + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Observações: </strong>' + observacoes + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Bebida: </strong>' + bebida + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Valor Total: </strong>R$ ' + parseFloat(preco_total) + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Forma de pagamento: </strong> ' + forma_pagamento + '</div></div>');
                                        } else if (troco != '' && apartamento != '') {
                                            // se tiver ap e troco no pedido, entrara neste bloco 

                                            // variavel pedido monta o pedido que será enviado no html 
                                            var pedido = '*Agradecemos pela preferência, seu pedido está sendo preparado!*%0A*Nome:* ' + nome +
                                                '%0A*Rua:* ' + rua + ' Nº ' + numero +
                                                '%0A*Bairro:* ' + bairro +
                                                '%0A*Apartamento:* ' + apartamento +
                                                '%0A*Telefone:* ' + telefone +
                                                '%0A*Lanche:* ' + lanche +
                                                '%0A*Bebida:* ' + bebida +
                                                '%0A*Observações:* ' + observacoes +
                                                '%0A*Preço Total:* R$ ' + preco_total +
                                                '%0A*Troco para:* R$ ' + troco +
                                                '%0A*Forma de pagamento:* ' + forma_pagamento;

                                            // aqui monta o html de pedido na página
                                            $('#pedido').html(
                                                '<div class="row col-12"><h4>Agradecemos pela preferência, agora só resta enviar o pedido &#x1F60A;</h4></div> <div class="row col-12"><div><strong>Nome: </strong>' +
                                                nome + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Rua: </strong>' + rua +
                                                ' Nº ' + numero + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Bairro: </strong>' + bairro + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Apartamento: </strong> ' + apartamento + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Telefone: </strong>' +
                                                telefone + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Lanche: </strong>' + lanche + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Observações: </strong>' + observacoes + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Bebida: </strong>' + bebida + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Valor Total: </strong>R$ ' + parseFloat(preco_total) + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Troco para : </strong> R$ ' + troco + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Forma de pagamento: </strong> ' + forma_pagamento + '</div></div>');
                                        } else if (troco != '') {
                                            // variavel pedido monta o pedido que será enviado no html 
                                            var pedido = '*Agradecemos pela preferência, seu pedido está sendo preparado!*%0A*Nome:* ' + nome +
                                                '%0A*Rua:* ' + rua + ' Nº ' + numero +
                                                '%0A*Bairro:* ' + bairro +
                                                '%0A*Telefone:* ' + telefone +
                                                '%0A*Lanche:* ' + lanche +
                                                '%0A*Bebida:* ' + bebida +
                                                '%0A*Observações:* ' + observacoes +
                                                '%0A*Preço Total:* R$ ' + preco_total +
                                                '%0A*Troco para:* R$ ' + troco +
                                                '%0A*Forma de pagamento:* ' + forma_pagamento;

                                            // aqui monta o html de pedido na página
                                            $('#pedido').html(
                                                '<div class="row col-12"><h4>Agradecemos pela preferência, agora só resta enviar o pedido &#x1F60A;</h4></div> <div class="row col-12"><div><strong>Nome: </strong>' +
                                                nome + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Rua: </strong>' + rua +
                                                ' Nº ' + numero + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Bairro: </strong>' + bairro + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Telefone: </strong>' +
                                                telefone + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Lanche: </strong>' + lanche + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Observações: </strong>' + observacoes + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Bebida: </strong>' + bebida + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Valor Total: </strong>R$ ' + parseFloat(preco_total) + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Troco para : </strong> R$ ' + troco + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Forma de pagamento: </strong> ' + forma_pagamento + '</div></div>');

                                        } else {
                                            // se não tiver troco, ap e bloco no pedido, entrara neste bloco 

                                            // variavel pedido monta o pedido que será enviado no html 
                                            var pedido = '*Agradecemos pela preferência, seu pedido está sendo preparado!*%0A*Nome:* ' + nome +
                                                '%0A*Rua:* ' + rua + ' Nº ' + numero +
                                                '%0A*Bairro:* ' + bairro +
                                                '%0A*Telefone:* ' + telefone +
                                                '%0A*Lanche:* ' + lanche +
                                                '%0A*Bebida:* ' + bebida +
                                                '%0A*Observações:* ' + observacoes +
                                                '%0A*Preço Total:* R$ ' + preco_total +
                                                '%0A*Forma de pagamento:* ' + forma_pagamento;

                                            // aqui monta o html de pedido na página
                                            $('#pedido').html(
                                                '<div class="row col-12"><h4>Agradecemos pela preferência, agora só resta enviar o pedido &#x1F60A;</h4></div> <div class="row col-12"><div><strong>Nome: </strong>' +
                                                nome + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Rua: </strong>' + rua +
                                                ' Nº ' + numero + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Bairro: </strong>' + bairro + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Telefone: </strong>' +
                                                telefone + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Lanche: </strong>' + lanche + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Observações: </strong>' + observacoes + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Bebida: </strong>' + bebida + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Valor Total: </strong>R$ ' + parseFloat(preco_total) + '</div></div>' +
                                                '<div class="row col-12"><div><strong>Forma de pagamento: </strong> ' + forma_pagamento + '</div></div>');
                                        }

                                        // ao finalizar o pedido será gerado o link com o pedido do whatsapp para redirecionar o cliente 
                                        var fin_ped = $('#finalizar_pedido').attr('href',
                                            'https://api.whatsapp.com/send?phone=55' +
                                            telefone_replace + '&text=' + pedido,
                                            "_blank");

                                        $('#botao').css('display', 'none');
                                        $('#link_wpp').fadeIn().css('display', 'flex');
                                    } else {
                                        // caso nao aja informações sera retornado a este else
                                        alert('Porfavor Selecione uma forma de pagamento');
                                    }
                                }


                            });
                        } else {
                            // caso nao aja informações sera retornado a este else
                            alert('Porfavor Selecione uma bebida');
                        }

                    });
                } else {
                    // caso nao aja informações sera retornado a este else
                    alert('Porfavor selecione um lanche');
                }

            });
        }
    });
});