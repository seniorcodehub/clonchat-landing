"use client";

import { useCallback, useEffect, useState } from "react";
import { X, Mail } from "lucide-react";
import { useI18n } from "@/lib/i18n";

type ContactModalContextValue = {
  open: () => void;
  close: () => void;
};

const listeners: Array<(open: boolean) => void> = [];

export const useContactModal = (): ContactModalContextValue => {
  const open = useCallback(() => {
    listeners.forEach((l) => l(true));
  }, []);
  const close = useCallback(() => {
    listeners.forEach((l) => l(false));
  }, []);
  return { open, close };
};

export function ContactModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handler = (open: boolean) => setIsOpen(open);
    listeners.push(handler);
    return () => {
      const idx = listeners.indexOf(handler);
      if (idx >= 0) listeners.splice(idx, 1);
    };
  }, []);

  return (
    <>
      {children}
      {isOpen && <ContactModal />}
    </>
  );
}

function ContactModal() {
  const { close } = useContactModal();
  const { t } = useI18n();

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={close}
      />
      <div className="relative bg-white w-[90%] max-w-lg rounded-2xl shadow-2xl p-6 md:p-8">
        <button
          aria-label="Close"
          className="absolute right-3 top-3 p-2 rounded-md hover:bg-gray-100"
          onClick={close}
        >
          <X className="h-5 w-5 text-gray-600" />
        </button>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-[#2563eb] rounded-lg flex items-center justify-center">
            <Mail className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">
            {t("contact_title")}
          </h3>
        </div>
        <p className="text-gray-600 mb-6">
          {t("contact_desc")}
        </p>
        <form
          className="space-y-4"
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget as HTMLFormElement;
            const formData = new FormData(form);
            
            const data = {
              name: formData.get("name"),
              email: formData.get("email"),
              company: formData.get("company"),
              message: formData.get("message"),
            };

            try {
              const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
              });

              if (response.ok) {
                alert('¡Mensaje enviado correctamente! Te contactaremos pronto.');
                close();
              } else {
                alert('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
              }
            } catch (error) {
              alert('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
            }
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="name"
              placeholder={t("contact_name_placeholder")}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
              required
            />
            <input
              name="email"
              type="email"
              placeholder={t("contact_email_placeholder")}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
              required
            />
          </div>
          <input
            name="company"
            placeholder={t("contact_company_placeholder")}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
          />
          <textarea
            name="message"
            placeholder={t("contact_message_placeholder")}
            rows={4}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
          />
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50"
              onClick={close}
            >
              {t("contact_cancel")}
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-[#2563eb] text-white hover:bg-[#1d4ed8]"
            >
              {t("contact_send")}
            </button>
          </div>
          <p className="text-xs text-gray-500 pt-2">
            {t("contact_note")}
          </p>
        </form>
      </div>
    </div>
  );
}

