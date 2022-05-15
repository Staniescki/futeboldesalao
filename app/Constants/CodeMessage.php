<?php

namespace App\Constants;

/**
 * Classe com codigos de erro. Os erros devem seguir o seguinte padrão:
 * Com prefixo E_, mensagens de erro, enquanto o prefixo S_ para mensagens de sucesso.
 * Sempre definir o nome das constantes no singular e seguir a numeração
 *
 * Class ErroCode
 *
 */
class CodeMessage
{
    /*################################################### ERROS ###################################################*/

    /**
     * Erro generico na execução da operação
     */
    const E_OPERACAO = 'E0000';

    /**
     * Quando ocorre um erro no processo solicitado
     */
    const E_PROCESSO = 'E0001';

    /**
     * Quando o token de acesso for inválido
     */
    const E_TOKEN_INVALIDO = 'E0002';

    /**
     * Quando o token nao for mais valido ou o usuario nao possui acesso com o respectivo token
     */
    const E_TOKEN_NAO_AUTORIZADO = 'E0003';

    /**
     * Quando o token não conter todas informações necessárias para acessar determinado recurso
     */
    const E_TOKEN_DADO_INVALIDO = 'E0004';

    /**
     * Quando sao executadas tentativas em acesso a um recurso dentro de um espaço de tempo baixo, irá retornar esse erro.
     */
    const E_TENTIVA_EXCEDIDA_ACESSO = 'E0005';

    /**
     * Quando gera algum erro de consulta, inserção, atualização no banco de dados
     */
    const E_BANCO_DADOS = 'E0006';

    /**
     * Quando o preenchimento de campos enviados através de POST, PUT não estão completos ou são inválidos
     */
    const E_CAMPO_INVALIDO = 'E0007';

    /**
     * Se por algum motivo gerar um erro ao gerar o token
     */
    const E_GERAR_TOKEN = 'E0008';

    /**
     * Xml informado não é válido
     */
    const E_XML_INVALIDO = 'E0009';

    /**
     * Recurso ou rota não encontrado
     */
    const E_RECURSO_NAO_ENCONTRADO = 'E0010';

    /**
     * Quando é informado um usuário que já está cadastrado na base de dados
     */
    const E_USUARIO_EXISTENTE = 'E0011';

    /**
     * Quando um e-mail não está disponível para utilização.
     */
    const E_EMAIL_DISPONIVEL = 'E0012';

    /**
     * Quando um usuário não está disponível para utilização.
     */
    const E_USUARIO_DISPONIVEL = 'E0013';

    /**
     * Quando ocorre um erro na geração do DANFE
     */
    const E_GERAR_DANFE = 'E0014';

    /**
     * O valor de filtro dinâmico não está de acordo com o esperado
     */
    const E_VALOR_FILTRO = 'E0015';

    /**
     * O tipo de filtro informado não reconhecido ou permitido
     */
    const E_TIPO_FILTRO = 'E0016';

    /**
     * Senha do certificado inválida
     */
    const E_SENHA_CERTIFICADO = 'E0017';

    /**
     * Quando o certificado digital está vencido
     */
    const E_CERTIFICADO_VENCIDO = 'E0018';

    /**
     * Quando o certificado digital é excluido porém ainda está ativo
     */
    const E_EXCLUIR_CERTIFICADO_ATIVO = 'E0019';

    /**
     * Quando o verbo HTTP enviado diverge do permitido
     */
    const E_HTTP_METODO_NAO_PERMITIDO = 'E0020';

    /**
     * Quando o cadastro de e-mail é duplicado
     */
    const E_EMAIL_CADASTRO_DUPLICADO = 'E0021';

    /**
     * Quando o node informado para assinatura não está cadastrado entre as lista de permitidas
     */
    const E_NODE_XML_INVALIDO = 'E0022';

    /**
     * Quando o node informado não é encontrado como tag do XML
     */
    const E_NODE_XML_NAO_ENCONTRADO = 'E0023';

    /**
     * Quando e realizada a tentativa do manifesto ja vinculado ao documento
     */
    const E_MANIFESTO_EXISTENTE = 'E0024';

    /**
     * Quando é utilizado o certificado e o mesmo ainda nao foi instalado na respectiva empresa
     */
    const E_CERTIFICADO_INDEFINIDO = 'E0025';

