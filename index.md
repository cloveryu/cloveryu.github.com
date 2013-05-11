---
layout: page
tagline: Supporting tagline
---
{% include JB/setup %}
---

{% for post in site.posts %}
<div style="margin: 2em 0">
<a href="{{ BASE_PATH }}{{ post.url }}" style="font-size:3em">{{ post.title }}</a>  
<span style="float:right">{{ post.date | date_to_string }}</span>  
</div>

####{{ post.description }}  
*Category: {{ post.category }}*  
*Tags: {{ post.tags | array_to_sentence_string }}*

---
{% endfor %}


