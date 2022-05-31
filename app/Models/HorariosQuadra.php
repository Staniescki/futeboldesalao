<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HorariosQuadra extends Model
{
    /**
     * Nome da tabela
     * @var string
     */
    protected $table = 'horarios_quadra';

    /**
     * Lista de colunas Existentes na tabela
     * @var string[]
     */
    protected $fillable = ['id', 'start', 'end', 'description', 'title', 'id_quadra', 'color'];

    /**
     * @var int Tabela primaria da tabela
     */
    protected $primaryKey = 'id';

    /**
     * TimeStamps do eloquent
     * @var bool
     */
    public $timestamps = false;
}
