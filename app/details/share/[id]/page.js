import Loading from "@/components/Loading";
import Modal from "@/components/ShareModal";
import ShareOption from "@/components/ShareOption";
import React, { Suspense } from "react";

const SharePage = ({ params: { id } }) => {
  return (
    <Suspense fallback={<Loading />}>
      <Modal id={id}>
        <ShareOption id={id} />
      </Modal>
    </Suspense>
  );
};

export default SharePage;
