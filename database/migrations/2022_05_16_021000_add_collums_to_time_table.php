<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCollumsToTimeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('time', function (Blueprint $table) {
            $table->longText('img')->nullable();
            $table->date('fundacao_time');
            $table->string('nome_oficial');
            $table->string('categoria');
            $table->bigInteger('presidente_id');

            $table->foreign('presidente_id')->references('id_jogador')->on('jogadores');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('time', function (Blueprint $table) {
            $table->dropColumn('img');
            $table->dropColumn('fundacao_time');
            $table->dropColumn('nome_oficial');
            $table->dropColumn('categoria');
            $table->dropColumn('presidente_id');
        });
    }
}
