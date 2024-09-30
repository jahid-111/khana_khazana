import RecipeSection from "@/components/home/RecipeSection";
import Loading from "@/components/Loading";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <RecipeSection />
    </Suspense>
  );
}
