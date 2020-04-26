<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBlogContentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('blog_content', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->uuid('blog_id')->nullable();
            $table->string('type');
            $table->string('alt')->nullable();
            $table->decimal('size', 4, 2)->nullable();
            $table->unsignedBigInteger('block_number')->nullable();
            $table->text('content')->nullable();
            $table->foreign('blog_id')->references('blog_id')->on('blog');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('blog_content');
    }
}
