import React from "react";

import { storiesOf } from "@storybook/react";

import { WithoutUseState } from "../useState/simple";

storiesOf("useState", module)
  .add("Without", () => <WithoutUseState />)
  .add("With", () => <WithoutUseState />);
