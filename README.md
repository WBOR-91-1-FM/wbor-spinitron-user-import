# wbor-spinitron-user-import

A script we use at [WBOR 91.1 FM](https://wbor.org) to automate field entry in the ["add users" dialogue](https://spinitron.com/m/persona/create) for a Spinitron station. Populates field using a .csv with the credentials of DJs you want to onboard (see data.csv for an example).

## Requirements

* A JavaScript runtime environment. Node.js will be used for this example (`brew install node`).
* A modern web browser, e.g. Firefox (`brew install --cask firefox`).

## Usage

* Clone this repository to your machine and navigate to its location via command line.
* Add the .csv containing your data to the same folder as csv-array.js.

  * The first line (header) should be `email, name, djName`, and each line after should be a DJ entry (such as `john@doe.com, John Doe, DJ John`). The last line of the file should be blank.

* Run `node csv-array.js` and copy its output. `csv-array.js` assumes your file is named `data.csv`. If it is not, you have the option to pass the script an argument with the name of the .csv you'd like to use (for example, `node csv-array.js dj_info.csv`).
* Open `spinitron-autofill.js` in a text editor/IDE of your choice, e.g. VSCode.
* Replace `{YOUR DATA HERE}` with the output you copied when running `csv-array.js`
* In `spinitron-autofill.js` select all text and copy.
* Open Spinitron's ["add users" dialogue](https://spinitron.com/m/persona/create) after logging in as an admin.
* Open your browser's console. In Firefox on macOS, this is done by entering <kbd>CMD</kbd> + <kbd>OPTION</kbd> + <kbd>K</kbd>.
* Paste the `spinitron-autofill.js` script you copied (ensuring it includes your data[] array) and press enter.
* Submit! The script doesn't fill in the existing fields but rather creates new ones for each entry at the bottom of the page, effectively allowing it to bypass Spinitron's limit of 10 at a time.
