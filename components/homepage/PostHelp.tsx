"use client";

import { Images, User } from "lucide-react";
import Modal from "../common/Modal";
import { useState } from "react";
import PostHelpForm from "./forms/PostHelpForm";

export default function PostHelp() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (data: FormData) => {
    console.log(data.get("title"));
    console.log(data.get("postType"));
    console.log(data.get("content"));
    handleCloseModal();
  };
  return (
    <>
      <div className="card space-y-4 px-8 py-6" onClick={handleOpenModal}>
        <div className="flex gap-3 items-center">
          <div className="bg-neutral-100 p-4 rounded-full">
            <User className=" h-6 w-6" />
          </div>
          <div className=" bg-gray-100  h-12 rounded-2xl p-3 w-full">
            <p className=" text-neutral-400">
              {" "}
              Share Or Ask Something You Have On your mind
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button className="flex gap-3 items-center">
            <Images className=" text-red-500" />
            <span>Photo/Video</span>
          </button>
          <button className="btn-color">Create Post</button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} >
        <div className="text-center text-xl font-semibold">Create a Post</div>
        <PostHelpForm onSubmit={handleSubmit} />
      </Modal>
    </>
  );
}
