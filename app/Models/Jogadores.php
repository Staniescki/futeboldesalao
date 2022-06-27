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
    protected $fillable = ['id_jogador', 'id_usuario', 'apelido', 'idade', 'sexo', 'posicao', 'pe_preferido', 'data_nascimento', 'telefone', 'celular', 'facebook', 'instagram', 'twitter', 'imgjogador'];

    /**
     * TimeStamps do eloquent
     * @var bool
     */
    public $timestamps = false;

    ############################# RELACIONAMENTOS ######################

    public function user()
    {
        return $this->belongsTo('App\User', 'id', 'id_usuario');
    }

    public function time()
    {
        return $this->hasOne('App\Models\Time', 'presidente_id', 'id_usuario');
    }

}
