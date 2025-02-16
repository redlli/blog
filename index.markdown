---
title: Redlii
layout: def
permalink: /
---
<style>
    .dek {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 10px;
        background-color: lightgray;
        padding: 10px;
    }
    .card {
        padding: 10px;
        text-align: center;
        background-color: gray;
        color: white;
        font-family: Arial, sans-serif;
        transition: background-color 0.3s ease;
    }
    .card:hover {
        background-color: red;
    }
    .card a {
        color: white;
        text-decoration: none;
        display: block;
        height: 100%;
        width: 100%;
    }
</style>

<div class="dek">
    {% for post in site.posts %}
    <div class="card">
        <a href="{{ post.url }}">
            {% if post.cover %}
            <img src="{{ post.cover }}" alt="{{ post.title }}" style="width: 99%; margin: 1%;">
            {% endif %}
            <h1>{{ post.title }}</h1>
            <p>{{ post.date | date: "%B %d, %Y" }}</p>
        </a>
    </div>
    {% endfor %}
</div>

