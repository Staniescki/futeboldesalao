<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHorariosQuadraTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('horarios_quadra', function (Blueprint $table) {
            $table->id();
            $table->string('id_quadra');
            $table->dateTime('start');
            $table->dateTime('end');
            $table->string('description');
            $table->string('title');
            $table->string('color');

            $table->foreign('id_quadra')->references('id_quadra')->on('quadra');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('horarios_quadra');
    }
}
