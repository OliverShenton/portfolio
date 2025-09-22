import { FocusTrap } from "focus-trap-react";
import { motion, useReducedMotion } from "motion/react";
import { useEffect } from "react";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
  labelledBy: string;
}

const Modal = ({ onClose, children, labelledBy }: ModalProps) => {
  // Reduced motion accessibility
  const prefersReducedMotion = useReducedMotion();

  // Close on Escape key and prevent background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.classList.add("overflow-hidden");
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("overflow-hidden");
    };
  }, [onClose]);

  return (
    <FocusTrap>
      <motion.div
        id="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}>
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}>
          {children}
        </motion.div>
        <button
          onClick={onClose}
          aria-label="Close modal"
          type="button"
          className="absolute top-4 right-4 p-4 border border-[var(--border-color-hover)] rounded-xl hover:brightness-150 transition-all duration-300 cursor-pointer text-xl md:text-2xl">
          ✕
        </button>
      </motion.div>
    </FocusTrap>
  );
};

export default Modal;
