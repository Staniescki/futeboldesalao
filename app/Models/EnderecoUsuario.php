<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class EnderecoUsuario
 * @package App\Models
 */
class EnderecoUsuario extends Model
{
    /**
     * Nome da tabela
     * @var string
     */
    protected $table = 'endereco_usuario';

    /**
     * Lista de colunas Existentes na tabela
     * @var string[]
     */
    protected $fillable = ['id','id_usuario','bairro','cep','cidade','numero','rua','created_at','updated_at'];

    /**
     * @var string Chave Primaria
     */
    protected $primaryKey = 'id';
    /**
     * TimeStamps do eloquent
     * @var bool
     */
    public $timestamps = true;

    ############################# RELACIONAMENTOS ######################

    public function user()
    {
        return $this->belongsTo('App\User', 'id', 'id_usuario');
    }

}
