/* 

GET /api/rest/products

Authentication: Customer, Guest
Description: Allows you to retrieve the list of all products with detailed information.
Notes: The list of attributes that will be returned in the response is configured in the Magento Admin Panel. The list of attributes differs for each type of user.
https://devdocs.magento.com/guides/m1x/api/rest/Resources/Products/products.html#RESTAPI-Resource-Products-HTTPMethod-GET-products

*/
module.exports = {
    "1": {
        "entity_id": "1",
        "type_id": "simple",
        "sku": "dress_test",
        "status": "1",
        "visibility": "4",
        "tax_class_id": "2",
        "weight": "1.0000",
        "price": "1500.0000",
        "special_price": "1000.0000",
        "name": "Wedding dress",
        "url_key": "dress",
        "country_of_manufacture": "AO",
        "msrp_display_actual_price_type": "2",
        "gift_message_available": "1",
        "news_from_date": "2012-03-21 00:00:00",
        "news_to_date": "2012-03-24 00:00:00",
        "special_from_date": "2012-03-21 00:00:00",
        "special_to_date": "2012-03-24 00:00:00",
        "description": "White wedding dress"
    },
    "2": {
        "entity_id": "2",
        "type_id": "simple",
        "sku": "black_sunglasses",
        "status": "1",
        "visibility": "4",
        "tax_class_id": "2",
        "weight": "0.2000",
        "price": "500.0000",
        "special_price": "300.0000",
        "name": "Sunglasses",
        "url_key": "sunglasses",
        "country_of_manufacture": "AR",
        "msrp_display_actual_price_type": "2",
        "gift_message_available": null,
        "news_from_date": null,
        "news_to_date": null,
        "special_from_date": "2012-03-21 00:00:00",
        "special_to_date": "2012-03-24 00:00:00",
        "description": "Black sunglasses"
    }
}