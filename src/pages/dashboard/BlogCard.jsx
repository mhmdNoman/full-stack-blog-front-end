const BlogCard = ({ post }) => {

  return (
    <div className="overflow-hidden bg-white rounded shadow">
      <div className="p-5">
        <div className="relative">
          <a href="#" title="" className="block aspect-w-4 aspect-h-3">
            <img
              className="object-cover w-full h-full"
              src={post.cover}
              alt=""
            />
          </a>

          <div className="absolute top-4 left-4">
            <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">
              {" "}
              {post.category}{" "}
            </span>
          </div>
        </div>
        <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
          {" "}
          March 21, 2020{" "}
        </span>
        <p className="mt-5 text-2xl font-semibold">
          <a href="#" title="" className="text-black">
            {" "}
            {post.title}{" "}
          </a>
        </p>
        <p className="mt-4 text-base text-gray-600">
          {post.body}
        </p>
        <a
          href="#"
          title=""
          className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600"
        >
          Continue Reading
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