    /**
     * Quando não é localizado os dados de integração do Web Service da SEFAZ ou da prefeitura
     */
    const E_SERVICO_INEXISTENTE = 'E0030';

    /**
     * Quando não é localizado a aplicação informada para a busca do serviço
     */
    const E_SERVICO_APLICACAO_INEXISTENTE = 'E0031';

    /**
     * Quando não é localizado a o nome do serviço com base nos dados enviados
     */
    const E_SERVICO_NOME_SERVICO_INEXISTENTE = 'E0032';

    /**
     * Quando por algum motivo o servidor da SEFAZ não consegue processar a solicitação e gera um erro
     */
    const E_SEFAZ_SERVIDOR = 'E0033';

    /**
     * Quando a sefaz está com instabilidade e gera erros de conexão
     */
    const E_SEFAZ_CONEXAO = 'E0034';

    /**
     * Quando a SEFAZ não consegue processar a solicitação e gera um erro por conta dos erros do body enviado
     */
    const E_SEFAZ_REQUISICAO = 'E0035';

    /**
     * Quando no retorno da SEFAZ a resposta vem vazia
     */
    const E_SEFAZ_RESPOSTA_VAZIA = 'E0036';

    /**
     * Quando não é possível determinar o SOAP Action do WebService em questão
     */
    const E_SEFAZ_SOAP_ACTION_INDEFINIDO = 'E0037';

    /**
     * Quando o response definido na base de dados não corresponde ao retornado da SEFAZ
     */
    const E_SEFAZ_RESPONSE_INESPERADO = 'E0038';

    /**
     * Quando ocorre um erro na manifestação
     */
    const E_MANIFESTO = 'E0039';

    /**
     * Este erro geralmente ocorre quando a SEFAZ não retorna a chave de acesso do evento emitido na sua
     * estrutura de resposta. Desta maneira não conseguimos determinar a qual documento pertence o referido
     * retorno no lote de emissão do evento
     */
    const E_EVENTO_RET_INDEFINIDO = 'E0040';

    /**
     * No processo de definição do fluxo a ser seguido, pode haver problemas na determinação de classes para prosseguir
     * com a solicitação. Desta maneira gera este erro.
     */
    const E_FACTORY_NAO_DEFINIDO = 'E0041';

    /**
     * Caso o XML de resposta do Webservice este diferente do esperado, gera este erro no processamento.
     */
    const E_RESPONSE_XML_INESPERADO = 'E0042';

    /**
     * Quando não foi possivel definir o factory da leitura de XML
     */
    const E_FACTORY_XML_NAO_DEFINIDO = 'E0043';

    /*
     * Quando obtemos erro na geração do arquivo de xml por periodo
     */
    const E_XML_PERIODO_GERAR = 'E0044';

    /**
     * Quando em um determinado fluxo da aplicação, o usuario que realizou a ação não foi definido na aplicação
     */
    const E_USUARIO_INDEFINIDO = 'E0045';

    /**
     * Na leitura do XML através de qualquer meio de leitura, onde os dados do XML não representam nenhum emprsa
     * cadastrada
     */
    const E_LEITURA_XML_EMPRESA_INDEFINIDA = 'E0046';

    /**
     * Quando não foi possivel localizar o schema a ser utilizada no diretorio correspondente.
     */
    const E_SCHEMA_NAO_ENCONTRADO = 'E0047';

    /**
     * Quando o respectivo documento já foi importado para a aplicação
     */
    const E_LEITURA_DOCUMENTO_EXISTENTE = 'E0048';

    /**
     * Este erro é gerado quando o XML a ser lido não está de acordo com o schema de comparação
     */
    const E_SCHEMA_XML_INCORRETO = 'E0049';

    /**
     * Na leitura do XML através de qualquer meio de leitura, onde os dados do XML não representam nenhum
     * documento cadastrado seja qualquer aplicação ele pertença
     */
    const E_LEITURA_XML_EVENTO_DOCUMENTO_PERTENCENTE_INEXISTENTE = 'E0050';

    /**
     * Na leitura do XML através de qualquer meio de leitura, onde os dados do XML já constam vinculados a um documento
     */
    const E_LEITURA_XML_EVENTO_VINCULADO = 'E0051';

