import type { Category } from "../types";
import { useSearchParams } from "react-router-dom";

const Filters = ({
  categories,
}: {
  categories: Category[];
}) => {
  const [searchParams, setSearchParams] =
    useSearchParams();

  const activeCategory = Number(
    searchParams.get("category")
  );

  const activeSort =
    searchParams.get("sort") || "";

  // CATEGORY FILTER
  const handleCategoryClick = (
    id: number
  ) => {
    const params = new URLSearchParams(
      searchParams
    );

    params.set("category", id.toString());

    setSearchParams(params);
  };

  // SORT FILTER
  const handleSortChange = (
    order: string
  ) => {
    const params = new URLSearchParams(
      searchParams
    );

    params.set("sort", order);

    setSearchParams(params);
  };

  return (
    <div
      style={{
        marginBottom: "20px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {/* CATEGORY FILTERS */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          marginBottom: "20px",
        }}
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() =>
              handleCategoryClick(
                category.id
              )
            }
            style={{
              padding: "10px 16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "6px",

              backgroundColor:
                activeCategory ===
                category.id
                  ? "#2563eb"
                  : "#e5e7eb",

              color:
                activeCategory ===
                category.id
                  ? "white"
                  : "black",
            }}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* SORTING */}
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <button
          onClick={() =>
            handleSortChange("asc")
          }
          style={{
            padding: "10px 16px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
               height: "40px",

            backgroundColor:
              activeSort === "asc"
                ? "#16a34a"
                : "#e5e7eb",

            color:
              activeSort === "asc"
                ? "white"
                : "black",
          }}
        >
          Price Low → High
        </button>

        <button
          onClick={() =>
            handleSortChange("desc")
          }
          style={{
            padding: "10px 16px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            height: "40px",

            backgroundColor:
              activeSort === "desc"
                ? "#dc2626"
                : "#e5e7eb",

            color:
              activeSort === "desc"
                ? "white"
                : "black",
          }}
        >
          Price High → Low
        </button>
      </div>
    </div>
  );
};

export default Filters;