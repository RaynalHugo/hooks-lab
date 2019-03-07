import React from "react";
import { storiesOf } from "@storybook/react";

import { Without } from "../custom-hook/without";
import { With } from "../custom-hook/with";

storiesOf("custom-hook/", module)
  .add("Without", () => <Without />)
  .add("With", () => <With />);
