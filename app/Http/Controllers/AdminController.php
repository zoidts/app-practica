<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\provider;
use App\Imports\CvsImport;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

use Illuminate\Support\Facades\Hash;
use App\Http\Requests\ProviderRequest;


class AdminController extends Controller
{

    public function index(){

        $proveedores = User::all();
        return response()->json($proveedores);
    }

    public function store(ProviderRequest $request, User $user)
    {
        $user = User::create([
             'name' => $request->name,
             'email' => $request->email,
             'password' =>  Hash::make($request->rfc)
        ]);
        $user->save();
        $user->assignRole('Proveedor');
        $proveedor = provider::create([
            'rfc' => $request->rfc,
            'status' => $request->status,
            'user_id' => $user->id
       ]);
       $proveedor->save();

         return 'El Proveedor se ha registrado con éxito';
    }
    public function importar(){

        $collection = (new CvsImport)->toCollection(request()->file('file'));
        $proveedores = array();
        foreach ($collection[0] as $row){
             $proveedores [] = [
                'name' => $row['name'],
                'rfc' => $row['rfc'],
                'email' => $row['email'],
                'status' => 'Pendiente',
                'checked' => false
            ];
        }
        return json_encode($proveedores);
     }

     public function destroy($provider){
         $user = User::where("email", "=", $provider)->first();
         $user->delete();
         return 'El Proveedor se ha Eliminado con Éxito';
     }
}