    /**
     * Na leiturada de XML de evento, pode haver casos onde o XML que está sendo lido, possui um tipo de evento que não
     * é importado pela aplicação. Desta maneira, disparamos este código que irá identificar estes casos.
     */
    const E_LEITURA_XML_EVENTO_NAO_RECONHECIDO = 'E0052';

    /**
     * O usuário informado para autenticação não possui acesso a empresa informada
     */
    const E_USUARIO_NAO_AUTORIZADO_EMPRESA = 'E0053';

    /**
     * Quando um determinado recurso da aplicação é acessadoo e o usuário logado não possui permissões para utilização
     */
    const E_ACESSO_NAO_AUTORIZADO = 'E0054';

    /**
     * Na leitura do TXT através de qualquer meio de leitura, onde os dados do TXT não representam nenhum emprsa
     * cadastrada
     */
    const E_LEITURA_TXT_EMPRESA_INDEFINIDA = 'E0055';

    /**
     * Referente a arquivos que foram solicitados para baixa anteriormente porem foram excluídos do servidor
     */
    const E_ARQUIVO_INEXISTENTE = 'E0056';

    /**
     * Quando no processo de leitura do XML, não é possível determinar a versão do documento
     */
    const E_LEITURA_XML_VERSAO_INDEFINIDA = 'E0057';

    /**
     * Quando o token de acesso ja expirou
     */
    const E_TOKEN_EXPIRADO = 'E0058';

    /**
     * Falha de desenvolvimento, que não definiu corretamente a propriedade que define a empresa nas configurações
     */
    const E_CONSULTA_DFE_EMPRESA_NAO_DEFINIDA = 'E0059';

    /**
     * Quando o usuário e/ou senha estiverem inválidos.
     */
    const E_USUARIO_SENHA_INVALIDO = 'E0060';

    /**
     * Quando por algum motivo o servidor não consegue processar a solicitação e gera um erro
     */
    const E_WS_SERVIDOR = 'E0061';

    /**
     * Quando há instabilidade no servidor e gera erros de conexão
     */
    const E_WS_CONEXAO = 'E0062';

    /**
     * Quando o WS não consegue processar a solicitação e gera um erro por conta dos erros do body enviado
     */
    const E_WS_REQUISICAO = 'E0063';

    /**
     * Quando e realizada a tentativa do cancelamento ja vinculado ao documento
     */
    const E_CANCELAMENTO_EXISTENTE = 'E0064';

    /**
     * Quando no processo de solicitação do documento fiscal, o e-mail de recebimento não está cadastrado
     */
    const E_SOLICITAR_DFE_EMAIL_INEXISTENTE = 'E0065';

    /**
     * Quantidade de requisições excedidas dentro do intervalo definido
     */
    const E_REQUISICAO_EXCEDIDA_TENTATIVAS = 'E0066';

    /**
     * Na leitura do TXT SPED através de qualquer meio de leitura, onde a empresa não foi definida no processo de importação.
     */
    const E_LEITURA_TXT_SPED_EMPRESA_INDEFINIDA = 'E0067';

    /**
     * Nenhum documento localizado para baixa
     */
    const E_CONSULTA_DFE_DOCUMENTOS_NAO_LOCALIZADOS = 'E0068';

    /**
     * Quando não possui um host para integração com a taxWeb
     */
    const E_INTEGRACAO_TAXWEB_HOST_NAO_CONFIGURADO = 'E0069';

    /**
     * Quando não possui pedido vinculado ao documento fiscal importado
     */
    const E_INTEGRACAO_TAXWEB_PEDIDO_NAO_ENCONTRADO = 'E0070';

    /**
     * Quando não foi possivel definir o factory da leitura de TXT
     */
    const E_FACTORY_TXT_NAO_DEFINIDO = 'E0071';

    /**
     * Quando a empresa não possui um email host cadastro
     */
    const E_EMPRESA_MAIL_HOST_INEXISTENTE = 'E0072';


    /**
     * Quando a data de emissão da nota é inferior a data inicial configurada para consulta Taxweb
     */
    const E_INTEGRACAO_TAXWEB_DATA_INVALIDA = 'E0073';

