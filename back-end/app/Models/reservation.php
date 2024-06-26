<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class reservation extends Model
{
    use HasFactory;
    protected $fillable = [
  
        'evenement_id',
        'user_id',
        
    ];
    public function evenement()
    {
        return $this->belongsTo(evenement::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
