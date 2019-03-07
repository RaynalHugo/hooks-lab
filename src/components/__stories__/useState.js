import React from "react";

import { storiesOf } from "@storybook/react";

import { WithoutUseState as SimpleWithoutUseState } from "../useState/simple";

import { WithUseState as SimpleWithUseState } from "../useState/simple-hooks";

import { WithoutUseState as AdvancedWithoutUseState } from "../useState/advanced";

import { WithUseState as AdvancedWithUseState } from "../useState/advanced-hooks";

import { WithoutUseState as HeritageWithoutUseState } from "../useState/heritage";

import { WithUseState as HeritageWithUseState } from "../useState/heritage-hooks";

storiesOf("useState/Simple", module)
  .add("Without", () => <SimpleWithoutUseState />)
  .add("With", () => <SimpleWithUseState />);

storiesOf("useState/Advanced", module)
  .add("Without", () => <AdvancedWithoutUseState />)
  .add("With", () => <AdvancedWithUseState />);

storiesOf("useState/Heritage", module)
  .add("Without", () => <HeritageWithoutUseState />)
  .add("With", () => <HeritageWithUseState />);
