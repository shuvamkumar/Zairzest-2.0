import React, { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { workshopEvents } from "../../utils/events";
import "../../styles/events.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const TechEvents = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const onOpenEventModal = () => setOpenModal(true);
  const onCloseEventModal = () => setOpenModal(false);
  return (
    <>
      <Navbar aboutUs={false} />
      <div className="nav-background"></div>
      <div className="events-container">
        {workshopEvents.map((event) => {
          return (
            <div
              className="card-container"
              key={event.id}
              onClick={() => {
                onOpenEventModal(true);
                setModalData(event);
              }}
            >
              <img
                src={event.imageURL}
                alt=""
                style={{ width: "19rem", height: "24rem" }}
              />
            </div>
          );
        })}
      </div>
      {modalData ? (
        <Modal
          open={openModal}
          onClose={onCloseEventModal}
          center
          closeOnEsc
          closeOnOverlayClick
          classNames={{
            overlay: "eventOverlay",
            modal: "eventModal",
          }}
        >
          <div className="flex justify-center items-center">
            <div>
              <img
                src={modalData.imageURL}
                alt=""
                style={{ width: "19rem", height: "24rem" }}
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-bold text-2xl">{modalData.name}</h1>
              <h2 className="font-bold text-xl text-stone-600">
                {modalData.smallDescription}
              </h2>
              <p>{modalData.description}</p>
            </div>
          </div>
        </Modal>
      ) : (
        ""
      )}
      <Footer />
    </>
  );
};

export default TechEvents;
