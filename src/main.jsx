import React from "react";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import { I18nProvider } from "./translate/provider/I18nProvider";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nProvider>
      <App />
    </I18nProvider> 
  </React.StrictMode>
);
