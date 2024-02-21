<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateCategory;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::with('sub_categories')->get();
        return CategoryResource::collection($categories);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateCategory $request)
    {
        $image = $request->file('image');
        $resizedImage = Image::make($image)->resize(300, 300)->encode('jpg');
        $imagePath = "uploads/images/categoryImages/$request->name.jpg";
        Storage::disk('public')->put($imagePath, $resizedImage);
        Category::create(array_merge($request->except('image'), ['image' => $imagePath]));

        return response()->json('Category Created Successfully', 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Category $category)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        //
    }
}