    /**
     * Quando um documento a ser lido/processado e que por algum motivo é invalido
     */
    const E_ARQUIVO_INVALIDO = 'E0074';

    /**
     * Quanado um tipo de retorno não é reconhecido
     */
    const E_LEITURA_TXT_TIPO_RETORNO_NAO_RECONHECIDO = 'E0075';


    /**
     * Tipo de emissão da empresa não é suportado pela aplicação
     */
    const E_TPEMIS_NAO_SUPORTADO = 'E0076';

    /**
     * Este erro geralmente ocorre quando a SEFAZ não retorna a chave de acesso do documento emitido na sua
     * estrutura de resposta. Desta maneira não conseguimos determinar a qual documento pertence o referido
     * retorno no lote de emissão do documento
     */
    const E_EMISSAO_RET_INDEFINIDO = 'E0077';

    /**
     * Este erro geralmente ocorre quando a SEFAZ não retorna a chave de acesso do documento emitido na sua
     * estrutura de resposta. Desta maneira não conseguimos determinar a qual documento pertence o referido
     * retorno no lote de emissão do documento
     */
    const E_EMISSAO_CONSRECI_INDEFINIDO = 'E0078';

    /**
     * Este erro é gerado quando o diretorio de retorno não está definido
     */
    const E_RETORNO_DIRETORIO_INDEFINIDO = 'E0079';

    /**
     * Este erro é gerado quando a nomenclatura do arquivo não está definida
     */
    const E_RETORNO_NOMENCLATURA_ARQUIVO = 'E0080';

    /**
     * Este erro é gerado quando o certificado digital está vencido
     */
    const E_CERTIFICADO_EXPIRADO = 'E0081';

    /**
     * Este erro é gerado quando o layout de geração do retorno TXT é invalido
     */
    const E_RETORNO_TXT_LAYOUT_INVALIDO = 'E0082';

    /**
     * Na leitura do TXT através de qualquer meio de leitura, onde os dados do TXT não representam nenhum
     * documento cadastrado seja qualquer aplicação ele pertença
     */
    const E_LEITURA_TXT_EVENTO_DOCUMENTO_PERTENCENTE_INEXISTENTE = 'E0083';

    /**
     * Quando o documento fiscal não é localizado através da leitura TXT
     */
    const E_LEITURA_TXT_DOCUMENTO_INEXISTENTE = 'E0084';

    /**
     * Estouro de memória na msg XML no processo de emissão
     */
    const E_EMISSAO_OVERFLOW_MSG_XML = 'E0085';


    /**
     * Relatório selecionado possui campos inválidos
     */
    const E_RELATORIO_INVALIDO = 'E0086';

    /**
     * Data limite estipulada na configuração da empresa é ultrapassada pela solicitação da busca
     */
    const E_DATA_LIMITE = 'E0087';

    /**
     * Erro quando não há configuração para destinatários do e-mail de correção Portal
     */
    const E_DEST_EMAIL = 'E0088';

    /**
     * Este erro ocorre, quando utilizado o recurso de definição de classe com base em preenchimento de outro campo
     * o valor definido no respectivo campo, não está definido no mapeamento.
     */
    const E_LEITURA_XML_ATRIBUICAO_CLASSE_INDEFINIDA = 'E0089';

    /**
     * Quando não existem um evento no retorno
     */
    const E_RETORNO_EVENTO_INEXISTENTE = 'E0090';

    /**
     * Quando esta configurado para determinados endpoints/recursos esteram desabilitados
     */
    const E_RECURSO_DESABILITADO = 'E0091';

    /**
     * Quando o cadastro de empresa é duplicado
     */
    const E_EMPRESA_CADASTRO_DUPLICADO = 'E0092';

    /**
     * Quando o usuário tenta alterar a senha e a mesma já tenha sido utilizada
     */
    const E_USUARIO_SENHA_UTILIZADA = 'E0093';

    /**
     * Erro ao estabelecer conexão com email
     */
    const E_EMAIL_ABERTURA_CONEXAO = 'E0094';

    /**
     * Quando e realizada a tentativa de emissão ou importação cancelamento de comprovante e o mesmo não existe
     */
    const E_COMPROVANTE_ENTREGA_INEXISTENTE = 'E0095';

