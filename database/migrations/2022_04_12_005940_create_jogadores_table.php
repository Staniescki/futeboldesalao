<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJogadoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jogadores', function (Blueprint $table) {
            $table->id('id_jogador');
            $table->foreignId('id_usuario')->unique();
            $table->string('apelido');
            $table->smallInteger('idade');
            $table->enum('sexo', ['Masculino', 'Feminino']);
            $table->string('posicao');
            $table->enum('pe_preferido',['direito', 'esquerdo', 'ambos']);

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
        Schema::dropIfExists('jogadores');
    }
}
