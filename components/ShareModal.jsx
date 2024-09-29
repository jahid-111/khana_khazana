"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { HiOutlineXMark } from "react-icons/hi2";
const Modal = ({ children, id }) => {
  const router = useRouter();
  const modalRef = useRef(null);

  const onHide = useCallback(() => {
    router.push(`/details/${id}`);
  }, [router]);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        onHide();
      }
    },
    [onHide]
  );

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return createPortal(
    <dialog
      ref={modalRef}
      onClose={onHide}
      className=" h-screen w-full shadow-gray-700 shadow-md border border-gray-600 flex flex-col p-2 rounded-md  dark:text-gray-100"
    >
      <button onClick={onHide} className="flex justify-end cursor-pointer">
        <HiOutlineXMark className=" text-4xl text-red-600" />
      </button>
      {children}
    </dialog>,
    document.getElementById("modal-box")
  );
};

export default Modal;
