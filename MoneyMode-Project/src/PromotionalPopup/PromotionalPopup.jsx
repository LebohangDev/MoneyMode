import React, { useState } from "react";
import styles from "./PromotionalPopup.module.css";
import { motion, AnimatePresence } from "framer-motion";

const PromotionalPopup = ({ isOpen, onClose, onConfirm }) => {
    const [permission, setPermission] = useState(true);

    const handleConfirm = () => {
        onConfirm(permission);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className={styles.overlay}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className={styles.popup}
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    >
                        <h3 className={styles.title}>
                            Receive promotional content on Creator Agency blueprint?
                        </h3>
                        <p>can be cancelled at any time on promotional email's</p>

                        <div className={styles.options}>
                            <label className={styles.label}>
                                <input
                                    type="radio"
                                    name="permission"
                                    checked={permission === true}
                                    onChange={() => setPermission(true)}
                                />
                                Yes
                            </label>
                            <label className={styles.label}>
                                <input
                                    type="radio"
                                    name="permission"
                                    checked={permission === false}
                                    onChange={() => setPermission(false)}
                                />
                                No
                            </label>
                        </div>

                        <div className={styles.buttons}>
                            <button className={styles.cancelBtn} onClick={onClose}>
                                Cancel
                            </button>
                            <button className={styles.confirmBtn} onClick={handleConfirm}>
                                Confirm
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PromotionalPopup;
