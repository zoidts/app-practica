<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use PhpCfdi\Rfc\RfcFaker;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Provider>
 */
class ProviderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {

        $faker = new RfcFaker();
        $rfc = $faker->mexicanRfc();


        return [
            'RFC' => $rfc,
            'user_id' =>$this->faker->unique(true)->numberBetween(2,50)
        ];

    }
}
