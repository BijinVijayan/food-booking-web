import { Suspense } from "react";
// import ProductList from "./components/ProductList";

export default function Home() {
    return (
        <main className="pb-24 pt-4 px-4">
            <h1 className="text-2xl font-bold mb-4 dark:text-white">Popular Items</h1>

            <Suspense fallback={
                <div className="grid grid-cols-2 gap-4">
                </div>
            }>
                {/*<ProductList />*/}
            </Suspense>
        </main>
    );
}