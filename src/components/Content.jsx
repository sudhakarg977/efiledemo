import React from "react";
import ContentHeader from "./ContentHeader";
import "../styles/Content.css";
import FileUpload from "./FileUpload";
import Slidebar from "./Slidebar";

const Content = () => {
  return (
    <>
      <div className="dashboard">
        <Slidebar />
        <div className="dashboard-content">
          {/* <Content /> */}
          <div className="content">
            <ContentHeader />
            {/* <FileUpload /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
