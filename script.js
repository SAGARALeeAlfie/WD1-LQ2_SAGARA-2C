// Example posts (like a database simulation)
const posts = [
  {
    author: "AARUME",                  // Post creator
    text: "Enjoying the view!",       // Post text
    image: "src/b6d77056-5c60-4ae7-a578-a40faa759393.jpg",    // Post image
    likes: 15,                        // Number of likes
    comments: 3,                      // Number of comments
    shares: 2                         // Number of shares
  },
  {
    author: "KUPALS",
    text: "Good morning everyone!",
    image: "src/25a4d297-a60d-4514-8e35-df926729b933.jpg",
    likes: 22,
    comments: 5,
    shares: 4
  }
];

// Select the feed section (where posts will be shown)
const feed = document.querySelector('.feed');

// Loop through each post
posts.forEach(post => {
  // Create a new div for the post
  const postEl = document.createElement('div');
  postEl.classList.add('post'); // Add "post" CSS class

  // Add post details inside
  postEl.innerHTML = `
    <h4>${post.author}</h4> <!-- Author -->
    <p>${post.text}</p>     <!-- Text -->
    <img src="${post.image}" alt="Post image"> <!-- Image -->
    <div class="actions"> <!-- Buttons -->
      <span>👍 ${post.likes}</span>
      <span>💬 ${post.comments}</span>
      <span>↗️ ${post.shares}</span>
    </div>
  `;

  // Add post to the feed section
  feed.appendChild(postEl);
});
