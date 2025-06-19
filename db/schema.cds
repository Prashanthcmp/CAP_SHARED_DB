namespace my.bookshop;

using {
  Country,
  cuid,
  managed
} from '@sap/cds/common';

entity Books {
  key ID : Integer;
  title  : String;
  stock  : Integer;
}

@cds.persistence.exists
entity User : cuid, managed {
  name         : String;
  email        : String;
  phone_number : Integer;
  address      : String;
}

@cds.persistence.exists
entity ProductCategory {
  key ID          : Integer;
      name        : String;
      Description : String;
}