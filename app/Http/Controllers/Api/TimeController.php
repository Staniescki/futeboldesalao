<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\Time\TimeRepository;
use Illuminate\Http\Request;

class TimeController extends Controller
{
    private $timeRepository;

    public function __construct()
    {
        $this->timeRepository = new TimeRepository();
    }

    public function criar(Request $request)
    {
        $time = $this->timeRepository->criarTime($request);
        return response()->json(['time' => $time], 200);
    }
}
