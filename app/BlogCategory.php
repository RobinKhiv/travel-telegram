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
        return $this->hasMany(Blog::class, 'id', 'blog_id');
    }
    public function categories()
    {
        return $this->hasMany(Category::class, 'id', 'category_id');
    }
}
