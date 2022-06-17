<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
/*
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/
Route::post('auth/login', 'Api\AuthController@login');
Route::group(['prefix' => 'auth', 'namespace' => 'Api'], function () {
    Route::get('me', 'AuthController@me');
});
Route::group(['middleware' => ['apiJwt']], function (){
    Route::group(['prefix' => 'user', 'namespace' => 'Api'], function () {
        Route::post('create', 'UserController@create');
        Route::post('update', 'UserController@updateUser');
        Route::get('users', 'UserController@index');
    });
    Route::group(['prefix' => 'agenda', 'namespace' => 'Api'], function () {
       Route::get('horarios/{id}', 'AgendaController@horarios');
       Route::post('criar', 'AgendaController@criarHorario');
       Route::post('editar','AgendaController@editarHorario');
       Route::delete('deletar/{id}', 'AgendaController@excluirHorario');
    });
    Route::group(['prefix' => 'quadra', 'namespace' => 'Api'], function () {
       Route::get('listar', 'QuadraController@listar');
    });
    Route::group(['prefix' => 'usuario', 'namespace' => 'Api'], function () {
       Route::get('buscar/{id}', 'JogadorController@buscar');
    });
});


