import Markdown from "markdown-to-jsx";
import Image from "next/image";

const BlogCard = ({ title, description, media, createdat }) => {
  return (
    <div className="container mx-auto mt-[20px] w-full bg-[#FFFFFF] rounded-lg py-[36px] px-[64px] [box-shadow:0_0_1px_0_rgba(19,43,57,.25),_0_4px_24px_-4px_rgba(19,43,57,.1)]">
      <h2 className="text-[2.5rem] tracking-[-.02em] leading-[1.125em] font-semibold italic mb-[.5em] text-center text-[#132b39] mb-4">
        <a href="/blog/export-sessions-with-all-user-attributes">{title}</a>
      </h2>
      <div className="flex justify-center items-center mb-8">
        <img
          className="w-10 h-10 object-cover rounded-[100%] inline-block mr-[.5rem]"
          src="https://userflow.com/images/team/sebastian-seilund.jpg"
          alt="seilund"
        />
        <span className="text-[#537388] font-normal">
          <span className="font-medium">Sebastian Seilund</span> {createdat}
        </span>
      </div>
      <Markdown options={{ forceBlock: true }}>{description}</Markdown>
      <br />
      {media?.data[0]?.attributes?.url && (
        <Image
          src={`https://buf-strapi-cms.onrender.com${media.data[0].attributes.url}`}
          width={500}
          height={500}
          alt="Image"
        />
      )}
    </div>
  );
};

export default BlogCard;
