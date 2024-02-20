<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Category;
use App\Models\Sub_Category;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        Category::create(['name' => 'Electronics']);
        Category::create(['name' => 'Clothing']);
        Category::create(['name' => 'Home and Kitchen']);

        Sub_Category::create(['category_id' => 1, 'name' => 'Smartphones']);
        Sub_Category::create(['category_id' => 2, 'name' => 'T-Shirts']);
        Sub_Category::create(['category_id' => 1, 'name' => 'Laptops']);
        Sub_Category::create(['category_id' => 2, 'name' => 'Jeans']);
        Sub_Category::create(['category_id' => 3, 'name' => 'Cookware']);
        Sub_Category::create(['category_id' => 3, 'name' => 'Home Decor']);
    }
}
