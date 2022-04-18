<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Chat extends Model
{
    use HasFactory;

    protected $fillable = ['user_sender', 'user_receiver', 'message_content'];



    public function sender()
    {
        return $this->hasOne(User::class, 'id' , 'user_sender');
    }
    public function receiver()
    {
        return $this->hasOne(User::class, 'id', 'user_receiver');
    }
}
