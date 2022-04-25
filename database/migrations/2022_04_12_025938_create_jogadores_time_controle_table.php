<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJogadoresTimeControleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jogadores_time_controle', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_jogador');
            $table->foreignId('id_time');

            $table->foreign('id_jogador')->references('id_jogador')->on('jogadores');
            $table->foreign('id_time')->references('id_time')->on('time');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('jogadores_time_controle');
    }
}
