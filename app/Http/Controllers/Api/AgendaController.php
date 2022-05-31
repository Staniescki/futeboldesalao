<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\HorariosQuadra;
use App\Repositories\Agenda\AgendaRepository;
use Illuminate\Http\Request;

class AgendaController extends Controller
{
    /**
     * @var HorariosQuadra
     */
    private $agendaRepository;

    public function __construct()
    {
         $this->agendaRepository = new AgendaRepository();
    }

    public function criarHorario(Request $request)
    {

    }

    public function horarios()
    {
        $horarios = $this->agendaRepository->getHorarios();
        return response()->json(['horarios' => $horarios],200);
    }
}
