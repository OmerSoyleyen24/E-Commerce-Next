"use client"

import React, { useState } from "react";
import EmailPassword from "@/component/Auth/emailPassword";
import Address from "@/component/Auth/Address";
import "@/component/Auth/Account.css";

type Section = 'userInformation' | 'orders' | 'payments';

function AccountPage() {
  const [activeSection, setActiveSection] = useState<Section>('userInformation');

  const handleMenuClick = (section: Section) => {
    setActiveSection(section);
  };

  return (
    <div className="container">
      <div className="account-page">
        <ul className="account-page-list">
          <li onClick={() => handleMenuClick('userInformation')}>User Information</li>
          <li onClick={() => handleMenuClick('orders')}>Orders</li>
          <li onClick={() => handleMenuClick('payments')}>Payments Information</li>
        </ul>

        {activeSection === 'userInformation' && (
          <div>
            <EmailPassword />
            <Address />
          </div>
        )}
      </div>
    </div>
  );
}

export default AccountPage;