"use client";

import { useState } from "react";
import Image from "next/image";
import {
    Plus,
    Search,
    Edit2,
    Trash2,
    Filter,
    MoreHorizontal
} from "lucide-react";
import { cn } from "@/lib/utils";

// Static Data
const PRODUCTS = [
    {
        id: 1,
        name: "Margherita Pizza",
        category: "Pizza",
        subCategory: "Classic",
        price: "AED 25.00",
        status: "In Stock",
        image: "/images/products/MargheritaPizza.webp"
    },
    {
        id: 2,
        name: "Classic Cheeseburger",
        category: "Burger",
        subCategory: "Beef",
        price: "AED 15.75",
        status: "In Stock",
        image: "/images/products/cheeseburger.jpg"
    },
    {
        id: 3,
        name: "California Roll (6 pcs)",
        category: "Sushi",
        subCategory: "Maki",
        price: "AED 18.00",
        status: "Out of Stock",
        image: "/images/products/supreme pizza cake.jpg"
    },
    {
        id: 4,
        name: "Spicy Paneer Wrap",
        category: "Wraps",
        subCategory: "Veg",
        price: "AED 12.50",
        status: "In Stock",
        image: "/images/products/paneer.webp"
    },
    {
        id: 5,
        name: "Chocolate Lava Cake",
        category: "Dessert",
        subCategory: "Cakes",
        price: "AED 22.00",
        status: "In Stock",
        image: "/images/products/Chocolate-lava-cake.jpg"
    },
];

export default function MenuPage() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        // Added max-w-full and overflow-x-hidden to prevent page blowout
        <div className="w-full md:max-w-7xl mx-auto space-y-6 overflow-auto">

            {/* 1. Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-zinc-900">Menu Items</h1>
                    <p className="text-zinc-500 text-sm">Manage your food inventory and prices</p>
                </div>

                <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-xl font-bold shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2 active:scale-95 transition-all w-full md:w-auto">
                    <Plus className="w-5 h-5" />
                    <span>Add New Product</span>
                </button>
            </div>

            {/* 2. Filters & Search Bar */}
            <div className="bg-white p-4 rounded-2xl border border-zinc-100 shadow-sm flex flex-col lg:flex-row gap-4">
                {/* Search */}
                <div className="flex-1 relative w-full">
                    <Search className="absolute left-4 top-3.5 w-5 h-5 text-zinc-400" />
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 bg-zinc-50 rounded-xl outline-none text-sm focus:ring-2 focus:ring-orange-100 border border-transparent focus:border-orange-200 transition-all"
                    />
                </div>

                {/* Filters - Scrollable Row on Mobile */}
                <div className="flex gap-3 overflow-x-auto pb-2 lg:pb-0 w-full lg:w-auto no-scrollbar">
                    <select className="bg-zinc-50 px-4 py-3 rounded-xl outline-none text-sm text-zinc-600 font-medium border border-zinc-100 focus:border-orange-200 min-w-[140px] cursor-pointer flex-shrink-0">
                        <option>All Categories</option>
                        <option>Pizza</option>
                        <option>Burgers</option>
                        <option>Drinks</option>
                    </select>

                    <button className="bg-zinc-50 px-4 py-3 rounded-xl border border-zinc-100 text-zinc-600 hover:bg-zinc-100 transition-colors flex items-center gap-2 flex-shrink-0 whitespace-nowrap">
                        <Filter className="w-4 h-4" />
                        <span className="text-sm font-medium">Filter</span>
                    </button>
                </div>
            </div>

            {/* 3. Product Table */}
            <div className="bg-white rounded-2xl border border-zinc-100 shadow-sm overflow-hidden">
                {/* Scroll Wrapper: w-full ensures it doesn't expand parent, overflow-x-auto enables scroll */}
                <div className="w-full overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        {/* Table Head */}
                        <thead className="bg-zinc-50 border-b border-zinc-100 text-xs uppercase text-zinc-500 font-semibold tracking-wider">
                        <tr>
                            {/* Sticky Column for Mobile context */}
                            <th className="p-5 min-w-[250px] sticky left-0 bg-zinc-50 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] md:shadow-none md:static">Product Name</th>
                            <th className="p-5 min-w-[120px]">Category</th>
                            <th className="p-5 min-w-[100px]">Price</th>
                            <th className="p-5 min-w-[140px]">Status</th>
                            <th className="p-5 text-right min-w-[100px]">Actions</th>
                        </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody className="divide-y divide-zinc-50">
                        {PRODUCTS.map((item) => (
                            <tr
                                key={item.id}
                                className="group hover:bg-zinc-50/50 transition-colors"
                            >
                                {/* Product Info - Sticky */}
                                <td className="p-5 sticky left-0 bg-white group-hover:bg-zinc-50/50 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] md:shadow-none md:static">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-zinc-100 rounded-lg relative overflow-hidden border border-zinc-100 shrink-0">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-bold text-zinc-900 text-sm truncate max-w-[150px]">{item.name}</p>
                                            <p className="text-xs text-zinc-500 mt-0.5">{item.subCategory}</p>
                                        </div>
                                    </div>
                                </td>

                                {/* Category */}
                                <td className="p-5">
                                   <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-orange-50 text-orange-600 border border-orange-100">
                                      {item.category}
                                   </span>
                                </td>

                                {/* Price */}
                                <td className="p-5">
                                    <span className="font-medium text-zinc-700 text-sm">{item.price}</span>
                                </td>

                                {/* Status Toggle */}
                                <td className="p-5">
                                    <button className={cn(
                                        "flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all border whitespace-nowrap",
                                        item.status === 'In Stock'
                                            ? "bg-green-50 text-green-700 border-green-100 hover:bg-green-100"
                                            : "bg-zinc-100 text-zinc-500 border-zinc-200 hover:bg-zinc-200"
                                    )}>
                                        <div className={cn(
                                            "w-2 h-2 rounded-full",
                                            item.status === 'In Stock' ? "bg-green-600" : "bg-zinc-400"
                                        )} />
                                        {item.status}
                                    </button>
                                </td>

                                {/* Actions */}
                                <td className="p-5 text-right">
                                    {/* Desktop Actions */}
                                    <div className="hidden md:flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="p-2 bg-white border border-zinc-200 rounded-lg text-zinc-500 hover:text-orange-500 hover:border-orange-200 shadow-sm transition-all">
                                            <Edit2 className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 bg-white border border-zinc-200 rounded-lg text-zinc-500 hover:text-red-500 hover:border-red-200 shadow-sm transition-all">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                    {/* Mobile Actions Fallback */}
                                    <div className="md:hidden flex justify-end">
                                        <button className="p-2 text-zinc-400">
                                            <MoreHorizontal className="w-5 h-5" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="p-4 border-t border-zinc-100 flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-zinc-500">
                    <span>Showing 1-5 of 24 items</span>
                    <div className="flex gap-2 w-full md:w-auto">
                        <button className="flex-1 md:flex-none px-4 py-2 border border-zinc-200 rounded-lg hover:bg-zinc-50 disabled:opacity-50">Prev</button>
                        <button className="flex-1 md:flex-none px-4 py-2 border border-zinc-200 rounded-lg hover:bg-zinc-50">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}