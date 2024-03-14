<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateSub_Category;
use App\Http\Resources\Sub_CategoryResource;
use App\Models\Sub_Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;


class Sub_CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $sub_categories = Sub_Category::with('category')->paginate($_REQUEST['limit'] ?? 10);

        return Sub_CategoryResource::collection($sub_categories);
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
    public function store(CreateSub_Category $request)
    {
        $image = $request->file('image');
        $resizedImage = Image::make($image)->resize(300, 300)->encode('jpg');
        $imagePath = "uploads/images/subCategoryImages/$request->name.jpg";
        Storage::disk('public')->put($imagePath, $resizedImage);
        Sub_Category::create(array_merge($request->except('image'), ['image' => $imagePath]));
        return response()->json('Category Created Successfully', 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Sub_Category $sub_Category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Sub_Category $sub_Category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Sub_Category $sub_Category)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Sub_Category $sub_Category)
    {
        //
    }
}
