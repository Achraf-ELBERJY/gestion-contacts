<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;
    protected $fillable = [
    'nom',
    'prenom',
    'cin',
    'email',
    'telephone',
    'date_naissance',
    'notes',
    'statut'
];
}
