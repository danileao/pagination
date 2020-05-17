import React, { useState, useEffect, useCallback } from "react";

import api from "../../services/api";

import {
  Container,
  PTable,
  Pagination,
  PaginationButton,
  PaginationItem,
} from "./styles";

function Table() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(5);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get(
        `/products?page=${currentPage}&limit=${limit}`
      );
      setTotal(response.headers["x-total-count"]);
      const totalPages = Math.ceil(total / limit);

      const arrayPages = [];
      for (let i = 1; i <= totalPages; i++) {
        arrayPages.push(i);
      }

      setPages(arrayPages);
      setProducts(response.data);
    }

    loadProducts();
  }, [currentPage, limit, total]);

  const limits = useCallback((e) => {
    setLimit(e.target.value);
    setCurrentPage(1);
  }, []);

  return (
    <Container>
      <h3>Tabela de produtos</h3>
      <select onChange={limits}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="100">100</option>
      </select>
      <PTable>
        <thead>
          <tr>
            <th>#</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Imagem</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product._id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.image}</td>
            </tr>
          ))}
        </tbody>
      </PTable>
      <Pagination>
        <div>Qtd {total}</div>
        <PaginationButton>
          {currentPage > 1 && (
            <PaginationItem onClick={() => setCurrentPage(currentPage - 1)}>
              Previous
            </PaginationItem>
          )}
          {pages.map((page) => (
            <PaginationItem
              isSelect={page === currentPage}
              key={page}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </PaginationItem>
          ))}
          {currentPage < pages.length && (
            <PaginationItem onClick={() => setCurrentPage(currentPage + 1)}>
              Next
            </PaginationItem>
          )}
        </PaginationButton>
      </Pagination>
    </Container>
  );
}

export default Table;
