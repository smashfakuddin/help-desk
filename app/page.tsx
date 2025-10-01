import PostHelp from "@/components/homepage/PostHelp";
import Posts from "@/components/homepage/Posts";
import SummaryCard from "@/components/homepage/SummaryCard";

export default function HomePage() {
  return (
    <div className="container mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div className=" col-span-2">
        <div className=" space-y-4">
          <PostHelp />
          <Posts/>
        </div>
      </div>
      <div className=" col-span-1 sticky top-25 self-start">
        <SummaryCard/>
      </div>
    </div>
  );
}
