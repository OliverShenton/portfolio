"use client";

import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";
import { FaCode, FaInfo } from "react-icons/fa";
import { Button, LinkButton } from "../global/Button";
import { useState } from "react";
import Modal from "./Modal";

type ProjectCardProps = {
  image: StaticImageData;
  title: string;
  github: string;
};

const ProjectCard = ({ image, title, github }: ProjectCardProps) => {
  const [openModal, setOpenmodal] = useState(false);

  const handleOpenModal = () => {
    setOpenmodal(true);
  };

  const handleCloseModal = () => {
    setOpenmodal(false);
  };

  return (
    <>
      <motion.article className="group border border-neutral-700 rounded-xl">
        <div className="p-10 bg-neutral-800 rounded-xl">
          <Image
            src={image}
            alt={title}
            className="rounded-xl group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex items-center justify-between w-full p-4">
          <h3 className="text-left font-bold text-3xl">{title}</h3>
          <div className="flex items-center gap-4">
            <LinkButton href={github} variant="project-card-button" target="_blank">
              <FaCode />
            </LinkButton>
            <Button onClick={handleOpenModal} variant="project-card-button">
              <FaInfo />
            </Button>
          </div>
        </div>
      </motion.article>

      {openModal && <Modal onClose={handleCloseModal}>{title}</Modal>}
    </>
  );
};

export default ProjectCard;
