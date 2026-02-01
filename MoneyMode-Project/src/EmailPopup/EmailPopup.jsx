import React from "react";
import styles from "./EmailPopup.module.css";

function EmailPopup({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className={styles.emailSuccessPopup}>
            <div className={styles.emailPopupContent}>
                <button
                    className={styles.emailPopupClose}
                    onClick={onClose}
                >
                    ×
                </button>
                <h3 className={styles.emailPopupTitle}>✓ Successfully Sent!</h3>
                <p className={styles.emailPopupMessage}>
                    Ebook has been sent to your email. Check spam if not there.
                </p>
            </div>
        </div>
    );
}

export default EmailPopup;
