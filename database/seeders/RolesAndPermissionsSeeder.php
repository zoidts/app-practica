<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class RolesAndPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       // Reset cached roles and permissions
       app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

       //create permissions
       Permission::create(['name' => 'edit provider']);
       Permission::create(['name' => 'delete provider']);
       Permission::create(['name' => 'create provider']);
       Permission::create(['name' => 'show provider']);
       Permission::create(['name' => 'acces dashboard']);


       $role = Role::create(['name' => 'Administrador']);
       $role->givePermissionTo(Permission::all());


       $role1 = Role::create(['name' => 'Proveedor']);
       $role1->givePermissionTo('acces dashboard');

       $user = User::find(1);
       $user->assignRole('Administrador');





    }
}
