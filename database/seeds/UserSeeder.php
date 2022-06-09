<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
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
                'name' => 'Diego',
                'email' => 'diego.stk@live.com',
                'password' => '$2y$10$1fLqcNDvTFDGD5VLjwx25.3muG7MShSnMv5SEBbKh.1cZNkYNcaNq',
            ],
        ];


        foreach ($users as $user) {
            $model = App\User::find($user['name']);

            if (!$model) {
                $model = new App\User();
                $model->create($user);
            } else {
                $model->update($user);
            }
        }
    }
}
