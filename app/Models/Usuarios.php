<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Usuarios
 * @package App\Models
 *
 * @author Diego Staniescki
 * @link https://github.com/diegostaniescki
 * @date 2022-04-11 21:57:36
 */
class Usuarios extends Model
{
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


}
