"use client";

import Modal from "@/components/common/Modal";
import PostDetail from "@/components/details/PostDetail";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ModalPage() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    router.back();
  };
  
  return (
    <Modal isOpen={isOpen} onClose={handleClose} className="max-w-6xl w-full bg-white max-h-[90vh] overflow-y-auto">
      <PostDetail />
    </Modal>
  );
}
