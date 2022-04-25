<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class EnumUsuarios
 * @package App\Models
 *
 * @author Diego Staniescki
 * @link https://github.com/diegostaniescki
 * @date 2022-04-06 16:23:00
 */
class EnumUsuarios extends Model
{
    /**
     * Nome da tabela representada por esta classe
     * @var string
     */
    protected $table = 'enum_usuarios';

    /**
     * Lista de colunas existentes nesta tabela
     * @var string
     */
    protected $fillable = ['id_usuarios', 'nivel_usuario'];

    /**
     * Chave Primaria desta tabela
     * @var string
     */
    protected $primaryKey = 'id_usuarios';

    /**
     * Utilização de timestamp do Eloquent
     * @var boolean
     */
    public $timestamps = false;
}
