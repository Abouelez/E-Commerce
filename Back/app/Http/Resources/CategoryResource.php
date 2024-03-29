<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => ucwords($this->name),
            'image' => 'localhost:8000/storage/' . $this->image,
            'sub_categories' => Sub_CategoryResource::collection($this->whenLoaded('sub_categories')),
        ];
    }
}
