import React, { useEffect, useState } from "react";
import styles from "./MyFiles.module.css";
import search_icon from "../../assets/icons/search.png";
import Axios from "axios";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import file_icon from "../../assets/icons/file-icons/normal-file.png";
import spinner from "../../assets/images/loading.svg";
import eye_icon from "../../assets/icons/eye.png";
import { useNavigate } from "react-router-dom";
import { formatBytes } from "../../utils/formatBytes";
import { formatDates } from "../../utils/formatDates";
import { motion } from "framer-motion";

const tableHeaders = ["", "Name", "", "Size", "Date"];

function MyFiles() {
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [owner, setOwner] = useState("");
  const [search, setSearch] = useState("");

  const fetchFiles = async () => {
    try {
      setIsLoading(true);
      const res = await Axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/user/files`,
        {},
        {
          headers: {
            Authorization: "Bearer " + window.localStorage.getItem("didToken"),
          },
        }
      );
      setOwner(res.data.owner);
      setFiles(res.data.files);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <motion.div
      className={styles["MyFiles"]}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div>
        <div className={styles["file-header"]}>
          <p>My Files</p>
          <div className={styles["file-desc"]}>
            View all of your uploaded files here.
          </div>
        </div>
        <div className={styles["search-con"]}>
          <div className={styles["search-inp"]}>
            <img src={search_icon} alt="" />
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        {isLoading ? (
          <div className={styles["spinner-con"]}>
            <img src={spinner} alt="Loading..." />
          </div>
        ) : (
          <div className={styles["table-con"]}>
            <div className={styles["table-glass"]}>
              <table>
                <thead>
                  <tr>
                    {tableHeaders.map((val, idx) => {
                      return (
                        <th className={styles["file-row"]} key={idx}>
                          {val}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {files.length > 0 &&
                    files
                      .filter((val) => {
                        return val.file_name
                          .toLowerCase()
                          .includes(search.toLowerCase());
                      })
                      .map((val, idx) => {
                        return (
                          <tr
                            className={styles["file-row"]}
                            key={idx}
                            onClick={() =>
                              navigate("/app/myFiles/desc", {
                                state: { val, owner },
                              })
                            }
                          >
                            <td>
                              <img src={file_icon} alt="file-marker" />
                            </td>
                            <td className={styles["first-col"]}>
                              {val.file_name ? val.file_name : "test.png"}
                            </td>
                            <td>
                              {val.public ? (
                                <Tippy content="Public" placement="left">
                                  <img
                                    className={styles["visible"]}
                                    src={eye_icon}
                                    alt="public"
                                  />
                                </Tippy>
                              ) : (
                                ""
                              )}
                            </td>
                            <td>
                              {val.file_size
                                ? formatBytes(val.file_size)
                                : "69"}
                            </td>
                            <td>
                              {val.file_creationDate
                                ? formatDates(val.file_creationDate)
                                : "2045/08/30"}
                            </td>
                          </tr>
                        );
                      })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default MyFiles;
