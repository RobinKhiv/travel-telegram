<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Blog extends Model
{
    //
    protected $table = 'blog';
    public function users()
    {
        return $this->hasOne(User::class);
    }
}
