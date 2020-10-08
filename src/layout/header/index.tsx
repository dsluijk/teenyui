import { h, FunctionalComponent } from "preact";

import * as style from "./style.scss";

export const Header: FunctionalComponent = (props) => (
	<div class={style.header}>{props.children}</div>
);
