using my.bookshop as my from '../db/schema';

service catalog {
    @readonly entity Books as projection on my.Books;

    entity User as projection on my.User;

    entity ProductCategory as projection on my.ProductCategory;
}
