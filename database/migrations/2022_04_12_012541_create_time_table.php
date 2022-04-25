<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Class CreateTimeTable
 *
 * @author Diego Staniescki
 * @link https://github.com/diegostaniescki
 * @date 2022-04-11 22:25:55
 */
class CreateTimeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('time', function (Blueprint $table) {
                $table->id('id_time');
                $table->foreignId('id_quadra');
                $table->string('nome_time');
                $table->string('cidade');

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
        Schema::dropIfExists('time');
    }
}
