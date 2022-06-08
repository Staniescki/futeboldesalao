<?php

namespace App\Repositories\Quadra;

use App\Models\Quadra;

class QuadraRepository
{
    private $quadra;

    public function __construct()
    {
        $this->quadra = new Quadra();
    }


    public function listarQuadras()
    {
        return $this->quadra->select('id_quadra', 'nome_quadra', 'id_endereco')->get();
    }

}
