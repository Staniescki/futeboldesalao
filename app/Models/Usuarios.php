<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

/**
 * Class Usuarios
 * @package App\Models
 *
 * @author Diego Staniescki
 * @link https://github.com/diegostaniescki
 * @date 2022-04-11 21:57:36
 */
class Usuarios extends Authenticatable implements JWTSubject
{
    use Notifiable;

    /**
     * @var string Nome da Tabela
     */
    protected $table = "usuarios";

    /**
     * @var string[] Lista de colunas da tabela
     */
    protected $fillable = ['id', 'id_enum', 'nome_usuario', 'email', 'password', 'usuario'];

    /**
     * Chave Primaria da tabela
     * @var string
     */
    protected $primaryKey = 'id';

    /**
     * Utilizacao do TimesStamps do eloquent
     * @var bool
     */
    public $timestamps = false;

    #################################### RELACIONAMENTOS #######################

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

}
