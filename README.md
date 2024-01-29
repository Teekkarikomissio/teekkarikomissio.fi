# teekkarikomissio.fi

This is the code repository for the official website of teekkarikomissio.fi, which features our initiatives, activities, and informational resources.

## Description

The teekkarikomissio.fi website is built using Next.js, a React framework that enables functionality such as server-side rendering and generating static websites for React-based web applications.

## Development

To get started with development, follow these steps:

1. Clone the repository:
[https://github.com/Teekkarikomissio/teekkarikomissio.fi/tree/master]

2. Navigate to the project directory:

`cd teekkarikomissio.fi`

3. Check that you have a recent enough Node version by running 

`nvm use`

4. Install the dependencies:

`npm install`

5. Start the development server:

`npm run dev`

This will start the development server on [http://localhost:3000](http://localhost:3000).

6. Build for production:

`npm run build`

This command builds the application for production usage but Netlify usually does it for us. You can still build it to check for errors by running:

`npm start`

## Deploying to production

Netlify hooks take care of this for the most part. If you push to `master` your code will show up in a minute under teekkarikomissio.fi domain.

If you push your own branch netlify will create a preview version of the site so that you can show it to others. Usually merge from your own branch is the safest way.

## Adding a language

If you want to add a new spoken language, you can add a new dictionary for texts under `/dictionaries/your-language.json`. Then do modifications to following files:
- `i18n-config.ts`
- `get-dictionary.ts`
- `i18n-config.ts`
- `Navbar.tsx`

And to get full route translations working:
- `next.config.js`
- `netlify.toml` (If you stick with Netlify)

## Contributing

If you'd like to contribute to the project, please open an issue or create a pull request.

## Bug Reporting

To report bugs, please use the [issues](https://github.com/Teekkarikomissio/teekkarikomissio.fi/issues) section of this repository.

## License

The project is licensed under the MIT License. See the [LICENSE](https://github.com/Teekkarikomissio/teekkarikomissio.fi/blob/master/LICENSE) file for details.

## Authors

- [Miika Peltotalo](https://github.com/miipel) - Initial work

## Acknowledgments

We'd like to thank all the contributors who have helped shape the teekkarikomissio.fi website.
