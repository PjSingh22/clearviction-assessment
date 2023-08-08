const form = document.getElementById("form");
const emailValue = document.getElementById("email");
const githubValue = document.getElementById("githubRepo");
const submitButton = document.getElementById("submit")

function handleSubmit(e) {
  e.preventDefault();
  const url = "https://7pu263mpcarw3lhazop5ec7u7e0bclzu.lambda-url.us-east-1.on.aws/"
  const email = emailValue.value;
  const githubRepoUrl = githubValue.value;

  fetch(url, {
    method: "POST",
    body: JSON.stringify({
      email,
      githubRepoUrl
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => console.log("res", res))
    .catch(err => console.log("err", err))
}

submitButton.addEventListener('click', handleSubmit)
