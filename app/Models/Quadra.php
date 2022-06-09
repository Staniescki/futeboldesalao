<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Quadra extends Model
{
    /**
     * Nome da tabela
     * @var string
     */
    protected $table = 'quadra';

    /**
     * Lista de colunas Existentes na tabela
     * @var string[]
     */
    protected $fillable = ['id_quadra','nome_quadra','id_endereco'];

    /**
     * @var string Chave Primaria
     */
    protected $primaryKey = 'id_quadra';
    /**
     * TimeStamps do eloquent
     * @var bool
     */
    public $timestamps = false;

    ############################# RELACIONAMENTOS ######################


    public function horariosQuadra()
    {
        return $this->hasMany('App\Models\HorariosQuadra', 'id_quadra', 'id_quadra');
    }
}
