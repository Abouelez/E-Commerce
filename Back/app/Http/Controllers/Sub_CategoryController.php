<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateSub_Category;
use App\Http\Resources\Sub_CategoryResource;
use App\Models\Sub_Category;
use Illuminate\Http\Request;

class Sub_CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $sub_categories = Sub_Category::with('category')->get();

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
        Sub_Category::create($request->all());
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