    /**
     * Quando e realizada a tentativa de emissão ou importação de comprovante e o mesmo existe
     */
    const E_COMPROVANTE_ENTREGA_EXISTENTE = 'E0096';

    /**
     * Quando não existe configurada par empresa ou para o fluxo de impressao
     */

    const E_IMPRESSORA_INEXISTENTE = 'E0097';
    /**
     * Quando e realizado envio de e-mail sem um destinatário definido
     */
    const E_EMAIL_EMAIL_SEM_DESTINARIO = 'E0098';

    /**
     * Quando existe registro de que a tarefa já está em execução
     */
    const E_TASK_RUNNING = 'E0099';

    /**
     * Quando existe registro de uma tarefa filha que a tarefa já está em execução
     */
    const E_TASK_CHILD_RUNNING = 'E0100';

    /**
     * Ocorre quando nem todos os dados do boleto estão armazenadoBos
     */
    const E_GESTA_BOLETO_AUSENCIA_DADOS = 'E0101';

    /**
     * Ocorre quando é emitido um evento para um documentos fiscal que possui uma versao inferior a permitida.
     */
    const E_EVENTO_VERSAO_DOC_FISCAL_VERSAO_INCOMPATIVEL = 'E0102';

    const E_USUARIO_INTEGRACAO_INDEFINIDO = 'E0103';

    const E_BLOQUEIO_EMISSAO = 'E0104';

    /**
     * Quando é utilizado o certificado e que foi cadastrado com sucesso, mas há problema na geração do pem ou na sua utilização
     */
    const E_CERTIFICADO_INVALIDO = 'E0105';

    const E_EMAIL_EMPRESA_NAO_CADASTADO = 'E0106';

    /*################################################### SUCESSO ###################################################*/

    /**
     * Definicao generica, quando a operacao realizada retornou com sucesso.
     */
    const S_OPERACAO = 'S0000';

    /**
     * Quando o usuário e/ou senha estiverem corretos.
     */
    const S_USUARIO_SENHA_VALIDO = 'S0001';

    /**
     * Quando o usuário se deslogar com sucesso
     */
    const S_LOGOUT = 'S0002';

    /**
     * Quando há sucesso no processo de cadastro
     */
    const S_CADASTRO = 'S0003';

    /**
     * Quando há sucesso no processo de atualização de registros
     */
    const S_ATUALIZADO = 'S0004';

    /**
     * Quando há sucesso no processo de exclusão de registros
     */
    const S_EXCLUIDO = 'S0005';

    /**
     * Quando um registro excluído logicamente é restaurado com sucesso.
     */
    const S_RESTAURAR = 'S0006';

    /**
     * Quando um e-mail para cadastro está disponível para uso.
     */
    const S_EMAIL_DISPONIVEL = 'S0007';

    /**
     * Quando um usuario para cadastro está disponível para uso.
     */
    const S_USUARIO_DISPONIVEL = 'S0008';

    /**
     * Quando o DANFE é gerado com sucesso
     */
    const S_GERAR_PDF = 'S0009';

    /**
     * Quando o certificado digital é válido
     */
    const S_CERTIFICADO_VALIDO = 'S0010';

    /**
     * Quando o manifesto é realizado com sucesso
     */
    const S_MANIFESTO = 'S0011';

    /**
     * Quando requisitado algum tipo de informacao, porém a resposta é vazia
     */
    const S_DADOS_VAZIO = 'S0012';

    /**
     * Quando com sucesso a file e processado corretamente
     */
    const S_PROCESSO_FILA = 'S0013';

    /**
     * Quando sucesso para consulta na Taxweb
     */
    const S_CONSULTA_TAXWEB = 'S0014';

    /*################################################### ERROS RELACIONADOS APENAS A CONSULTA DF-E ###################################################*/

    /**
     * Quando esta autorizado a solicitar
     */
    const S_CONSULTA_DFE_AUTORIZADO_SOLICITAR = "SDFE0001";

    /**
     * Quando não esta autorizado a solicitar o documento por um erro não específicado
     */
    const E_CONSULTA_DFE_NAO_AUTORIZADO_SOLICITAR = "EDFE0001";


    /*############################## ERROS RELACIONADOS APENAS A  NF-E ############################## */
    /**
     * Se a configuração do captura não permitir importação de documentos de transferencia
     */
    const E_CONSULTA_DFE_NFE_NAO_PERMITE_TRANSFERENCIA = 'ENFE0001';

