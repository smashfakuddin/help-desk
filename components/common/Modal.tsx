"use client";
import { ReactNode } from "react";
import { X } from "lucide-react";
import { cn } from "@/utils/cn";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
};

export default function Modal({
  isOpen,
  onClose,
  children,
  className,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose} // click outside closes
    >
      <div
        className={cn(
          "relative max-w-2xl w-full bg-neutral-300 rounded-lg shadow-lg m-5",
          className
        )}
        onClick={(e) => e.stopPropagation()} // prevent bubbling
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Body (children injected here) */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
