"use client";

const LeftSidebar = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div>
      <h2 className="font-bold text-base md:text-lg mb-4">Categories</h2>

      <ul className="flex flex-col gap-2">
        {categories.map((cat) => (
          <li key={cat}>
            <button
              onClick={() => setSelectedCategory(cat)}
              className={`w-full text-center p-2 rounded-md transition ${
                selectedCategory === cat
                  ? "bg-linear-to-r from-indigo-500 to-purple-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSidebar;