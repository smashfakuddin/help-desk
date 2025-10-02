"use client";
import { LayoutGrid, MessageCircle, TimerIcon, User } from "lucide-react";
import { useState } from "react";
import Modal from "../common/Modal";
import PostDetail from "./PostDetail";

export default function PostCard() {
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => {
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <div
        onClick={handleOpenModal}
        className="space-y-3 p-5 border-b border-neutral-300/50 hover:bg-gray-100 transition-colors duration-500 cursor-pointer"
      >
        <div className=" flex items-center justify-between p-4">
          <div className=" flex gap-3 items-center">
            <User />
            <div>
              <h1 className=" font-bold text-lg">Md. Fahim Mia</h1>
              <p className=" text-sm text-gray-500 flex items-center gap-1">
                <TimerIcon className="h-4 w-4" /> 5 Min Ago
              </p>
            </div>
          </div>
          <div>
            <button className="badge-default">new</button>
          </div>
        </div>
        <div className=" px-4">
          <h3 className=" text-xl font-semibold">
            Showing wrong output or address value
          </h3>
          <p>
            Following all the instruction of the module , I set up my vs code.
            And now I'm facing a problem that is showing wrong output. I have
            created intput.txt and output.txt. I.m taking input 45 to show this
            number but showing long digit number.
          </p>
        </div>
        <div className=" px-4">
          <img
            className=" w-64 h-64 object-cover rounded-md"
            src="https://images.unsplash.com/photo-1759269106058-a52e5ac35e01?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
            alt=""
          />
        </div>
        <div className="px-4 flex items-center justify-between">
          <div className=" flex items-center">
            <MessageCircle className=" h-5 w-5 inline-block mr-2" />
            <span className=" text-gray-500 font-semibold">5 Comments</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="btn-secondary">Android app</button>
            <button className="btn-secondary flex items-center gap-1">
              <LayoutGrid className=" h-4 w-4 text-pink-400" /> Android app
            </button>
          </div>
        </div>
      </div>
      <Modal isOpen={modalOpen} onClose={handleCloseModal} className="max-w-7xl w-full">
        <PostDetail />
      </Modal>
    </>
  );
}
