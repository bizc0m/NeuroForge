# Create About Popup Prompt

Create a reusable About popup for this production.

Target:

- production type: `{{PRODUCTION_TYPE}}`
- project name: `{{PROJECT_NAME}}`
- short description: `{{SHORT_DESCRIPTION}}`
- primary purpose: `{{PRIMARY_PURPOSE}}`
- target user: `{{TARGET_USER}}`
- version: `{{VERSION}}`
- license: `{{LICENSE}}`
- repository URL: `{{REPOSITORY_URL}}`

Constraints:

- concise;
- no marketing filler;
- explain what the tool does;
- explain who it is for;
- explain its limits;
- include Neuro Forge signature;
- black, white, alchemical red;
- centered popup;
- accessible close button;
- works in app UI and static HTML;
- use placeholders when information is missing.

Required content:

1. Project name.
2. One-line purpose.
3. Main function.
4. Target user.
5. Non-goals or limits.
6. Version, license, repository.
7. Neuro Forge signature:

FORGED FOR ATYPICAL THINKERS.

THEN, GREAT RESULTS.

Return:

- Markdown content for documentation;
- HTML popup if target is `html`;
- app popup copy if target is `app`.

