<?php

use Illuminate\Database\Seeder;

class EnderecoQuadraSeeder extends Seeder
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
                'id_endereco' => 1,
                'rua' => 'Hermilio',
                'numero' => '100',
                'bairro' => 'Algarve',
                'cidade' => 'Alvorada',
                'cep' => '94814450',
            ],
            [
                'id_endereco' => 2,
                'rua' => 'Machado',
                'numero' => '44',
                'bairro' => 'Maringa',
                'cidade' => 'Alvorada',
                'cep' => '94810290',
            ],
            [
                'id_endereco' => 3,
                'rua' => 'Penhor Machado',
                'numero' => '99',
                'bairro' => 'Cidadela',
                'cidade' => 'Alvorada',
                'cep' => '948741222',
            ]
        ];


        foreach ($quadras as $quadra) {
            $model = App\Models\EnderecoQuadra::find($quadra['id_endereco']);

            if (!$model) {
                $model = new App\Models\EnderecoQuadra();
                $model->create($quadra);
            } else {
                $model->update($quadra);
            }
        }
    }
}
