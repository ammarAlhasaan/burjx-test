import spacing from "./spacing";
import {textSizes} from "./typography";


const buttonSizes = {
  buttonSmPadding: `${spacing.xs} ${spacing.xs}`,  // var(--sp-8) var(--sp-8)
  buttonMdPadding: `${spacing.xs} ${spacing.sm}`,  // var(--sp-8) var(--sp-12)
  buttonLgPadding: `${spacing.xs} ${spacing.md}`,  // var(--sp-8) var(--sp-16)
  buttonXlPadding: `${spacing.xs} ${spacing.lg}`,  // var(--sp-8) var(--sp-24)

  buttonSmFontSize: textSizes.textSm,
  buttonMdFontSize: textSizes.textMd,
  buttonLgFontSize: textSizes.textLg,
  buttonXlFontSize: textSizes.textXl,

  buttonSmGap: spacing.xs,  // var(--sp-8)
  buttonMdGap: spacing.sm,  // var(--sp-12)
  buttonLgGap: spacing.md,  // var(--sp-16)
  buttonXlGap: spacing.lg,  // var(--sp-24)

  buttonSmHeight: '36px',
  buttonMdHeight: '40px',
  buttonLgHeight: '44px',
  buttonXlHeight: '48px'
};

const linkSizes = {
  linkSmFontSize: textSizes.textSm,
  linkMdFontSize: textSizes.textMd,
  linkLgFontSize: textSizes.textLg,
  linkXlFontSize: textSizes.textXl,

  linkSmGap: `${spacing["sp-6"]}`,  // var(--sp-8)
  linkMdGap: `${spacing["sp-8"]}`,  // var(--sp-12)
  linkLgGap: `${spacing["sp-10"]}`,  // var(--sp-16)
  linkXlGap: `${spacing["sp-12"]}`,  // var(--sp-24)
};

const alertSizes = {
  alertSmPadding: `${spacing["sp-12"]}`,
  alertMdPadding: `${spacing["sp-14"]}`,
  alertLgPadding: `${spacing["sp-16"]}`,
  alertXlPadding: `${spacing["sp-18"]}`,

  alertSmContentPadding: `0 ${spacing["sp-10"]}`,
  alertMdContentPadding: `0 ${spacing["sp-12"]}`,
  alertLgContentPadding: `0 ${spacing["sp-14"]}`,
  alertXlContentPadding: `0 ${spacing["sp-16"]}`,

  alertSmHeaderPadding: `0 0 ${spacing["sp-8"]}`,
  alertMdHeaderPadding: `0 0 ${spacing["sp-10"]}`,
  alertLgHeaderPadding: `0 0 ${spacing["sp-12"]}`,
  alertXlHeaderPadding: `0 0 ${spacing["sp-14"]}`,

  alertSmFontSize: textSizes.textSm,
  alertMdFontSize: textSizes.textMd,
  alertLgFontSize: textSizes.textLg,
  alertXlFontSize: textSizes.textXl,
};
const toastSizes = {
  toastSmPadding: `${spacing["sp-12"]}`,
  toastMdPadding: `${spacing["sp-14"]}`,
  toastLgPadding: `${spacing["sp-16"]}`,
  toastXlPadding: `${spacing["sp-18"]}`,

  toastSmContentPadding: `0  0 0 ${spacing["sp-10"]}`,
  toastMdContentPadding: `0  0 0 ${spacing["sp-12"]}`,
  toastLgContentPadding: `0  0 0 ${spacing["sp-14"]}`,
  toastXlContentPadding: `0  0 0 ${spacing["sp-16"]}`,

  toastSmHeaderPadding: `0 0 ${spacing["sp-8"]}`,
  toastMdHeaderPadding: `0 0 ${spacing["sp-10"]}`,
  toastLgHeaderPadding: `0 0 ${spacing["sp-12"]}`,
  toastXlHeaderPadding: `0 0 ${spacing["sp-14"]}`,

  toastSmFooterPadding: `${spacing["sp-8"]} 0 0`,
  toastMdFooterPadding: `${spacing["sp-10"]} 0 0`,
  toastLgFooterPadding: `${spacing["sp-12"]} 0 0`,
  toastXlFooterPadding: `${spacing["sp-14"]} 0 0`,

  toastSmFontSize: textSizes.textSm,
  toastMdFontSize: textSizes.textMd,
  toastLgFontSize: textSizes.textLg,
  toastXlFontSize: textSizes.textXl,
};
const modalSizes = {
  modalSmPadding: `${spacing["sp-12"]} 0`,
  modalMdPadding: `${spacing["sp-14"]} 0`,
  modalLgPadding: `${spacing["sp-16"]} 0`,

  modalSmHeaderPadding: `0 ${spacing["sp-16"]} ${spacing["sp-12"]} ${spacing["sp-16"]}`,
  modalMdHeaderPadding: `0 ${spacing["sp-20"]} ${spacing["sp-14"]} ${spacing["sp-20"]}`,
  modalLgHeaderPadding: `0 ${spacing["sp-24"]} ${spacing["sp-16"]} ${spacing["sp-24"]}`,

  modalSmBodyPadding: `${spacing["sp-16"]} ${spacing["sp-16"]} 0 ${spacing["sp-16"]}`,
  modalMdBodyPadding: `${spacing["sp-20"]} ${spacing["sp-20"]} 0 ${spacing["sp-20"]}`,
  modalLgBodyPadding: `${spacing["sp-24"]} ${spacing["sp-24"]} 0 ${spacing["sp-24"]}`,

  modalSmFooterPadding: `${spacing["sp-16"]} ${spacing["sp-16"]} 0 ${spacing["sp-16"]}`,
  modalMdFooterPadding: `${spacing["sp-20"]} ${spacing["sp-20"]} 0 ${spacing["sp-20"]}`,
  modalLgFooterPadding: `${spacing["sp-24"]} ${spacing["sp-24"]} 0 ${spacing["sp-24"]}`,

  modalSmFontSize: textSizes.textSm,
  modalMdFontSize: textSizes.textMd,
  modalLgFontSize: textSizes.textLg,
  modalXlFontSize: textSizes.textXl,
};


