<?php

use Illuminate\Database\Seeder;

class EnumUsuariosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            [
                'id_usuarios' => 1,
                'nivel_usuario' => 'admin'
            ],
            [
                'id_usuarios' => 2,
                'nivel_usuario' => 'jogador'
            ]
        ];

        foreach ($users as $user) {
            $model = App\Models\EnumUsuarios::find($user['id_usuarios']);

            if (!$model) {
                $model = new App\Models\EnumUsuarios();
                $model->create($user);
            } else {
                $model->update($user);
            }
        }
    }
}


