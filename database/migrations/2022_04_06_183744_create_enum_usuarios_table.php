<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Class EnumUsuarios
 * @author Diego Staniescki
 * @link https://github.com/diegostaniescki
 * @date 2022-04-06 15:54:48
 */
class CreateEnumUsuariosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('enum_usuarios', function (Blueprint $table) {
            $table->id('id_usuarios');
            $table->string('nivel_usuario');
        });
}

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('enum_usuarios');
    }
}
