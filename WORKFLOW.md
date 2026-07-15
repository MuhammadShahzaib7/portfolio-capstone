# WORKFLOW.md

# AI Workflow Comparison

## Objective

The purpose of this exercise was to compare the quality and efficiency of AI-generated code when using two different prompting approaches. In the first round, I intentionally used a vague prompt with almost no context. In the second round, I used a detailed specification that included project context, file location, constraints, accessibility requirements, validation rules, and a verification step. The goal was to understand how prompt quality affects the final output and the amount of manual review required.

## Round One – Vague Prompt

For the first implementation, I used the prompt: "Build me a React settings form." The AI generated a basic form with input fields and a submit button. While the form displayed correctly, it lacked clear validation rules, accessibility features, and testing instructions. Some input fields were not properly labeled, error handling was limited, and there was no explanation of edge cases or verification process. Although the code worked, it required significant manual inspection to identify missing functionality and quality issues.

## Round Two – Detailed Prompt

For the second implementation, I started a fresh AI session and provided detailed project requirements. The prompt specified the file location, React component structure, required fields, validation rules, accessibility requirements, expected behavior, reusable code practices, and a verification step asking the AI to review its work, identify edge cases, and generate tests. The resulting implementation was much more complete and required fewer corrections. The code was easier to understand, better organized, and included stronger validation and accessibility support.

## Comparison

The differences between both implementations were clear. The second version included proper input validation, descriptive labels, improved accessibility, clearer component structure, and verification guidance. It also considered edge cases such as empty inputs and invalid email formats. Although writing the detailed prompt took longer, the total review and debugging time was significantly lower than the first round.

## AI Mistake I Caught

One issue I found in the first version was that the form allowed invalid or empty input without proper validation. It also lacked accessibility features such as clear labels and appropriate validation feedback. These problems would have affected usability and required manual corrections before the feature could be considered complete.

## What I Learned

This exercise demonstrated that effective AI-assisted development depends more on giving clear specifications than simply asking AI to generate code. A detailed prompt combined with verification instructions produces higher-quality results, reduces review effort, and creates code that is easier to maintain. I also learned that AI-generated code should always be reviewed and tested before it is accepted into a project.
