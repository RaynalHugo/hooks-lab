import React from "react";

import { storiesOf } from "@storybook/react";

import { withKnobs, number } from "@storybook/addon-knobs";

import { WithoutUseEffect as SimpleWithoutUseEffect } from "../useEffect/simple";
import { WithUseEffect as SimpleWithUseEffect } from "../useEffect/simple-hooks";

import { WithoutUseEffect as AdvancedWithoutUseEffect } from "../useEffect/advanced";
import { WithUseEffect as AdvancedWithUseEffect } from "../useEffect/advanced-hooks";

storiesOf("useEffect/Simple", module)
  .addDecorator(withKnobs)
  .add("Without", () => <SimpleWithoutUseEffect value={number("value", 5)} />)
  .add("With", () => <SimpleWithUseEffect value={number("value", 5)} />);

storiesOf("useEffect/Advanced", module)
  .addDecorator(withKnobs)
  .add("Without", () => (
    <AdvancedWithoutUseEffect
      value1={number("value1", 5)}
      value2={number("value2", 5)}
    />
  ))
  .add("With", () => (
    <AdvancedWithUseEffect
      value1={number("value1", 5)}
      value2={number("value2", 5)}
    />
  ));
