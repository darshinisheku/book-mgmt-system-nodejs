import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCard from './ProductCard';
const BookStore =() =>{

   // const { id } = useParams();
    const [books, setBooks] = useState(null);
    const [showAuthorList, setAuthorShowList] = useState(false);
    const [showGenreList,setGenreList] = useState(false);
    const [showPrice,setShowPrice] = useState(false);

    const toggleAuthorList = () => {
        setAuthorShowList(!showAuthorList);
      };
    
      const toggleGenreList = () => {
        setGenreList(!showGenreList);
      };

      const togglePriceList = () => {
        setShowPrice(!showPrice);
      };
    

      console.log("))))))))))))")


      const fetchBookDetails = async () => {
        console.log("((((((((((");
      try {
        const response = await fetch('http://localhost:3000/api/books/');
        const data = await response.json();
        console.log("response");
        setBooks(data); // Assuming API response is JSON with book details
      } catch (error) {
        console.error('Error fetching book details:', error);   
      }
    };

    useEffect(() => {
        // Fetch book details from API
       
        fetchBookDetails();
    }, []);

    if (!books) {
        return <div>Loading the page...</div>; // Add loading state if data is being fetched
      }

    return (
        <div>
            <Container>
                <Row>
                <Col md={3}>
                <div>
                    <h5>Filter By</h5>
                    <div className="filter-divider" style={{marginBottom:'5px'}}>
                    <hr />
                    </div>
                    <br/>

                    <button className="filter-button"  onClick={toggleAuthorList} style={{width:'200px'}}>
                    {showAuthorList ? 'Authors     -' : 'Authors     +'}</button>
                    <div style={{ display: showAuthorList ? 'block' : 'none' }}>
                        <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        </ul>
                    </div>
                    <br/>

                    <div className="filter-divider" style={{marginBottom:'5px'}}>
                    <hr />
                    </div>

                    <br/>

                    <button className="filter-button"  onClick={toggleGenreList}>
                    {showAuthorList ? 'Genre     -' : 'Genre     +'}</button>
                    <div style={{ display: showGenreList ? 'block' : 'none' }}>
                        <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        </ul>
                    </div>

                    <br/>

                    <div className="filter-divider" style={{marginBottom:'5px'}}>
                    <hr />
                    </div>

                    <br/>

                    <button className="filter-button"  onClick={togglePriceList}>
                    {showAuthorList ? 'Price     -' : 'Price     +'}</button>
                    <div style={{ display: showPrice ? 'block' : 'none' }}>
                        <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        </ul>
                    </div>

                    <br/>

                    <div className="filter-divider" style={{marginBottom:'30px'}}>
                    <hr />
                    </div>

                    <br/>

                </div>
                </Col>
                <Col md={9}>
                <div>
                    <div>
                        <span>Our</span>
                        <h1>Book Store</h1>
                    </div>
                    <div>

                        <div className="book-list">
                            {books.map((book, index) => (
                            book && <ProductCard key={index} props={book} />
                             ))}
                        </div>
                        
                    </div>
                </div>
                </Col>
                </Row>
            </Container>
        </div>
    );
};
export default BookStore;