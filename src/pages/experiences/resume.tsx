import React from "react";
import Link from "next/link";
import { Document } from 'react-pdf'

import { Viewer, Worker } from "@react-pdf-viewer/core";

export default function Resume() {
  return (
    <div>
        <Document file="/public/john_grey_resume.pdf"/>
      {/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
        <div>
          <Viewer fileUrl="/public/john_grey_resume.pdf" />
        </div>
      </Worker> */}
      {/* <Link href="/public/john_grey_resume.pdf">Text</Link> */}
    </div>
  );
}
