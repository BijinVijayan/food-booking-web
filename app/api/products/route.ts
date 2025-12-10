import { NextResponse } from "next/server";

const data = [
    { id: "1", name: "Margherita Pizza", price: 68, image: "/pizza.jpg", category: "Pizza" },
    { id: "2", name: "Cheese Burger", price: 45, image: "/burger.jpg", category: "Burger" },
];

export async function GET() {
    // Simulate delay to see skeleton
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return NextResponse.json(data);
}