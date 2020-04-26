<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\BlogCategory;

class Category extends Model
{
    //
    protected $table = 'categories';
    public function blog_category ()
    {
        return $this->belongsTo('App\BlogCategory');
    }
}
