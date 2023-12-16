import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import React from "react";

type Props = {};

const upload = (props: Props) => {
  return (
    <Layout>
      <div className="component-basic">
        <button
          className="basic-button"
        >
          Upload your favorate file
        </button>
      </div>
    </Layout>
  );
};

export default upload;
