"use client";

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Smartphone } from "lucide-react";

const APP_STORE_URL = "https://apps.apple.com/app/jovial/id0000000000";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.jovial.app";

export default function DownloadSection() {
  const [activeQR, setActiveQR] = useState<"ios" | "android" | null>(null);

  return (
    <div className="flex flex-row gap-4 items-end">
      {/* App Store */}
      <div className="relative">
        <button
          onMouseEnter={() => setActiveQR("ios")}
          onMouseLeave={() => setActiveQR(null)}
          onClick={() => window.open(APP_STORE_URL, "_blank")}
          className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-2xl hover:bg-gray-900 transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          <div className="text-left">
            <div className="text-[10px] leading-none opacity-80">Disponible sur</div>
            <div className="text-sm font-semibold leading-tight">App Store</div>
          </div>
        </button>
        {activeQR === "ios" && (
          <div className="absolute top-full left-0 mt-3 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100 z-10">
            <QRCodeSVG value={APP_STORE_URL} size={120} fgColor="#2B4E93" />
            <p className="text-xs text-gray-500 text-center mt-2">Scanner pour télécharger</p>
          </div>
        )}
      </div>

      {/* Google Play */}
      <div className="relative">
        <button
          onMouseEnter={() => setActiveQR("android")}
          onMouseLeave={() => setActiveQR(null)}
          onClick={() => window.open(PLAY_STORE_URL, "_blank")}
          className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-2xl hover:bg-gray-900 transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.18 23.76c.3.17.65.19.96.05l12.87-7.43-2.79-2.79-11.04 10.17zm-1.81-20.6C1.13 3.5 1 3.89 1 4.32v15.36c0 .43.13.82.37 1.15l.06.06 8.6-8.6v-.2L1.43 3.1l-.06.06zM20.33 10.26l-2.79-1.61-3.14 3.14 3.14 3.14 2.8-1.62c.8-.46.8-1.59-.01-2.05zM4.14.25L17.01 7.68l-2.79 2.79L3.18.3C3.49.16 3.85.18 4.14.25z"/>
          </svg>
          <div className="text-left">
            <div className="text-[10px] leading-none opacity-80">Disponible sur</div>
            <div className="text-sm font-semibold leading-tight">Google Play</div>
          </div>
        </button>
        {activeQR === "android" && (
          <div className="absolute top-full left-0 mt-3 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100 z-10">
            <QRCodeSVG value={PLAY_STORE_URL} size={120} fgColor="#2B4E93" />
            <p className="text-xs text-gray-500 text-center mt-2">Scanner pour télécharger</p>
          </div>
        )}
      </div>

      {/* Mascotte à droite des boutons */}
      <img
        src="/mascotte.png"
        alt="Mascotte Jovial"
        style={{ width: 115, height: "auto", display: "block", flexShrink: 0 }}
      />
    </div>
  );
}
