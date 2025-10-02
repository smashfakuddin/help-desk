import PostHelp from "@/components/homepage/PostHelp";
import Posts from "@/components/homepage/Posts";
import SummaryCard from "@/components/homepage/SummaryCard";



export default async function HomePage() {
  const dl = await new Promise((resolve) =>
    setTimeout(() => resolve("data"), 500)
  );

  return (
    <div className="container mt-5 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      {/* SummaryCard */}
      <div className="col-span-1 order-1 md:order-2 lg:order-3 md:sticky md:top-24 self-start">
        <SummaryCard />
      </div>
      {/* Posts */}
      <div className="col-span-2 order-2 md:order-1 lg:order-1">
        <div className="space-y-4">
          <PostHelp />
          <Posts />
        </div>
      </div>
    </div>
  );
}
