<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Categories;
use App\Blog;
use App\BlogCategory;
use App\Http\Resources\Category as CategoryResource;

class CategoryController extends Controller
{
    //
    public function show($category_id)
    {
        $category = BlogCategory::with(['blog.blog_content' => function($query){
            $query->where('type', '=', 'img_main')->orWhere('type', '=','intro');
        }])->where('category_id', '=', $category_id)->get();  
        return CategoryResource::collection($category);
    }
}
