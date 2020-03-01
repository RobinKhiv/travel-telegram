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
        Schema::create('blogContent', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedTinyInteger('blockNumber');
            $table->unsignedBigInteger('blog_id');
            $table->string('type');
            $table->text('content')->nullable();
            $table->boolean('bold')->default(false);
            $table->timestamps();

            $table->foreign('blog_id')->references('id')->on('blog');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('blogContent');
    }
}
