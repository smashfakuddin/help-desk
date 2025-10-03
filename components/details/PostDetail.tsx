import {
  Bookmark,
  BookMarked,
  Circle,
  Ellipsis,
  Image,
  Link,
  ThumbsUp,
} from "lucide-react";

export default function PostDetail() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-3 py-3 bg-white ">
      {/* left side started here */}
      <div className="col-span-2 space-y-4 mr-3 pr-3 border-r border-gray-300">
        <div className=" space-y-2">
          <h1 className=" text-2xl tracking-tight font-semibold">
            Showing wrong output or address value
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            reiciendis odit fugiat ea tempora eveniet hic quam voluptatum vel
            quisquam?
          </p>
        </div>
        <div className=" bg-neutral-100 main-shadow rounded-md p-2">
          <textarea
            name=""
            id=""
            rows={4}
            className=" w-full p-2 rounded-md "
            placeholder="What's On Your Mind"
          />
          <div className=" flex items-center justify-between">
            <Image />
            <button className="btn-color">Post Comment</button>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <h3>Comments</h3>
          <span className="badge-dark">2</span>
        </div>
      </div>
      {/* left side ended here */}
      {/* right Side started here */}
      <div className=" col-span-1 ">
        <div className="flex justify-between items-center mb-3 border-b border-gray-300 pb-2">
          <h3 className=" text-lg font-semibold mb-2">Post Info</h3>
          <div className=" flex items-center gap-3 ">
            <Bookmark className=" h-5 w-5 cursor-pointer" />
            <Link className=" h-5 w-5 cursor-pointer" />
            <Ellipsis className=" h-5 w-5 cursor-pointer" />
          </div>
        </div>
        {/* info */}
        <div className=" space-y-3 border-b border-gray-300 pb-3 mb-3">
          <div className="grid grid-cols-3 gap-5 mb-2">
            <span className="col-span-1">Status</span>
            <span className="col-span-2">
              <span className="inline-flex items-center gap-2 btn-secondary rounded-sm">
                <ThumbsUp className="h-3 w-3" />
                Acknowledged
              </span>
            </span>
          </div>
          <div className="grid grid-cols-3 gap-5 mb-2">
            <span className="col-span-1">Post Type</span>
            <span className="col-span-2">
              <span className="inline-flex items-center gap-2 btn-secondary rounded-sm">
                <Circle className="h-3 w-3" />
                Course Help
              </span>
            </span>
          </div>
        </div>
        <span className="border-b w-full border-gray-300"></span>
        {/* date time */}
        <div>

        </div>
      </div>
      {/* right side ended here */}
    </div>
  );
}
