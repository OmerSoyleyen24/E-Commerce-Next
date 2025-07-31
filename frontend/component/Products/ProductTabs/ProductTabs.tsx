"use client"

import { MouseEvent, SetStateAction, useState } from "react";
import Reviews from "@/component/Reviews/Reviews";
import "./ProductTabs.css";

function ProductTabs() {
  const [activeTab, setActiveTab] = useState("desc");

  const handleTabClick = (
    e: MouseEvent<HTMLAnchorElement>,
    tab: SetStateAction<string>
  ) => {
    e.preventDefault();
    setActiveTab(tab);
  };

  return (
    <div className="single-tabs">
      <ul className="tab-list">
        <li>
          <a
            href="#"
            className={`tab-button ${activeTab === "desc" ? "active" : ""}`}
            onClick={(e) => handleTabClick(e, "desc")}
          >
            Description
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`tab-button ${activeTab === "info" ? "active" : ""}`}
            onClick={(e) => handleTabClick(e, "info")}
          >
            Additional Information
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`tab-button ${activeTab === "reviews" ? "active" : ""}`}
            onClick={(e) => handleTabClick(e, "reviews")}
          >
            Reviews
          </a>
        </li>
      </ul>

      <div className="tab-panel">
        <div
          className={`tab-panel-desc content ${activeTab === "desc" ? "active" : ""}`}
          id="desc"
        >
          <p>
            Quisque varius diam vel metus mattis, id aliquam diam rhoncus...
          </p>
          <p>
            Nullam aliquam mauris eu accumsan tincidunt. Suspendisse velit ex...
          </p>
        </div>

        <div
          className={`tab-panel-information content ${activeTab === "info" ? "active" : ""}`}
          id="info"
        >
          <h3>Additional Information</h3>
          <table>
            <tbody>
              <tr>
                <th>Color</th>
                <td>
                  <p>Apple Red, Bio Blue, Sweet Orange, Blue, Green, Pink, Black, White</p>
                </td>
              </tr>
              <tr>
                <th>Size</th>
                <td>
                  <p>XXS, XS, S, M, L, XL, XXL</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <Reviews active={activeTab === "reviews" ? "active" : ""} />
      </div>
    </div>
  );
}

export default ProductTabs;