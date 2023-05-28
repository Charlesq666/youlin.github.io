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
            <motion.a
              key={index}
              className="text-black rounded-2xl text-2xl bg-secondary-100 h-[100px] w-[200px] flex items-center justify-center"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
              whileTap={{ scale: 0.95 }}
              href={file.url}
            >
              {file.name}
            </motion.a>
          ))
        }
      </div>
    </Layout>
  );
};

export default Secret;
