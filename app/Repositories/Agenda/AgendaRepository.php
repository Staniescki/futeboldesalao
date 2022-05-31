<?php


namespace App\Repositories\Agenda;


use App\Models\HorariosQuadra;
use Illuminate\Database\Eloquent\Model;

class AgendaRepository
{
    /**
     * @var HorariosQuadra
     */
    private $horarios_quadra;

    public function __construct()
    {
        $this->horarios_quadra = new HorariosQuadra();
    }

    public function getHorarios()
    {
        return $this->horarios_quadra->select('id', 'start', 'end', 'description', 'title', 'color')->get();
    }
}
