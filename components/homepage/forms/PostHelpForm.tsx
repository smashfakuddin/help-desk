import Input from "@/components/common/Input";
import { Images } from "lucide-react";

export default function PostHelpForm({onSubmit}:{onSubmit:any}) {
  return (
    <form action={onSubmit} className="space-y-4 ">
      <Input
        label="Title"
        name="title"
        id="title"
        placeholder="Enter Your Title"
      />
      <Input
        label="Post Type"
        as="select"
        id="postType"
        name="postType"
        options={[
          { value: "Course Topic", label: "Course Topic" },
          { value: "Bugs", label: "Bugs" },
          { value: "Guideline", label: "Guideline" },
          { value: "Feature Request", label: "Feature Request" },
          { value: "Others", label: "Others" },
        ]}
      />
      <Input
        as="textarea"
        label="Content"
        placeholder="Write Your Post Here..."
        rows={7}
        id="content"
        name='content'
      />
      <div className="flex items-center justify-between">
        <button className="flex gap-3 items-center">
          <Images className=" text-red-500" />
          <span>Photo/Video</span>
        </button>
        <button className="btn-color">Create Post</button>
      </div>
    </form>
  );
}
