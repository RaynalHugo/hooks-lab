import React from "react";

import { storiesOf } from "@storybook/react";

import {
  WithoutUseState as SimpleWithoutUseState,
  WithUseState as SimpleWithUseState
} from "../useState/simple";

import {
  WithoutUseState as AdvancedWithoutUseState,
  WithUseState as AdvancedWithUseState
} from "../useState/advanced";

import {
  WithoutUseState as HeritageWithoutUseState,
  WithUseState as HeritageWithUseState
} from "../useState/heritage";

storiesOf("useState/Simple", module)
  .add("Without", () => <SimpleWithoutUseState />)
  .add("With", () => <SimpleWithUseState />);

storiesOf("useState/Advanced", module)
  .add("Without", () => <AdvancedWithoutUseState />)
  .add("With", () => <AdvancedWithUseState />);

storiesOf("useState/Heritage", module)
  .add("Without", () => <HeritageWithoutUseState />)
  .add("With", () => <HeritageWithUseState />);
