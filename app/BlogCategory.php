<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Blog;
use App\Catgories;

class BlogCategory extends Model
{
    //
    protected $table = 'blog_category';
    public function blog()
    {
        return $this->hasMany(Blog::class);
    }
    public function categories()
    {
        return $this->hasMany(Category::class);
    }
}
