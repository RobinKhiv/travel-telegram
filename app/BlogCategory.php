<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Blog;
use App\Category;
use App\BlogContent;

class BlogCategory extends Model
{
    //
    protected $table = 'blog_category';
    public function blog()
    {
        return $this->hasOne(Blog::class, 'blog_id', 'blog_id')->orderBy('published_date');
    }
    public function category()
    {
        return $this->hasOne(Category::class, 'id', 'category_id');
    }
}
