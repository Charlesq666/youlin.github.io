import Layout from "@/components/Layout";
import axios from "axios";
import { motion } from "framer-motion";
import React from "react";
import { useQuery } from "react-query";
import { FileType } from "./api/files";

type Props = {};

const Secret = (props: Props) => {
  const {isLoading, error, data:files, refetch} = useQuery({
    queryKey: 'files',
    queryFn: async () => {
      const res = await axios.get('/api/files')
      return res.data
    },
  })

  if (isLoading) return <div>Loading...</div>
  if (error instanceof Error) return <div>{error.message}</div>

  return (
    <Layout>
      <div className="component-basic">
        {files && files.map((file: FileType, index: number) => (
            <a
              key={index}
              className="basic-button"
              href={file.url}
            >
              {file.name}
            </a>
          ))
        }
      </div>
    </Layout>
  );
};

export default Secret;
