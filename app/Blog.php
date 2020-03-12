<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;
use App\BlogContent;

class Blog extends Model
{
    //
    protected $table = 'blog';
    public function user()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }
    public function blog_content()
    {
        return $this->hasMany(BlogContent::class, 'blog_id', 'blog_id');
    }
}
