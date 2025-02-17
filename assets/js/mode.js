
document.getElementById('bug').addEventListener('click', function() {
            window.location.href = '/credit-card';
        });

document.getElementById('credit-card').addEventListener('click', function() {
            window.location.href = '/credit-card';
        });
        
document.addEventListener("DOMContentLoaded", function() {
            const yinYangIcon = document.getElementById("yin-yang");
            
            if (localStorage.getItem('dark-mode') === 'enabled') {
                document.body.classList.add('dark-mode');
            }

            yinYangIcon.addEventListener("click", () => {
                document.body.classList.toggle("dark-mode");
                if (document.body.classList.contains('dark-mode')) {
                    localStorage.setItem('dark-mode', 'enabled');
                } else {
                    localStorage.removeItem('dark-mode');
                }
            });
       
document.getElementById('support-us').addEventListener('click', function() {
            window.location.href = 'https://redlii.com/support.html';
        });
        




            function playHoverSound() {
                var audio = new Audio('/assets/Audio/Hover.wav');
                audio.play();
            }

            document.querySelectorAll('.sidebar a').forEach(function(element) {
                element.addEventListener('mouseover', playHoverSound);
            });

            document.querySelectorAll('.sidebar-f i').forEach(function(element) {
                element.addEventListener('mouseover', playHoverSound);
            });

            var searchData = JSON.parse(document.getElementById('search-data').textContent);
            var searchResultsList = document.getElementById('search-results');
            var searchInput = document.getElementById('search-bar');
            searchResultsList.style.display = 'none';

            function updateSearchResults(e) {
                var q = e.target.value.toLowerCase();

                if (q.trim() === '') {
                    searchResultsList.style.display = 'none';
                } else {
                    searchResultsList.style.display = 'block';
                    searchResultsList.innerHTML = '';

                    for (let i = 0; i < searchData.posts.length; i++) {
                        var searchItem = searchData.posts[i];

                        if (searchItem.title.toLowerCase().includes(q) || searchItem.snippet.toLowerCase().includes(q)) {
                            var searchLink = document.createElement('a');
                            var searchContent = document.createTextNode(searchItem.title);

                            searchLink.setAttribute('href', searchItem.url); // Update this to the actual link
                            searchLink.appendChild(searchContent);
                            searchResultsList.appendChild(searchLink);
                        }
                    }
                }
            }

            searchInput.addEventListener('keyup', updateSearchResults);
        });
        

