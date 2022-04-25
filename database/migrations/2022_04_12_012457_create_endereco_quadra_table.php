<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEnderecoQuadraTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('endereco_quadra', function (Blueprint $table) {
                    $table->id('id_endereco');
                    $table->string('rua');
                    $table->integer('numero');
                    $table->string('bairro');
                    $table->string('cidade');
                    $table->string('cep');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('endereco_quadra');
    }
}
