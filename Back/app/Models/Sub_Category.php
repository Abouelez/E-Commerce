<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Sub_Category extends Model
{
    use HasFactory;


    protected $table = 'sub_categories';
    protected $fillable = ['name', 'category_id', 'image'];


    function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
}
