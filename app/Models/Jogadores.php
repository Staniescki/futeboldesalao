<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Jogadores
 * @package App\Models
 *
 * @author Diego Staniescki
 * @link https://github.com/diegostaniescki
 * @date 2022-04-11 22:20:35
 */
class Jogadores extends Model
{
    /**
     * Nome da tabela
     * @var string
     */
    protected $table = 'jogadores';

    /**
     * Lista de colunas Existentes na tabela
     * @var string[]
     */
    protected $fillable = ['id_jogador', 'id_usuario', 'nome_jogador', 'idade', 'sexo', 'posicao', 'pe_preferido'];

    /**
     * TimeStamps do eloquent
     * @var bool
     */
    public $timestamps = false;

    ############################# RELACIONAMENTOS ######################

}
