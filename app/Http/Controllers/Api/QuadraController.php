<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Quadra;
use App\Repositories\Quadra\QuadraRepository;
use Illuminate\Http\Request;

class QuadraController extends Controller
{

    private $repositoryQuadra;

    public function __construct()
    {
        $this->repositoryQuadra = new QuadraRepository();
    }

    public function listar()
    {
        $quadras = $this->repositoryQuadra->listarQuadras();
        return response()->json(['quadras' => $quadras], 200);
    }
}
