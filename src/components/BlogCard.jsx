import Markdown from "markdown-to-jsx";

const BlogCard = () => {
  return (
    <div className="container  mx-auto mt-[20px] w-full bg-[#FFFFFF] rounded-lg py-[36px] px-[64px] [box-shadow:0_0_1px_0_rgba(19,43,57,.25),_0_4px_24px_-4px_rgba(19,43,57,.1)]">
      <h2 className="text-[2.5rem] tracking-[-.02em] leading-[1.125em] font-semibold italic mb-[.5em] text-center text-[#132b39] mb-4">
        <a href="/blog/export-sessions-with-all-user-attributes">
          Export sessions with all user attributes
        </a>
      </h2>
      <div className="flex justify-center items-center mb-8">
        <img
          className="w-10 h-10 object-cover rounded-[100%] inline-block mr-[.5rem]"
          src="https://userflow.com/images/team/sebastian-seilund.jpg"
          alt="seilund"
        />
        <span className="text-[#537388] font-normal">
          <span className="font-medium">Sebastian Seilund</span> on Apr 8, 2024
        </span>
      </div>
      <Markdown options={{ forceBlock: true }}>
        We have improved the export function of our analytics. Now, when you
        export data from your Analytics, covering **flows, checklists,
        launchers, and banners,** you can include all user/group attributes in
        your CSV file.\n\nThis means you can get more detailed insights into
        your data. Whether you're analyzing user behaviors or segmenting your
        audience, having these attributes in your CSV makes it easier to
        understand and use your data effectively.\n\nTo check this, head to a
        Flow, checklist, launcher, or banner and go to **Analytics → Export**.
        You'll have the option to export Standard or All user
        attributes.\n\n![Export.jpg](http://localhost:1337/uploads/Export_6c33f31a92.jpg)
      </Markdown>
    </div>
  );
};

export default BlogCard;
