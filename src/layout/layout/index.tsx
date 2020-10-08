import { h, FunctionalComponent } from "preact";

import * as style from "./style.scss";

export const Layout: FunctionalComponent = (props) => (
	<div class={style.layout}>{props.children}</div>
);
