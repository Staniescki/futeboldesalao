<?php

namespace App\Repositories\Time;

use App\Models\Time;

class TimeRepository
{
    /**
     * @var Time
     */
    private $time;

    public function __construct()
    {
        $this->time = new Time();
    }

    public function criarTime($request)
    {
        $data = [
            'id_quadra' => $request->quadra_local,
            'nome_time' => $request->nome,
            'cidade' => $request->cidade,
            'img' => $request->img,
            'fundacao_time' => $request->fundacao_time,
            'nome_oficial' => $request->nome_oficial,
            'categoria' => $request->categoria,
            'presidente_id' => $request->presidente[0]['id_usuario']
        ];

        return $this->time->create($data);

    }
}
