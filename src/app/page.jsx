"use client";
import { useState, useEffect } from "react";
import Navbar from "../app/components/Navbar";
import BlogCard from "../app/components/BlogCard";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://buf-strapi-cms.onrender.com/api/blogs?populate=*",
          {
            headers: {
              Authorization: `Bearer e7d3d2be8613091f48062bf111e0e0081b63d2566f13d42f2cb71427af694128419355531ec50128a0f6a0cfba4744097545016e05ca80f5927f09274eeee3a53c877e99e75a54995537a9c891bf32dc6b33173904831713a136d60a6d4ad746bd3029e33e93777880002bcd3a8bc6598727467d18d6597807e173224da2077b`,
            },
          }
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await res.json();
        setData(jsonData.data); // Extracting the data object from the response
        console.log(jsonData.data); // Logging jsonData.data instead of data
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => console.log("data", data), [data]);

  return (
    <div>
      <Navbar />
      <div className="container mt-[100px] w-[770px] mx-auto">
        <div className="flex justify-between items-center text-black">
          <h1 className="text-[40px]">Blog</h1>
          <ul className="list-none flex">
            <li className="hover:bg-green-500">
              <button className="text-[blue] flex">
                Follow Userflow on Twitter
                <span>
                  <svg
                    className="svg-inline--fa fa-twitter mt-[5px] mx-[10px]"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="twitter"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                    ></path>
                  </svg>
                </span>
              </button>
            </li>
          </ul>
        </div>
        {data &&
          data.map((d) => (
            <BlogCard
              key={d.id} // Assuming there's an id field in data
              title={d.attributes.title}
              description={d.attributes.description}
              media={d?.attributes.media}
              createdat={d.attributes.createdAt} // Assuming createdAt is available
            />
          ))}
      </div>
    </div>
  );
}
