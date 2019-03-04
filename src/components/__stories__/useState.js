import React from "react";

import { storiesOf } from "@storybook/react";

import { WithoutUseState } from "../useState";

storiesOf("useState", module)
  .add("Without", () => <WithoutUseState />)
  .add("With", () => <WithoutUseState />);
