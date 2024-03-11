<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateCategory;
use App\Http\Requests\UpdateCategory;
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
        //default 10 categories per page, or sent limit as a query param in request body
        $categories = Category::with('sub_categories')->paginate($_REQUEST['limit'] ?? 10);
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
        return new CategoryResource($category);
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
    public function update(UpdateCategory $request, Category $category)
    {
        /** update name and image! (name and image is required ,
         * if no change in any field of them send old data)
         **/

        $image = $request->file('image');
        $resizedImage = Image::make($image)->resize(300, 300)->encode('jpg');
        $imagePath = "uploads/images/categoryImages/$request->name.jpg";
        Storage::disk('public')->put($imagePath, $resizedImage);
        Storage::delete($category->image);
        $category->update(array_merge($request->except('image'), ['image' => $imagePath]));

        return response()->json('Category Updated Successfully!', 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        $category->delete();
        return response()->json('Category Deleted Successfully!', 204);
    }
}
