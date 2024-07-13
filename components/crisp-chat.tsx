"use client";

import { Crisp } from "crisp-sdk-web";
import React, { useEffect } from "react";

export default function CrispChat() {
  useEffect(() => {
    Crisp.configure("ad65a0f2-7c0c-46c0-9474-4f1e3ee2f85b");
  }, []);

  return null;
}