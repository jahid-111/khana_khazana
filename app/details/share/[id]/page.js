import Modal from "@/components/ShareModal";
import ShareOption from "@/components/ShareOption";
import React from "react";

const SharePage = ({ params: { id } }) => {
  return (
    <div>
      <Modal id={id}>
        <ShareOption id={id}></ShareOption>
      </Modal>
    </div>
  );
};

export default SharePage;
