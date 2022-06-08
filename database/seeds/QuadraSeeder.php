<?php

use Illuminate\Database\Seeder;

class QuadraSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $quadras = [
            [
                'id_quadra' => 1,
                'nome_quadra' => 'Gauchinho',
                'id_endereco' => 1,
            ],
            [
                'id_quadra' => 2,
                'nome_quadra' => 'Arena 57',
                'id_endereco' => 2,
            ],
            [
                'id_quadra' => 3,
                'nome_quadra' => 'Quadra Unibol',
                'id_endereco' => 3,
            ]
        ];


        foreach ($quadras as $quadra) {
            $model = App\Models\Quadra::find($quadra['id_quadra']);

            if (!$model) {
                $model = new App\Models\Quadra();
                $model->create($quadra);
            } else {
                $model->update($quadra);
            }
        }
    }
}
