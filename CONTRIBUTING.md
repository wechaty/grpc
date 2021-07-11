# Guidelines for Contributing

Thank you for your time on Wechaty gRPC. Wechaty gRPC is gRPC Service & Protocol Buffers for Wechaty Puppet.

## How to [contribute](https://github.com/wechaty/grpc/blob/master/CONTRIBUTING.md)

- Write a blog about Wechaty gRPC.
- Create a tutorial for Wechaty gRPC.
- Help expand the [wiki](https://github.com/wechaty/grpc/wiki)
- Answer questions on the [issue](https://github.com/wechaty/grpc/issues)
- Review [pull requests](https://github.com/wechaty/grpc/pulls)
- Start [hacking on Wechaty](https://github.com/wechaty/grpc/blob/master/CONTRIBUTING.md)

**Note:** You can also refer to this for [General Wechaty blog post guidelines](https://github.com/wechaty/wechaty.js.org).

### Why contribute

As an open-source product, Wechaty thrives on the contributions of community members. Whatever your skillset is, there is a lot you can do to help us make Wechaty better!
So start forking!

### Not sure where to start?

It's a myth that writing code is the only way to contribute to open source. Wechaty community is open to new ideas and there are so many different ways to make valuable contributions. We have some ideas of how you can get started!

#### 1. Contribute Code

- Check out GitHub issues with the tags `good first issue`, `pull request welcome`, or `help wanted`
- Write code examples for documentation
- Report a bug and work on resolving it
- Collaborate with others on building new features

**Tips:**
If you want to add new features or change the API, please submit an issue first to make sure no one else is already working on the same thing and discuss the implementation and API details with maintainers and users by creating an issue. When everything is settled down, you can submit a pull request.

Make sure to add tests for your features and bug fixes and update the documentation (see below) before submitting your code!

#### 2. Contribute Support

If you spot something new, open an issue using a [template](https://github.com/wechaty/grpc/issues/new/choose). We'll use the issue to have a conversation about the problem you want to fix.

- Fix typos in documentation
- Translate documentation to your local language
- Write tutorials and blog posts, see more: https://github.com/wechaty/wechaty.js.org/tree/master/jekyll/_posts
- Answer questions on the Wechaty Developers Home or Github issues
- Organize Wechaty meetups or user groups in your area

Contact rui@Wechaty.io to learn more

#### 3. Ready to make a change? Fork the repo

Fork using GitHub Desktop:

- [Getting started with GitHub Desktop](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/getting-started-with-github-desktop) will guide you through setting up Desktop.
- Once the Desktop is set up, you can use it to [fork the repo](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop)!

Fork using the command line:

- [Fork the repo](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo#fork-an-example-repository) so that you can make your changes without affecting the original project until you're ready to merge them.

Fork with [GitHub Codespaces](https://github.com/features/codespaces):

- [Fork, edit, and preview](https://docs.github.com/en/free-pro-team@latest/github/developing-online-with-codespaces/creating-a-codespace) using [GitHub Codespaces](https://github.com/features/codespaces) without having to install and run the project locally.

##### Open a pull request

When you're done making changes and you'd like to propose them for review, use the pull request template to open your PR (pull request).

##### Submit your PR & get it reviewed

- Once you submit your PR, others from the Docs community will review it with you. The first thing you're going to want to do is a [self-review](#self-review).
- After that, we may have questions, check back on your PR to keep up with the conversation.
- Did you have an issue, like a merge conflict? Check out our [git tutorial](https://lab.github.com/githubtraining/managing-merge-conflicts) on how to resolve merge conflicts and other issues.

##### Your PR is merged!

Congratulations! The whole GitHub community thanks you. :sparkles:

# Pull request template

When you open a pull request, you must fill out the "Ready for review" template before we can review your PR. This template helps reviewers understand your changes and the purpose of your pull request.

#### Suggested changes

We may ask for changes to be made before a PR can be merged, either using [suggested changes](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request) or pull request comments. You can apply suggested changes directly through the UI. You can make any other changes in your fork, then commit them to your branch.

As you update your PR and apply changes, mark each conversation as [resolved](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#resolving-conversations).

## Link to Wechaty

Contribute by marketing: Add **Powered by Wechaty** Badge to your Project Homepage:

[![Powered by Wechaty](https://img.shields.io/badge/Powered%20By-Wechaty-green.svg)](https://github.com/wechaty/grpc)

### Markdown

```markdown
[![Powered by Wechaty](https://img.shields.io/badge/Powered%20By-Wechaty-green.svg)](https://github.com/wechaty/grpc)
```

### Html

```html
<a href="https://github.com/wechaty/grpc" target="_blank">
  <img
    src="https://img.shields.io/badge/Powered%20By-Wechaty-green.svg"
    alt="Powered by Wechaty"
    border="0"
  />
</a>
```

## Bug Report

Contribute by feedback, make code robust.

## Feature Request

Contribute by make product suggestions.

## Pull Request

Please:

1. submit an issue to describe the problem to get started
1. then send a pull request as you need(with unit test & pass linting)

```bash
$ npm run lint
$ npm run test
```

1. and do not forget to reference the issue

I built wechaty with pleasure because it can help others. help from you for wechaty will be very appreciated by the community.

Cheers!

Huan
