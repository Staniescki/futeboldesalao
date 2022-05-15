<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEnderecoUsuarioTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('endereco_usuario', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_usuario');
            $table->string('bairro');
            $table->integer('cep');
            $table->string('cidade');
            $table->integer('numero');
            $table->string('rua');
            $table->timestamps();

            $table->foreign('id_usuario')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('endereco_usuario');
    }
}
