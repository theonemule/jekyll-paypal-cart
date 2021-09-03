---
title: Tag Index
author: Blaize
layout: default
---
<div>

	{% assign sorted_tags = site.tags | sort %}
    {% for tag in sorted_tags %}
    <h4><a id="{{ tag[0] | slugify }}" href="#{{ tag[0] | slugify }}">{{ tag | first }}</a></h4>
	<ul >
      {% for post in tag[1] %}
      <li>  <a href="{{ post.url }}">
      
        {{ post.title }}
      
      </a>
	  </li>
      {% endfor %}
    </ul>
    {% endfor %}
	
</div>