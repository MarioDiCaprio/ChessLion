# ChessLion

This project is a website about chess. Front- and backend are subdivided into the
following folders: `/client` and `/server`.


## Client

The frontend is designed with React and Typescript. As in most React apps, it has the
following structure:
- `/client/public`:
  Contains all public data, such as images, the `manifest.json` and the `index.html`.
  The `index.html` file is the entry HTML, which includes general imports, such as
  Bootstrap 5 and Google Fonts.
- `/client/src`:
  Contains the source files for the application. The file `index.ts` is the entry point
  for the application. It renders the main component from `app.tsx` into the application.
  This component contains a ReactRouter which manages all the pages/routes. Furthermore,
  this directory has the following structure:
  - `/views`:
    Contains all the pages/routes for the website. Each page has its own file `[myFile].tsx`
    and preferrably also its own Sass stylesheet `[myFile].scss`. The directory `/components`
    contains commonly shared components, such as a chessboard, which is not limited to one single
    site. Also, additional components of a site may be stored under a directory `/_[myFile]`.
    For example, the component `openings.tsx` has serveral sub-components that are stored inside
    of `/_openings`.
  - `/utils`:
    Contains non-component utility classes for the pages, such as custom datastructures in
    `/data`.
  Other files such as `/craco.config.js` contain additional configurations.

### Build Client
To build this application, you must have NodeJS and its Yarn package manager installed.
in this directory, run the command: `yarn`. This will install all the dependencies
under `/node_modules`.


## Server

The backend is coded in Java, using the Spring Boot and Hibernate frameworks. As most Gradle projects,
this project has the following structure:
- `/gradle`:
  The Gradle folder, likely to be left unmodified.
- `/src/`:
  Contains the source code for this project. In turn, it has the following structure:
  - `/test`:
    Contains all tests for this application.
  - `/main`:
    This is the main application. For more information, refer to its JavaDoc,
    which is well documented.
All other files include additional configuration.

### Build Server

As with all Gradle projects, you need Gradle (^v.5) and Java (^v.11) installed.
Then, in this directory, run: `./gradlew build` (for MacOS/Linux) or `gradlew build`
(for Windows).

### Build JavaDoc

The JavaDoc for this project can be generated with the `./gradlew javadoc` (for MacOS/Linux)
or with `gradlew javadoc` (for Windows). The documentation will be generated under `/build`.
