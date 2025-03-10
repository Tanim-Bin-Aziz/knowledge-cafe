import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  const { title, cover } = blog;
  return (
    <div>
      <img
        className="w-[500px]"
        src={cover}
        alt={`cover picture of the title ${title}`}
      />
      <h2 className="text-4xl">{title}</h2>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
