import { h, render } from "preact";

import "./global.scss";

import Main from "./Main";

/**
 * Start the application.
 */
const start = (): void => {
	render(<Main />, document.body);
};

/**
 * Include the debug code if it's a development build.
 */
if (process.env.NODE_ENV === "development") {
	require("preact/debug");
}

/**
 * Let's start!
 */
start();
