"use client";

import { Mail, Globe } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-[#2563eb] mb-4">Clonchat</h3>
            <p className="text-gray-600">{t("footer_about_text")}</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              {t("footer_links")}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="text-gray-600 hover:text-[#2563eb] transition-colors"
                >
                  {t("nav_features")}
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-gray-600 hover:text-[#2563eb] transition-colors"
                >
                  {t("nav_how_it_works")}
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-600 hover:text-[#2563eb] transition-colors"
                >
                  {t("nav_clients")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              {t("footer_contact")}
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:info@clonchat.com"
                className="flex items-center gap-2 text-gray-600 hover:text-[#2563eb] transition-colors"
              >
                <Mail className="h-5 w-5" />
                info@clonchat.com
              </a>
              <div className="flex items-center gap-2 text-gray-600">
                <Globe className="h-5 w-5" />
                {t("footer_global")}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
          <p>
            © {year} Clonchat. {t("footer_rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
