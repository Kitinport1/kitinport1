'use client';

import React, { FC, useState } from 'react';
import styles from './ContactSection.module.css';

interface ContactSectionProps {
    id: string;
    role: string;
    subRole: string;
    imageSrc?: string; // Mantido para compatibilidade com a interface
}

const ContactSection: FC<ContactSectionProps> = ({ 
    role, 
    subRole 
}) => {
  const [showForm, setShowForm] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    // Adicione sua chave do Web3Forms aqui:
    formData.append("access_key", "308fa3d0-990f-499c-aee6-2774fc14f7c6");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSent(true);
      } else {
        alert("Error sending message. Please try again.");
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    setIsSent(false);
    setShowForm(false);
  };

  return (
    <section id={'Contact'} className={styles.contactSection}>
      <div className={styles.contentWrapper}>
        
        {!showForm ? (
          /* TELA INICIAL: MENSAGEM BRIGHT */
          <div className={styles.headerContainer}>
            <div className={styles.titleWrapper}>
                <div className={styles.titleGroup}>
                    <h2 className={styles.title}>{role}</h2>
                    <h3 className={styles.subTitle}>{subRole}</h3>
                </div>
                
                <button 
                    onClick={() => setShowForm(true)} 
                    className={styles.skillTagButton}
                >
                    <span className={styles.innerContent}>GO!</span>
                </button>
            </div>
          </div>
        ) : isSent ? (
          /* TELA DE SUCESSO: ENVIADO */
          <div className={styles.successWrapper}>
             <h2 className={styles.formTitle}>Success<span>!</span></h2>
             <p className={styles.successText}>Your message has been sent successfully.</p>
             <button onClick={handleBack} className={styles.skillTagButton}>
                <span className={styles.innerContent}>Great!</span>
             </button>
          </div>
        ) : (
          /* FORMULÁRIO DE CONTATO */
          <div className={styles.formWrapper}>
            <h2 className={styles.formTitle}>Contact Me<span>.</span></h2>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <input name="name" type="text" placeholder="Your Name" className={styles.inputField} required />
                <input name="email" type="email" placeholder="Your Email" className={styles.inputField} required />
              </div>
              <textarea name="message" placeholder="How can I help you?" className={styles.textField} rows={4} required />
              
              <div className={styles.formActions}>
                <button type="submit" className={styles.skillTagButton} disabled={loading}>
                  <span className={styles.innerContent}>
                    {loading ? "Sending..." : "Send Message"}
                  </span>
                </button>
                <button type="button" onClick={() => setShowForm(false)} className={styles.backButton}>
                  Back
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;