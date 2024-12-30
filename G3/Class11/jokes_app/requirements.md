# Jokes App Requirements

## Functional Requirements

### Fetch Jokes:

- The application should fetch a list of programming jokes from an external API when the user clicks the **"Get jokes"** button.
- The API endpoint to use: [https://official-joke-api.appspot.com/jokes/programming/ten](https://official-joke-api.appspot.com/jokes/programming/ten).

### Transform Data:

- The jokes fetched from the API should be transformed into `Joke` objects with the following structure:
  - `type`: Type of the joke (e.g., "programming").
  - `question`: The setup of the joke.
  - `answer`: The punchline of the joke.
- Each `Joke` object should include a method `getJoke()` that concatenates the setup and punchline.

### Display Jokes:

- The jokes should be displayed in a visually distinct format on the page.
- Each joke must include:
  - The setup (`question`) as a paragraph.
  - The punchline (`answer`) as a separate paragraph.

### Clear Previous Data:

- When new jokes are fetched, any existing jokes displayed on the page should be cleared before appending the new jokes.

### Error Handling:

- If the API call fails, log an error message to the console indicating network or server issues.
