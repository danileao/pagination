import styled from "styled-components";

export const Container = styled.div``;

export const PTable = styled.table`
  width: 500px;
  border-collapse: collapse;

  th {
    padding: 10px;
    background: #bcbcbc;
    text-align: left;
  }

  tbody {
    width: 100%;

    tr {
      text-align: left;
      border-bottom: 1px solid #bcbcbc;
      line-height: 15px;

      td {
        padding: 10px;
        text-align: left;
      }
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  min-width: 500px;
  max-width: 900px;
  justify-content: space-between;
  margin-top: 10px;
`;

export const PaginationButton = styled.div`
  display: flex;
`;

export const PaginationItem = styled.div`
  margin: 0 10px;
  cursor: pointer;

  ${(props) =>
    props.isSelect && {
      background: "#6d6d6d",
      padding: "0 5px",
    }}
`;
