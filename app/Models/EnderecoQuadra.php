<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EnderecoQuadra extends Model
{
    /**
     * Nome da tabela
     * @var string
     */
    protected $table = 'endereco_quadra';

    /**
     * Lista de colunas Existentes na tabela
     * @var string[]
     */
    protected $fillable = ['id_endereco','rua','numero','bairro','cidade','cep'];

    /**
     * @var string Chave Primaria
     */
    protected $primaryKey = 'id_endereco';
    /**
     * TimeStamps do eloquent
     * @var bool
     */
    public $timestamps = false;

    ############################# RELACIONAMENTOS ######################
}
