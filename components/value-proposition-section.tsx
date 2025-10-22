"use client";

import Lottie from "lottie-react";
import { useI18n } from "@/lib/i18n";

export function ValuePropositionSection() {
  const { t } = useI18n();

  // Using a chatbot/automation Lottie animation from a CDN
  const animationData = {
    v: "5.7.4",
    fr: 60,
    ip: 0,
    op: 120,
    w: 500,
    h: 500,
    nm: "Chatbot Animation",
    ddd: 0,
    assets: [],
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "Circle",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: {
            a: 1,
            k: [
              { t: 0, s: [0], e: [360] },
              { t: 120, s: [360] },
            ],
          },
          p: { a: 0, k: [250, 250] },
          a: { a: 0, k: [0, 0] },
          s: { a: 0, k: [100, 100] },
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ty: "rc",
                d: 1,
                s: { a: 0, k: [150, 150] },
                p: { a: 0, k: [0, 0] },
                r: { a: 0, k: 20 },
              },
              {
                ty: "st",
                c: { a: 0, k: [0.145, 0.388, 0.922, 1] },
                o: { a: 0, k: 100 },
                w: { a: 0, k: 8 },
              },
              {
                ty: "fl",
                c: { a: 0, k: [0.145, 0.388, 0.922, 0.1] },
                o: { a: 0, k: 100 },
              },
              { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } },
            ],
          },
        ],
        ip: 0,
        op: 120,
        st: 0,
      },
      {
        ddd: 0,
        ind: 2,
        ty: 4,
        nm: "Dots",
        sr: 1,
        ks: {
          o: {
            a: 1,
            k: [
              { t: 0, s: [100], e: [40] },
              { t: 30, s: [40], e: [100] },
              { t: 60, s: [100], e: [40] },
              { t: 90, s: [40], e: [100] },
              { t: 120, s: [100] },
            ],
          },
          p: { a: 0, k: [250, 250] },
          s: { a: 0, k: [100, 100] },
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ty: "el",
                d: 1,
                s: { a: 0, k: [15, 15] },
                p: { a: 0, k: [-30, 0] },
              },
              {
                ty: "fl",
                c: { a: 0, k: [0.145, 0.388, 0.922, 1] },
                o: { a: 0, k: 100 },
              },
              { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } },
            ],
          },
          {
            ty: "gr",
            it: [
              {
                ty: "el",
                d: 1,
                s: { a: 0, k: [15, 15] },
                p: { a: 0, k: [0, 0] },
              },
              {
                ty: "fl",
                c: { a: 0, k: [0.145, 0.388, 0.922, 1] },
                o: { a: 0, k: 100 },
              },
              { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } },
            ],
          },
          {
            ty: "gr",
            it: [
              {
                ty: "el",
                d: 1,
                s: { a: 0, k: [15, 15] },
                p: { a: 0, k: [30, 0] },
              },
              {
                ty: "fl",
                c: { a: 0, k: [0.145, 0.388, 0.922, 1] },
                o: { a: 0, k: 100 },
              },
              { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } },
            ],
          },
        ],
        ip: 0,
        op: 120,
        st: 0,
      },
    ],
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Lottie Animation */}
          <div className="w-64 h-64 mx-auto">
            <Lottie animationData={animationData} loop={true} />
          </div>

          {/* Text Content */}
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            {t("value_prop_text")}
          </h2>
        </div>
      </div>
    </section>
  );
}

