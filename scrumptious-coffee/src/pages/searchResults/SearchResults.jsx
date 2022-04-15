import { useParams, Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

// styles
import "./SearchResults.css";

export default function SearchResults()
{
  const { searchValue } = useParams();
  const productList = useSelector((state) => state.productList || {});

  const filterProducts = productList.products.filter((item) =>
  {
    if (searchValue === "") {
      return item;
    } else {
      return (
        item.name.toLowerCase().includes(searchValue) ||
        item.roast.toLowerCase().includes(searchValue) ||
        item.location.toLowerCase().includes(searchValue)
      );
    }
  });

  return (
    <div>
      <div className="products">
        {filterProducts.length === 0 && (
          <div className="not-found-container">
            <h1 className="not-found-h1">{`Sorry we could not find anything for "${searchValue}".`}</h1>
          </div>
        )}
        {filterProducts.map((item) => (
          <Card className="item-card" key={item.id}>
            <Card.Body>
              <Link to={"/products/" + item.id} className="link-product">
                <Card.Title>{item.name}</Card.Title>
              </Link>
              <Link to={"/products/" + item.id}>
                <Card.Img
                  className="products-image"
                  variant="top"
                  src={item.imageUrl}
                />
              </Link>
            </Card.Body>
            <Card.Body className="price-button-container">
              <Card.Text className="item-price">
                ${parseFloat(item.pricePrePound).toFixed(2)}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
