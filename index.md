---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: default
---

#### Welcome to the demo page for the an eCommerce site using Jekyll and PayPal. This project is [available on GitHub](https://github.com/theonemule/jekyll-paypal-cart)!


{% assign catalog_items = site.pages |  where_exp:"item", "item.cart_itemid" %}
{% for page in catalog_items %}

# [{{page.cart_name}}]({{page.url}}) 

#### {{page.cart_description}} 

### ${{page.cart_price}} 

### [Add to cart](/cart#{{page.cart_itemid}}) 

{% endfor %}
