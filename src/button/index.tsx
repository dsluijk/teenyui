import { h, FunctionalComponent } from "preact";

import * as style from "./style.scss";

export const Button: FunctionalComponent = (props) => (
	<button class={style.button}>{props.children}</button>
);
