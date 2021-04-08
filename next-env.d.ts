/// <reference types="next" />
/// <reference types="next/types/global" />

import "styled-components";
import { AppTheme } from "./src/core/app-themes";

declare module "styled-components" {
  export interface DefaultTheme extends AppTheme {}
}
