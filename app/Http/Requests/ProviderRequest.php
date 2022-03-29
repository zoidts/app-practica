<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProviderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required',
            'email' => 'required|unique:users|email',
            'rfc' => 'required|unique:providers'
        ];
    }

    public function messages()
{
    return [

        'name.required' => 'El nombre del proveedor es requerido',
        'email.required' => 'El Correo electrónico del proveedor es requerido',
        'rfc.required' => 'El RFC del proveedor es requerido',
        'email.unique' => 'El correo electrónico ya se encuentra registrado',
        'rfc.unique' => 'El RFC ya se encuentra registrado',
    ];
}
}
