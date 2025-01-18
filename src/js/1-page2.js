const listWithPosts = document.querySelector('.js-posts-list');

const createNewsPosts = postsInfo => `<li class="posts-list-item">
<span class="post-index">${postsInfo.id}</span>
<h3 class="post-title">${postsInfo.title}</h3>
<p class="post-text">${postsInfo.body}</p>
<a href="#" class="post-link" data-id="${postsInfo.id}">Read more</a>
</li>`;

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data => {
    const postMarkUp = data.map(createNewsPosts).join('');
    listWithPosts.innerHTML = postMarkUp;
    document.querySelectorAll('.post-link').forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        const postText = link.previousElementSibling;
        postText.classList.toggle('expanded');

        if (postText.classList.contains('expanded')) {
          link.textContent = 'Show less';
        } else {
          link.textContent = 'Read more';
        }
      });
    });
  })
  .catch(err => {
    console.log(err);
  });
