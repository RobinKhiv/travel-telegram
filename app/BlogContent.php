<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Blog;

class BlogContent extends Model
{
    //
    protected $table = 'blog_content';
    public function blog()
    {
        return $this->hasMany(Blog::class, 'id', 'blog_id');
    }
}
