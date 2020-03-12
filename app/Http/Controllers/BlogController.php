<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Blog;
use App\BlogContent;
use App\Http\Requests;
use App\Http\Resources\Blog as BlogResource;
use Illuminate\Support\Facades\DB;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //get all blogs
        //$blog = Blog::paginate(15);
        $blog = Blog::with(['blog_content' => function($query) {
            $query->where('type', '=', 'img_main')->orWhere('type', '=','intro');
        }])->where('blog_id', '!=', 'a41f5295-8535-4eaa-97a3-ddcdf4a86a47')->orderBy('published_date', 'DESC')->get();
        // $blog = DB::table('blogContent')
        //     ->join('blog', 'blog.id', '=','blogContent.blog_id')
        //     ->where('blogContent.type', '=', 'intro')
        //     ->get();
        return BlogResource::collection($blog);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //get blog
        $blog = BlogContent::where('blog_id', '=', $id)->orderBy('block_number', 'ASC')->get();
        return BlogResource::collection($blog);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