const badgeSizes = {
  badgeSmContentPadding: `${spacing["sp-2"]} ${spacing["sp-4"]}`,
  badgeMdContentPadding: `${spacing["sp-2"]} ${spacing["sp-6"]}`,
  badgeLgContentPadding: `${spacing["sp-2"]} ${spacing["sp-6"]}`,
  badgeXlContentPadding: `${spacing["sp-2"]} ${spacing["sp-8"]}`,

  badgeSmFontSize: textSizes.textXs,
  badgeMdFontSize: textSizes.textSm,
  badgeLgFontSize: textSizes.textMd,
  badgeXlFontSize: textSizes.textLg,

  badgeSmSize: `${spacing["sp-6"]}`,
  badgeMdSize: `${spacing["sp-8"]}`,
  badgeLgSize: `${spacing["sp-10"]}`,
  badgeXlSize: `${spacing["sp-12"]}`,
};

const chipSizes = {
  chipSmPadding: `${spacing["sp-2"]} ${spacing["sp-6"]}`,
  chipMdPadding: `${spacing["sp-4"]} ${spacing["sp-8"]}`,
  chipLgPadding: `${spacing["sp-6"]} ${spacing["sp-12"]}`,
  chipXlPadding: `${spacing["sp-8"]} ${spacing["sp-14"]}`,

  chipSmFontSize: textSizes.textSm,
  chipMdFontSize: textSizes.textMd,
  chipLgFontSize: textSizes.textLg,
  chipXlFontSize: textSizes.textXl,

  chipSmGap: `${spacing["sp-4"]}`,  // var(--sp-8)
  chipMdGap: `${spacing["sp-6"]}`,
  chipLgGap: `${spacing["sp-8"]}`,
  chipXlGap: `${spacing["sp-10"]}`,

  chipSmHeight: '20px',
  chipMdHeight: '28px',
  chipLgHeight: '36px',
  chipXlHeight: '44px'
};


const inputSizes = {
  inputSmHeight: `36px`,
  inputMdHeight: `40px`,
  inputLgHeight: `44px`,
  inputXlHeight: `48px`,

  inputSmPadding: `0 ${spacing["sp-8"]}`,
  inputMdPadding: `0 ${spacing["sp-12"]}`,
  inputLgPadding: `0 ${spacing["sp-16"]}`,
  inputXlPadding: `0 ${spacing["sp-20"]}`,

  inputSmMargin: `${spacing["sp-2"]} 0`,
  inputMdMargin: `${spacing["sp-4"]} 0`,
  inputLgMargin: `${spacing["sp-6"]} 0`,
  inputXlMargin: `${spacing["sp-8"]} 0`,

  inputSmFontSize: textSizes.textSm,
  inputMdFontSize: textSizes.textMd,
  inputLgFontSize: textSizes.textLg,
  inputXlFontSize: textSizes.textXl,
};
const textareaSizes = {

  textareaSmPadding: `${spacing["sp-8"]} ${spacing["sp-8"]} `,
  textareaMdPadding: `${spacing["sp-12"]} ${spacing["sp-12"]}`,
  textareaLgPadding: `${spacing["sp-16"]} ${spacing["sp-16"]}`,
  textareaXlPadding: `${spacing["sp-20"]} ${spacing["sp-20"]}`,

  textareaSmMargin: `${spacing["sp-2"]} 0`,
  textareaMdMargin: `${spacing["sp-4"]} 0`,
  textareaLgMargin: `${spacing["sp-6"]} 0`,
  textareaXlMargin: `${spacing["sp-8"]} 0`,

  textareaSmFontSize: textSizes.textSm,
  textareaMdFontSize: textSizes.textMd,
  textareaLgFontSize: textSizes.textLg,
  textareaXlFontSize: textSizes.textXl,
};
const fieldSizes = {
  fieldSmMargin: `${spacing["sp-2"]} 0`,
  fieldMdMargin: `${spacing["sp-4"]} 0`,
  fieldLgMargin: `${spacing["sp-6"]} 0`,
  fieldXlMargin: `${spacing["sp-8"]} 0`,

  fieldSmFontSize: textSizes.textXs,
  fieldMdFontSize: textSizes.textSm,
  fieldLgFontSize: textSizes.textMd,
  fieldXlFontSize: textSizes.textLg,
};

