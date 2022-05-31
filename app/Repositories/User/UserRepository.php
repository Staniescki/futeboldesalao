<?php


namespace App\Repositories\User;


use App\Models\EnderecoUsuario;
use App\Models\Jogadores;
use App\User;

class UserRepository
{
    /**
     * @var User
     */
    private $users;

    /**
     * @var EnderecoUsuario
     */
    private $endereco_usuario;

    /**
     * @var Jogadores
     */
    private $jogadores;

    /**
     * constructor.
     */
    public function __construct()
    {
        $this->users = new User();
        $this->endereco_usuario = new EnderecoUsuario();
        $this->jogadores = new Jogadores();
    }


    public function createUser($request)
    {
        $usuario = [
            'name' => $request->nome_completo,
            'email'=> $request->email,
            'password' => bcrypt($request->senha),
        ];

        $endereco = [
            'bairro' => $request->bairro,
            'cep'    => $request->cep,
            'cidade' => $request->cidade,
            'numero' => $request->numero,
            'rua' => $request->rua,
        ];

        $jogador = [
         'apelido'  =>  $request->apelido,
         'idade'    =>  $request->idade,
         'sexo'     =>  $request->sexo,
         'posicao'  =>  $request->posicao,
         'pe_preferido' =>  $request->pe_preferido,
          'data_nascimento' =>$request->data_nascimento
        ];

       $user = $this->users->create($usuario);
       $user->enderecoUsuario()->create($endereco);
       $user->jogadores()->create($jogador);

    }

}