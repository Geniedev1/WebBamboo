import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ProductCard } from "../ShopComponent/ProductCard";
import FadeInWrapper from "../FadeInWrapper";

export const ListProduct = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  // ── 1) đọc queryParam search
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const searchTerm = params.get("search")?.toLowerCase() || "";

  // ── 2) các state filter & sort
  const [categoryFilter, setCategoryFilter] = useState("all");    // "all" | "Nội thất" | ...
  const [descriptionFilter, setDescriptionFilter] = useState("all"); // "all" | "outside" | "inside"
  const [sortOrder, setSortOrder] = useState("asc");              // "asc" | "desc"

  // ── 3) fetch products & apply initial searchTerm + default sort
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:9090/api/products/products/");
        const data = await res.json();
        setProducts(data);

        // initial filtered = searchTerm filter + default sort asc
        let result = data;
        if (searchTerm) {
          result = result.filter(p =>
            p.name.toLowerCase().startsWith(searchTerm)
          );
        }
        result.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        setFiltered(result);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [searchTerm]);

  // ── 4) toggle sortOrder
  const toggleSortOrder = () => {
    setSortOrder(prev => (prev === "asc" ? "desc" : "asc"));
  };

  // ── 5) Áp dụng tất cả filter & sort
  const applyFilters = () => {
    let result = [...products];

    // a) searchTerm
    if (searchTerm) {
      result = result.filter(p =>
        p.name.toLowerCase().startsWith(searchTerm)
      );
    }

    // b) category
    if (categoryFilter !== "all") {
      result = result.filter(p =>
        p.categories.some(c => c.name === categoryFilter)
      );
    }

    // c) description
    if (descriptionFilter !== "all") {
      result = result.filter(p =>
        (p.description || "")
          .toLowerCase()
          .includes(descriptionFilter)
      );
    }

    // d) sort price
    result.sort((a, b) => {
      const pa = parseFloat(a.price),
            pb = parseFloat(b.price);
      if (pa < pb) return sortOrder === "asc" ? -1 : 1;
      if (pa > pb) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

    setFiltered(result);
  };

  return (
    <section className="py-8 px-4">
      {/* ——— Controls ——— */}
      <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
        {/* 1. Button sắp xếp giá */}
        <button
          onClick={toggleSortOrder}
          className="px-4 py-2 border rounded hover:bg-gray-100"
        >
          Giá {sortOrder === "asc" ? "↑" : "↓"}
        </button>

        {/* 2. Select Category */}
        <select
          value={categoryFilter}
          onChange={e => setCategoryFilter(e.target.value)}
          className="px-4 py-2 border rounded"
        >
          <option value="all">Tất cả danh mục</option>
          <option value="Nội thất">Nội thất</option>
          <option value="Trang sức">Trang sức</option>
          <option value="Trang trí">Trang trí</option>
        </select>

        {/* 3. Select Description */}
        <select
          value={descriptionFilter}
          onChange={e => setDescriptionFilter(e.target.value)}
          className="px-4 py-2 border rounded"
        >
          <option value="all">Tất cả mô tả</option>
          <option value="outside">outside</option>
          <option value="inside">inside</option>
        </select>

        {/* 4. Áp dụng */}
        <button
          onClick={applyFilters}
          className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Áp dụng
        </button>
      </div>

      {/* ——— Danh sách sản phẩm ——— */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filtered.length > 0 ? (
          filtered.map(p => (
            <FadeInWrapper key={p.id} delay={p.id * 30}>
              <ProductCard
                id={p.id}
                name={p.name}
                price={parseFloat(p.price)}
                img={p.image_url}
                description={p.description}
              />
            </FadeInWrapper>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            Không có sản phẩm nào.
          </p>
        )}
      </ul>
    </section>
  );
};
