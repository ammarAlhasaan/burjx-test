import {fontFamily, lineHeights, textSizes} from "@/theme/tokens/typography";
import spacing from "@/theme/tokens/spacing";
import {
  badgeSizes,
  buttonSizes,
  fieldSizes,
  inputSizes,
  linkSizes,
  modalSizes,
  textareaSizes,
} from "@/theme/tokens/components-size";

export const tokens: Record<string, string> = {
  ...lineHeights,
  ...fontFamily,
  ...textSizes,
  ...spacing,
  ...buttonSizes,
  ...badgeSizes,
  ...modalSizes,
  ...inputSizes,
  ...fieldSizes,
  ...textareaSizes,
  ...linkSizes,
}
