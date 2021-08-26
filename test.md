# An eCommerce Site Using Jekyll and PayPal.

This little project grew out of a desire to create a simple eCommerce website to sell my books online. I have, for the longest time, sold through Amazon. Amazon is a great platform, but I wanted to make the shopping experience more personal to better connect with my readers by selling books directly from my site.  My goals for this were simple: a simple eCommerce platform with PayPal as a payment gateway. I generalized it here so perhaps others could use it for their projects.

## Using the site

The eCommerce site here leverages some of the built-in features of Jekyll. The intent here was to keep it simple. Each product has its own page with a custom set of headers:

* *cart_itemid* -- the item id for the product. This is used by the scripts and PayPal to identify the item.

* *cart_name* -- the diplayed name of the product. This will show up in PayPal and in the shopping cart.

* *cart_description* -- the diplayed description of the product for the cart.

* *cart_price* -- The product's price. (Currently, this only supports single currecy.)

* *cart_image* -- A url to the image of the product. This is optional and is not used by the cart or PayPal

````
---
layout: page
title: Development Headphones
cart_itemid: devheadphones
cart_name: "Development Headphones"
cart_description: "Drown out distractions!"
cart_price: 79
cart_image: "assets/headphones-3683983_1280.jpg"
---
## Less_Distractions == Better_Code

![{{page.cart_description}}]({{page.cart_image}})

No developer likes to be interuptted when they are deep in thought. Now, you can tune out the world and focus on what really matters!

* Ergonomic design
* Crisp sound
* Noise canceling technology.

## ${{page.cart_price}}

## [Add to cart!](/cart#{{page.cart_itemid}})

````


