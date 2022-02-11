import { useLocation, useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  return (
    <>
      {console.log(query)}
      <h1>UrlParameter</h1>
      <p>{id}</p>
      <p>クエリパラメータは{query.get("name")}</p>
    </>
  );
};
