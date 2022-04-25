<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuadraTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('quadra', function (Blueprint $table) {
                $table->id('id_quadra');
                $table->string('nome_quadra');
                $table->foreignId('id_endereco')->unique();

                $table->foreign('id_endereco')->references('id_endereco')->on('endereco_quadra');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('quadra');
    }
}
