import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import TabContent from "./components/TabContent";

export default function App() {
  const [activeTab, setActiveTab] = useState("about"); // default: about

  return (
    <div className="app-wrapper">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* content area: will be scrollable on small screen and on the right on md+ */}
      <main className="content-area min-h-screen p-6 md:p-10">
        <TabContent activeTab={activeTab} />
      </main>
    </div>
  );
}
