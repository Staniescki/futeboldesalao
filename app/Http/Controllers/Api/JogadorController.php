<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\User\UserRepository;
use Illuminate\Http\Request;

class JogadorController extends Controller
{
    private $userRepository;

    public function __construct()
    {
        $this->userRepository = new UserRepository();
    }

    public function buscar($id)
    {
        $user = $this->userRepository->buscarUsuario($id);
        return response()->json(['usuario' => $user], 200);
    }
}
