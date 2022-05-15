<?php

/**
 * Wrapper de envio de mensagem de sucesso
 * @param $message
 * @return array
 */
function mensagem_sucesso($message)
{
    return [
        'message' => $message,
    ];
}

/**
 * Wrapper de envio de mensagem de erro
 * @param $message
 * @return array
 */
function mensagem_erro($message)
{
    return [
        'error' => $message,
    ];
}

/**
 * @param array|Illuminate\Support\Collection|\Illuminate\Pagination\LengthAwarePaginator|\Illuminate\Contracts\Pagination\LengthAwarePaginator $args
 * @param string $statusCode
 * @param boolean $useIndexAttributeObject
 * @return array
 */
function default_response($args, $statusCode = \CODE::S_OPERACAO, $useIndexAttributeObject = true)
{
    // Quando é utilizado o recurso de paginacao, precisamos converter este objeto para array
    $args = $args instanceof \Illuminate\Pagination\LengthAwarePaginator || $args instanceof Illuminate\Support\Collection ? $args->toArray() : $args;
    $_data = ['data' => [
        'code' => $statusCode
    ]];
    foreach ($args as  $attribute => $arg) {
        if($useIndexAttributeObject) {
            $_data['data'] = array_add($_data['data'], $attribute, $arg);
        }else{
            $_data['data'][] = $arg;
        }
    }
    return $_data;
}

/**
 * Error Log Aplicação
 * @param string | array | \Exception $exception
 * @param string|null $file
 * @param string|null $line
 * @param string|null $code
 * @param boolean $force
 */
function _error_log($exception, $file = null, $line = null, $code = null, $force = false)
{
    if($exception instanceof \Exception){
        $file = $exception->getFile();
        $line = $exception->getLine();
        $code = method_exists($exception, 'getCustomCode') ? $exception->getCustomCode() : null;
        $exception = $exception->getMessage();
    }
    $messageException = "";
    if(config('app.env') !== 'production' || $force)
    {
        if(!is_null($file)) {
            $messageException .= "Arquivo que gerou log: $file \r\n";
        }
        if(!is_null($line)) {
            $messageException .= "Linha do arquivo que gerou o log: $line \r\n";
        }
        $exception = is_array($exception) ? implode(PHP_EOL, $exception) : $exception;
        $messageException .= "Mensagem: $exception";

        if (!is_null($code)) {
            $messageException .= "\nCódigo do log: $code \r\n";
        }
        info($messageException);
    }
}
