import fs from "fs";

async function fetchRepositories() {
  try {
    // GitHub API endpoint: fetch 50 repos sorted by last update
    const url =
      "https://api.github.com/users/thibaudcolas/repos?sort=updated&per_page=20";
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`GitHub API responded with status ${response.status}`);
    }

    const repos = await response.json();

    // Define repository names to skip
    const skipRepos = [
      "curlylint",
      "wagtail-tooling",
      "thib.me",
      "pre-commit-stylelint",
      "thibaudcolas",
      "bakerydemo",
    ];

    // Filter out forks and the skip list repositories
    const filteredRepos = repos.filter(
      (repo) => !repo.fork && !skipRepos.includes(repo.name)
    );

    // Select the first 10 valid repositories
    const validRepos = filteredRepos.slice(0, 10);

    // Manually generate YAML content
    let yamlContent = "";
    validRepos.forEach((repo) => {
      yamlContent += `- name: ${JSON.stringify(repo.name)}\n`;
      yamlContent += `  full_name: ${JSON.stringify(repo.full_name)}\n`;
      yamlContent += `  url: ${JSON.stringify(repo.html_url)}\n`;
      yamlContent += `  description: ${JSON.stringify(
        repo.description || ""
      )}\n\n`;
      yamlContent += `  stargazers_count: ${JSON.stringify(
        repo.stargazers_count
      )}\n`;
    });

    // Append the YAML entries to the file
    const filePath = "src/_data/repositories.yml";
    fs.appendFileSync(filePath, yamlContent, "utf8");
    console.log(`YAML entries successfully appended to ${filePath}`);
  } catch (error) {
    console.error("Error fetching repositories:", error);
  }
}

fetchRepositories();
