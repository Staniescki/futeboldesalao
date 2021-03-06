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

    public function getHorarios($id)
    {
        return $this->horarios_quadra->where('id_quadra', $id)->select('id', 'id_quadra', 'id_usuario','start', 'end', 'description', 'title', 'color')->get();
    }

    public function criarEvento($request)
    {
        return $this->horarios_quadra->create([
           'title' => $request->title,
           'start' => $request->start,
           'end' => $request->end,
           'id_quadra' => $request->id_quadra,
           'id_usuario' => $request->id_usuario,
           'color' => $request->color,
           'description' => $request->description
        ]);
    }

    public function editarHorario($request)
    {

        return $this->horarios_quadra->where('id', $request->id)->update([
            'title' => $request->title,
            'start' => $request->start,
            'end' => $request->end,
            'id_quadra' => $request->id_quadra,
            'color' => $request->color,
            'description' => $request->description
        ]);
    }

    public function excluirHorario($id)
    {
        return $this->horarios_quadra->where('id', $id)->delete();
    }
}
