<?php

/**
 * @param $token
 * @return array
 */
function responseDataToken($token)
{
    $user = auth()->user();
    return [
        'access_token'          => $token,
        'token_type'            => 'bearer',
        'current_user'          => [
            'nome'      => $user->name,
            /*'usuario'   => $user->usuario,*/
            'email'     => $user->email
        ],
    ];
}

/**
 * @param $user
 * @return string
 */
function generateTokenByUser($user)
{
    return auth()->fromUser($user);
}

/**
 * Verifica se o usuário precisa alterar a senha
 *
 * @return boolean
 */
function mustChangePassword(){
    if ( get_config('CGS', 'CGS_OBRIGAR_ALTERAR_SENHA') !== TRUE || is_admin())
        return false;

    $user = auth()->user();
    $validity = get_config('CGS', 'CGS_VALIDADE_SENHA');
    $lastChange = $user->senha_alterada_em;

    return \Carbon\Carbon::parse($lastChange)->addDays($validity)->isPast();
}

/**
 * Verifica se a notificação de senha quase vencida deve ser exibida
 *
 * @return boolean
 */
function checkNotifyPasswordValidity() {
    if ( get_config('CGS', 'CGS_OBRIGAR_ALTERAR_SENHA') !== TRUE || is_admin())
        return false;

    $user = auth()->user();
    $validity = get_config('CGS', 'CGS_VALIDADE_SENHA');
    $lastChange = $user->senha_alterada_em;

    $today = \Carbon\Carbon::now();
    $validityDate = \Carbon\Carbon::parse($lastChange)->addDays($validity);

    return \App\Utils\Data::diffDias($today->toDateString(), $validityDate->toDateString()) <= 3;
}

/**
 * Verifica se a senha recebida nunca foi utilizada pelo usuário
 *
 * @param string $novaSenha
 * @param \App\Models\Usuario $usuario
 * @throws \App\Exceptions\Usuario\SenhaUtilizadaException
 * @return void
 */
function validateNewPassword(string $novaSenha, \App\Models\Usuario $usuario) {
    $senhaUtilizada = array_filter($usuario->passwordHistory->toArray(), function ($passHistory) use ($novaSenha) {
        return \Hash::check($novaSenha, $passHistory['senha']);
    });

    if (count($senhaUtilizada) || \Hash::check($novaSenha, $usuario->senha) ) {
        throw new \App\Exceptions\Usuario\SenhaUtilizadaException(trans('messages.' . \CODE::E_USUARIO_SENHA_UTILIZADA), \CODE::E_USUARIO_SENHA_UTILIZADA);
    }
}