const radioSizes = {
  radioSmInputMargin: `0 ${spacing["sp-6"]} 0 0`,
  radioMdInputMargin: `0 ${spacing["sp-8"]} 0 0`,
  radioLgInputMargin: `0 ${spacing["sp-10"]} 0 0`,
  radioXlInputMargin: `0 ${spacing["sp-12"]} 0 0`,

  radioHGap: spacing["sp-20"],
  radioVGap: spacing["sp-10"],

  radioSmOuterSize: spacing["sp-16"],
  radioMdOuterSize: spacing["sp-18"],
  radioLgOuterSize: spacing["sp-20"],
  radioXlOuterSize: spacing["sp-24"],

  radioSmInnerSize: spacing["sp-8"],
  radioMdInnerSize: spacing["sp-10"],
  radioLgInnerSize: spacing["sp-12"],
  radioXlInnerSize: spacing["sp-14"],

  radioSmFontSize: textSizes.textSm,
  radioMdFontSize: textSizes.textMd,
  radioLgFontSize: textSizes.textLg,
  radioXlFontSize: textSizes.textXl,
};

const checkboxSizes = {
  checkboxSmInputMargin: `0 ${spacing["sp-6"]} 0 0`,
  checkboxMdInputMargin: `0 ${spacing["sp-8"]} 0 0`,
  checkboxLgInputMargin: `0 ${spacing["sp-10"]} 0 0`,
  checkboxXlInputMargin: `0 ${spacing["sp-12"]} 0 0`,

  checkboxHGap: spacing["sp-20"],
  checkboxVGap: spacing["sp-10"],

  checkboxSmOuterSize: spacing["sp-16"],
  checkboxMdOuterSize: spacing["sp-18"],
  checkboxLgOuterSize: spacing["sp-20"],
  checkboxXlOuterSize: spacing["sp-24"],


  checkboxSmFontSize: textSizes.textSm,
  checkboxMdFontSize: textSizes.textMd,
  checkboxLgFontSize: textSizes.textLg,
  checkboxXlFontSize: textSizes.textXl,
};

const switchSizes = {
  switchSmMargin: `0 ${spacing["sp-6"]}`,
  switchMdMargin: `0 ${spacing["sp-8"]}`,
  switchLgMargin: `0 ${spacing["sp-10"]}`,
  switchXlMargin: `0 ${spacing["sp-12"]}`,

  switchSmFontSize: textSizes.textSm,
  switchMdFontSize: textSizes.textMd,
  switchLgFontSize: textSizes.textLg,
  switchXlFontSize: textSizes.textXl,
};

const optionItemSizes = {
  optionItemSmPadding: `${spacing["sp-2"]} ${spacing["sp-4"]}`,
  optionItemMdPadding: `${spacing["sp-4"]} ${spacing["sp-6"]}`,
  optionItemLgPadding: `${spacing["sp-6"]} ${spacing["sp-8"]}`,
  optionItemXlPadding: `${spacing["sp-8"]} ${spacing["sp-10"]}`,

  optionItemSmContainerPadding: `${spacing["sp-8"]} ${spacing["sp-8"]}`,
  optionItemMdContainerPadding: `${spacing["sp-8"]} ${spacing["sp-12"]}`,
  optionItemLgContainerPadding: `${spacing["sp-8"]} ${spacing["sp-16"]}`,
  optionItemXlContainerPadding: `${spacing["sp-8"]} ${spacing["sp-20"]}`,

  optionItemSmFontSize: textSizes.textSm,
  optionItemMdFontSize: textSizes.textMd,
  optionItemLgFontSize: textSizes.textLg,
  optionItemXlFontSize: textSizes.textXl,
};

export {
  buttonSizes,
  alertSizes,
  badgeSizes,
  chipSizes,
  toastSizes, modalSizes, inputSizes, fieldSizes, textareaSizes, optionItemSizes,
  radioSizes,
  checkboxSizes,
  linkSizes,
  switchSizes
}