    /**
     * Se a data de emissão do documento não estiver dentro do periodo de dias determinado na configuração
     */
    const E_CONSULTA_DFE_NFE_NAO_PERTENCE_PERIODO = 'ENFE0002';

    /**
     * Se a configuração do captura não permitir importação de documentos onde a empresa é a transportadora
     */
    const E_CONSULTA_DFE_NFE_NAO_PERMITE_TRANSPORTADORA = 'ENFE0003';

    /**
     * Se a configuração do captura não permitir importação de documentos onde a empresa consta no AutXML
     */
    const E_CONSULTA_DFE_NFE_NAO_PERMITE_AUTXML = 'ENFE0004';

    /**
     * Se a configuração estiver marcada para não importar manifestadas exceto ciencia da operação
     */
    const E_CONSULTA_DFE_NFE_NAO_PERMITE_MANIFESTO_EXCETO_CIENCIA = 'ENFE0005';

    /**
     * Se a configuração estiver marcada para não importar notas manifestadas
     */
    const E_CONSULTA_DFE_NFE_NAO_PERMITE_MANIFESTO = 'ENFE0006';

    /**
     * Em alguns casos, a chave de acesso poderá pertencer ao emintente, nos casos de evento
     */
    const E_CONSULTA_DFE_NFE_NAO_PERMITE_NOTA_EMITENTE = 'ENFE0007';

    /**
     * Quando é retornado um evento e não obtivemos o documento fiscal previamente, não deverá ser solicitado
     */
    const E_CONSULTA_DFE_NFE_NAO_PERMITE_SOLICITACAO_EVENTO = 'ENFE0008';

    /**
     * Quando não está autorizada a importação de Notas Completa ou Resumo.
     * Utilizada na maior parte das vezes quando o cliente possui saída maas não possui captura configurado
     * Entretando existem eventos de interesse do emitente como por exemplo Averbação e Manifesto.
     */
    const E_CONSULTA_DFE_NFE_NAO_PERMITE_NOTA_COMPLETA_RESUMO = 'ENFE0009';

    /*############################## ERROS RELACIONADOS APENAS A  CT-E ############################## */

    /**
     * Se a configuração do cliente não permitir importação do CT-e quando o mesmo for remetente
     */
    const E_CONSULTA_DFE_CTE_NAO_PERMITE_REMETENTE = 'ECTE0001';

    /**
     * Se a configuração do cliente não permitir importação do CT-e quando o mesmo for remetente
     */
    const E_CONSULTA_DFE_CTE_NAO_PERMITE_RECEBEDOR = 'ECTE0002';

    /**
     * Se a configuração do cliente não permitir importação do CT-e quando o mesmo for expedidor
     */
    const E_CONSULTA_DFE_CTE_NAO_PERMITE_EXPEDIDOR = 'ECTE0003';
    /**
     * Se a configuração do cliente não permitir importação do CT-e quando o mesmo for destinatario
     */
    const E_CONSULTA_DFE_CTE_NAO_PERMITE_DESTINATARIO = 'ECTE0004';
    /**
     * Se a configuração do cliente não permitir importação do CT-e quando o mesmo estiver como autXML
     */
    const E_CONSULTA_DFE_CTE_NAO_PERMITE_AUTXML = 'ECTE0005';

    /**
     * Se a data de emissão do documento não estiver dentro do periodo de dias determinado na configuração
     */
    const E_CONSULTA_DFE_CTE_NAO_PERTENCE_PERIODO = 'ECTE0006';

    /**
     * Em alguns casos, a chave de acesso poderá pertencer ao emintente, nos casos de evento
     */
    const E_CONSULTA_DFE_CTE_NAO_PERMITE_NOTA_EMITENTE = 'ECTE0007';

    /**
     * Quando é retornado um evento e não obtivemos o documento fiscal previamente, não deverá ser solicitado
     */
    const E_CONSULTA_DFE_CTE_NAO_PERMITE_SOLICITACAO_EVENTO = 'ECTE0008';

    /**
     * 'Não há código de erro registrado para a nota.
     */
    const MESSAGE_DEFAULT = 'E1000';

}
