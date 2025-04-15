---
title: Redlii
layout: def
permalink: /
---

<style>
    .dek {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsive grid with minimum 300px width */
        gap: 25px; /* Increased gap for better spacing */
        background-color: #000; /* Black background for the grid */
        padding: 30px; /* Increased padding */
        border-radius: 0px; /* Optional: Rounded corners for the grid container */
    }

    .sdek {
        background-color: #1a1a1a; /* Dark grey for card background */
        border-radius: 0px;
        overflow: hidden;
        transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        display: flex; /* Use flex to stack image and content */
        flex-direction: column;
    }

    .sdek:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }

    .sdek a {
        display: block;
        text-decoration: none;
        color: white;
        height: 100%;
    }

    .sdek img {
        width: 100%; /* Adjust image width to fill card */
        margin: 0; /* Remove default margin */
        display: block;
        border-radius: 8px 8px 0 0; /* Rounded corners for top of image */
        object-fit: cover; /* Ensure images fit without distortion */
        aspect-ratio: 16/9; /* Maintain aspect ratio (adjust as needed) */
    }

    .sdek-content {
        padding: 20px;
        text-align: left;
        flex-grow: 1; /* Allow content to take up remaining space */
        display: flex;
        flex-direction: column;
        justify-content: space-between; /* Space out title, date, and read more */
    }

    .sdek h1 {
        font-size: 1.2em;
        margin-top: 0;
        margin-bottom: 5px;
        color: #eee;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .sdek p {
        font-size: 0.85em;
        color: #bbb;
        margin-top: 0;
        margin-bottom: 15px;
    }

</style>

<div class="dek">
    {% for post in site.posts %}
    <div class="sdek">
        <a href="{{ post.url }}">
            {% if post.cover %}
            <img src="{{ post.cover }}" alt="{{ post.title }}">
            {% endif %}
            <div class="sdek-content">
                <div>
                    <h1>{{ post.title }}</h1>
                    <p>{{ post.date | date: "%B %d, %Y" }}</p>
                </div>
            </div>
        </a>
    </div>
    {% endfor %}
</div>
