//package com.ecommerce.sb_ecom.config;
//
//public class AppConstants {
//
//    public static final String PAGE_NUMBER = "0";
//    public static final String PAGE_SIZE = "50";
//    public static final String SORT_CATEGORIES_BY = "categoryId";
//    public static final String SORT_DIR = "asc";
//}
package com.ecommerce.sb_ecom.config;

public class AppConstants {

    // Default pagination
    public static final String PAGE_NUMBER = "0";   // default page index (first page)
    public static final String PAGE_SIZE   = "10";  // default page size

    // Sorting defaults for categories
    public static final String SORT_CATEGORIES_BY = "categoryId";
    public static final String SORT_DIR           = "asc";

    // Sorting defaults for products
    public static final String SORT_PRODUCTS_BY  = "productId";
    public static final String SORT_PRODUCTS_DIR = "desc";

    public static final String SORT_ORDERS_BY  = "totalAmount";
    public static final String SORT_USERS_BY  = "userId";

}
