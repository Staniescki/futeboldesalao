<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Time extends Model
{
    /**
     * Nome da tabela
     * @var string
     */
    protected $table = 'time';

    /**
     * Lista de colunas Existentes na tabela
     * @var string[]
     */
    protected $fillable = ['id_time','id_quadra', 'nome_time',	'cidade', 'img', 'fundacao_time', 'nome_oficial', 'categoria',	'presidente_id'];

    /**
     * @var string Chave Primaria
     */
    protected $primaryKey = 'id_time';
    /**
     * TimeStamps do eloquent
     * @var bool
     */
    public $timestamps = false;

    ############################# RELACIONAMENTOS ######################

    public function jogadores()
    {
        return $this->belongsTo('App\Models\Jogadores', 'id_jogador', 'presidente_id');
    }
}
