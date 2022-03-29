<?php

namespace App\Imports;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class CvsImport implements ToCollection, WithHeadingRow
{
    use Importable;
    /**
    * @param Collection $collection
    */
    public function collection(Collection $collection)
    {
        foreach ($collection as $row)
        {
           return ([

            'name' => $row['name'],
            'rfc' => $row['rfc'],
            'email' => $row['email'],
            'status' => $row['status'],
            'checked' => $row['checked']

           ]);

        }
    }
}
