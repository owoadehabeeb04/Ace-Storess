export type productsProps = {
  productName: string;
  productImage: string;
  productPrice: Number;
  ProductCategory: string;
  productDetails: string;
  id: string;
  subid: string;
};
export type cartProps = {
  [x: string]: any;
  selectsize: string;
  product: any;
  quantity: number;
  thePriceOfProduct: number;
  UserId: string;
  // cartId: string;
  cartItemId: number;
  ownerEmail: string;
  cartId: string;
};

export type checkoutProps = {
  firstName: string;
  lastName: string;
  city: string;
  state: string;
  address: string;
  additionalInfo: string;
  phoneNo: number;
  Email: string;
  cardOrDelivery: string;
  userId: string | undefined;
};
export type userProps = {
  firstName: string;
  lastName: string;
  userId: string;
  email: string;
  password: string;
  phoneNo: number | undefined;
};
export type orderProps = {
  date: string;
  orderId: string;
  price: string;
  shippingAddress: string;
  paymentType: string;
  cart: any;
  firstName: string;
  lastName: string;
  email: string;
  phoneNo: string;
  userId: string | undefined;
};
